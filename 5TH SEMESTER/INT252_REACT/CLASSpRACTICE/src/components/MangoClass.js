import React from "react";
class MangoClass extends React.Component{
  
  render(){
    const {fruit}=this.props;
    const {name,color}=fruit;
    return(
      <div>
        <h1>Fruit Details</h1>
        <h2>Fruit is {name}</h2>
        <h2>Fruit Color is {color}</h2>
      </div>
    )
  }
}

export default MangoClass