import React, { useEffect, useState } from 'react'
import { adminMovieRepository } from '../Repository/Movie/adminMovieRepository'
import { Movie } from '../Types/Movie'
import { log } from 'console'

export default function useShowMovie(id: number | null | undefined) {
  const movieService = new adminMovieRepository()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [movie, setMovie] = useState<Movie>()

  useEffect(() => {
    if (!id) {
      setError(true)
      setLoading(false)
    } else {
      try {
        setLoading(true)
        setError(false)
        movieService.show(id).then((res) => {
          setMovie(res)
          console.log(movie)

          setLoading(false)
        })
      } catch (error) {
        setLoading(false)
        setError(true)
      }
    }
  }, [])
  return { loading, movie, error }
}
