import React from "react";
import Image from "next/image";

const RestoCard = () => {
  return (
    <div className="mx-3 p-4 border border-separate">
      <div className="">
        <div>
          <img src="https://picsum.photos/150/120?grayscale" alt="" />
        </div>

        <div className="mt-2">title</div>
        <div>star rating</div>

        <div className="flex gap-3">
          <p>categories</p>
          <p>isOpen</p>
        </div>
        <button className="w-full p-1 bg-blue-950 font-sm hover:bg-blue-900 text-white font-thin rounded-sm">
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default RestoCard;
