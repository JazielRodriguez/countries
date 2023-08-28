import Link from "next/link";
import { Countries } from "@/types";
export default async function CountriesList() {
  const res = await fetch(`${process.env.API_URL}/countries`, {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  });
  const data: Countries = await res.json();
  return (
    <div>
      <p>hola</p>
      <li>
        {data.data.map((country, index) => (
          <Link href={`country/${country.name.toLowerCase()}`} key={index}>
            {country.name}
          </Link>
        ))}
      </li>
    </div>
  );
}
