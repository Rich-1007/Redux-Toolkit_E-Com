import React, { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import categoriesData from "../../data/allCategories.json";

import logo from "/assets/Icons/Flipkart-Logo.png";
import { Link, NavLink } from "react-router-dom";
import Cart from "../pages/Cart";

const Navbar = () => {
  const subCats = [];

  categoriesData.forEach((item) => {
    item.subcategories && subCats.push(...item.subcategories);
  });

  const [inputText, setInputText] = useState("");
  const [searchedCategories, setSearchedCategories] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const handleSearch = (e) => {
    setInputText(e.target.value);
    searchCategory(e.target.value);
  };

  const searchCategory = (searchText) => {
    const matchedCategories = categoriesData.filter((item) => {
      return item.title.toLowerCase().includes(searchText.toLowerCase());
    });

    const matchedSubCategories = subCats.filter((item) => {
      return item?.title.toLowerCase().includes(searchText.toLowerCase());
    });

    setSearchedCategories(
      [...matchedCategories, ...matchedSubCategories].slice(0, 10)
    );
  };

  return (
    <>
      <div className=" flex flex-row w-full h-14 sm:px-20 py-2 bg-white sm:mb-2 justify-between px-2">
        <Link to="/">
          <img
            className="h-full  flex items-center justify-center cursor-pointer"
            src={logo}
            alt="Flipkart"
          />
        </Link>

        <div className="hidden sm:block w-4/6 relative">
          <input
            type="text"
            value={inputText}
            onChange={handleSearch}
            className=" mx-auto w-full outline-none  h-10 justify-center bg-blue-100 rounded-lg border-none sm:px-6 px-1"
            placeholder="Search for products, brands and more"
            onFocus={() => setShowSearchResults(true)}
            onBlur={() => setShowSearchResults(false)}
          />

          {showSearchResults && searchedCategories.length > 0 && (
            <div className=" absolute bg-white z-10 left-0 right-0 p-2 border rounded-xl space-y-2">
              {searchedCategories.map((item, index) => {
                return (
                  <div key={index}>
                    <span key={index}>{item?.title}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className=" flex flow-row justify-between items-center text-gray-500 sm:gap-5 gap-3 cursor-pointer">
          <CgProfile size={23} className="" />

          <Link to="/Cart">
            <div className="flex gap-1 justify-center items-center">
              <BsCart3 size={20} />

              <span className="sm:text-xl ">Cart</span>
            </div>
          </Link>
        </div>
      </div>

      <div className="w-full relative bg-white h-10 px-4 sm:hidden">
        <input
          type="text"
          value={inputText}
          onChange={handleSearch}
          placeholder="Search for products, brands and more"
          className="rounded-lg pl-4 h-full w-full bg-blue-100  outline-none "
          onFocus={() => setShowSearchResults(true)}
          onBlur={() => setShowSearchResults(false)}
        />

        {showSearchResults && searchedCategories.length > 0 && (
          <div className="absolute bg-white z-10 left-0 right-0 p-2 border rounded-xl space-y-2">
            {searchedCategories.map((item, index) => {
              return (
                <div key={index}>
                  <span key={index}>{item?.title}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
