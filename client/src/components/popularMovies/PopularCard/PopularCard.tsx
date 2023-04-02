import React, { useState } from 'react'
import { Movie } from '../../../Types/Movie'
import styles from './popularcard.module.css'
import { adminMovieRepository } from '../../../Repository/Movie/adminMovieRepository'
type Props = { movie: Movie; movieHovered: Function; movieLeaved: Function }

export default function PopularCard({ movie, movieHovered, movieLeaved }: Props) {
  const [attention, setAttention] = useState(false)
  const movieService = new adminMovieRepository()
  const [error, setError] = useState({ error: false, message: '' })
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

  return (
    <>
      <div
        onClick={() => {
          movieService.store({ ...movie, genres: [] }).then((res) => {
            console.log(res)
          })
        }}
        className={
          attention ? `${styles.galleryMember} ${styles.attention}` : `${styles.galleryMember}`
        }
        onMouseOver={() => {
          openAttention()
        }}
        onMouseLeave={() => {
          closeAttention()
        }}
      >
        <span className={styles.addMovieSpan}>Click To Add</span>
        <img src={movie.poster} className={styles.moviePoster} alt="Movie Poster" />
      </div>
    </>
  )
}
