import React from "react";

const DetailViewComponent = () => {
  return (
    <div className="flex flex-col p-4 mt-7 items-center">
      <div className="flex ">
        <img
          src="https://picsum.photos/1000/300?grayscale"
          className=""
          alt=""
        />
      </div>

      <div className="mt-2 font-bold text-2xl">Resto Name</div>

      <div>Location</div>

      <div className="w-3/4 flex flex-col mt-10 text-justify ">
        <div className="pb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          eligendi cupiditate impedit consequuntur fugiat cum nesciunt natus
          voluptate molestiae corrupti? Eos accusamus incidunt quam aperiam est
          veritatis eaque quia voluptatem.
        </div>
        <div className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          eligendi cupiditate impedit consequuntur fugiat cum nesciunt natus
          voluptate molestiae corrupti? Eos accusamus incidunt quam aperiam est
          veritatis eaque quia voluptatem.
        </div>
      </div>
    </div>
  );
};

export default DetailViewComponent;
