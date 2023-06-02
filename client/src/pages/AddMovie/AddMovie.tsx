import React, { useEffect, useState } from 'react'
import styles from './addMovie.module.css'
import Input from '../../Components/Input/Input'
import useGetGenres from '../../Hooks/useGetGenres'
import { Genre } from '../../Types/Genre'
import Info from '../../Components/Info/Info'
import { useNavigate } from 'react-router-dom'
type Props = {
  addMovie: Function
}

export default function AddMovie({ addMovie }: Props) {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [poster, setPoster] = useState('')
  const { genres } = useGetGenres()
  const [selectedGenres, setSelectedGenres] = useState<Array<Genre>>([])
  const [inputErrors, setInputErrors] = useState({
    title: true,
    description: true,
    poster: true,
  })
  const [saveAttempted, setSaveAttempted] = useState(false)
  const handleSelect = (clickedGenre: Genre) => {
    if (selectedGenres.map((g: Genre) => g.id).includes(clickedGenre.id)) {
      setSelectedGenres(selectedGenres.filter((g: Genre) => g.id !== clickedGenre.id))
    } else {
      setSelectedGenres([...selectedGenres, { id: clickedGenre.id, name: clickedGenre.name }])
    }
  }

  useEffect(() => {
    setInputErrors({
      title: titleError(title),
      description: descriptionError(description),
      poster: posterError(poster),
    })
    setSaveAttempted(false)
  }, [title, description, poster])

  const handleSave = () => {
    if (inputErrors.title || inputErrors.description || inputErrors.poster) {
      setSaveAttempted(true)
    } else {
      addMovie({
        apiId: null,
        title: title,
        poster: poster,
        genres: selectedGenres,
        rating: null,
        description: description,
        owned: true,
      })
      return navigate('/')
    }
  }
  const genreBoxClassName = (g: Genre) => {
    return selectedGenres.map((g: Genre) => g.id).includes(g.id)
      ? `${styles.genreBox} ${styles.selectedGenre}`
      : `${styles.genreBox}`
  }

  const titleError = (title: string) => {
    return title.length >= 2 ? false : true
  }

  const descriptionError = (description: string) => {
    return description.length >= 12 ? false : true
  }

  const posterError = (poster: string) => {
    const pattern = new RegExp(
      '^((?:https?:\\/\\/)?(?:www\\.)?(?:[a-zA-Z\\d]+\\.){1,2}[a-zA-Z]{2,}(?:\\/\\S*)?)$',
      'i'
    )
    return !pattern.test(poster)
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Add Movie</h1>
      <div className={styles.InputsContainer}>
        <Input
          info="Title must include at least 2 character."
          placeHolder="Title"
          inputFunction={setTitle}
          hasError={inputErrors.title}
          formSaveAttempt={saveAttempted}
        />
        <Input
          info="Write a nice description at least 12 characters."
          placeHolder="Description"
          inputFunction={setDescription}
          hasError={inputErrors.description}
          formSaveAttempt={saveAttempted}
        />
        <Input
          info="Enter a valid URL for poster."
          placeHolder="Poster"
          inputFunction={setPoster}
          hasError={inputErrors.poster}
          formSaveAttempt={saveAttempted}
        />

        <Info infoText="Select genres" />
        <div className={styles.genresContainer}>
          {genres.map((g: Genre) => (
            <div
              onClick={() => {
                handleSelect(g)
              }}
              className={genreBoxClassName(g)}
            >
              {g.name}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.actionsContainer}>
        <div
          className={styles.cancelButton}
          onClick={() => {
            return navigate('/')
          }}
        >
          Cancel
        </div>
        <div onClick={handleSave} className={styles.saveButton}>
          Create
        </div>
      </div>
    </div>
  )
}
