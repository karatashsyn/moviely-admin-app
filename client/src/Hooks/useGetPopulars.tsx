import { useEffect, useState } from 'react'
import { TMDBMovieRepository } from '../Repository/Movie/tmdbMovieRepository'
import { Movie } from '../Types/Movie'
// import { JsonProductRepository } from "../Repository/Concrete/Local/JsonProductRepository"

export default function useSearchProducts() {
  const movieService = new TMDBMovieRepository()
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
      })
    } catch (error) {
      setError(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { movies, loading, error }
}
