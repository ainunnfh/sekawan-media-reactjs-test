import React from "react";

const Filter = () => {
  return (
    <div className="mx-3 p-4">
      <div className="flex gap-3">
        Filter By:
        <div className="flex gap-3 ">
          <button className="hover:text-blue-900">Open Now</button>
          <button className="hover:text-blue-900">Price</button>
          <button className="hover:text-blue-900">Categories</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
