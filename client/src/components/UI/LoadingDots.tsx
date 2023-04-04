import React from 'react'
import styles from './loadingDots.module.css'

export default function LoadingDots() {
  return (
    <div className={styles.dotsContainer}>
      <svg
        className={styles.dots}
        width="62"
        height="62"
        viewBox="0 0 62 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle opacity="0.2" cx="31" cy="18.1923" r="18" fill="#E43434" />
        <circle opacity="0.2" cx="43.124" cy="39" r="18" fill="#9E9A9A" />
        <circle opacity="0.2" cx="18.8936" cy="38.9896" r="18" fill="#CC8282" />
      </svg>
    </div>
  )
}
