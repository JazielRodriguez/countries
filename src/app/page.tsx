import styles from './page.module.css'
import Header from '@/components/header'
import CountriesList from '@/components/countries-list'
import { getCountries } from '@/utils/getCountries'
import Glass from '@/components/glass'
export default async function Home () {
  const countries = await getCountries()
  return (
    <main className={styles.container}>
      <Glass>
        <Header title='Global Country Facts'/>
        <CountriesList countries={countries} />
      </Glass>
    </main>
  )
}
