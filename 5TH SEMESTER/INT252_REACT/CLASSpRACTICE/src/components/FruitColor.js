import React from 'react'
import styles from './FruitColor.module.css'
function FruitColor() {
  return (
    <div>
      <h1 className={styles.f1}>Apple</h1>
      <h2 className={styles.f2}>Grapes</h2>
      <h3 className={styles.f3}>Orange</h3>
      <h4 className={styles.f4}>Coconut</h4>
    </div>
  )
}

export default FruitColor
