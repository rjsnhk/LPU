import React from "react";
import "./Table.css"
class Table extends React.Component{
render(){
  return(
    <>
    <div>
    <table className="table">
    <thead>
      <th>Name</th>
      <th>Age</th>
    </thead>
    <tbody>
      <tr>
        <td>Peter</td>
        <td>19</td>
      </tr>
      <tr>
        <td>Muku</td>
        <td>30</td>
      </tr>
      <tr>
        <td>Gandhi</td>
        <td>40</td>
      </tr>
    </tbody>

    </table>
    </div>


    
    </>
  )
}
}

export default Table;