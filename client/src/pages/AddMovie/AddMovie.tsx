import React, { useEffect, useState } from 'react'
import styles from './addMovie.module.css'
import Input from './input/Input'
import useGetGenres from '../../Hooks/useGetGenres'
export default function AddMovie() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [poster, setPoster] = useState('')
  const [rating, setRating] = useState(null)
  const { genres } = useGetGenres()
  const [selectedGenres, setSelectedGenres] = useState([])

  return (
    <div>
      <h1>Add Movie</h1>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <Input
            inputType="multiSelection"
            info="Must enter at least 1 character"
            placeHolder="Title"
            inputFunction={setTitle}
            genres={genres}
          />
        </div>
        <div className={styles.descriptionContainer}></div>
        <div className={styles.posterContainer}></div>
        <div className={styles.genresContainer}></div>
      </div>
    </div>
  )
}
