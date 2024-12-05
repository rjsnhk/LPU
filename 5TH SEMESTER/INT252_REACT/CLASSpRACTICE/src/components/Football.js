import React from "react";
class Football extends React.Component{
  
render(){
  const{player}=this.props;
  const{name,country}=player;

  // return (
  //   <div>
  //     <h1>Football</h1>
  //   {/* <ul>
  //       {
  //         players.map((player)=>(
  //           <li key={player.name}> 
  //             {player.name}-{player.country}
  //           </li>
  //         ))
  //       }
  //     </ul> */}
  //   </div>
  // )
// }

return(

  <div>
    <div>
    <ul>
      {<li>
             {name}-{country}
      </li>
       }
     </ul>
     </div>
  </div>
)
}
}
export default Football