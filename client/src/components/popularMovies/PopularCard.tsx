import React, { useState, useMemo } from 'react'
import { Movie } from '../../Types/Movie'
import styles from './popularcard.module.css'
import { adminMovieRepository } from '../../Repository/Movie/adminMovieRepository'
import { log } from 'console'
type Props = { movie: Movie; movieHovered: Function; movieLeaved: Function; addMovie: Function }

export default function PopularCard({ movie, movieHovered, movieLeaved, addMovie }: Props) {
  const [attention, setAttention] = useState(false)
  const [error, setError] = useState({ error: false, message: '' })
  const [loading, setLoading] = useState(false)
  const [stored, setStored] = useState(false)
  const openAttention = () => {
    setAttention(true)
    movieHovered()
    console.log('we mouse overed')
  }
  const closeAttention = () => {
    setAttention(false)
    movieLeaved()
    console.log('we mouse overed')
  }

  const handleStore = async () => {
    setLoading(true)
    setError({ error: false, message: '' })
    const res = await addMovie(movie)
    setLoading(false)
    if (res.status === 200) {
      setStored(true)
    } else {
      setError({ error: true, message: 'Error Occured' })
    }
  }

  const memberClass = useMemo(() => {
    let classList = `${styles.galleryMember}`
    if (loading) classList += ` ${styles.loading}`
    if (stored) classList += ` ${styles.stored}`
    if (!stored && attention) classList += ` ${styles.attention}`

    return classList
  }, [attention, loading, stored])

  return (
    <>
      <div
        onClick={handleStore}
        className={memberClass}
        onMouseOver={() => {
          openAttention()
        }}
        onMouseLeave={() => {
          closeAttention()
        }}
      >
        <div className={styles.storedMarkContainer}>
          <svg
            className={styles.storedMark}
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
        </div>
        <span className={styles.addMovieSpan}>Click To Add</span>
        <img src={movie.poster} className={styles.moviePoster} alt="Movie Poster" />
      </div>
    </>
  )
}
