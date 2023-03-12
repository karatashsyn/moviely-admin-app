import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Genre from 'App/Models/Genre'
import StoreGenreValidator from 'App/Validators/Genre/StoreGenreValidator'
import UpdateGenreValidator from 'App/Validators/Genre/UpdateGenreValidator'

export default class GenresController {
  public async index({ response }: HttpContextContract) {
    try {
      const genres = await Genre.all()
      return genres
    } catch (error) {
      response.status(500).json({ Error: 'Ooops, something went wrong.' })
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate(StoreGenreValidator)
      const freshGenre = new Genre().fill(payload)
      await freshGenre.save()
      response.send(freshGenre)
    } catch (error) {
      return error
    }
  }

  public async update({ request, response }: HttpContextContract) {
    try {
      const genre = await Genre.find(request.param('id'))
      const payload = await request.validate(UpdateGenreValidator)
      genre?.merge(payload)
      await genre?.save()
      response.status(204).json(genre)
    } catch (error) {
      return error
    }
  }

  public async delete({ request, response }: HttpContextContract) {
    try {
      const genre = await Genre.find(request.param('id'))
      await genre?.delete()
      response.status(204).json({})
    } catch (error) {
      return error
    }
  }
}
