import React, { useEffect, useMemo, useState } from 'react'
import { Movie } from '../../Types/Movie'
import styles from './moviecard.module.css'
import { Link, NavLink } from 'react-router-dom'
type props = { movie: Movie; deleteMovie: Function; addMovie: Function }
export default function MovieCard({ movie, deleteMovie, addMovie }: props) {
  const [deleted, setDeleted] = useState(false)
  const [added, setAdded] = useState(movie.owned)
  const [id, setId] = useState(null)
  const [genresString, setGenresString] = useState('')
  const [editMode, setEditMode] = useState(false)

  const cardClassName = useMemo(() => {
    let cardClass = styles.card
    if (deleted) cardClass += ` ${styles.deleted}`
    if (editMode) cardClass += ` ${styles.editMode}`
    return cardClass
  }, [deleted, editMode])

  const rateClassName = () => {
    let rateClass = styles.rate
    if (movie.rating && movie.rating >= 7) rateClass += ` ${styles.highRate}`
    if (movie.rating && movie.rating >= 4 && movie.rating < 7) rateClass += ` ${styles.averageRate}`
    if (movie.rating && movie.rating < 4) rateClass += ` ${styles.lowRate}`
    return rateClass
  }

  useEffect(() => {
    const genreNames = movie.genres.map((g: any) => g.name)
    setGenresString(
      genreNames
        .map((g) => g)
        .reduce((accumulator, genre, index) => {
          if (index < 2) {
            if (accumulator === '') {
              return genre
            } else {
              return accumulator + ', ' + genre
            }
          } else {
            return accumulator
          }
        }, '')
    )
  }, [movie])

  const switchToEdit = () => {}

  const handleDelete = async () => {
    const result = movie.id ? await deleteMovie(movie) : await deleteMovie({ ...movie, id: id })
    if (result.status === 204) {
      setDeleted(true)
    }
  }

  useEffect(() => {
    setDeleted(false)
  }, [movie])

  useEffect(() => {
    setAdded(movie.owned)
  }, [movie])

  const handleAdd = async () => {
    const res = await addMovie(movie)
    if (res.status === 200) {
      setAdded(true)
      setId(res.data.movie.id)
    }
  }

  return (
    <div onClick={switchToEdit} className={cardClassName}>
      <span className={styles.deletedSpan}>DELETED</span>
      <NavLink to={`/movies/${movie.id}`}>
        <img className={styles.poster} src={movie.poster ?? 'assets/NoImageImage2.png'} alt="" />
      </NavLink>
      <div className={styles.ratingBox}>
        <div className={styles.iconContainer}>
          <svg
            className={styles.rateIcon}
            width="14"
            height="15"
            viewBox="0 0 28 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="8" width="6" height="22" rx="3" fill="#666" />
            <rect x="11" width="6" height="30" rx="3" fill="#888" />
            <rect x="22" y="15" width="6" height="15" rx="3" fill="#555" />
          </svg>
        </div>
        <div className={rateClassName()}>{movie.rating ?? '--'}</div>
      </div>
      <div className={styles.buttonsContainer}>
        {added ? (
          <>
            <div className={styles.removeBtn} onClick={handleDelete}>
              <svg
                className={styles.addedIcon}
                width="65"
                height="56"
                viewBox="0 0 65 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M53.991 0.324311C53.5679 -0.030691 52.9372 0.0244931 52.5822 0.447568L24.0364 34.4671L10.1784 22.8388C9.75529 22.4838 9.12454 22.539 8.76953 22.9621L0.456147 32.8696C0.101145 33.2927 0.156329 33.9234 0.579404 34.2784L15.0042 46.3823C15.0534 46.4527 15.1126 46.5178 15.1815 46.5757L25.089 54.8891C25.5121 55.2441 26.1429 55.1889 26.4979 54.7658L64.0218 10.0465C64.3768 9.62346 64.3216 8.9927 63.8985 8.6377L53.991 0.324311Z"
                  fill="#21F65C"
                />
              </svg>
              <svg
                className={styles.removeIcon}
                width="36"
                height="40"
                viewBox="0 0 36 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.55429 0C5.32706 0 5.14286 0.184203 5.14286 0.411429V3.08571H0.411429C0.184203 3.08571 0 3.26992 0 3.49714V8.84571C0 9.07294 0.184204 9.25714 0.411429 9.25714H35.5886C35.8158 9.25714 36 9.07294 36 8.84571V3.49714C36 3.26992 35.8158 3.08571 35.5886 3.08571H30.8571V0.411429C30.8571 0.184203 30.6729 0 30.4457 0H5.55429ZM3.08571 11.7257C3.08571 11.4985 3.26992 11.3143 3.49714 11.3143H32.5029C32.7301 11.3143 32.9143 11.4985 32.9143 11.7257V38.6743C32.9143 38.9015 32.7301 39.0857 32.5029 39.0857H3.49714C3.26992 39.0857 3.08571 38.9015 3.08571 38.6743V11.7257Z"
                  fill="#530000"
                />
              </svg>
            </div>
            <NavLink to={`/movies/${movie.id}`}>
              <div className={styles.editBtn}>
                <svg
                  className={styles.editIcon}
                  width="72"
                  height="66"
                  viewBox="0 0 72 66"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M56.7735 45.2125L58.5147 46.1966L56.7735 45.2125ZM58.5065 42.1464L56.7654 41.1623L58.5065 42.1464ZM56.7529 20.9839L58.494 19.9998L56.7529 20.9839ZM15.748 20.9044L14.0069 19.9202L15.748 20.9044ZM14.0361 23.9331L12.295 22.949L14.0361 23.9331ZM14.0069 19.9202L12.295 22.949L15.7772 24.9172L17.4891 21.8885L14.0069 19.9202ZM13.691 8.99304C13.691 9.19656 13.6977 9.39879 13.7109 9.59948L17.7023 9.3372C17.6948 9.22375 17.691 9.109 17.691 8.99304H13.691ZM22.5366 0.000469208C17.6115 0.000469208 13.691 4.06684 13.691 8.99304H17.691C17.691 6.19546 19.9003 4.00047 22.5366 4.00047V0.000469208ZM27.3417 1.44187C25.9593 0.531288 24.3071 0.000469208 22.5366 0.000469208V4.00047C23.4965 4.00047 24.388 4.28605 25.1414 4.78232L27.3417 1.44187ZM49.9194 0.000469208C48.1489 0.000469208 46.4967 0.531288 45.1143 1.44187L47.3146 4.78232C48.068 4.28605 48.9595 4.00047 49.9194 4.00047V0.000469208ZM58.765 8.99304C58.765 4.06683 54.8445 0.000469208 49.9194 0.000469208V4.00047C52.5557 4.00047 54.765 6.19546 54.765 8.99304H58.765ZM58.752 9.48341C58.7607 9.32088 58.765 9.15738 58.765 8.99304H54.765C54.765 9.08668 54.7625 9.17953 54.7577 9.27153L58.752 9.48341ZM60.2478 23.1027L58.494 19.9998L55.0117 21.968L56.7655 25.0709L60.2478 23.1027ZM63.1545 28.124C65.7908 28.124 68.0001 30.319 68.0001 33.1166H72.0001C72.0001 28.1904 68.0796 24.124 63.1545 24.124V28.124ZM68.0001 33.1166C68.0001 35.9142 65.7908 38.1092 63.1545 38.1092V42.1092C68.0796 42.1092 72.0001 38.0428 72.0001 33.1166H68.0001ZM58.5147 46.1966L60.2476 43.1306L56.7654 41.1623L55.0324 44.2284L58.5147 46.1966ZM58.765 57.0079C58.765 56.8256 58.7597 56.6444 58.7491 56.4644L54.756 56.6993C54.762 56.8012 54.765 56.9041 54.765 57.0079H58.765ZM49.9194 66.0005C54.8445 66.0005 58.765 61.9341 58.765 57.0079H54.765C54.765 59.8055 52.5557 62.0005 49.9194 62.0005V66.0005ZM45.3753 64.7245C46.703 65.5339 48.2597 66.0005 49.9194 66.0005V62.0005C49.0187 62.0005 48.1792 61.7492 47.4573 61.3091L45.3753 64.7245ZM22.5366 66.0005C24.1963 66.0005 25.753 65.5339 27.0807 64.7245L24.9987 61.3091C24.2768 61.7492 23.4373 62.0005 22.5366 62.0005V66.0005ZM13.691 57.0079C13.691 61.9341 17.6115 66.0005 22.5366 66.0005V62.0005C19.9003 62.0005 17.691 59.8055 17.691 57.0079H13.691ZM13.7143 56.3507C13.6989 56.568 13.691 56.7872 13.691 57.0079H17.691C17.691 56.8822 17.6955 56.7578 17.7042 56.635L13.7143 56.3507ZM12.2951 43.2842L13.9852 46.2744L17.4675 44.3062L15.7774 41.316L12.2951 43.2842ZM-7.15256e-07 33.1166C-7.15256e-07 38.0428 3.92048 42.1092 8.84561 42.1092V38.1092C6.20929 38.1092 4 35.9142 4 33.1166H-7.15256e-07ZM8.84561 24.124C3.92048 24.124 -7.15256e-07 28.1904 -7.15256e-07 33.1166H4C4 30.319 6.20929 28.124 8.84561 28.124V24.124ZM36.228 55.3394C33.6678 55.3394 31.5105 56.5683 29.7709 57.7953C28.8942 58.4137 28.0264 59.1052 27.25 59.7057C26.4462 60.3275 25.715 60.8724 24.9987 61.3091L27.0807 64.7245C28.0015 64.1632 28.8831 63.4995 29.6974 62.8697C30.5391 62.2186 31.2947 61.6154 32.0765 61.064C33.6539 59.9513 34.9536 59.3394 36.228 59.3394V55.3394ZM47.4573 61.3091C46.741 60.8724 46.0098 60.3275 45.206 59.7057C44.4296 59.1052 43.5618 58.4137 42.6851 57.7953C40.9455 56.5682 38.7882 55.3394 36.228 55.3394V59.3394C37.5024 59.3394 38.8021 59.9513 40.3795 61.064C41.1613 61.6154 41.9169 62.2186 42.7586 62.8696C43.5729 63.4995 44.4545 64.1632 45.3753 64.7245L47.4573 61.3091ZM55.0324 44.2284C53.799 46.4105 53.792 48.8383 54.0005 50.9175C54.1058 51.9685 54.2799 53.0344 54.4277 53.9929C54.5801 54.9812 54.7072 55.8706 54.756 56.6993L58.7491 56.4644C58.688 55.4263 58.5328 54.368 58.381 53.3833C58.2245 52.3688 58.0725 51.4362 57.9805 50.5186C57.7943 48.6606 57.9077 47.2705 58.5147 46.1966L55.0324 44.2284ZM63.1545 38.1092C61.228 38.1092 58.2123 38.6024 56.7654 41.1623L60.2476 43.1306C60.5567 42.5838 61.5124 42.1092 63.1545 42.1092V38.1092ZM56.7655 25.0709C58.2124 27.6308 61.228 28.124 63.1545 28.124V24.124C61.5125 24.124 60.5568 23.6494 60.2478 23.1027L56.7655 25.0709ZM54.7577 9.27153C54.7131 10.1118 54.5853 11.0169 54.4294 12.0232C54.2783 12.9981 54.0975 14.0868 53.986 15.1563C53.7655 17.2725 53.7575 19.7489 55.0117 21.968L58.494 19.9998C57.8738 18.9026 57.7658 17.4778 57.9645 15.5709C58.0626 14.6288 58.2211 13.6755 58.3822 12.6357C58.5385 11.6274 58.6957 10.5452 58.752 9.48341L54.7577 9.27153ZM36.228 10.8935C38.7812 10.8935 40.9191 9.65134 42.6336 8.40245C43.5004 7.77103 44.347 7.06935 45.111 6.44919C45.8995 5.80905 46.6139 5.24385 47.3146 4.78232L45.1143 1.44187C44.2298 2.02446 43.3779 2.70399 42.5899 3.34364C41.7774 4.00327 41.0374 4.61643 40.2784 5.16933C38.7412 6.28909 37.471 6.89352 36.228 6.89352V10.8935ZM17.4891 21.8885C18.7306 19.6921 18.7245 17.2459 18.502 15.1542C18.3895 14.0962 18.2071 13.0238 18.0516 12.0591C17.8913 11.0644 17.757 10.17 17.7023 9.3372L13.7109 9.59948C13.7794 10.6419 13.943 11.7056 14.1026 12.6956C14.2669 13.7155 14.4263 14.6541 14.5245 15.5773C14.7234 17.448 14.6149 18.8445 14.0069 19.9202L17.4891 21.8885ZM25.1414 4.78232C25.8421 5.24385 26.5565 5.80905 27.345 6.44919C28.109 7.06935 28.9557 7.77103 29.8225 8.40245C31.5369 9.65134 33.6748 10.8935 36.228 10.8935V6.89352C34.985 6.89352 33.7148 6.28909 32.1776 5.16933C31.4186 4.61643 30.6786 4.00327 29.8661 3.34364C29.0781 2.70399 28.2262 2.02446 27.3417 1.44187L25.1414 4.78232ZM17.7042 56.635C17.7628 55.8136 17.8962 54.9348 18.0528 53.9578C18.2048 53.0095 18.3803 51.9591 18.4867 50.9196C18.6971 48.8642 18.6882 46.466 17.4675 44.3062L13.9852 46.2744C14.5803 47.3272 14.6941 48.6898 14.5075 50.5123C14.4155 51.4117 14.2627 52.3296 14.1032 53.3248C13.9483 54.2914 13.787 55.3316 13.7143 56.3507L17.7042 56.635ZM15.7774 41.316C14.9874 39.9184 13.7217 39.1188 12.4911 38.6779C11.2722 38.2413 9.96919 38.1092 8.84561 38.1092V42.1092C9.6943 42.1092 10.5013 42.214 11.1421 42.4436C11.7711 42.6689 12.1146 42.9648 12.2951 43.2842L15.7774 41.316ZM8.84561 28.124C9.96918 28.124 11.2722 27.9919 12.4911 27.5552C13.7216 27.1144 14.9873 26.3148 15.7772 24.9172L12.295 22.949C12.1144 23.2684 11.771 23.5643 11.142 23.7896C10.5013 24.0192 9.69426 24.124 8.84561 24.124V28.124Z"
                    fill="#CFCFCF"
                  />
                  <ellipse
                    cx="36.0702"
                    cy="33"
                    rx="13.0376"
                    ry="12.6708"
                    transform="rotate(-90 36.0702 33)"
                    stroke="#CFCFCF"
                    strokeWidth="4"
                  />
                </svg>
              </div>
            </NavLink>
          </>
        ) : (
          <>
            <div className={styles.addBtn} onClick={handleAdd}>
              <svg
                width="40"
                height="41"
                viewBox="0 0 40 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.2147 0.903809C15.8141 0.903809 15.4894 1.22854 15.4894 1.62911L15.4894 15.8242L1.29464 15.8242C0.894065 15.8242 0.569336 16.149 0.569336 16.5495V24.7862C0.569336 25.1867 0.894065 25.5115 1.29464 25.5115L15.4894 25.5115L15.4894 39.3449C15.4894 39.7455 15.8141 40.0702 16.2147 40.0702H24.4513C24.8519 40.0702 25.1766 39.7455 25.1766 39.3449V25.5115L39.0104 25.5115C39.411 25.5115 39.7357 25.1867 39.7357 24.7862V16.5495C39.7357 16.149 39.411 15.8242 39.0104 15.8242L25.1766 15.8242V1.62911C25.1766 1.22854 24.8519 0.903809 24.4513 0.903809H16.2147Z"
                  fill="rgb(240,80,80)"
                />
              </svg>
            </div>
          </>
        )}
      </div>
      <div className={styles.infoContainer}>
        <h1 className={styles.title}>{movie.title}</h1>
        <div className={styles.genresContainer}>
          <span className={styles.genre}>{genresString}</span>
        </div>
        <div className={styles.descriptionContainer}>
          <p className={styles.description}>{movie.description}</p>
        </div>
      </div>
      <div className={styles.shadow}></div>
    </div>
  )
}
