import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Movie from 'App/Models/Movie'
import StoreMovieValidator from 'App/Validators/Movie/StoreMovieValidator'
import UpdateMovieValidator from 'App/Validators/Movie/UpdateMovieValidator'
import { TmdbMovieService } from 'App/Services/MovieServices/TMDB/TmdbMovieService'
export default class MoviesController {
  public movieService = new TmdbMovieService()

  public async index({ request }: HttpContextContract) {
    try {
      const title = request.input('title')
      const limit = request.input('limit', 20)
      const genres = request.input('genres')
      const movies = await Movie.query()
        .if(title, (q) => {
          q.where('title', 'like', `%${title}%`)
        })
        .if(genres, (q) => {
          q.whereIn('id', Database.from('movie_genre'))
            .select('movie_id')
            .whereIn('genre_id', genres)
        })
        .limit(limit)
      const ownedMovies = movies.map((m) => {
        return { ...m.$attributes, owned: true }
      })
      console.log(ownedMovies)

      const nonOwnedMovies = await this.movieService.getMovies(title)
      return [...ownedMovies, ...nonOwnedMovies]
    } catch (error) {
      console.log(error)
      return error
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate(StoreMovieValidator)
      const movie = new Movie()
      await movie.fill(payload).save()
      response.send({
        status: 'Success',
        message: 'Movie has been created successfully',
        movie: movie,
      })
    } catch (error) {
      console.log(error)
      return error
    }
  }

  public async update({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate(UpdateMovieValidator)
      const movie = await Movie.find(request.param('id'))
      await movie?.merge(payload).save()
      response
        .status(200)
        .json({ status: 'Success', message: 'Movie has been updated Successfully.', movie })
    } catch (error) {
      return error
    }
  }

  public async destroy({ request, response }: HttpContextContract) {
    try {
      const movie = await Movie.find(request.param('id'))
      await movie?.delete()
      response.status(204).json({
        status: 'Success',
        message: 'Movie has been deleted Successfully.',
        movie: {},
      })
    } catch (error) {
      return error
    }
  }
}
