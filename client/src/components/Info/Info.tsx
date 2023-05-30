import styles from './info.module.css'
type props = { infoText: string }

export default function Info({ infoText }: props) {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.iconContainer}>
        <svg
          className={styles.infoIcon}
          width="54"
          height="54"
          viewBox="0 0 54 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="27" cy="27" r="27" fill="#0091BE" fill-opacity="0.5" />
          <rect
            x="24.2988"
            y="18.9004"
            width="5.4"
            height="27"
            rx="2.7"
            fill="white"
            fill-opacity="0.2"
          />
          <rect
            x="24.2988"
            y="10.125"
            width="5.4"
            height="5.4"
            rx="2.7"
            fill="white"
            fill-opacity="0.2"
          />
        </svg>
      </div>
      <span className={styles.infoText}>{infoText}</span>
    </div>
  )
}
