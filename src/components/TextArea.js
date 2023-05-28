import React from 'react'
import styles from './css/TextArea.module.css'

function TextArea({placeholder}) {
  return (
    <>
        <textarea rows={5} placeholder={placeholder}/>
    </>
  )
}

export default TextArea