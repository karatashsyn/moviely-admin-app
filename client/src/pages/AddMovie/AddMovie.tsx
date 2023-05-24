import React, { useEffect, useState } from 'react'
import styles from './addMovie.module.css'
import Input from '../../components/Input/Input'
import useGetGenres from '../../Hooks/useGetGenres'
export default function AddMovie() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [poster, setPoster] = useState('')
  const [rating, setRating] = useState(null)
  const { genres } = useGetGenres()
  const [selectedGenres, setSelectedGenres] = useState([])

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Add Movie</h1>
      <div className={styles.titleContainer}>
        <Input
          inputType="text"
          info="Title must include at least 1 character."
          placeHolder="Title"
          inputFunction={setTitle}
          genres={genres}
        />
        <Input
          inputType="text"
          info="Write a nice description at least 24 characters."
          placeHolder="Description"
          inputFunction={setTitle}
          genres={genres}
        />
        <Input
          inputType="multiSelection"
          info="Must enter at least 1 character."
          placeHolder="Title"
          inputFunction={setTitle}
          genres={genres}
        />
      </div>
      <div className={styles.descriptionContainer}></div>
      <div className={styles.posterContainer}></div>
      <div className={styles.genresContainer}></div>
    </div>
  )
}
