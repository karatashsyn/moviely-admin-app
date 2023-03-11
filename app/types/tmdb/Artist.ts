/* eslint-disable prettier/prettier */
import { TmdbMovie } from './Movie'

export type TmdbArtist = {
  id: number
  name: string
  original_name: string
  popularity: number
  overview: string
  gender: 0 | 1
  profile_path: string | null
  adult: boolean
  known_for_department: string
  known_for: Array<TmdbMovie>
}
