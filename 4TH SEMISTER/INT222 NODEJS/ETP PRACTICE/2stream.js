const fs=require('fs');

const readableStream=fs.createReadStream('f1.txt',{
  encoding:"utf-8",
});




const writeableStream=fs.createWriteStream('f2.txt');

readableStream.on('data',(chunk)=>{
  console.log(chunk);
  writeableStream.write(chunk);
});
