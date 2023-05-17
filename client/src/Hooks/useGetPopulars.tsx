import { useEffect, useState } from 'react'
import { Movie } from '../Types/Movie'
import { adminMovieRepository } from '../Repository/Movie/adminMovieRepository'
import { log } from 'console'

export default function useSearchProducts() {
  const movieService = new adminMovieRepository()
  const emptyProductArray: Array<Movie> = []
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [movies, setMovies] = useState(emptyProductArray)

  useEffect(() => {
    try {
      setLoading(true)
      setError(false)
      movieService.getPopulars().then((res: any) => {
        setMovies(res)
        console.log(res)

        setLoading(false)
      })
    } catch (error) {
      setError(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { movies, loading, error }
}
