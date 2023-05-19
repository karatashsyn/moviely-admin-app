import React, { useEffect, useState } from 'react'
import styles from './input.module.css'
import { Genre } from '../../../Types/Genre'
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
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.iconContainer}></div>
        <span className={styles.infoText}></span>
      </div>
      <div className={styles.inputContainer}>
        {inputType === 'text' ? (
          <input type="text" placeholder={placeHolder} value={text} onChange={handleChange} />
        ) : null}

        {/* Showing selected genres in the input box */}
        {inputType === 'multiSelection'
          ? selectedGenres.map((g: Genre) => (
              <div
                className={styles.genreBox}
                onClick={() => {
                  handleChange(g)
                }}
              >
                {' '}
                {g.name}
              </div>
            ))
          : null}
        {/* Selecting genre logic */}
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
      </div>
    </div>
  )
}
