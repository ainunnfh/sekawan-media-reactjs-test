"use client";
import React, { useState } from "react";
import { restoData } from "@/app/restoData";

const Filter = () => {
  const byPrice = restoData.map((resto) => resto.price);
  const [selectedIsOpen, setselectedIsOpen] = useState("");
  console.log(selectedIsOpen);
  const handleOpen = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setselectedIsOpen(event.target.value);
  };
  return (
    <div className="mx-3 p-4">
      <div className="flex gap-3">
        Filter By:
        <div className="flex gap-3 ">
          <select>
            <option value={selectedIsOpen}>Open Now</option>
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
          <select className="hover:text-blue-900" value={selectedIsOpen}>
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
