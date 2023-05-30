import React, { useState } from 'react'
import MovieCard from '../../Components/MovieCard/MovieCard'
import Gallery from '../../Components/PopularMovies/Gallery'
import SearchBar from '../../Components/SearchBar/SearchBar'
import useGetMovies from '../../Hooks/useGetMovies'
import styles from './home.module.css'
import LoadingDots from '../../Components/UI/LoadingDots'

export default function Home({ addMovie, deleteMovie }: any) {
  const [searchKey, setSearchKey] = useState('')
  const { movies, loading } = useGetMovies(searchKey)

  return (
    <div className={styles.moviesSection}>
      <div className={styles.searchbarContainer}>
        <SearchBar setSearchKey={setSearchKey} />
      </div>
      {loading ? (
        <LoadingDots />
      ) : (
        <>
          {' '}
          {!searchKey && <h1 className={styles.popularHeading}>Recently Popular</h1>}
          {!searchKey && (
            <div className={styles.popularsContainer}>
              <Gallery addMovie={addMovie} />
            </div>
          )}
          {!searchKey && <h1 className={styles.myMoviesHeading}>My Movies</h1>}
          <div className={styles.myMoviesContainer}>
            {movies.map((m) => {
              return (
                <MovieCard key={m.id} movie={m} deleteMovie={deleteMovie} addMovie={addMovie} />
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}
