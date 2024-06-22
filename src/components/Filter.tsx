import React from "react";
import { restoData } from "@/app/restoData";

const Filter = () => {
  return (
    <div className="mx-3 p-4">
      <div className="flex gap-3">
        Filter By:
        <div className="flex gap-3 ">
          <button className="hover:text-blue-900">Open Now</button>
          <button className="hover:text-blue-900">Price</button>
          <select className="hover:text-blue-900">
            <option value="">Categories</option>
            {restoData.map((resto) => (
              <option key={resto.categories} value={resto.categories}>
                {resto.categories}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
