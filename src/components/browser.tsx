'use client'

import { useRef } from 'react'
import styles from './browser.module.css'
import { font } from '@/utils/font'
import { type BrowserProps } from '@/types'
import SearchIcon from './search-icon'

export default function Browser (props: BrowserProps) {
  const searchedCountriesRef = useRef<HTMLInputElement | null>(null)
  const searchCountriesHandler = () => {
    if (searchedCountriesRef.current !== null) {
      props.onSearchCountries(searchedCountriesRef.current.value)
    }
  }
  return (
    <div className={styles.browser}>
      <input className={font}
        type='text'
        placeholder='Search country'
        ref={searchedCountriesRef}
      />
      <button onClick={searchCountriesHandler}>
        <SearchIcon />
      </button>
    </div>
  )
}
