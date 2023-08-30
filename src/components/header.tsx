import { font } from '@/utils/font'
import styles from './header.module.css'
export default function Header () {
  return (
    <header className={styles.header}>
      <h1 className={font}>Global Country Facts</h1>
    </header>
  )
}
