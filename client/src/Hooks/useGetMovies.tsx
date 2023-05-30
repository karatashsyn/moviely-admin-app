import { useEffect, useState } from 'react'
import { adminMovieRepository } from '../Repository/Movie/adminMovieRepository'
import { Movie } from '../Types/Movie'

export default function useGetMovies(title: string) {
  const movieService = new adminMovieRepository()
  const emptyMovieArray: Array<Movie> = []
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [movies, setMovies] = useState(emptyMovieArray)

  useEffect(() => {
    try {
      setLoading(true)
      setError(false)
      movieService.index(title).then((res: any) => {
        setMovies(res)
        setLoading(false)
      })
    } catch (error) {
      setLoading(false)
      setError(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title])

  return { movies, loading, error }
}
