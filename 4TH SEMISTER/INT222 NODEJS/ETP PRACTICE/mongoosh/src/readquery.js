const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/Boss")
.then(()=>console.log("connnected successfully"))
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
  
  // createDocument();


const getDocument=async()=>{

  try{
  const res=await Bosswho.find({name:"Bikash"}).select({company:1});
  console.log(res);
  }catch(e){
    console.log(e);
  }
}

// getDocument();



const getOperatorDocument=async()=>{

  try{
  const res=await Bosswho.find({age:{$gt : 16}})
  .select({name:1})
  .limit(1);
  console.log(res);
  }catch(e){
    console.log(e);
  }
}

// getOperatorDocument();

const xorOperators=async()=>{

  try{
  const res=await Bosswho.find({$or:[{age:20},{name:"Dipti"}]});
  console.log(res);
  }catch(e){
    console.log(e);
  }
}
// xorOperators();

const countOperators=async()=>{

  try{
  const res=await Bosswho.find({$or:[{age:20},{name:"Dipti"}]}).count();
  console.log(res);
  }catch(e){
    console.log(e);
  }
}

// countOperators();


const sortOperators=async()=>{

  try{
  const res=await Bosswho
  .find({active:true}).select({name:1})
  .sort({name:-1}); //1 ya -1
  console.log(res);
  }catch(e){
    console.log(e);
  }
}
// sortOperators();

const updateDocument=async(_id)=>{
try{

  //updateone , updatemany, findByIdAndUpdate
const res=await Bosswho.updateOne({_id},{
  $set:{
    age:30
  }
});
console.log(res);
}
catch(e){
  console.log(e);
}
}
// updateDocument("663b4fd1945dcb82f7f62d5b")

const deleteDocument= async (_id)=>{
  try{
    const res=await Bosswho.deleteOne({_id});
    console.log(res);
  }catch(e){
    console.log(e);
  }
}
deleteDocument("663b4fd1945dcb82f7f62d5b");

