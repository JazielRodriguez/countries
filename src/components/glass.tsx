import { type GlassProps } from '@/types'
import styles from './glass.module.css'
export default function Glass (props: GlassProps) {
  return <section className={styles.glass} style={{ width: props.width }}>
    {props.children}
  </section >
}
