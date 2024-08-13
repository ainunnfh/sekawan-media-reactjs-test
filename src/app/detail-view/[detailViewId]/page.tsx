"use client";
import React from "react";

import { useParams } from "next/navigation";
import DetailViewComponent from "@/components/DetailViewComponent";
import { restoData } from "@/app/restoData";

const DetailViewId = () => {
  const params = useParams();
  return (
    <div>
      <DetailViewComponent />
    </div>
  );
};

export default DetailViewId;
