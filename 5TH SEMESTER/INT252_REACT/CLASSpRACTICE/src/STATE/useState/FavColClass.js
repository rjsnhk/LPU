import React from "react";
class FavColClass extends React.Component{
constructor(){
  super();
  this.state = {color:"red"};

}
render(){
  return(
    <div>

      <h1 style={{color:this.state.color}}>My color is {this.state.color}</h1>
      <button onClick={()=>{this.setState({color:"blue"})}}>Change color</button>
    </div>
  )
}
}

export default FavColClass;