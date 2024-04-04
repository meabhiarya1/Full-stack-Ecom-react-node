import React from "react";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa";
import { IoReorderThree } from "react-icons/io5";


const Home = () => {

  const navigate = useNavigate();

  return (
    <div >
      <div className="bg-[#14628f] md:rounded-b-xl  rounded-b-2xl">
        <div className="h-20 flex items-center justify-between w-[100vw] ">

          {/* left navbar */}
          <div className="flex items-center justify-center ">
            <div className="md:mx-4 ml-2 flex justify-center lg:w-24 h-full w-12 md:w-20">
              <img
                src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo1-free-img-140x47.png"
                alt="logo"
              />
            </div>

            <div className="p-2 text-sm md:mx-2 font-bold font-medium sm:font-medium md:text-[15px] hover:bg-black border-2 hover:cursor-pointer rounded-xl mr-1">
              Home
            </div>

            <div className="p-2 text-sm md:mx-2 font-bold font-medium sm:font-medium md:text-[15px] hover:bg-black border-2 hover:cursor-pointer rounded-xl mr-1">Men</div>
            <div className="p-2 text-sm md:mx-2 font-bold font-medium sm:font-medium md:text-[15px] hover:bg-black border-2 hover:cursor-pointer rounded-xl mr-1">Women</div>
            <div className="p-2 text-sm md:mx-2 font-bold font-medium sm:font-medium md:text-[15px] hover:bg-black border-2 hover:cursor-pointer rounded-xl">Kids</div>
          </div>

          {/* right sidebar */}
          <div className="flex mx-2">
            <div className="flex items-center bg-white md:text-sm rounded-full mx-1 sm:flex hidden">
              <input type="search" className="p-1 rounded-full border-0 text-black" placeholder="Search Here!!!" />
              <CiSearch style={{ color: "black", marginRight: "5px", cursor: "pointer" }} />
            </div>

            <div className="bg-[#14628f] border-2 flex items-center p-2 rounded-xl hover:bg-black mx-2 hover:cursor-pointer hidden lg:flex">
              <button className="font-medium text-sm" onClick={() => navigate("/login")}>Customer</button>
            </div>

            <div className="bg-[#14628f] flex items-center p-2 rounded-xl hover:bg-black mx-3 border-2  hover:cursor-pointer hidden lg:flex">
              <button className="font-medium text-sm" onClick={() => navigate("/sellerlogin")}>Seller</button>
            </div>

            <div className="flex items-center text-xl md:text-3xl mr-1 sm:flex hidden">
              <FaCartArrowDown style={{ cursor: "pointer" }} />
            </div>
            <div className="flex items-center text-3xl sm:hidden flex h-40">
              <IoReorderThree style={{ cursor: "pointer" }} />
            </div>
          </div>
        </div>

        <div className="flex items-center bg-white md:text-sm rounded-full sm:hidden bg-white mx-[2px]">
          <input type="search" className="p-1 rounded-full border-0 text-black w-full" placeholder="Search Here!!!" />
          <CiSearch style={{ color: "black", marginRight: "5px", cursor: "pointer" }} />
        </div>
      </div>
    </div>
  );
};

export default Home;

// https://websitedemos.net/brandstore-02/?customize=template
