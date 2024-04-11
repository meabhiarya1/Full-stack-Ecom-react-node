import React from "react";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa";
import { IoReorderThree } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { cartSliceActions } from "../Store/cartReducer";
import "./scrollbar.css";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const productData = useSelector((state) => state.data);
  const cartData = useSelector((state) => state.cart);

  // console.log(productData);

  return (
    <div>
      <div className="bg-[#14628f] md:rounded-b-xl  rounded-b-2xl">
        <div className="h-20 flex items-center justify-between w-full ">
          {/* left navbar */}
          <div className="flex items-center justify-center ">
            <div className="md:mx-4 ml-2 flex justify-center lg:w-24 h-full w-12 md:w-20">
              <img
                src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo1-free-img-140x47.png"
                alt="logo"
              />
            </div>

            <div className="p-2 text-sm md:mx-2 font-bold sm:font-medium md:text-[15px] hover:bg-black border-2 hover:cursor-pointer rounded-xl mr-1">
              Home
            </div>

            <div className="p-2 text-sm md:mx-2 font-bold  sm:font-medium md:text-[15px] hover:bg-black border-2 hover:cursor-pointer rounded-xl mr-1">
              Men
            </div>
            <div className="p-2 text-sm md:mx-2 font-bold  sm:font-medium md:text-[15px] hover:bg-black border-2 hover:cursor-pointer rounded-xl mr-1">
              Women
            </div>
            <div className="p-2 text-sm md:mx-2 font-bold sm:font-medium md:text-[15px] hover:bg-black border-2 hover:cursor-pointer rounded-xl">
              Kids
            </div>
          </div>

          {/* right navbar */}
          <div className="flex mx-4">
            <div className="items-center bg-white md:text-sm rounded-xl mx-1 sm:flex hidden cursor-pointer">
              <input
                type="search"
                className="p-1 m-1 rounded-xl no-border outline-none text-black"
                placeholder="Search Here!!!"
              />
              <CiSearch
                style={{
                  color: "black",
                  marginRight: "8px",
                  cursor: "pointer",
                  fontWeight: "bolder",
                  fontSize: "1.5rem",
                }}
              />
            </div>

            <div className="bg-[#14628f] border-2 items-center p-2 rounded-xl hover:bg-black mx-2 hover:cursor-pointer hidden lg:flex">
              <button
                className="font-medium text-sm"
                onClick={() => navigate("/login")}
              >
                Customer
              </button>
            </div>

            <div className="bg-[#14628f] items-center p-2 rounded-xl hover:bg-black mx-3 border-2  hover:cursor-pointer hidden lg:flex">
              <button
                className="font-medium text-sm"
                onClick={() => navigate("/sellerlogin")}
              >
                Seller
              </button>
            </div>

            <div className=" items-center text-xl md:text-3xl mr-1 sm:flex hidden">
              <FaCartArrowDown style={{ cursor: "pointer" }} />
            </div>
            <div className=" items-center text-3xl sm:hidden flex h-40">
              <IoReorderThree style={{ cursor: "pointer" }} />
            </div>
          </div>
        </div>

        <div className="flex items-center bg-white md:text-sm rounded-full sm:hidden mx-[2px]">
          <input
            type="search"
            className="p-1 rounded-full border-0 text-black w-full ml-3 outline-none"
            placeholder="Search Here!!!"
          />
          <CiSearch
            style={{
              color: "black",
              marginRight: "8px",
              cursor: "pointer",
              fontWeight: "bolder",
              fontSize: "1.5rem",
            }}
          />
        </div>
      </div>

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
              className="border h-auto my-8 rounded-xl bg-white text-black sm:min-w-[18rem] max-w-[10rem]"
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

              <div className="flex p-1 pl-2 sm:font-semibold text-xs mb-3 h-8 justify-center ">
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
