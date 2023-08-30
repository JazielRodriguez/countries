import Link from 'next/link'
import styles from './home-link.module.css'
import BackIcon from './back-icon'
export default function HomeLink () {
  return (
    <Link href='/' className={styles.home}>
      <BackIcon />
    </Link>
  )
}
