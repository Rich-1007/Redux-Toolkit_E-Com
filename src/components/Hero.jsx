import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Herodata } from "../../data";

const Hero = () => {
  return (
    <>
      <div className="sm:mx-0 bg-white flex flex-col mt-5  ">
        <div className="  flex flex-row justify-between items-center px-4 py-3 ">
          <span className="text-xl font-semibold">Best of Electronics</span>
          <IoIosArrowDroprightCircle
            size={28}
            className="text-blue-700 cursor-pointer"
          />
        </div>

        <div className=" flex sm:flex-row flex-col justify-between px-4 py-12">
          {Herodata.map((item) => (
            <div className=" border-gray-300 m-2 sm:m-0 text-center cursor-pointer rounded-md border sm:w-2/12 flex flex-col h-64 justify-center items-center group">
              <img
                src={item.img}
                alt=""
                className="object-contain h-40 px-2 group-hover:-translate-y-2 duration-500"
              />
              <span className="text-gray-500 text-base">{item.title}</span>
              <span className="font-semibold">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
