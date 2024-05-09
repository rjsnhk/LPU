const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/Boss")
.then(()=>console.log("connected successfully"))
.catch((err)=>console.log(err));


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

const  d=new Bosswho({
  name: "Dipti",
  age: 16,

  address: "nayagarh",

  salary: 3000000,

  company: "bhai ka",
  active: true,

})
const  b=new Bosswho({
  name: "Bikash",
  age: 35,

  address: "Cuttack",

  salary: 300000000,

  company: "baap ka",
  active: true,

})

const result=await Bosswho.insertMany([d,b]);
console.log(result);
}
catch(err){
  console.log(err);
}

}

createDocument();