# Tabix Reader

## Purpose
[Tabix](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3042176/) is a popular tool that enables fast access to
 compressed data. A stated goal of the tool is to "enable genome viewers to support huge data files and remote 
 custom tracks over networks".
 
This library allows web applications to use the power of tabix directly, without the need for a server to mediate 
reading or decompressing of data. It is extracted from  [BioDalliance](http://www.biodalliance.org/) to 
support standalone usage and modern modular build tools. 
 
## Usage
Currently, the API is a mix of Promises (to create the reader) and callbacks (to fetch data). In the future this 
may be refactored for consistency.

Two modes are supported: `urlReader` (from remote URLs that support HTTP Range requests) and `blobReader` 
(from a local file). In both cases, the target must have been processed via tabix first, and the path to the index 
file must be explicitly specified.

```js
urlReader(url, indexUrl).then((reader) => {
    reader.fetch((rows, error) => {
        console.log(rows);
    }); 
});
```
 
# Credits
This is almost entirely extracted from the [BioDalliance](http://www.biodalliance.org/) genome viewer, 
making its data access capabilities easily available to other libraries. 
