import React from 'react'
import Navbar from '../../components/navBar/Navbar'
import SearchBar from '../../components/searchBar/SearchBar'
import { Movie } from '../../Types/Movie'
import styles from './home.module.css'
type Props = {
  popularMovies: Array<Movie>
  ownedMovies: Array<Movie>
}
const admin = { name: 'Mehmet', surname: 'Karsu', email: 'mehmetkarsu@gmail.com' }
export default function Home({}: Props) {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.navSection}>
        <Navbar admin={admin} />
      </div>
      <div className={styles.moviesSection}>
        <div className={styles.searchbarContainer}>
          <SearchBar />
        </div>
        <div className={styles.popularsContainer}></div>
        <div className={styles.myMoviesContainer}></div>
      </div>
    </div>
  )
}
