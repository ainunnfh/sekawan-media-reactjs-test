"use client";
import React from "react";

import { useParams } from "next/navigation";
import DetailViewComponent from "@/components/DetailViewComponent";
import { restoData } from "@/app/restoData";

const DetailViewId = () => {
  console.log(restoData)
  const params = useParams();
  console.log("params", params.detailViewId);
  return (
    <div>
      <DetailViewComponent />
    </div>
  );
};

export default DetailViewId;
