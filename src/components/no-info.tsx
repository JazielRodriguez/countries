import { type NoInfoProps } from '@/types'
import styles from './no-info.module.css'
import { font } from '@/utils/font'
import WarningIcon from './warning-icon'
export default function NoInfo (props: NoInfoProps) {
  return (
    <div className={styles.error}>
      <p className={font}>
        <span><WarningIcon/></span>{' '}
        <span>There is no information about {props.message}</span>
      </p>
    </div>
  )
}
