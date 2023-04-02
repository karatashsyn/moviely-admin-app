import axios from 'axios'
import { Movie } from '../../Types/Movie'

export class adminMovieRepository {
  async index(title: string): Promise<Array<Movie>> {
    const url = `http://127.0.0.3:3333/movies?title=${title}`
    const res = await fetch(url)
    const movies = await res.json()
    return movies
  }

  async store(movie: Movie) {
    const url = 'http://127.0.0.3:3333/movies'
    const req = await axios.post(url, movie)
    const result = await req.data
    return result
  }
}
