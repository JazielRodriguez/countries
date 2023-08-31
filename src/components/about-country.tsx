import { type AboutCountryProps } from '@/types'
import { font } from '@/utils/font'
import NoInfo from './no-info'
import styles from './about-country.module.css'
export default function AboutCountry (props: AboutCountryProps) {
  return (
    <div className={styles.about}>
      <h3 className={font}>About the country</h3>
      {props.about.full_name === null || props.about.capital === null
        ? <NoInfo message='the official name and the capital'/>
        : (
          <ul>
            <li>
              <p className={font}>-  Official name: {props.about.full_name}</p>
            </li>
            <li>
              <p className={font}>- Capital: {props.about.capital}</p>
            </li>
          </ul>
          )}
    </div>
  )
}
