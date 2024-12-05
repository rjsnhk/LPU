import React from 'react'

function Cricket(props) {
  const { cric } = props;
  return (
    <div>
      <h1>Cricket</h1>
      <ul>
        {cric.map((player) => (
          <li key={player.name}>
            {player.name} - {player.country}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cricket;



  // 2nd type

//   function cricket({player}) {
// return(

//   <div>
//     <ul>
//       {<li>
//              {player.name}-{player.country}
//       </li>
//        }
//      </ul>
//   </div>
// )

// }
