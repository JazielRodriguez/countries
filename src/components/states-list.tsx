import { type StatesListProps } from '@/types'
import NoInfo from './no-info'
import styles from './states-list.module.css'
import { font } from '@/utils/font'

export default function StatesList (props: StatesListProps) {
  return (
    <div className={styles.about}>
      <h3 className={font}>States</h3>
      {props.states === null
        ? <NoInfo message='states'/>
        : (
          <ul>
            {props.states.data.map((state, index) => (
              <li key={index}>
                <p className={font}>- {state.name}</p>
              </li>
            ))}
          </ul>
          )}
    </div>
  )
}
