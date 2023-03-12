import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Artist from 'App/Models/Artist'
import { TmdbArtistService } from 'App/TmdbServices/ArtistService'
import StoreArtistValidator from 'App/Validators/Artist/StoreArtistValidator'

export default class ArtistsController {
  public artistService = new TmdbArtistService()

  public async index({ request, response }: HttpContextContract) {
    try {
      const query = request.input('fullname')
      const dbArtists = await Artist.query().if(query, (q) => {
        q.whereLike('full_name', `%${query}%`)
      })

      const ownedArtists = dbArtists.map((a) => {
        return { ...a.$attributes, owned: true }
      })

      const nonOwnedArtists = await this.artistService.getArtists(query)
      return [...ownedArtists, ...nonOwnedArtists]
    } catch (error) {
      response.status(500).json({ Error: 'Ooops, something went wrong.' })
    }
  }

  public async store({ request, response }: HttpContextContract) {
    const payload = await request.validate(StoreArtistValidator)
    const freshArtist = new Artist().fill(payload)
    await freshArtist.save()
    response.status(200).json({ freshArtist })
  }

  public async update({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate(StoreArtistValidator)
      const artist = await Artist.find(request.param('id'))
      artist?.merge(payload)
      response.status(200).json(artist)
    } catch (error) {
      return error
    }
  }

  public async delete({ request, response }: HttpContextContract) {
    try {
      const artist = await Artist.find(request.param('id'))
      await artist?.delete()
      response.status(204).json({})
    } catch (error) {
      return error
    }
  }
  public async show({ request, response }: HttpContextContract) {
    try {
      const artist = await Artist.find(request.param('id'))
      response.json(artist)
    } catch (error) {
      return error
    }
  }
}
