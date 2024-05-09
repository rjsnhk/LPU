const http=require("node:http");
const server=http.createServer((req,res)=>{
  // res.end("helllo world");

  // const superHero = {
  //   fn:"raj",
  //   age:23,

  //   address:"pune",
  // };

res.writeHead(200, {"Content-Type":"text/html"});

res.write("<h1>hello world</h1>");

  // res.end(JSON.stringify(superHero));
});
server.listen(3000,()=>{
  console.log("server is running on port 3000");
});