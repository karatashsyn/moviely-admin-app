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

  private popularMoviesUrl(page: number) {
    return `https://api.themoviedb.org/3/discover/movie?api_key=${Env.get(
      'TMDB_API_KEY'
    )}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
  }
  private async fetchMovies(URL: string) {
    const res = await axios.get(URL)
    const tmdbMovies: Array<TmdbMovie> = await res.data.results
    const result: Array<AppMovie> = []
    await Promise.all(
      tmdbMovies.map(async (m) => {
        //We want the movies that we don't have in our db
        const movie = await Movie.findBy('api_id', m.id)

        if (!movie) {
          result.push({
            id: null,
            apiId: m.id,
            title: m.title,
            poster: m.poster_path ? `https://image.tmdb.org/t/p/original/${m.poster_path}` : null,
            rating: m.vote_average ? +m.vote_average.toFixed(1) : null,
            description: m.overview,
            owned: false,
            genres: m.genre_ids,
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
    movies.sort((a, b) => {
      const rateA = a.rating ?? 0
      const rateB = b.rating ?? 0
      return rateB - rateA
    })
    return movies
  }

  public async getPopularMovies(): Promise<Array<AppMovie>> {
    let popularMovies: Array<AppMovie> = []
    let page = 1
    while (popularMovies.length < 12) {
      let freshMovies: Array<AppMovie> = await this.fetchMovies(this.popularMoviesUrl(page))
      popularMovies = popularMovies.concat(freshMovies)
      page++
    }
    return popularMovies
  }
}
