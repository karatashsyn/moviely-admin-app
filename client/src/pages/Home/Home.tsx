import React from 'react'
import MovieCard from '../../components/MovieCard/MovieCard'
import Navbar from '../../components/NavBar/Navbar'
import Gallery from '../../components/PopularMovies/Gallery'
import SearchBar from '../../components/SearchBar/SearchBar'
import useGetOwnedMovies from '../../Hooks/useGetOwnedMovies'
import styles from './home.module.css'

const admin = { name: 'Mehmet', surname: 'Karsu', email: 'mehmetkarsu@gmail.com' }
export default function Home() {
  const { movies } = useGetOwnedMovies('')
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.navSection}>
        <Navbar admin={admin} />
      </div>
      <div className={styles.moviesSection}>
        <div className={styles.searchbarContainer}>
          <SearchBar />
        </div>
        <h1 className={styles.popularHeading}>Recently Popular</h1>
        <div className={styles.popularsContainer}>
          <Gallery />
        </div>
        <h1 className={styles.myMoviesHeading}>My Movies</h1>
        <div className={styles.myMoviesContainer}>
          {movies.map((m) => {
            return <MovieCard movie={m} />
          })}
        </div>
      </div>
    </div>
  )
}
