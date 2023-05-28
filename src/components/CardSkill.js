import React from 'react'
import styles from './css/CardSkill.module.css'

function CardSkill({icon , text}) {
  return (
    <div className={styles.boxIcon}>
        <div className={styles.logo}>
            {icon}
        </div>
        <span>{text}</span>
    </div>
  )
}

export default CardSkill