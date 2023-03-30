import React from 'react'
import styles from './searchbar.module.css'

export default function SearchBar() {
  return (
    <div className={styles.searchBar}>
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
        className={styles.searchInput}
        type="text"
        name="title"
        placeholder="Search For Movies..."
      />
    </div>
  )
}
