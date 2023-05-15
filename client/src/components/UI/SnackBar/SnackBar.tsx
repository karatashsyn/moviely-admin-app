import React, { useState, forwardRef, useImperativeHandle } from 'react'
import styles from './snackBar.module.css'
type Props = { message: string; success: boolean }

const SnackBar = forwardRef(({ message, success }: Props, ref) => {
  const [shown, setShown] = useState(false)

  useImperativeHandle(ref, () => ({
    handleShow: () => {
      if (!shown) {
        setShown(true)
        setTimeout(() => {
          setShown(false)
        }, 3000)
      }
    },
  }))

  return (
    <div
      id={shown ? `${styles.shown}` : `${styles.hidden}`}
      className={success ? `${styles.snackBar} ${styles.success}` : `${styles.snackBar}`}
    >
      <div className={styles.icon}>
        {success ? (
          <h1 className={styles.successIcon}>&#x2713;</h1>
        ) : (
          <h1 className={styles.failIcon}>&#x2613;</h1>
        )}
      </div>
      <h2 className={styles.message}>{message}</h2>
    </div>
  )
})

export default SnackBar
