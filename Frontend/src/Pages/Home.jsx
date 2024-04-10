import React from "react";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa";
import { IoReorderThree } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { cartSliceActions } from "../Store/cartReducer";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const productData = useSelector((state) => state.data);
  const cartData = useSelector((state) => state.cart);

  console.log(productData);

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

          {/* right sidebar */}
          <div className="flex mx-4">
            <div className="items-center bg-white md:text-sm rounded-full mx-1 sm:flex hidden">
              <input
                type="search"
                className="p-1 rounded-full border-0 text-black"
                placeholder="Search Here!!!"
              />
              <CiSearch
                style={{
                  color: "black",
                  marginRight: "5px",
                  cursor: "pointer",
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
            className="p-1 rounded-full border-0 text-black w-full"
            placeholder="Search Here!!!"
          />
          <CiSearch
            style={{ color: "black", marginRight: "5px", cursor: "pointer" }}
          />
        </div>
      </div>

      <div className="h-auto w-full flex ">
        <div className="w-1/3 mx-2">abhishek</div>
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

      <button
        onClick={() => {
          dispatch(cartSliceActions.addItem(1));
        }}
      >
        Display
      </button>
    </div>
  );
};

export default Home;
