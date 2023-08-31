import { font } from '@/utils/font'
import { type HeaderProps } from '@/types'
import styles from './header.module.css'
export default function Header (props: HeaderProps) {
  return (
    <header className={styles.header}>
      <h1 className={font}>{props.title}</h1>
    </header>
  )
}
