import React from 'react'
import styles from './navbar.module.css'

type props = {
  admin: {
    name: string
    surname: string
    email: string
  }
}
export default function Navbar({ admin }: props) {
  return (
    <div className={styles.navbar}>
      <div className={styles.adminContainer}>
        <div className={styles.heroContainer}>
          <img
            className={styles.heroImg}
            src="assets\photo-1633332755192-727a05c4013d.jpg"
            alt=""
          />
        </div>
        <div className={styles.infoContainer}>
          <h1 className={styles.adminFullName}>Huseyin Karatas</h1>
          <h2 className={styles.adminRole}>Cofounder</h2>
        </div>
      </div>
      <div className={styles.mainOptionsContainer}>
        <div className={styles.option}>
          <div className={styles.iconWrapper}>
            <svg
              width="75"
              height="84"
              viewBox="0 0 75 84"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M45.7081 0C44.0513 0 42.7081 1.34315 42.7081 3V10.7295C38.4424 9.14981 33.6252 9.57672 29.6576 12.0102L7.15758 25.8102C2.71052 28.5377 0 33.3799 0 38.5968V68.2002C0 76.4845 6.71573 83.2002 15 83.2002H60C68.2843 83.2002 75 76.4845 75 68.2002V38.5968C75 33.3799 72.2895 28.5377 67.8424 25.8102L62.3056 22.4143C61.3936 21.8549 60.2028 22.1124 59.6034 22.9986L58.4816 24.6568C57.8431 25.6007 58.1212 26.8865 59.0926 27.4823L64.7055 30.9248C67.3737 32.5614 69 35.4667 69 38.5968V68.2002C69 73.1708 64.9706 77.2002 60 77.2002H15C10.0294 77.2002 6 73.1708 6 68.2002V38.5968C6 35.4667 7.62631 32.5614 10.2945 30.9248L32.7945 17.1248C35.6816 15.3541 39.3184 15.3541 42.2055 17.1248L43.3093 17.8019C43.8567 18.5295 44.7275 19 45.7081 19H46.9998C48.6566 19 49.9998 17.6569 49.9998 16V3C49.9998 1.34315 48.6566 0 46.9998 0H45.7081Z"
                fill="#C80000"
              />
              <circle cx="32" cy="44" r="4" fill="#C80000" />
              <circle cx="44" cy="44" r="4" fill="#C80000" />
              <circle cx="44" cy="56" r="4" fill="#C80000" />
              <circle cx="32" cy="56" r="4" fill="#C80000" />
            </svg>
          </div>
          <h2 className={styles.optionName}>Home</h2>
        </div>
        <div className={styles.option}>
          <div className={styles.iconWrapper}>
            <svg
              width="75"
              height="81"
              viewBox="0 0 75 81"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="2" y="42" width="73" height="39" rx="2" fill="#510000" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.05685 26.1042C4.02181 26.04 3.95432 25.9992 3.88126 26.0035C2.83197 26.0649 2 26.9353 2 28V35C2 36.1046 2.89543 37 4 37H9.66309C9.8149 37 9.91137 36.8375 9.83867 36.7042L4.05685 26.1042ZM10.3369 26C10.1851 26 10.0886 26.1625 10.1613 26.2958L15.9431 36.8958C15.9782 36.96 16.0455 37 16.1187 37H24.6631C24.8149 37 24.9114 36.8375 24.8387 36.7042L19.0569 26.1042C19.0218 26.04 18.9545 26 18.8813 26H10.3369ZM39.8387 36.7042C39.9114 36.8375 39.8149 37 39.6631 37H31.1187C31.0455 37 30.9782 36.96 30.9431 36.8958L25.1613 26.2958C25.0886 26.1625 25.1851 26 25.3369 26H33.8813C33.9545 26 34.0218 26.04 34.0569 26.1042L39.8387 36.7042ZM45.9431 36.8958C45.9782 36.96 46.0455 37 46.1187 37H54.6631C54.8149 37 54.9114 36.8375 54.8387 36.7042L49.0569 26.1042C49.0218 26.04 48.9545 26 48.8813 26H40.3369C40.1851 26 40.0886 26.1625 40.1613 26.2958L45.9431 36.8958ZM69.8387 36.7042C69.9114 36.8375 69.8149 37 69.6631 37H61.1187C61.0455 37 60.9782 36.96 60.9431 36.8958L55.1613 26.2958C55.0886 26.1625 55.1851 26 55.3369 26H63.8813C63.9545 26 64.0218 26.04 64.0569 26.1042L69.8387 36.7042ZM74.9194 35.0189C74.9414 35.0593 75 35.046 75 35V28C75 26.8954 74.1046 26 73 26H70.3369C70.1851 26 70.0886 26.1625 70.1613 26.2958L74.9194 35.0189Z"
                fill="#C80000"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.03358 14.852C1.98594 14.7965 1.91145 14.7706 1.84087 14.79C0.82728 15.0682 0.194458 16.0926 0.415823 17.134L1.87121 23.9811C2.10086 25.0615 3.16289 25.7512 4.24332 25.5215L9.78266 24.3441C9.93116 24.3125 9.99173 24.1335 9.89291 24.0183L2.03358 14.852ZM8.15473 13.4444C8.00623 13.476 7.94566 13.655 8.04448 13.7702L15.9038 22.9365C15.9515 22.992 16.0256 23.0171 16.0972 23.0019L24.4549 21.2254C24.6034 21.1939 24.6639 21.0149 24.5651 20.8996L16.7058 11.7334C16.6582 11.6778 16.584 11.6527 16.5124 11.6679L8.15473 13.4444ZM39.2373 17.7809C39.3362 17.8962 39.2756 18.0752 39.1271 18.1068L30.7694 19.8832C30.6979 19.8985 30.6237 19.8733 30.576 19.8178L22.7167 10.6515C22.6179 10.5363 22.6784 10.3573 22.8269 10.3257L31.1846 8.54925C31.2562 8.53403 31.3304 8.55913 31.378 8.61469L39.2373 17.7809ZM45.2482 16.6991C45.2959 16.7547 45.3701 16.7798 45.4417 16.7646L53.7993 14.9881C53.9478 14.9565 54.0084 14.7775 53.9096 14.6623L46.0502 5.49602C46.0026 5.44046 45.9284 5.41535 45.8568 5.43057L37.4992 7.20704C37.3507 7.23861 37.2901 7.41761 37.3889 7.53286L45.2482 16.6991ZM68.5818 11.5436C68.6806 11.6588 68.62 11.8378 68.4715 11.8694L60.1139 13.6459C60.0423 13.6611 59.9681 13.636 59.9205 13.5804L52.0611 4.41418C51.9623 4.29893 52.0229 4.11993 52.1714 4.08837L60.529 2.31189C60.6006 2.29668 60.6748 2.32178 60.7224 2.37734L68.5818 11.5436ZM73.2011 8.83874C73.231 8.87365 73.2855 8.84849 73.276 8.80351L71.8206 1.95648C71.5909 0.876045 70.5289 0.186352 69.4485 0.416005L66.8436 0.969693C66.6951 1.00126 66.6345 1.18026 66.7333 1.2955L73.2011 8.83874Z"
                fill="#C80000"
              />
            </svg>
          </div>
          <h2 className={styles.optionName}>Add Movie</h2>
        </div>
        <div className={styles.option}>
          <div className={styles.iconWrapper}>
            <svg
              width="78"
              height="75"
              viewBox="0 0 78 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M43.823 5.17637L41.9115 5.76465L43.823 5.17637ZM35.2212 5.17637L37.1327 5.76465V5.76465L35.2212 5.17637ZM49.8447 24.743L47.9332 25.3313L48.3677 26.743H49.8447V24.743ZM73.7891 32.8132L72.5717 31.2265L73.7891 32.8132ZM56.4278 46.1336L55.2103 44.5468L54.1073 45.3931L54.5162 46.7219L56.4278 46.1336ZM62.7383 66.6386L64.6498 66.0504L62.7383 66.6386ZM55.7139 71.5445L54.5034 73.1367V73.1367L55.7139 71.5445ZM39.4369 59.1697L40.6473 57.5776L39.4313 56.6531L38.2194 57.5829L39.4369 59.1697ZM23.353 71.5099L22.1356 69.9231L23.353 71.5099ZM16.3129 66.616L18.2244 67.2043L16.3129 66.616ZM22.5546 46.3346L24.4661 46.9229L24.8769 45.5879L23.765 44.7425L22.5546 46.3346ZM4.78529 32.8253L5.99572 31.2331L4.78529 32.8253ZM29.1995 24.743V26.743H30.6765L31.111 25.3313L29.1995 24.743ZM50.4501 50.7199L48.5395 51.3114L49.389 54.0549L51.6675 52.3067L50.4501 50.7199ZM48.2736 43.6904L47.0536 42.1056L45.9519 42.9537L46.3631 44.2819L48.2736 43.6904ZM50.5028 50.6795L52.4143 50.0912L51.568 47.3413L49.2853 49.0927L50.5028 50.6795ZM53.761 61.2665L52.5505 62.8586L57.5021 66.6232L55.6725 60.6782L53.761 61.2665ZM53.7014 61.2212L54.9118 59.6291L49.9459 55.8536L51.7908 61.8127L53.7014 61.2212ZM53.7176 61.2737L52.5034 62.8629L57.4807 66.6658L55.6281 60.6822L53.7176 61.2737ZM39.5224 50.4278L40.7367 48.8386L39.5224 47.9108L38.3082 48.8386L39.5224 50.4278ZM25.3273 61.2737L23.4168 60.6821L21.5641 66.6659L26.5415 62.8629L25.3273 61.2737ZM25.3685 61.1406L27.279 61.7322L29.1381 55.7277L24.1511 59.5538L25.3685 61.1406ZM25.3076 61.1873L23.396 60.5991L21.5526 66.589L26.525 62.7741L25.3076 61.1873ZM28.4898 50.847L29.7003 49.2549L27.4206 47.5217L26.5783 50.2588L28.4898 50.847ZM28.543 50.8874L27.3325 52.4795L29.608 54.2096L30.4535 51.4789L28.543 50.8874ZM30.7364 43.8029L32.6469 44.3944L33.0625 43.0521L31.9406 42.206L30.7364 43.8029ZM14.6796 31.6944L14.6796 29.6944L8.70577 29.6944L13.4754 33.2912L14.6796 31.6944ZM34.4853 31.6943L34.4853 33.6943L35.9598 33.6943L36.3959 32.2858L34.4853 31.6943ZM36.6375 24.743L38.5481 25.3345L39.3504 22.743H36.6375V24.743ZM36.5235 24.743L34.6119 24.1547L33.8154 26.743H36.5235V24.743ZM39.5221 14.9994L41.4336 14.4111L39.5221 8.19987L37.6106 14.4111L39.5221 14.9994ZM42.5207 24.743V26.743H45.2288L44.4323 24.1547L42.5207 24.743ZM42.4073 24.743V22.743H39.6945L40.4968 25.3345L42.4073 24.743ZM44.5595 31.6943L42.649 32.2858L43.0851 33.6943L44.5595 33.6943L44.5595 31.6943ZM63.8563 31.6942L65.0764 33.279L69.7329 29.6942L63.8563 29.6942L63.8563 31.6942ZM45.7345 4.5881C43.8519 -1.52924 35.1923 -1.52949 33.3096 4.58809L37.1327 5.76465C37.8568 3.4118 41.1874 3.41177 41.9115 5.76465L45.7345 4.5881ZM51.7562 24.1547L45.7345 4.5881L41.9115 5.76465L47.9332 25.3313L51.7562 24.1547ZM71.0499 22.743H49.8447V26.743H71.0499V22.743ZM75.0066 34.4C79.9341 30.6194 77.2604 22.743 71.0499 22.743V26.743C73.4386 26.743 74.4669 29.7724 72.5717 31.2265L75.0066 34.4ZM57.6452 47.7204L75.0066 34.4L72.5717 31.2265L55.2103 44.5468L57.6452 47.7204ZM64.6498 66.0504L58.3393 45.5453L54.5162 46.7219L60.8267 67.2269L64.6498 66.0504ZM54.5034 73.1367C59.5321 76.9597 66.5079 72.088 64.6498 66.0504L60.8267 67.2269C61.5414 69.549 58.8584 71.4229 56.9243 69.9524L54.5034 73.1367ZM38.2264 60.7618L54.5034 73.1367L56.9243 69.9524L40.6473 57.5776L38.2264 60.7618ZM24.5705 73.0966L40.6543 60.7565L38.2194 57.5829L22.1356 69.9231L24.5705 73.0966ZM14.4014 66.0277C12.539 72.0791 19.547 76.9509 24.5705 73.0966L22.1356 69.9231C20.2035 71.4055 17.5081 69.5318 18.2244 67.2043L14.4014 66.0277ZM20.643 45.7464L14.4014 66.0277L18.2244 67.2043L24.4661 46.9229L20.643 45.7464ZM3.57485 34.4174L21.3441 47.9268L23.765 44.7425L5.99572 31.2331L3.57485 34.4174ZM7.50877 22.743C1.28371 22.743 -1.38071 30.6498 3.57485 34.4174L5.99572 31.2331C4.08975 29.7841 5.1145 26.743 7.50877 26.743V22.743ZM29.1995 22.743H7.50877V26.743H29.1995V22.743ZM33.3096 4.58809L27.2879 24.1547L31.111 25.3313L37.1327 5.76465L33.3096 4.58809ZM52.3606 50.1284L50.1842 43.0988L46.3631 44.2819L48.5395 51.3114L52.3606 50.1284ZM51.6675 52.3067L51.7202 52.2662L49.2853 49.0927L49.2326 49.1332L51.6675 52.3067ZM48.5913 51.2678L51.8495 61.8548L55.6725 60.6782L52.4143 50.0912L48.5913 51.2678ZM54.9714 59.6744L54.9118 59.6291L52.4909 62.8133L52.5505 62.8586L54.9714 59.6744ZM55.6281 60.6822L55.6119 60.6297L51.7908 61.8127L51.8071 61.8652L55.6281 60.6822ZM38.3082 52.017L52.5034 62.8629L54.9319 59.6844L40.7367 48.8386L38.3082 52.017ZM26.5415 62.8629L40.7367 52.017L38.3082 48.8386L24.113 59.6844L26.5415 62.8629ZM23.4579 60.5491L23.4168 60.6821L27.2378 61.8652L27.279 61.7322L23.4579 60.5491ZM24.1511 59.5538L24.0902 59.6005L26.525 62.7741L26.5859 62.7274L24.1511 59.5538ZM27.2191 61.7756L30.4014 51.4353L26.5783 50.2588L23.396 60.5991L27.2191 61.7756ZM27.2794 52.4391L27.3325 52.4795L29.7534 49.2953L29.7003 49.2549L27.2794 52.4391ZM28.8259 43.2114L26.6324 50.2959L30.4535 51.4789L32.6469 44.3944L28.8259 43.2114ZM31.9406 42.206L15.8838 30.0975L13.4754 33.2912L29.5322 45.3997L31.9406 42.206ZM14.6796 33.6944L34.4853 33.6943L34.4853 29.6943L14.6796 29.6944L14.6796 33.6944ZM34.727 24.1515L32.5748 31.1028L36.3959 32.2858L38.5481 25.3345L34.727 24.1515ZM36.5235 26.743H36.6375V22.743H36.5235V26.743ZM37.6106 14.4111L34.6119 24.1547L38.435 25.3313L41.4336 15.5876L37.6106 14.4111ZM44.4323 24.1547L41.4336 14.4111L37.6106 15.5876L40.6092 25.3313L44.4323 24.1547ZM42.4073 26.743H42.5207V22.743H42.4073V26.743ZM46.4701 31.1028L44.3179 24.1515L40.4968 25.3345L42.649 32.2858L46.4701 31.1028ZM44.5595 33.6943L63.8563 33.6942L63.8563 29.6942L44.5595 29.6943L44.5595 33.6943ZM62.6363 30.1094L47.0536 42.1056L49.4937 45.2751L65.0764 33.279L62.6363 30.1094Z"
                fill="#C80000"
              />
            </svg>
          </div>
          <h2 className={styles.optionName}>Artists</h2>
        </div>
        <div className={styles.option}>
          <div className={styles.iconWrapper}>
            <svg
              width="73"
              height="73"
              viewBox="0 0 73 73"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14 6C9.58172 6 6 9.58167 6 14C6 18.4183 9.58172 22 14 22H38H53H59C66.0529 22 71.8878 27.2155 72.8582 34H73V36V59C73 66.7319 66.732 73 59 73H38H14C6.26801 73 0 66.7319 0 59V14C0 6.26807 6.26801 0 14 0H59C66.1069 0 71.977 5.29553 72.8796 12.156C72.958 12.4237 73 12.7069 73 13V14V16C73 17.6569 71.6569 19 70 19C68.3431 19 67 17.6569 67 16V14C67 9.58167 63.4183 6 59 6H14ZM14 28H38H53H59C63.4183 28 67 31.5817 67 36V59C67 63.4183 63.4183 67 59 67H38H14C9.58172 67 6 63.4183 6 59V25.4906C8.26767 27.0724 11.0255 28 14 28ZM57.6 52.2C59.5882 52.2 61.2 50.5883 61.2 48.6C61.2 46.6118 59.5882 45 57.6 45C55.6118 45 54 46.6118 54 48.6C54 50.5883 55.6118 52.2 57.6 52.2ZM13 14.5C13 13.1193 14.1193 12 15.5 12H58.5C59.8807 12 61 13.1193 61 14.5C61 15.8807 59.8807 17 58.5 17H15.5C14.1193 17 13 15.8807 13 14.5Z"
                fill="#C80000"
              />
            </svg>
          </div>
          <h2 className={styles.optionName}>Genres</h2>
        </div>
        <div className={styles.option}>
          <div className={styles.iconWrapper}>
            <svg
              width="79"
              height="88"
              viewBox="0 0 79 88"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.2618 69.1321L26.7648 66.5358L25.2618 69.1321ZM11.5818 69.033L11.4566 66.0356L11.5818 69.033ZM67.4672 69.0349L67.5745 66.0368L67.4672 69.0349ZM53.5949 19.4936L52.0919 22.0899L53.5949 19.4936ZM67.3643 19.5195L67.2199 16.523L67.3643 19.5195ZM74.7664 32.1124L72.2157 30.5333L74.7664 32.1124ZM55.0979 16.8972L51.738 14.9522L48.732 20.1449L52.0919 22.0899L55.0979 16.8972ZM67.7663 16.5098C67.5833 16.5098 67.4011 16.5142 67.2199 16.523L67.5088 22.516C67.5939 22.5119 67.6797 22.5098 67.7663 22.5098V16.5098ZM78.9994 27.7648C78.9994 21.5564 73.9777 16.5098 67.7663 16.5098V22.5098C70.649 22.5098 72.9994 24.8551 72.9994 27.7648H78.9994ZM77.3172 33.6916C78.3842 31.968 78.9994 29.9336 78.9994 27.7648H72.9994C72.9994 28.7868 72.7119 29.7317 72.2157 30.5333L77.3172 33.6916ZM78.9994 60.7852C78.9994 58.6164 78.3842 56.5821 77.3172 54.8585L72.2157 58.0168C72.7119 58.8183 72.9994 59.7633 72.9994 60.7852H78.9994ZM67.7663 72.0402C73.9777 72.0402 78.9994 66.9937 78.9994 60.7852H72.9994C72.9994 63.695 70.649 66.0402 67.7663 66.0402V72.0402ZM67.3598 72.033C67.4949 72.0378 67.6304 72.0402 67.7663 72.0402V66.0402C67.702 66.0402 67.6381 66.0391 67.5745 66.0368L67.3598 72.033ZM51.5516 73.7059L55.0091 71.7044L52.0032 66.5117L48.5456 68.5132L51.5516 73.7059ZM44.5961 76.7452C44.5961 79.655 42.2457 82.0002 39.363 82.0002V88.0002C45.5744 88.0002 50.5961 82.9537 50.5961 76.7452H44.5961ZM39.363 82.0002C36.4803 82.0002 34.1299 79.655 34.1299 76.7452H28.1299C28.1299 82.9537 33.1516 88.0002 39.363 88.0002V82.0002ZM23.7588 71.7285L27.1744 73.7057L30.1803 68.513L26.7648 66.5358L23.7588 71.7285ZM11.2331 72.0402C11.3917 72.0402 11.5497 72.0369 11.7071 72.0303L11.4566 66.0356C11.3827 66.0387 11.3082 66.0402 11.2331 66.0402V72.0402ZM0 60.7852C0 66.9937 5.02173 72.0402 11.2331 72.0402V66.0402C8.35046 66.0402 6 63.695 6 60.7852H0ZM1.48579 55.1883C0.539713 56.8397 0 58.754 0 60.7852H6C6 59.8272 6.25258 58.9378 6.692 58.1708L1.48579 55.1883ZM0 27.7648C0 29.796 0.539713 31.7103 1.48579 33.3618L6.692 30.3793C6.25258 29.6122 6 28.7229 6 27.7648H0ZM11.2331 16.5098C5.02173 16.5098 0 21.5564 0 27.7648H6C6 24.8551 8.35046 22.5098 11.2331 22.5098V16.5098ZM11.8434 16.5262C11.6411 16.5153 11.4376 16.5098 11.2331 16.5098V22.5098C11.3299 22.5098 11.4257 22.5124 11.5206 22.5175L11.8434 16.5262ZM26.9884 14.9522L23.6722 16.8719L26.6782 22.0646L29.9944 20.1449L26.9884 14.9522ZM39.3632 0C33.1518 0 28.1301 5.04656 28.1301 11.255H34.1301C34.1301 8.34523 36.4805 6 39.3632 6V0ZM50.5963 11.255C50.5963 5.04656 45.5746 0 39.3632 0V6C42.2458 6 44.5963 8.34523 44.5963 11.255H50.5963ZM13.8428 44.275C13.8428 41.0025 12.2689 38.2625 10.7936 36.1342C10.0515 35.0636 9.20973 33.9805 8.51571 33.0535C7.78612 32.079 7.1701 31.2138 6.692 30.3793L1.48579 33.3618C2.15731 34.534 2.96034 35.6446 3.71265 36.6494C4.50054 37.7018 5.20352 38.6017 5.86246 39.5524C7.18938 41.4666 7.84278 42.9221 7.84278 44.275H13.8428ZM6.692 58.1708C7.1701 57.3362 7.78612 56.471 8.51571 55.4965C9.20973 54.5695 10.0515 53.4864 10.7936 52.4158C12.2689 50.2876 13.8428 47.5476 13.8428 44.275H7.84278C7.84278 45.6279 7.18938 47.0834 5.86246 48.9977C5.20352 49.9483 4.50054 50.8482 3.71265 51.9006C2.96034 52.9055 2.15731 54.0161 1.48579 55.1883L6.692 58.1708ZM26.7648 66.5358C23.976 64.9214 20.8813 64.9338 18.3536 65.1823C17.0736 65.3081 15.7651 65.5172 14.6289 65.6848C13.4438 65.8596 12.4075 65.9958 11.4566 66.0356L11.7071 72.0303C13.0013 71.9763 14.3113 71.7966 15.5044 71.6206C16.7465 71.4374 17.848 71.2609 18.9406 71.1535C21.158 70.9355 22.6582 71.0913 23.7588 71.7285L26.7648 66.5358ZM34.1299 76.7452C34.1299 74.3618 33.5286 70.4513 30.1803 68.513L27.1744 73.7057C27.3552 73.8104 27.5913 74.0363 27.7984 74.584C28.0125 75.1504 28.1299 75.9051 28.1299 76.7452H34.1299ZM48.5456 68.5132C45.1974 70.4514 44.5961 74.3619 44.5961 76.7452H50.5961C50.5961 75.9051 50.7135 75.1504 50.9276 74.5842C51.1346 74.0364 51.3707 73.8106 51.5516 73.7059L48.5456 68.5132ZM67.5745 66.0368C66.6122 66.0023 65.5589 65.866 64.3534 65.6873C63.1998 65.5163 61.8626 65.2989 60.562 65.1659C57.9926 64.9032 54.8375 64.8709 52.0032 66.5117L55.0091 71.7044C56.1349 71.0527 57.6739 70.9019 59.9517 71.1348C61.0748 71.2496 62.1996 71.4336 63.4736 71.6224C64.6957 71.8036 66.0357 71.9855 67.3598 72.033L67.5745 66.0368ZM64.8835 44.275C64.8835 47.5433 66.4786 50.2609 67.9824 52.3603C68.7432 53.4225 69.5953 54.4758 70.3154 55.3923C71.068 56.3502 71.7086 57.1976 72.2157 58.0168L77.3172 54.8585C76.6194 53.7313 75.7971 52.6576 75.0333 51.6854C74.2369 50.6718 73.5189 49.7861 72.8602 48.8665C71.5249 47.0024 70.8835 45.5849 70.8835 44.275H64.8835ZM52.0919 22.0899C54.9008 23.716 58.0211 23.6864 60.5649 23.4209C61.8543 23.2864 63.1715 23.0671 64.316 22.8905C65.5095 22.7064 66.5526 22.5621 67.5088 22.516L67.2199 16.523C65.9192 16.5857 64.6015 16.7755 63.4012 16.9607C62.1518 17.1534 61.0421 17.3386 59.9422 17.4533C57.7075 17.6865 56.2 17.5352 55.0979 16.8972L52.0919 22.0899ZM72.2157 30.5333C71.7086 31.3524 71.068 32.1999 70.3154 33.1577C69.5953 34.0742 68.7432 35.1275 67.9824 36.1897C66.4786 38.2892 64.8835 41.0067 64.8835 44.275H70.8835C70.8835 42.9651 71.5249 41.5477 72.8602 39.6835C73.5189 38.7639 74.2369 37.8783 75.0333 36.8647C75.7971 35.8925 76.6194 34.8187 77.3172 33.6916L72.2157 30.5333ZM11.5206 22.5175C12.4654 22.5684 13.4916 22.7122 14.665 22.8923C15.792 23.0651 17.0819 23.2762 18.3507 23.4035C20.8534 23.6546 23.9144 23.6645 26.6782 22.0646L23.6722 16.8719C22.5948 17.4956 21.1252 17.6517 18.9497 17.4334C17.8793 17.3261 16.7931 17.1485 15.5748 16.9616C14.403 16.7819 13.1146 16.5947 11.8434 16.5262L11.5206 22.5175ZM29.9944 20.1449C31.819 19.0887 32.8499 17.4307 33.4114 15.8564C33.9666 14.2996 34.1301 12.6552 34.1301 11.255H28.1301C28.1301 12.2428 28.0075 13.1469 27.76 13.8409C27.5188 14.5172 27.2304 14.8121 26.9884 14.9522L29.9944 20.1449ZM44.5963 11.255C44.5963 12.6553 44.7598 14.2996 45.315 15.8564C45.8764 17.4307 46.9074 19.0887 48.732 20.1449L51.738 14.9522C51.4959 14.8121 51.2075 14.5173 50.9663 13.8409C50.7188 13.147 50.5963 12.2428 50.5963 11.255H44.5963Z"
                fill="#C80000"
              />
              <ellipse
                cx="39.5"
                cy="44.0847"
                rx="15.3506"
                ry="15.2795"
                stroke="#C80000"
                strokeWidth="6"
              />
            </svg>
          </div>
          <h2 className={styles.optionName}>Settings</h2>
        </div>
      </div>

      <div className={styles.logOutContainer}>
        <div className={styles.logouticonwrapper}>
          <svg
            width="87"
            height="79"
            viewBox="0 0 87 79"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect opacity="0.4" x="1" y="24" width="85" height="31" fill="#C80000" />
            <rect
              opacity="0.6"
              x="20.9048"
              y="0.306152"
              width="85"
              height="31"
              transform="rotate(40 20.9048 0.306152)"
              fill="#C80000"
            />
            <rect
              opacity="0.6"
              x="0.980957"
              y="54.9453"
              width="85"
              height="31"
              transform="rotate(-40 0.980957 54.9453)"
              fill="#C80000"
            />
          </svg>
        </div>
        <h2 className={styles.logout}>Log Out</h2>
      </div>
    </div>
  )
}
