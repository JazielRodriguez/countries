import { type GeoStatsProps } from '@/types'
import NoInfo from './no-info'
import styles from './geo-stats.module.css'
import { font } from '@/utils/font'
export default function GeoStats (props: GeoStatsProps) {
  return <div className={styles.about}>
    <h3 className={font}>Geographic data</h3>
    {props.stats?.currency === null || props.stats?.population === null || props.stats?.size === null
      ? <NoInfo message='statics'/>
      : (
      <ul>
        <li>
          <p className={font}>- Currency: {props.stats.currency}</p>
        </li>
        <li>
          <p className={font}>- Population: {props.stats.population} of people</p>
        </li>
        <li>
          <p className={font}>- Size: {props.stats.size}</p>
        </li>
      </ul>
        )}
  </div>
}
