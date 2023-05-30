import { Genre } from '../../Types/Genre'

export class adminGenreRepository {
  async index(): Promise<Array<Genre>> {
    const url = `http://127.0.0.3:3333/genres`
    const res = await fetch(url)
    let genres = await res.json()
    return genres
  }
}
