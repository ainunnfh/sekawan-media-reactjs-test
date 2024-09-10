import React from "react";
import StarRating from "./StarRating";
import { IRestoData } from "@/app/restoData";

const RestoCard:React.FC<IRestoData> = (props) => {
  return (
    <div className="mx-3 p-4 border border-separate">
      <div className="">
        <div>
          <img src="https://picsum.photos/200/120?grayscale" alt="" />
        </div>

        <div className="mt-2">{props.name}</div>
        <div>
          <StarRating />
        </div>

        <div className="flex justify-between">
          <p>
            {props.categories}
            <span className="text-sm"> {props.price}</span>
          </p>
          <p className="text-sm">{props.isOpen}</p>
        </div>
        <a href={`/detail-view/${props.id}`} className="w-full p-1 mt-3 bg-blue-950 font-sm hover:bg-blue-900 text-white font-thin rounded-sm">
          LEARN MORE
        </a>
      </div>
    </div>
  );
};

export default RestoCard;
