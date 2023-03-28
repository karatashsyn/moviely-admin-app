import React from 'react'
import { Movie } from '../Types/Movie'

type Props = {
  popularMovies: Array<Movie>
}

export default function PopularMovies({ popularMovies }: Props) {
  return <div>PopularMovies</div>
}
