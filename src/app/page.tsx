"use client";

import Filter from "@/components/Filter";
import Header from "@/components/Header";
import RestoCard from "@/components/RestoCard";
import { restoData } from "./restoData";
import { useState } from "react";

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState<string>("ALL");
  const [filterByPrice, setfilterByPrice] = useState<string>("Price");
  // console.log(selectedFilter);
  const filteredData = restoData.filter((resto) => {
    if (selectedFilter === "ALL") return true;
    return resto.isOpen === selectedFilter;
  });
  const filteredPrice = filteredData.filter((resto) => {
    if (filterByPrice === "Price") return true;
    return resto.price === filterByPrice;
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
        selectByPrice={filterByPrice}
        setSelectedPrice={setfilterByPrice}
      />

      <div className="flex gap-2 flex-wrap">
        {filteredPrice.map((resto) => (
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
