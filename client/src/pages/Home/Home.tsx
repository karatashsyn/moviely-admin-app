import React from 'react'
import Navbar from '../../components/NavBar/Navbar'
import Gallery from '../../components/PopularMovies/Gallery'
import SearchBar from '../../components/SearchBar/SearchBar'
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
                  'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1636999411',
                rating: 2,
                title: 'Moonlight',
              },
              {
                id: 2,
                apiId: null,
                description: 'Good Movie',
                genres: [''],
                owned: false,
                poster: 'https://i.ebayimg.com/images/g/M2EAAOSwdYxiJ8GY/s-l500.jpg',
                rating: 2,
                title: 'Moonlight',
              },
              {
                id: 3,
                apiId: null,
                description: 'Good Movie',
                genres: [''],
                owned: false,
                poster:
                  'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0928ae99322159.5ef08afdce15e.jpg',
                rating: 2,
                title: 'Moonlight',
              },
              {
                id: 4,
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
                id: 5,
                apiId: null,
                description: 'Good Movie',
                genres: [''],
                owned: false,
                poster:
                  'https://i.pinimg.com/originals/04/f2/9b/04f29b61e4295fc9a285620df36e9626.jpg',
                rating: 2,
                title: 'Moonlight',
              },
              {
                id: 6,
                apiId: null,
                description: 'Good Movie',
                genres: [''],
                owned: false,
                poster:
                  'http://cdn.shopify.com/s/files/1/0037/8008/3782/products/AvatarSpecialEdition-OriginalMoviePoster-03-662902.jpg?v=1639075672',
                rating: 2,
                title: 'Moonlight',
              },
              {
                id: 7,
                apiId: null,
                description: 'Good Movie',
                genres: [''],
                owned: false,
                poster:
                  'http://cdn.shopify.com/s/files/1/0037/8008/3782/products/AvatarSpecialEdition-OriginalMoviePoster-03-662902.jpg?v=1639075672',
                rating: 2,
                title: 'Moonlight',
              },
              {
                id: 8,
                apiId: null,
                description: 'Good Movie',
                genres: [''],
                owned: false,
                poster:
                  'https://mymodernmet.com/wp/wp-content/uploads/2018/01/honest-movie-posters-7.jpg',
                rating: 2,
                title: 'Moonlight',
              },
              {
                id: 9,
                apiId: null,
                description: 'Good Movie',
                genres: [''],
                owned: false,
                poster:
                  'https://imageio.forbes.com/specials-images/imageserve/61116cea2313e8bae55a536a/-Dune-/0x0.jpg?format=jpg&width=960',
                rating: 2,
                title: 'Moonlight',
              },
              {
                id: 10,
                apiId: null,
                description: 'Good Movie',
                genres: [''],
                owned: false,
                poster:
                  'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61ln-mCICPL._AC_UF894,1000_QL80_.jpg',
                rating: 2,
                title: 'Moonlight',
              },
              {
                id: 11,
                apiId: null,
                description: 'Good Movie',
                genres: [''],
                owned: false,
                poster:
                  'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/bohemian-rhapsody-web.jpg',
                rating: 2,
                title: 'Moonlight',
              },
              {
                id: 12,
                apiId: null,
                description: 'Good Movie',
                genres: [''],
                owned: false,
                poster:
                  'https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500',
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
