import React, { useMemo, useState } from 'react'
import styles from './style.module.css'
import { Movie } from '../../Types/Movie'
import PopularCard from './PopularCard/PopularCard'

type Props = { popularMovies: Array<Movie> }

//12 Popular Movie

export default function Gallery({ popularMovies }: Props) {
  const [galleryFade, setGalleryFade] = useState(false)
  const openFade = () => {
    setGalleryFade(true)
  }
  const closeFade = () => {
    setGalleryFade(false)
  }
  return (
    <div className={galleryFade ? `${styles.gallery} ${styles.faded}` : `${styles.gallery} `}>
      {popularMovies.map((m: Movie) => {
        return <PopularCard movie={m} movieHovered={openFade} movieLeaved={closeFade} />
      })}
    </div>
  )
}
