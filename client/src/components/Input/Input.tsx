import React, { useEffect, useState } from 'react'
import styles from './input.module.css'
import { Genre } from '../../Types/Genre'
type Props = {
  inputType: string
  placeHolder: string
  info: string
  inputFunction: Function
  genres?: Array<Genre>
}

export default function Input({ inputType, placeHolder, info, inputFunction, genres }: Props) {
  const [text, setText] = useState('')
  const [selectedGenres, setSelectedGenres] = useState<Array<Genre>>([])

  useEffect(() => {
    console.log(selectedGenres)
  }, [selectedGenres])

  const handleChange = (e: any) => {
    if (inputType === 'text') {
      setText(e.target.value)
      inputFunction(e.target.value)
    } else if (inputType === 'multiSelection') {
      if (!selectedGenres.map((g: Genre) => g.id).includes(e.id)) {
        setSelectedGenres([...selectedGenres, e])
      } else {
        setSelectedGenres(selectedGenres.filter((g) => g.id !== e.id))
      }
    }
  }
  return (
    <>
      <div className={styles.infoContainer}>
        <div className={styles.iconContainer}>
          <svg
            className={styles.infoIcon}
            width="54"
            height="54"
            viewBox="0 0 54 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="27" cy="27" r="27" fill="#0091BE" fill-opacity="0.5" />
            <rect
              x="24.2988"
              y="18.9004"
              width="5.4"
              height="27"
              rx="2.7"
              fill="white"
              fill-opacity="0.2"
            />
            <rect
              x="24.2988"
              y="10.125"
              width="5.4"
              height="5.4"
              rx="2.7"
              fill="white"
              fill-opacity="0.2"
            />
          </svg>
        </div>
        <span className={styles.infoText}>{info}</span>
      </div>
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          {inputType === 'text' ? (
            <input type="text" placeholder={placeHolder} value={text} onChange={handleChange} />
          ) : null}

          {inputType === 'multiselection' && selectedGenres.length === 0 ? (
            <span>Genres</span>
          ) : null}

          {/* Showing selected genres in the input box */}
          {inputType === 'multiSelection' ? (
            <div className={styles.selectedsContainer}>
              {selectedGenres.map((g: Genre) => (
                <div
                  onClick={() => {
                    handleChange(g)
                  }}
                  className={styles.genreBox}
                >
                  {' '}
                  {g.name}
                </div>
              ))}
            </div>
          ) : null}
          {/* Selecting genre logic */}
        </div>
      </div>
      {inputType === 'multiSelection' && genres ? (
        <div className={styles.genresDropdown}>
          {genres
            .filter((g: Genre) => !selectedGenres.includes(g))
            .map((g: Genre) => (
              <div
                className={styles.genreOption}
                onClick={() => {
                  handleChange(g)
                }}
              >
                {g.name}
              </div>
            ))}
        </div>
      ) : null}
    </>
  )
}
