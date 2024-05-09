const express=require("express");
const url=require('url');
const app=express();

app.get("/",(req,res)=>{
  res.send("hello world");
})
app.get("/contact",(req,res)=>{
  res.send("contact number");
})
app.get("/about",(req,res)=>{
  res.send("about the people");
})
app.get("/feed",(req,res)=>{
  res.send("feed back");
})

app.listen(3000,()=>{
  console.log("server is running on port 3000");
})