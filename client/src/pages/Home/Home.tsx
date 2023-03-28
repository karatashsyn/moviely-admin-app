import React from 'react'
import Navbar from '../../components/navBar/Navbar'
import Gallery from '../../components/popularMovies/Gallery'
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
        <h1 className={styles.popularHeading}>Recently Popular</h1>
        <div className={styles.popularsContainer}>
          <Gallery
            popularMovies={[
              {
                id: 1,
                apiId: null,
                description: 'Good Movie',
                genres: [''],
                owned: false,
                poster:
                  'https://s.yimg.com/ny/api/res/1.2/0ZXuB.N3qPpSGyFcuEXdcA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEwMzU7aD0xNTAw/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5',
                rating: 2,
                title: 'Moonlight',
              },
              {
                id: 1,
                apiId: null,
                description: 'Good Movie',
                genres: [''],
                owned: false,
                poster:
                  'https://s.yimg.com/ny/api/res/1.2/0ZXuB.N3qPpSGyFcuEXdcA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEwMzU7aD0xNTAw/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5',
                rating: 2,
                title: 'Moonlight',
              },
              {
                id: 1,
                apiId: null,
                description: 'Good Movie',
                genres: [''],
                owned: false,
                poster:
                  'https://s.yimg.com/ny/api/res/1.2/0ZXuB.N3qPpSGyFcuEXdcA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEwMzU7aD0xNTAw/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5',
                rating: 2,
                title: 'Moonlight',
              },
              {
                id: 1,
                apiId: null,
                description: 'Good Movie',
                genres: [''],
                owned: false,
                poster:
                  'https://s.yimg.com/ny/api/res/1.2/0ZXuB.N3qPpSGyFcuEXdcA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEwMzU7aD0xNTAw/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5',
                rating: 2,
                title: 'Moonlight',
              },
              {
                id: 1,
                apiId: null,
                description: 'Good Movie',
                genres: [''],
                owned: false,
                poster:
                  'https://s.yimg.com/ny/api/res/1.2/0ZXuB.N3qPpSGyFcuEXdcA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEwMzU7aD0xNTAw/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5',
                rating: 2,
                title: 'Moonlight',
              },
              {
                id: 1,
                apiId: null,
                description: 'Good Movie',
                genres: [''],
                owned: false,
                poster:
                  'https://s.yimg.com/ny/api/res/1.2/0ZXuB.N3qPpSGyFcuEXdcA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEwMzU7aD0xNTAw/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5',
                rating: 2,
                title: 'Moonlight',
              },
              {
                id: 1,
                apiId: null,
                description: 'Good Movie',
                genres: [''],
                owned: false,
                poster:
                  'https://s.yimg.com/ny/api/res/1.2/0ZXuB.N3qPpSGyFcuEXdcA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEwMzU7aD0xNTAw/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5',
                rating: 2,
                title: 'Moonlight',
              },
              {
                id: 1,
                apiId: null,
                description: 'Good Movie',
                genres: [''],
                owned: false,
                poster:
                  'https://s.yimg.com/ny/api/res/1.2/0ZXuB.N3qPpSGyFcuEXdcA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEwMzU7aD0xNTAw/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5',
                rating: 2,
                title: 'Moonlight',
              },
              {
                id: 1,
                apiId: null,
                description: 'Good Movie',
                genres: [''],
                owned: false,
                poster:
                  'https://s.yimg.com/ny/api/res/1.2/0ZXuB.N3qPpSGyFcuEXdcA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEwMzU7aD0xNTAw/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5',
                rating: 2,
                title: 'Moonlight',
              },
              {
                id: 1,
                apiId: null,
                description: 'Good Movie',
                genres: [''],
                owned: false,
                poster:
                  'https://s.yimg.com/ny/api/res/1.2/0ZXuB.N3qPpSGyFcuEXdcA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEwMzU7aD0xNTAw/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5',
                rating: 2,
                title: 'Moonlight',
              },
              {
                id: 1,
                apiId: null,
                description: 'Good Movie',
                genres: [''],
                owned: false,
                poster:
                  'https://s.yimg.com/ny/api/res/1.2/0ZXuB.N3qPpSGyFcuEXdcA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEwMzU7aD0xNTAw/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5',
                rating: 2,
                title: 'Moonlight',
              },
              {
                id: 1,
                apiId: null,
                description: 'Good Movie',
                genres: [''],
                owned: false,
                poster:
                  'https://s.yimg.com/ny/api/res/1.2/0ZXuB.N3qPpSGyFcuEXdcA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEwMzU7aD0xNTAw/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5',
                rating: 2,
                title: 'Moonlight',
              },
            ]}
          />
        </div>
        <div className={styles.myMoviesContainer}>
          <h1 className={styles.myMoviesHeading}>My Movies</h1>
        </div>
      </div>
    </div>
  )
}
