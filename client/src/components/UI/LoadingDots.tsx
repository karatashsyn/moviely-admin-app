import React from 'react'
import styles from './loadingDots.module.css'

export default function LoadingDots() {
  return (
    <div className={styles.dotsContainer}>
      <svg
        className={styles.dots}
        width="74"
        height="64"
        viewBox="0 0 74 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle opacity="0.2" cx="36.6953" cy="18.1923" r="18" fill="#E43434" />
        <circle
          opacity="0.2"
          cx="48.8198"
          cy="39"
          r="18"
          transform="rotate(120 48.8198 39)"
          fill="#9E9A9A"
        />
        <circle
          opacity="0.2"
          cx="24.5885"
          cy="38.9897"
          r="18"
          transform="rotate(-120 24.5885 38.9897)"
          fill="#CC8282"
        />
      </svg>
    </div>
  )
}
