import React from 'react'
import Cricket from './Cricket'
import Football from './Football'

function Player() {
  const cric=[{name:"ccxx",country:"India"},
    {name:"ccyy",country:"Africa"},
    {name:"cczz",country:"Pakistan"},
    {name:"ccaa",country:"Russia"},


  ]
  const footb=[{name:"ffxx",country:"India"},
    {name:"ffyy",country:"Turkistan"},
    {name:"ffzz",country:"Itally"},
    {name:"ffaa",country:"Nepal"},


  ]
  return (
    <div>
      <Cricket cric={cric} />

      {/* <h1>Cricket</h1>
<div>
{cric.map((player)=>(
  <Cricket player={player} />
))}

</div> */}

      {/* <Football players={footb} /> */}

<h1>Football</h1>
      <div>
{footb.map((player)=>(
  <Football player={player} />
))}

</div>
    </div>
  )
}

export default Player
