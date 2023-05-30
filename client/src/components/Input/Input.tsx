import React, { useEffect, useState } from 'react'
import styles from './input.module.css'
import Info from '../Info/Info'
import { Genre } from '../../Types/Genre'
type Props = {
  placeHolder: string
  info: string
  inputFunction: Function
}

export default function Input({ placeHolder, info, inputFunction }: Props) {
  const [text, setText] = useState('')

  const handleChange = (e: any) => {
    setText(e.target.value)
    inputFunction(e.target.value)
  }

  return (
    <>
      <Info infoText={info} />
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <input type="text" placeholder={placeHolder} value={text} onChange={handleChange} />
        </div>
      </div>
    </>
  )
}
