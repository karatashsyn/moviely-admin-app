import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useShowMovie from '../../Hooks/useShowMovie'
import styles from './editMovie.module.css'
import Input from '../../Components/Input/Input'
import useGetGenres from '../../Hooks/useGetGenres'
import { Genre } from '../../Types/Genre'
type Props = {
  updateMovie: Function
}

export default function EditMovie({ updateMovie }: Props) {
  const { genres } = useGetGenres()
  const params = useParams()
  const navigate = useNavigate()
  const { movie, error, loading } = useShowMovie(Number(params.id))
  const [selectedGenres, setSelectedGenres] = useState<Array<Genre>>([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [poster, setPoster] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [descriptionError, setDescriptionError] = useState(false)
  const [posterError, setPosterError] = useState(false)

  const ifSelected = (testedGenre: Genre) => {
    return selectedGenres?.map((g: Genre) => g.id).includes(testedGenre.id)
  }

  const handleSelect = (g: Genre) => {
    if (ifSelected(g)) {
      setSelectedGenres(selectedGenres?.filter((sg: Genre) => sg.id !== g.id))
    } else {
      if (g && selectedGenres) {
        setSelectedGenres([...selectedGenres, g])
      }
    }
  }

  useEffect(() => {
    if (movie) {
      setSelectedGenres(movie?.genres)
      setDescription(movie.description)
      setTitle(movie?.title)
      setPoster(movie.poster ?? '')
    }
  }, [movie])

  const pattern = new RegExp(
    '^((?:https?:\\/\\/)?(?:www\\.)?(?:[a-zA-Z\\d]+\\.){1,2}[a-zA-Z]{2,}(?:\\/\\S*)?)$',
    'i'
  )
  useEffect(() => {
    setTitleError(title.length >= 2 ? false : true)
    setDescriptionError(description.length >= 12 ? false : true)
    setPosterError(!pattern.test(poster))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [description, title, poster])

  const handleTitleChange = (e: any) => {
    setTitle(e.target.value)
  }
  const handleDescriptionChange = (e: any) => {
    setDescription(e.target.value)
  }
  const handlePosterChange = (e: any) => {
    setPoster(e.target.value)
  }
  const handleSave = () => {
    if (!titleError && !posterError && !descriptionError) {
      updateMovie({ ...movie, title, description, poster, genres: selectedGenres })
      navigate('/')
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.blurContainer}>
        <img className={styles.blurPoster} src={movie?.poster} alt="" />
      </div>
      <div className={styles.editContainer}>
        <div className={styles.mainInfoContainer}>
          <input
            onChange={(e) => {
              handleTitleChange(e)
            }}
            spellCheck={false}
            className={
              titleError ? `${styles.titleInput} ${styles.faultyInput}` : `${styles.titleInput}`
            }
            value={title}
          />
          <div className={styles.rateContainer}>
            <div className={styles.iconContainer}>
              <svg
                className={styles.rateIcon}
                width="14"
                height="15"
                viewBox="0 0 28 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="8" width="6" height="22" rx="3" fill="#666" />
                <rect x="11" width="6" height="30" rx="3" fill="#888" />
                <rect x="22" y="15" width="6" height="15" rx="3" fill="#555" />
              </svg>
            </div>
            <div className={styles.rateContainer}>{movie?.rating}</div>
          </div>
        </div>
        <textarea
          onChange={(e) => {
            handleDescriptionChange(e)
          }}
          spellCheck={false}
          className={
            descriptionError
              ? `${styles.descriptionInput} ${styles.faultyInput}`
              : `${styles.descriptionInput}`
          }
          value={description}
        />
        <div className={styles.urlContainer}>
          <h3>Poster: </h3>

          <input
            onChange={(e) => {
              handlePosterChange(e)
            }}
            type="text"
            className={
              posterError ? `${styles.urlInput} ${styles.faultyInput}` : `${styles.urlInput}`
            }
            value={poster}
          />
        </div>
        <div className={styles.genresContainer}>
          {genres.map((g: Genre) => {
            return (
              <div
                onClick={() => handleSelect(g)}
                className={
                  ifSelected(g)
                    ? `${styles.genreBox} ${styles.selectedGenre}`
                    : `${styles.genreBox}`
                }
              >
                {g.name}
              </div>
            )
          })}
        </div>
        <div className={styles.controllersContainer}>
          <div
            className={styles.cancelBtn}
            onClick={() => {
              return navigate('/')
            }}
          >
            Cancel
          </div>
          <div onClick={handleSave} className={styles.saveBtn}>
            Save
          </div>
        </div>
      </div>
    </div>
  )
}
