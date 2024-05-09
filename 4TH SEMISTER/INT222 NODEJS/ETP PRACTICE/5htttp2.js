const fs = require("node:fs");
const http=require("node:http");
const server=http.createServer((req,res)=>{
res.writeHead(200, {"Content-Type":"text/html"});

// const file=readFileSync("index.html",'utf-8');
// res.end(file);

fs.createReadStream(__dirname+"/index.js").pipe(res);

 
});
server.listen(3000,()=>{
  console.log("server is running on port 3000");
});