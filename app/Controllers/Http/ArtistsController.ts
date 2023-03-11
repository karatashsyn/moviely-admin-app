import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Artist from 'App/Models/Artist'
import { TmdbArtistService } from 'App/TmdbServices/ArtistService'

export default class ArtistsController {
  public artistService = new TmdbArtistService()

  public async index({ request, response }: HttpContextContract) {
    const query = request.input('fullname')
    console.log(query)
    console.log('hey')

    const dbArtists = await Artist.query().if(query, (q) => {
      q.whereLike('full_name', `%${query}%`)
    })

    const ownedArtists = dbArtists.map((a) => {
      return { ...a.$attributes, owned: true }
    })

    const nonOwnedArtists = await this.artistService.getArtists(query)
    return [...ownedArtists, ...nonOwnedArtists]
  }
  public async store() {}
  public async update() {}
  public async delete() {}
  public async show() {}
}
