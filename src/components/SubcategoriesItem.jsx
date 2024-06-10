import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const SubcategoriesItem = ({ item }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <div
        onMouseEnter={() => setIsShow(true)}
        onMouseLeave={() => setIsShow(false)}
        className="cursor-pointer py-2 px-2 hover:bg-blue-100 hover:font-semibold duration-500 transition-all flex flex-row "
      >
        <div className="flex flex-row  items-center justify-between w-40">
          <span className="flex justify-between">{item.title}</span>
          {isShow && item.subcategories && (
            <IoIosArrowForward size={10} className="" />
          )}
        </div>

        {isShow && item.subcategories && (
          <div className=" w-48 font-normal   py-4 absolute left-full  top-0  bg-white rounded-xl shadow-2xl text-gray-600">
            {item.subcategories.map((item, index) => (
              <div className="   px-2 py-2 text-xs hover:font-bold transition-all delay-100 duration-100">
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SubcategoriesItem;
