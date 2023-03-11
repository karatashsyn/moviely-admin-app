/* eslint-disable prettier/prettier */
//Example Search
//https://api.themoviedb.org/3/search/person?api_key=<<API_KEY>>&query=jack

import { AppArtist } from 'App/Types/app/Artist'
import axios from 'axios'
import Env from '@ioc:Adonis/Core/Env'
import { TmdbArtist } from 'App/Types/tmdb/Artist'
import Artist from 'App/Models/Artist'

export class TmdbArtistService {
  public async getArtists(query: string | null | undefined): Promise<Array<AppArtist>> {
    const URL = `https://api.themoviedb.org/3/search/person?api_key=${Env.get(
      'TMDB_API_KEY'
    )}&query=${query}`

    if (!query || query.length === 0) return []

    const res = await axios.get(URL)
    const artists: Array<TmdbArtist> = await res.data.results
    console.log(artists)

    const result: Array<AppArtist> = []
    await Promise.all(
      artists.map(async (a) => {
        const artist = await Artist.findBy('api_id', a.id)
        if (!artist) {
          result.push({
            id: null,
            apiId: a.id,
            fullName: a.original_name,
            biography: a.overview,
            picture: a.profile_path,
            country: null,
            owned: false,
          })
        }
      })
    )

    return result
  }
}
