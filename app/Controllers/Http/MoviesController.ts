import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Movie from 'App/Models/Movie'
import StoreMovieValidator from 'App/Validators/Movie/StoreMovieValidator'
import UpdateMovieValidator from 'App/Validators/Movie/UpdateMovieValidator'
import { TmdbMovieService } from 'App/TmdbServices/MovieService'
import Genre from 'App/Models/Genre'

export default class MoviesController {
  public movieService = new TmdbMovieService()

  public async fetchPopulars({ response }: HttpContextContract) {
    try {
      const movies = await this.movieService.getPopularMovies()
      const moviesWithGenres = await Promise.all(
        movies.map(async (m) => {
          const genresWithNames = await Genre.findMany(m.genres)
          return { ...m, genres: genresWithNames }
        })
      )
      return moviesWithGenres
    } catch (error) {
      response.json({ error })
    }
  }

  public async index({ request, response }: HttpContextContract) {
    try {
      const title = request.input('title')
      const limit = request.input('limit', 36)
      const genres = request.input('genres')

      const dbMovies = await Movie.query()
        .if(title, (q) => {
          q.whereLike('title', `%${title}%`)
        })
        .if(genres, (q) => {
          q.whereIn('id', Database.from('movie_genre'))
            .select('movie_id')
            .whereIn('genre_id', genres)
        })
        .orderBy('id', 'desc')
        .limit(limit)
        .preload('genres')

      const ownedMovies = dbMovies.map((m) => {
        return { ...m.$attributes, ...m.$preloaded, owned: true }
      })

      const nonOwnedMovies = await this.movieService.searchMovies(title)
      const nonOwnedWithGenres = await Promise.all(
        nonOwnedMovies.map(async (m) => {
          const genresWithNames = await Genre.findMany(m.genres)
          return { ...m, genres: genresWithNames }
        })
      )
      return [...ownedMovies, ...nonOwnedWithGenres]
    } catch (error) {
      response.status(500).json({ Error: 'Ooops, something went wrong.' })
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate(StoreMovieValidator)
      const movie = new Movie()
      await movie.fill(payload).save()
      if (payload.genres) movie?.related('genres').sync(payload.genres)
      if (payload.artists) movie?.related('artists').sync(payload.artists)
      response.status(200).send({
        status: 'success',
        message: 'Movie has been created successfully',
        movie: movie,
      })
    } catch (error) {
      console.log(error.messages.errors[0])
      response
        .status(500)
        .json({ error: error.messages[Object.keys(error.messages)[0]][0].message ?? error })
    }
  }

  public async update({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate(UpdateMovieValidator)
      const movie = await Movie.findOrFail(request.param('id'))
      await movie?.merge(payload).save()
      if (payload.genres) movie?.related('genres').sync(payload.genres)
      if (payload.artists) movie?.related('artists').sync(payload.artists)
      response.status(200).json(movie)
    } catch (error) {
      console.log(error)
      console.log(error)
      console.log(error)

      return error
    }
  }

  public async destroy({ request, response }: HttpContextContract) {
    try {
      const movie = await Movie.findOrFail(request.param('id'))
      await movie?.delete()
      response.status(204).json({})
    } catch (error) {
      return error
    }
  }

  public async show({ request, response, view }: HttpContextContract) {
    try {
      const movieResult = await Movie.query().where('id', request.param('id')).preload('genres')
      if (movieResult) response.status(200).json(movieResult[0])
      else return view.render('404')
    } catch (error) {
      return error
    }
  }
}
