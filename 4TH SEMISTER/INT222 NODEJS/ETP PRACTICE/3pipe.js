const fs=require('fs');

const zlib=require('zlib');

const gzip=zlib.createGzip() 
const readableStream=fs.createReadStream('f1.txt',{
  encoding:"utf-8",
});

readableStream.pipe(gzip).pipe(fs.WriteStream("f2.txt.gz"));


const writeableStream=fs.createWriteStream('f2.txt');


readableStream.pipe(writeableStream);