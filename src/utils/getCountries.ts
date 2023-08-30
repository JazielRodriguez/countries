import { type Countries } from '@/types'
export async function getCountries (): Promise<Countries> {
  const res = await fetch(`${process.env.API_URL}/countries`, {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`
    }
  })
  return await res.json()
}
