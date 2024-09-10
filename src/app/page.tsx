"use client";

import Filter from "@/components/Filter";
import Header from "@/components/Header";
import RestoCard from "@/components/RestoCard";
import { restoData } from "./restoData";
import { useState } from "react";

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState<string>("ALL");
  const filteredData = restoData.filter((resto) => {
    if (selectedFilter === "ALL") return true;
    return resto.isOpen === selectedFilter;
  });

  const handleFilterChange = (value: string) => {
    setSelectedFilter(value);
  };
  return (
    <>
      <Header />
      <Filter
        selectedFilter={selectedFilter}
        setSelectedFilter={handleFilterChange}
      />

      <div className="flex gap-2 flex-wrap">
        {filteredData.map((resto) => (
          <RestoCard
            id={resto.id}
            key={resto.name}
            name={resto.name}
            categories={resto.categories}
            price={resto.price}
            isOpen={resto.isOpen}
          />
        ))}
      </div>
    </>
  );
}
