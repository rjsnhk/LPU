const http=require("node:http");
const server=http.createServer((req,res)=>{
if(req.url==="/"){
  res.end("welcome to home page");
}else if(req.url==="/about"){
  res.end("welcome to about page");
}else if(req.url==="/contact"){
  res.end("welcome to contact page");
}else{
  res.writeHead(404,{"content-type":"text/html"});
  res.end("<h1>404 error not found</h1>")
}


});
server.listen(3000,()=>{
  console.log("server is running on port 3000");
});