import React from 'react'
import './Header.css'
import styles from './Header.module.css'


function Header() {
  const mystyles={color:"blue",
    fontFamily:"sanserif",
  padding:"100px",
  backgroundColor:"green"
  
  }
  return (
    <div>
      <h1 style={{color:"red",fontFamily:"cursive"}}>My Name is {'RRRR'}</h1>
      <h2 style={mystyles}>My Father name is {'hhhhh'}</h2>
      <h3>My Mother name is {'yyyyyy'}</h3>
      <p className={styles.moduleCss}>My brother name is {'hhhgkkk'}</p>
    </div>
  )
}

export default Header
