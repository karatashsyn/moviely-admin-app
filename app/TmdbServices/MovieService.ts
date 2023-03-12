/* eslint-disable prettier/prettier */
//Example Search
//api.themoviedb.org/3/search/movie?api_key=<<API_KEY>>&query=hush
import { AppMovie } from 'App/Types/app/Movie'
import axios from 'axios'
import Env from '@ioc:Adonis/Core/Env'
import { TmdbMovie } from 'App/Types/tmdb/Movie'
import Movie from 'App/Models/Movie'

export class TmdbMovieService {
  private searchMovieUrl(title: string) {
    return `https://api.themoviedb.org/3/search/movie?api_key=${Env.get(
      'TMDB_API_KEY'
    )}&query=${title}`
  }

  private popularMoviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${Env.get(
    'TMDB_API_KEY'
  )}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`

  private async fetchMovies(URL) {
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

  public async searchMovies(query: string): Promise<Array<AppMovie>> {
    if (!query || query.length === 0) {
      return []
    }
    const movies = await this.fetchMovies(this.searchMovieUrl(query))
    return movies
  }

  public async getPopularMovies(): Promise<Array<AppMovie>> {
    const popularMovies = await this.fetchMovies(this.popularMoviesUrl)
    return popularMovies
  }
}
