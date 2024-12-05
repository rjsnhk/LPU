import React,{useState} from 'react'

// function FourState() {

// const[color,setColor]=useState("Yellow");
// const[brand,setBrand]=useState("Honda");
// const[Model,setModel]=useState("xxxx");
// const[Year,setYear]=useState(2020);


//   return (
//     <div>
//       <h1>My Cars</h1>
//       <h4 style={{color:color}}>Colour : {color}</h4>
//       <h4>Brand : {brand}</h4>
//       <h4>Model : {Model}</h4>
//       <h4>Year : {Year}</h4>
//       <button onClick={()=>{setColor("white");
        
        
//         setBrand("mercedes");
        
//           setModel("S-Class");
//           setYear(2022);
        
        
        
//         }}>Change</button>

//       <button onClick={()=>{setColor(color);
        
        
//         setBrand(brand);
        
//           setModel(Model);
//           setYear(Year);
        
        
        
//         }}>Change</button>
//     </div>
//   )
// }

// export default FourState





function FourState() {

  const[scotter,setScooter]=useState({
    color:"Yellow",
    brand:"Honda",
    model:"Activa",
    year:2020
  })

  function updateScooter(){
    setScooter(previousState=>{
      return {...previousState,color:"Blue",year:2034}
    }

    );
  }
  return (
    <div>
      <h1>My Cars</h1>
    <h4 style={{color:scotter.color}}>Colour : {scotter.color}</h4>
    <h4>Brand : {scotter.brand}</h4>
     <h4>Model : {scotter.model}</h4>
      <h4>Year : {scotter.year}</h4>
     <button onClick={updateScooter}>Change</button>
    </div>
  )
}

export default FourState

