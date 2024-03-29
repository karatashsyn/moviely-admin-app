/* eslint-disable prettier/prettier */
export type AppMovie = {
  id: number | null
  apiId: number | null
  title: string
  poster: string | null
  genres: number[]
  rating: number | null
  description: string
  owned: boolean
}
