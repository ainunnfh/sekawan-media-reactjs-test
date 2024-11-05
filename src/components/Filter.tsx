import React, { useState } from "react";
import { IRestoData, restoData } from "@/app/restoData";

interface IFilterProps {
  selectedFilter: string;
  setSelectedFilter: (value: string) => void;
  selectByPrice?: string;
  setSelectedPrice?: (value: string) => void;
  selectedCategory?: string;
  setSelectedCategory?: (value: string) => void;
}
const Filter: React.FC<IFilterProps> = ({
  selectedFilter,
  setSelectedFilter,
  selectByPrice,
  setSelectedPrice,
  selectedCategory,
  setSelectedCategory,
}) => {
  const [filteredData, setFilteredData] = useState<IRestoData[]>(restoData);
  const [filteredPrice, setFilteredPrice] = useState<IRestoData[]>(restoData);
  const [filteredCategory, setFilteredCategory] =
    useState<IRestoData[]>(restoData);
  console.log(filteredCategory);
  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedFilter(value);

    if (value === "OPEN NOW") {
      setFilteredData(restoData.filter((resto) => resto.isOpen === "OPEN NOW"));
    } else if (value === "CLOSED") {
      setFilteredData(restoData.filter((resto) => resto.isOpen === "CLOSED"));
    } else {
      setFilteredData(restoData);
    }
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedPrice?.(value);

    if (value === "$") {
      setFilteredPrice(restoData.filter((resto) => resto.price === "$"));
    } else if (value === "$$") {
      setFilteredPrice(restoData.filter((resto) => resto.price === "$$"));
    } else if (value === "$$$") {
      setFilteredPrice(restoData.filter((resto) => resto.price === "$$$"));
    } else {
      setFilteredPrice(restoData);
    }
  };

  const handleCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedCategory?.(value);

    if (value === "Japanese") {
      setFilteredCategory(
        restoData.filter((resto) => resto.categories === "Japanese")
      );
    } else if (value === "Mexican") {
      setFilteredCategory(
        restoData.filter((resto) => resto.categories === "Mexican")
      );
    } else if (value === "Italian") {
      restoData.filter((resto) => resto.categories === "Italian");
    } else if (value === "American") {
      restoData.filter((resto) => resto.categories === "American");
    } else {
      setFilteredCategory(restoData);
    }
  };

  return (
    <div className="mx-3 p-4">
      <div className="flex gap-3">
        Filter By:
        <div className="flex gap-3 bg-red-900">
          <select value={selectedFilter} onChange={handleFilterChange}>
            <option value="ALL">All</option>
            <option value="OPEN NOW">Open Now</option>
            <option value="CLOSED">Closed</option>
          </select>
        </div>
        <select value={selectByPrice} onChange={handlePriceChange}>
          <option value="price">Price</option>
          <option value="$">$</option>
          <option value="$$">$$</option>
          <option value="$$$">$$$</option>
        </select>
        {/* <select value={selectedCategory} onChange={handleCategory}>
          <option value="category">Category</option>
          <option value="Mexican">Mexican</option>
          <option value="American">American</option>
          <option value="Japanese">Japanese</option>
          <option value="Italian">Italian</option>
        </select> */}
      </div>
    </div>
  );
};

export default Filter;
