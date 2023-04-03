import React, { ChangeEvent, useState } from 'react'
import styles from './searchbar.module.css'

type Props = { setSearchKey: Function }

export default function SearchBar({ setSearchKey }: Props) {
  const [tempSearchKey, setTempSearchKey] = useState('')

  const handleKeyPress = (e: any) => {
    setTempSearchKey(e.target.value)
  }

  return (
    <form
      className={styles.searchBar}
      onSubmit={(e) => {
        e.preventDefault()
        setSearchKey(tempSearchKey)
      }}
    >
      <div className={styles.threeDotsContainer}>
        <svg
          width="73"
          height="74"
          viewBox="0 0 73 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            opacity="0.2"
            cx="34.1886"
            cy="50.9856"
            rx="16.3085"
            ry="15.9249"
            transform="rotate(-31.6967 34.1886 50.9856)"
            fill="#CC8282"
          />
          <ellipse
            opacity="0.2"
            cx="22.2433"
            cy="32.4514"
            rx="16.3085"
            ry="15.9249"
            transform="rotate(-31.6967 22.2433 32.4514)"
            fill="#E43434"
          />
          <ellipse
            opacity="0.2"
            cx="44.9015"
            cy="31.7141"
            rx="16.3085"
            ry="15.9249"
            transform="rotate(-31.6967 44.9015 31.7141)"
            fill="#C6AAAA"
          />
        </svg>
      </div>
      <input
        onChange={handleKeyPress}
        className={styles.searchInput}
        type="text"
        name="title"
        placeholder="Search For Movies..."
      />
    </form>
  )
}
