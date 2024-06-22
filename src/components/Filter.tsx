import React from "react";
import { restoData } from "@/app/restoData";

const Filter = () => {
  return (
    <div className="mx-3 p-4">
      <div className="flex gap-3">
        Filter By:
        <div className="flex gap-3 ">
          <select>
            <option value="">Open Now</option>
            {Array.from(new Set(restoData.map((resto) => resto.isOpen))).map(
              (isOpen) => (
                <option key={isOpen} value={isOpen}>
                  {isOpen}
                </option>
              )
            )}
          </select>
          <select className="hover:text-blue-900">
            <option value="">Price</option>
            {Array.from(new Set(restoData.map((resto) => resto.price))).map(
              (price) => (
                <option key={price} value={price}>
                  {price}
                </option>
              )
            )}
          </select>
          <select className="hover:text-blue-900">
            <option value="">Categories</option>
            {Array.from(
              new Set(restoData.map((resto) => resto.categories))
            ).map((categories) => (
              <option key={categories} value={categories}>
                {categories}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
