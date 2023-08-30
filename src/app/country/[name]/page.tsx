import { type Country } from '@/types'
import CustomImage from '@/components/image'
import HomeLink from '@/components/home-link'
import Glass from '@/components/glass'
import styles from './page.module.css'
export default async function Page ({ params }: { params: { name: string } }) {
  const res = await fetch(`${process.env.API_URL}/countries/${params.name}`, {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`
    }
  })
  const data: Country = await res.json()
  console.log(data)
  return (
    <div className={styles.page}>
      <HomeLink />
      <Glass width='60%'>
        <p>Name of the Country: {params.name}</p>
        <p>Name of the capital: {data.data.capital}</p>
        <CustomImage src={data.data.href.flag} alt={data.data.name} />
      </Glass>
    </div>
  )
}
