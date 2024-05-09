const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/Boss")
.then(()=>console.log("connection succesful"))
.catch((e)=>console.log(e));

const bossDetail=new mongoose.Schema({
  name: {type:String,
    required:true,

    maxlength:20,

    minlength:4
  },
  age: Number,

  address: String,

  salary: Number,

  company: String,
  active: Boolean,

  date : {
    type:Date,
    default:Date.now
  }
})

const Bosswho=new mongoose.model("Bosswho",bossDetail);

const createDocument=async ()=>{

try{

const  rajesh=new Bosswho({
  name: "Rajesh nahak",
  age: 20,

  address: "odisha",

  salary: 150000,

  company: "khud ka he",
  active: true,

})

const result=await rajesh.save();
console.log(result);
}
catch(err){
  console.log(err);
}

}

createDocument();