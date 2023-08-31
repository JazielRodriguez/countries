import { type States } from '@/types'
export async function getStates (path: string): Promise<States> {
  const res = await fetch(`${process.env.API_URL}/countries/${path}/states`, {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`
    }
  })
  return await res.json()
}
