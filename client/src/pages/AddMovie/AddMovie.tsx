import React, { useEffect, useState } from 'react'
import styles from './addMovie.module.css'
import Input from '../../Components/Input/Input'
import useGetGenres from '../../Hooks/useGetGenres'
import { Genre } from '../../Types/Genre'
import Info from '../../Components/Info/Info'
type Props = {
  addMovie: Function
}
export default function AddMovie({ addMovie }: Props) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [poster, setPoster] = useState('')
  const { genres } = useGetGenres()
  const [selectedGenres, setSelectedGenres] = useState<Array<Genre>>([])

  const handleSelect = (clickedGenre: Genre) => {
    if (selectedGenres.map((g: Genre) => g.id).includes(clickedGenre.id)) {
      setSelectedGenres(selectedGenres.filter((g: Genre) => g.id !== clickedGenre.id))
    } else {
      setSelectedGenres([...selectedGenres, { id: clickedGenre.id, name: clickedGenre.name }])
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Add Movie</h1>
      <div className={styles.InputsContainer}>
        <Input
          info="Title must include at least 2 character."
          placeHolder="Title"
          inputFunction={setTitle}
        />
        <Input
          info="Write a nice description at least 24 characters."
          placeHolder="Description"
          inputFunction={setDescription}
        />
        <Input
          info="Enter a valid URL for poster."
          placeHolder="Poster"
          inputFunction={setPoster}
        />
        <Info infoText="Select genres" />
        <div className={styles.genresContainer}>
          {genres.map((g: Genre) => (
            <>
              <div
                onClick={() => {
                  handleSelect(g)
                }}
                className={
                  selectedGenres.map((g: Genre) => g.id).includes(g.id)
                    ? `${styles.genreBox} ${styles.selectedGenre}`
                    : `${styles.genreBox}`
                }
              >
                {g.name}
              </div>
            </>
          ))}
        </div>
      </div>

      <div className={styles.actionsContainer}>
        <div className={styles.cancelButton}>Cancel</div>
        <div
          onClick={() => {
            console.log({
              apiId: null,
              title: title,
              poster: poster,
              genres: selectedGenres.map((g: Genre) => g.id),
              rating: null,
              description: description,
              owned: true,
            })
            addMovie({
              apiId: null,
              title: title,
              poster: poster,
              genres: selectedGenres,
              rating: null,
              description: description,
              owned: true,
            })
          }}
          className={styles.saveButton}
        >
          Create
        </div>
      </div>
    </div>
  )
}
