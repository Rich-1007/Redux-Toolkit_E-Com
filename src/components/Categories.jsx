import React from "react";
import data from "../../data/allCategories.json"

import Categoryitem from "./Categoryitem";

const Categories = () => {
  return (
    <>
      <div className="">
        <div>
          <div className="bg-white sm:mx-4 flex flex-row py-6 sm:justify-around gap-5 px-4  sm:px-20 overflow-scroll sm:overflow-hidden  ">
            {data.map((item, index) => (
              <Categoryitem key={index} index={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
