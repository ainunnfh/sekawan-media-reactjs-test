import Filter from "@/components/Filter";
import Header from "@/components/Header";
import RestoCard from "@/components/RestoCard";
import Image from "next/image";
import { restoData } from "./restoData";

export default async function Home() {
  return (
    <>
      <Header />
      <Filter />

      <div className="flex gap-2 flex-wrap">
        {restoData.map((resto) => (
          <RestoCard
            id={resto.id}
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
