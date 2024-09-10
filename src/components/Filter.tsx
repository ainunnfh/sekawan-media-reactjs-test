import React, { useState } from "react";
import { IRestoData, restoData } from "@/app/restoData";

interface IFilterProps {
  selectedFilter: string;
  setSelectedFilter: (value: string) => void;
}
const Filter: React.FC<IFilterProps> = ({
  selectedFilter,
  setSelectedFilter,
}) => {
  const [filteredData, setFilteredData] = useState<IRestoData[]>(restoData);
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
  return (
    <div className="mx-3 p-4">
      <div className="flex gap-3">
        Filter By:
        <div className="flex gap-3 ">
          <select value={selectedFilter} onChange={handleFilterChange}>
            <option value="ALL">All</option>
            <option value="OPEN NOW">Open Now</option>
            <option value="CLOSED">Closed</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
