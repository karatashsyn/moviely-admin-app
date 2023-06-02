import axios from 'axios'
import { Movie } from '../../Types/Movie'

export class adminMovieRepository {
  async index(title: string): Promise<Array<Movie>> {
    const url = `http://127.0.0.3:3333/movies?title=${title}`
    const res = await fetch(url)
    let movies = await res.json()
    return movies
  }

  async show(id: number): Promise<Movie> {
    const url = `http://127.0.0.3:3333/movies/${id}`
    const res = await fetch(url)
    console.log(url)
    console.log(url)
    console.log(url)

    let movie = await res.json()
    return movie
  }

  async store(movie: Movie) {
    const url = 'http://127.0.0.3:3333/movies'
    const req = await axios.post(url, { ...movie, genres: movie.genres.map((g: any) => g.id) })
    const result = req
    return result
  }

  async delete(movie: Movie) {
    const url = 'http://127.0.0.3:3333/movies/'
    const req = await axios.delete(url + movie.id)
    const result = req
    return result
  }

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
