export type Movie = {
  id: number | null
  apiId: number | null
  title: string
  poster: string | undefined
  genres: string[]
  rating: number | null
  description: string
  owned: boolean
}
