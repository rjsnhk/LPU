const express=require("express");
const app=express();

const bodyParser=require("body-parser");


app.use(bodyParser.urlencoded({extended:true}));


app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/bmi.html");
});

app.post("/",(req,res)=>{
  var weight=Number(req.body.weight);
  var height=Number(req.body.height);

  var bmi=weight/(height*height);

  res.send("your bmi is "+bmi);
})

app.listen(4000,()=>{
  console.log("server is running on port 4000");
})