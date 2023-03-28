import React from 'react'
import { Movie } from '../../Types/Movie'

type props = { movie: Movie }

export default function MovieCard({ movie }: props) {
  return (
    <div className="card">
      <div className="rating-box">
        <div className="icon-container"></div>
        <div className="rate">7.2</div>
      </div>
      <div className="buttons-container">
        <div className="add-remove-btn"></div>
        <div className="edit-btn"></div>
      </div>
      <div className="info-container">
        <h1 className="title">Joker</h1>
        <div className="genres-container">
          {movie.genres.map((g, i) => {
            return <span className="genre" key={i}></span>
          })}
        </div>
      </div>
    </div>
  )
}
