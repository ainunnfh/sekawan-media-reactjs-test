import Filter from "@/components/Filter";
import Header from "@/components/Header";
import RestoCard from "@/components/RestoCard";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Header/>
    <Filter/>

    <div className="flex gap-2">

    <RestoCard title={"Tittle 1"} starRating={"⭐⭐⭐⭐⭐"} categories={"Thai"} isOpen={"OPEN NOW"} />
    <RestoCard title={"Tittle 2"} starRating={"⭐⭐⭐"} categories={"Seafood"} isOpen={"CLOSED"}/>
    <RestoCard title={"Tittle 3"} starRating={"⭐⭐⭐⭐"} categories={"Japanese"} isOpen={"OPEN NOW"}/>
    <RestoCard title={"Tittle 4"} starRating={"⭐⭐⭐⭐"} categories={"Italian"} isOpen={"OPEN NOW"}/>
    </div>
    </>
  );
}
