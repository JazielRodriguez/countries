import { type Country } from '@/types'
export async function getCountry (path: string): Promise<Country> {
  const res = await fetch(`${process.env.API_URL}/countries/${path}`, {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`
    }
  })
  return await res.json()
}
