import { useEffect, useState } from 'react'
import { adminGenreRepository } from '../Repository/Genre/adminGenreRepository'

export default function useGetGenres() {
  const [genres, setGenres] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const genreService = new adminGenreRepository()
    try {
      setLoading(true)
      genreService.index().then((res: any) => {
        setGenres(res)
        console.log(res)
        setLoading(false)
      })
    } catch (error) {
      setLoading(false)
      setError(true)
    }
  }, [])

  return { genres, loading, error }
}
