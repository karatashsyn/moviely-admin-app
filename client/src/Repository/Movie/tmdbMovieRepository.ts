import { Movie } from '../../Types/Movie'

export class TMDBMovieRepository {
  async getPopulars(): Promise<Array<Movie>> {
    const url = 'http://127.0.0.3:3333/movies/service/populars'
    const res = await fetch(url)
    const data: Array<Movie> = await res.json()
    const popularMovies = data.map((m) => {
      return { ...m, poster: `https://image.tmdb.org/t/p/original/${m.poster}` }
    })

    return popularMovies.slice(0, 12)
  }
}
