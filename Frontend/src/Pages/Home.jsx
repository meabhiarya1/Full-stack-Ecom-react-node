import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      {/* left navbar */}
      <div className="bg-[#14628f] h-28 flex items-center justify-between">
        <div className="flex  items-center justify-center">
          <div className="mx-4 flex justify-center">
            <img
              src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo1-free-img-140x47.png"
              alt="logo"
              className="w-32 h-full"
            />
          </div>
          <div className="px-2 text-xl mx-2 font-bold">Home</div>
          <div className="px-2 text-xl mx-2 font-bold">Men</div>
          <div className="px-2 text-xl mx-2 font-bold">Women</div>
          <div className="px-2 text-xl mx-2 font-bold">Kids</div>
        </div>

        {/* right sidebar */}
        <div className="flex mx-4">
          <div className="flex items-center bg-white text-lg rounded-full mx-3">
            <input type="search" className="p-2 rounded-full border-0" placeholder="Search Here!!!" />
            <CiSearch style={{ color: "black", marginRight: "15px", cursor: "pointer" }} />
          </div>

          <div className="bg-[#14628f] border-2 flex items-center p-2 rounded-xl hover:bg-black mx-3">
            <button className="font-medium text-sm">Customer Login</button>
          </div>

          <div className="bg-[#14628f] border-2 flex items-center p-2 rounded-xl hover:bg-black mx-3">
            <button className="font-medium text-sm">Seller Login</button>
          </div>

          <div className="flex items-center text-3xl mx-2">
            <FaCartArrowDown style={{ cursor: "pointer" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

// https://websitedemos.net/brandstore-02/?customize=template
