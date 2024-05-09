const express=require("express");
const app=express();

const bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",(req,res)=>{
  // res.end("hii from server");
  res.sendFile(__dirname+"/index.html");
});


app.post("/", (req, res) => {
  var num1 = parseInt(req.body.num1);
  var num2 = parseInt(req.body.num2);
  var operation = req.body.operation; // Get the operation from the form

  var result;
  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        return res.send("Error: Division by zero!");
      }
      break;
    default:
      return res.send("Error: Invalid operation!");
  }

  res.send("The result is " + result);
});



app.listen(3000,()=>{
  console.log("server is running on 3000");
})