import { Country } from "@/types";
export default async function Page({ params }: { params: { name: string } }) {
  const res = await fetch(`${process.env.API_URL}/countries/${params.name}`, {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  });
  const data: Country = await res.json();
  console.log(data);
  return (
    <div>
      <p>Name of the Country: {params.name}</p>
      <p>Name of the capital{data.data.capital}</p>
    </div>
  );
}
