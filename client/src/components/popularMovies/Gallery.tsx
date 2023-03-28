import React, { useMemo } from 'react'
import styles from './style.module.css'
import { Movie } from '../../Types/Movie'

type Props = { popularMovies: Array<Movie> }

//12 Popular Movie

export default function Gallery({ popularMovies }: Props) {
  return (
    <div className={styles.gallery}>
      {popularMovies.map((m: any, index) => {
        return (
          <div className={styles.galleryMember}>
            {/* <img src={m.poster} className={styles.memberPster} alt="Movie Poster" /> */}
            <span className={styles.memberTitle}>{m.title}</span>
          </div>
        )
      })}
    </div>
  )
}
