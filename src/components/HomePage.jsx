import React, { useEffect, useState } from "react";
// import { IoMdStarOutline } from "react-icons/io";
import CartItems from "./CartItems";

const HomePage = () => {
  const [resData, setResData] = useState([]);
  
  const API_URL = "https://fakestoreapi.com/products";
  console.log(resData);

  async function fetchProductData() {
    const res = await fetch(API_URL);
    const data = await res.json();

    setResData(data);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <>
      <div className="flex flex-wrap gap-3 sm:px-16 px-3 justify-around items-center py-10">
        {resData.map((item) => (
          <CartItems item={item} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
