import { type CovidDataProps } from '@/types'
import NoInfo from './no-info'
import styles from './covid-data.module.css'
import { font } from '@/utils/font'
export default function CovidData (props: CovidDataProps) {
  return (
    <div className={styles.about}>
      <h3 className={font}>COVID-19 stats</h3>
      {props.data === null
        ? <NoInfo message='covid data'/>
        : (
          <ul>
            <li>
            <p className={font}>- Total cases: {props.data.total_case}</p>
            </li>
            <li>
            <p className={font}>- Total deaths: {props.data.total_deaths}</p>
            </li>
            <li>
            <p className={font}>- Last update: {props.data.last_updated.slice(0, 10)}</p>
            </li>
          </ul>
          )}
    </div>
  )
}
