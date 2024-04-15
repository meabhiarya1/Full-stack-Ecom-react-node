import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa";
import { IoReorderThree } from "react-icons/io5";
import { useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { FaPlus } from "react-icons/fa6";
import axios from "axios";
import { FaMinus } from "react-icons/fa";

const NavBar = () => {
  const navigate = useNavigate();

  const [userId, setUserId] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCartdownOpen, setIsCartdownOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    // console.log(token)
    const verifyToken = async () => {
      try {
        const response = await axios.post("http://localhost:5000/verify", {
          token,
        });
        const userId = response.data.userId;
        // console.log(userId);
        setUserId(userId);
        // console.log(userId);
      } catch (error) {
        console.log(error);
      }
    };
    verifyToken();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUserId(false);
    setIsDropdownOpen(false);
  };

  const handleCartMouseEnter = () => {
    setIsCartdownOpen(true);
    setIsDropdownOpen(false); // Close profile dropdown
  };

  const handleProfileMouseEnter = () => {
    setIsDropdownOpen(true);
    setIsCartdownOpen(false); // Close cart dropdown
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
    setIsCartdownOpen(false);
  };

  return (
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
          {/* search box */}
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

          {/* customer */}
          {!userId && (
            <div className="bg-[#14628f] border-2 items-center p-2 rounded-xl hover:bg-black mx-2 hover:cursor-pointer hidden lg:flex">
              <button
                className="font-medium text-sm"
                onClick={() => navigate("/login")}
              >
                Customer
              </button>
            </div>
          )}

          {/* seller */}
          {!userId && (
            <div className="bg-[#14628f] items-center p-2 rounded-xl hover:bg-black mx-3 border-2  hover:cursor-pointer hidden lg:flex">
              <button
                className="font-medium text-sm"
                onClick={() => navigate("/sellerlogin")}
              >
                Seller
              </button>
            </div>
          )}

          <div className="relative flex">
            {/* cart */}
            <div
              className="justify-center items-center text-xl md:text-3xl mx-2 sm:flex hidden "
              onMouseEnter={handleCartMouseEnter}
            >
              <FaCartArrowDown style={{ cursor: "pointer" }} />
            </div>

            {isCartdownOpen && (
              <div
                className="absolute right-0 mt-11 w-48 bg-white rounded-lg mr-2 flex justify-center"
                onMouseEnter={handleCartMouseEnter}
              >
                <div className="py-1 rounded-lg flex ">
                  {/* Product link */}
                  <div
                    className="flex px-4 py-2 text-gray-800 hover:bg-gray-200 w-[100%] font-semibold items-center justify-center rounded-lg"
                    onMouseLeave={handleMouseLeave}
                  >
                    <FaMinus className="mr-2 hover:bg-gray-400 w-6 h-6" />
                    <div className="mr-1 ">Product</div>
                    <FaPlus className="ml-1 hover:bg-gray-400 w-6 h-6" />
                  </div>
                  {/* <div className="bg-gray-200 w-[100%] h-[1px]"></div> */}
                </div>
              </div>
            )}
          </div>

          <div className="relative flex">
            {userId && (
              <div
                className="items-center text-xl md:text-3xl mx-2 mt-1 sm:flex hidden"
                onMouseEnter={handleProfileMouseEnter}
              >
                <CgProfile style={{ cursor: "pointer" }} />
              </div>
            )}

            {isDropdownOpen && (
              <div className="absolute right-0 mt-12 w-48 bg-white rounded-lg mr-2">
                <div className="py-1 rounded-lg">
                  {/* Profile link */}
                  <button
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-[100%] font-semibold"
                    onMouseEnter={handleProfileMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    Profile
                  </button>
                  <div className="bg-gray-200 w-[100%] h-[1px]"></div>
                  {/* Logout link */}
                  <button
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-[100%] font-semibold"
                    onMouseEnter={handleProfileMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
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
  );
};

export default NavBar;
