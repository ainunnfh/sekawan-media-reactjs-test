"use client";

import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface IProps {
  onSetRatting?: Function;
}

const StarRating = (props: IProps) => {
  const [rating, setRating] = useState(Array(5).fill(false));

  function handleRating(index: number) {
    const newRating = Array(5).fill(false);
    for (let i = 0; i <= index; i++) {
      newRating[i] = true;
    }
    setRating(newRating);
    props.onSetRatting?.(index + 1);
  }

  return (
    <div>
      {rating.map((isFull, index) => (
        <button key={index} onClick={() => handleRating(index)}>
          {isFull ? <AiFillStar /> : <AiOutlineStar />}
        </button>
      ))}
    </div>
  );
};

export default StarRating;

