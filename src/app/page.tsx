import Filter from "@/components/Filter";
import Header from "@/components/Header";
import RestoCard from "@/components/RestoCard";
import Image from "next/image";
import { restoData } from "./restoData";



export default async function Home() {
  // const data = await fetchData();
  // console.log(restoData)
  return (
    <>
      <Header />
      <Filter />

      <div className="flex gap-2">
        {restoData.map((resto) => (
          <RestoCard
            key={resto.name}
            title={resto.name}
            categories={resto.categories}
            price={resto.price}
            isOpen={resto.isOpen}
          />
        ))}
      </div>
    </>
  );
}
