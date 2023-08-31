import { type States, type Country } from '@/types'
import CustomImage from '@/components/image'
import Glass from '@/components/glass'
import Header from '@/components/header'
import styles from './page.module.css'
import CovidData from '@/components/covid-data'
import CurrentPresident from '@/components/current-president'
import AboutCountry from '@/components/about-country'
import { getCountry } from '@/utils/getCountry'
import { getStates } from '@/utils/getStates'
import GeoStats from '@/components/geo-stats'
import StatesList from '@/components/states-list'
export default async function Page ({ params }: { params: { name: string } }) {
  const data: Country = await getCountry(params.name)
  const states: States = await getStates(params.name)
  return (
    <div className={styles.page}>
      <Glass>
        <Header title={data.data.name} />
        <div className={styles['img-container']}>
          <CustomImage
            src={data.data.href.flag}
            alt={data.data.name}
            width='300px'
            height='250px'/>
        </div>
        {data.data.description !== null && <p>{data.data.description}</p>}
        <AboutCountry
        about={{ full_name: data.data.full_name, capital: data.data.capital }}/>
        <CurrentPresident
          president={data.data.current_president}
          country={data.data.name}/>
        <CovidData
          data={data.data.covid19}
        />
        <GeoStats
          stats={{ currency: data.data.currency, size: data.data.size, population: data.data.population }}/>
        <StatesList states={states}/>
      </Glass>
    </div>
  )
}
