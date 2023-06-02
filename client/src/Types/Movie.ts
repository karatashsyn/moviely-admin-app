import { Genre } from './Genre'

export type Movie = {
  id: number | null
  apiId: number | null
  title: string
  poster: string | undefined
  genres: Array<Genre>
  rating: number | null
  description: string
  owned: boolean
}
