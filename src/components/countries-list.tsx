'use client'
import Link from 'next/link'
import styles from './countries-list.module.css'
import Browser from './browser'
import { font } from '@/utils/font'
import { useState } from 'react'
import { type Countries, type CountriesListProps } from '@/types'
import NoInfo from './no-info'
export default function CountriesList (props: CountriesListProps) {
  const [countries, setCountries] = useState(props.countries)
  const searchCountriesHandler = (text: string) => {
    const searchedCountries: Countries = {
      data: props.countries.data.filter((country) =>
        country.name.toLowerCase().includes(text)
      )
    }
    setCountries(searchedCountries)
  }
  return (
    <div>
      <Browser onSearchCountries={searchCountriesHandler} />
      <ol className={styles.list}>
        {countries.data.length === 0
          ? <NoInfo message='countries'/>
          : countries.data.map((country, index) => (
          <li key={index}>
            <Link href={`country/${country.name.toLowerCase()}`} className={font}>
              {country.name}
            </Link>
          </li>
          ))}
      </ol>
    </div>
  )
}
