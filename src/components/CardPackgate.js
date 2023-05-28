import React from 'react'
import styles from './css/CardPackgate.module.css'

function CardPackgate() {
  return (
    <div className={styles.packgateContentCard}>
        <h2>Packgate A</h2>
        <h1>5000 $</h1>
        <div className={styles.detailBox}>
            <p>detailBox1</p>
            <p>detailBox1</p>
            <p>detailBox1</p>
            <p>detailBox1</p>
            <p>detailBox1</p>
        </div>
        <button className={styles.buttonDetail}>Click</button>
    </div>
  )
}

export default CardPackgate