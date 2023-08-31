import { type CurrentPresidentProps } from '@/types'
import NoInfo from './no-info'
import styles from './current-president.module.css'
import { font } from '@/utils/font'
export default function CurrentPresident (props: CurrentPresidentProps) {
  return (
    <div className={styles.about}>
      <h3 className={font}>The President</h3>
      {props.president === null
        ? <NoInfo message='the current president'/>
        : (
          <ul>
            <li>
              <p className={font}>- Name: {props.president.name}</p>
            </li>
            <li>
              <p className={font}>- Gender: {props.president.gender}</p>
            </li>
            <li>
              <p className={font}>- Appointment start date: {props.president.appointment_start_date}</p>
            </li>
          </ul>
          )}
    </div>
  )
}
