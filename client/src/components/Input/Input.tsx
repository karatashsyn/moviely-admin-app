import React, { useEffect, useMemo, useState } from 'react'
import styles from './input.module.css'
import Info from '../Info/Info'
type Props = {
  placeHolder: string
  info: string
  inputFunction: Function
  hasError: boolean
  formSaveAttempt: boolean
}

export default function Input({
  placeHolder,
  info,
  inputFunction,
  hasError,
  formSaveAttempt,
}: Props) {
  const [text, setText] = useState('')
  const [typed, setTyped] = useState(false)

  const inputClassName = useMemo(() => {
    let finalClass = styles.container
    if (typed || formSaveAttempt) {
      if (hasError)
        finalClass += formSaveAttempt
          ? ` ${styles.faultyInput} ${styles.shakyInput}`
          : ` ${styles.faultyInput}`
      else finalClass += ` ${styles.correctInput}`
    }

    return finalClass
  }, [formSaveAttempt, hasError, typed])

  const handleChange = (e: any) => {
    if (!typed) setTyped(true)
    setText(e.target.value)
    inputFunction(e.target.value)
  }

  return (
    <>
      <Info infoText={info} />
      <div className={inputClassName}>
        <div className={styles.inputContainer}>
          <input type="text" placeholder={placeHolder} value={text} onChange={handleChange} />
        </div>
      </div>
    </>
  )
}
