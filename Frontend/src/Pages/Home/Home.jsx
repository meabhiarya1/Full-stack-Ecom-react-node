import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";

import { cartSliceActions } from "../../Store/cartReducer";
import "./scrollbar.css";
import NavBar from "../../Component/NavBar";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const productData = useSelector((state) => state.data);
  const cartData = useSelector((state) => state.cart);

  const handleProductClick = (id) => {
    navigate(`/productdetail/${id}`);
  };

  return (
    <div>
      {/* Navbar */}
      <NavBar />

      <div className="h-auto w-full flex ">
        {/* Left sidebar */}
        <div className="w-1/3 mx-2">
          <div className="flex font-semibold justify-center p-1 my-8 sm:text-sm bg-white text-black rounded-xl ml-2 text-xs">
            FILTERS
          </div>

          <div className="flex justify-between border-2 rounded-xl sm:p-2 p-1 items-center ml-2">
            <div className="flex justify-center ml-4 font-semibold sm:text-sm text-xs">
              Brand
            </div>
            <div className="sm:flex hidden">
              <CiSearch
                style={{
                  color: "white",
                  marginRight: "8px",
                  cursor: "pointer",
                  fontWeight: "bolder",
                  fontSize: "25px",
                }}
              />
            </div>
          </div>

          <div className="h-[200px] mt-4 overflow-y-scroll scrollbar-w-2 scrollbar-track-gray-200 scrollbar-thumb-gray-500">
            {[
              ...new Set(productData.map((product) => product.productBrand)),
            ].map((brand, index) => (
              <div key={index} className="flex justify-start my-3 items-center">
                <input
                  type="checkbox"
                  className="mx-2 w-3 sm:w-4 h-4 cursor-pointer"
                />
                <div className="sm:text-sm text-xs">{brand}</div>
              </div>
            ))}
          </div>

          <div className="flex justify-between border-2 rounded-xl sm:p-2 p-1 items-center ml-2 my-8">
            <div className="flex justify-center ml-4 font-semibold sm:text-sm text-xs">
              Price
            </div>
          </div>

          <div className="h-[200px] mt-4 overflow-y-scroll scrollbar-w-2 scrollbar-track-gray-200 scrollbar-thumb-gray-500">
            {[
              ...new Set(productData.map((product) => product.productPrice)),
            ].map((price, index) => (
              <div key={index} className="flex justify-start my-3 items-center">
                <input
                  type="checkbox"
                  className="mx-2 w-3 sm:w-4 h-4 cursor-pointer"
                />
                <div className="sm:text-sm text-xs">{price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="flex flex-wrap w-full justify-evenly items-center">
          {productData.map((product, index) => (
            <div
              key={index}
              onClick={() => handleProductClick(product.id)}
              className="border h-auto my-8 rounded-xl bg-white text-black sm:min-w-[18rem] max-w-[10rem] cursor-pointer hover:bg-gradient-to-b from-black to-transparent"
            >
              <div className="w-full flex items-center justify-center p-3">
                <img
                  className="sm:max-w-[15rem] sm:h-[15rem] rounded-xl shadow-xl shadow-regal-blue mb-4 max-w-[10rem] h-[10rem]"
                  src={product.productImage}
                  alt={product.productName}
                />
              </div>

              <div className="flex flex-start px-2 sm:font-bold font-semibold text-sm items-center justify-center">
                {product.productBrand}
              </div>

              <div className="flex p-1 pl-2 sm:font-semibold text-xs mb-2 h-8 justify-center ">
                {product.productName}
              </div>

              {/* <div>Category: {product.productCategory}</div>
              <div>Description: {product.productDesc}</div>
              <div>Price: {product.productPrice}</div>
              <div>Quantity: {product.productQuantity}</div> */}
            </div>
          ))}
        </div>
      </div>

      {/* <button
        onClick={() => {
          dispatch(cartSliceActions.addItem(1));
        }}
      >
        Display
      </button> */}
    </div>
  );
};

export default Home;
