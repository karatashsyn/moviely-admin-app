/* eslint-disable prettier/prettier */
//Example Search
//api.themoviedb.org/3/search/movie?api_key=<<API_KEY>>&query=hush
import { AppMovie } from 'App/Types/app/Movie'
import { MovieService } from '../MovieService'
import axios from 'axios'
import Env from '@ioc:Adonis/Core/Env'
import { TmdbMovie } from 'App/Types/tmdb/Movie'
import Movie from 'App/Models/Movie'

export class TmdbMovieService implements MovieService {
  public async getMovies(query: string): Promise<Array<AppMovie>> {
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=${Env.get(
      'TMDB_API_KEY'
    )}&query=${query}`

    if (!query || query.length === 0) return []

    const res = await axios.get(URL)
    const movies: Array<TmdbMovie> = await res.data.results
    const result: Array<AppMovie> = []
    await Promise.all(
      movies.map(async (m) => {
        const movie = await Movie.findBy('api_id', m.id)
        if (!movie) {
          result.push({
            id: null,
            apiId: m.id,
            title: m.title,
            poster: m.poster_path,
            rating: m.vote_average,
            description: m.overview,
            owned: false,
          })
        }
      })
    )

    return result
  }
}
