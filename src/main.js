import { connectTabix } from './lib/tabix';
import { URLFetchable, BlobFetchable } from './lib/bin';


// Wrap the reader in a Promise API for LZ compatibility
function urlReader(dataUrl, indexUrl) {
    return new Promise(function(resolve, reject) {
        connectTabix(new URLFetchable(dataUrl), new URLFetchable(indexUrl),
            function (reader, err) {
                if (err) {
                    reject(err);
                } else {
                    resolve(reader);
                }
            });
    });
}

function blobReader(data_file, tabix_file) {
    return new Promise(function(resolve, reject) {
        connectTabix(new BlobFetchable(data_file), new BlobFetchable(tabix_file),
            function (reader, err) {
                if (err) {
                    reject(err);
                } else {
                    resolve(reader);
                }
            });
    });
}

export { urlReader, blobReader };
