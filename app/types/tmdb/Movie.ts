/* eslint-disable prettier/prettier */
export type TmdbMovie = {
  id: number
  original_title: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
  overview: string
  poster_path: string
  release_date: string
  popularity: number
  adult: boolean
  backdrop_path: string
  genre_ids: Array<number>
  original_language: string
}
