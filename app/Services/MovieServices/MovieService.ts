/* eslint-disable prettier/prettier */
import { AppMovie } from 'App/Types/app/Movie'
export interface MovieService {
  getMovies: (query: string) => Promise<Array<AppMovie>>
}
