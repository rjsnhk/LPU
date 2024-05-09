const fs=require('node:fs/promises');

async function readfile(){
  try{
    const data=await fs.readFile("hii.txt",'utf-8');
    console.log(data);
  }
  catch(e){
    console.log(e);
  }
}
readfile();