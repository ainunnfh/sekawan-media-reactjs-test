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

    <RestoCard title={"Tittle 1"}  categories={"Thai"} isOpen={"OPEN NOW"} />
    <RestoCard title={"Tittle 2"} categories={"Seafood"} isOpen={"CLOSED"}/>
    <RestoCard title={"Tittle 3"} categories={"Japanese"} isOpen={"OPEN NOW"}/>
    <RestoCard title={"Tittle 4"} categories={"Italian"} isOpen={"OPEN NOW"}/>
    </div>
    </>
  );
}
