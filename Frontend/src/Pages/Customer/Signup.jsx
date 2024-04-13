import React, { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();

  // const nameRef = useRef(null)
  // const emailRef = useRef(null)
  // const passwordRef = useRef(null)
  // const numberRef = useRef(null)

  const [userDetails, setUserdetails] = useState({
    name: "",
    email: "",
    password: "",
    number: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/adduser", {
      name: userDetails.name,
      email: userDetails.email,
      password: userDetails.password,
      number: userDetails.number
    }).then((response) => {
      setUserdetails({
        name: "",
        email: "",
        password: "",
        number: ""
      })

      console.log(response)
      alert(response.data)
    }).catch(err => {
      console.log(err)
    })
  }

  // console.log(userDetails)

  const handleChange = (e) => {
    // console.log(e.target.name)
    setUserdetails({
      ...userDetails,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="flex justify-center items-center h-screen ">
      <div
        style={{ animation: "slideInFromLeft 1s ease-out" }}
        className="max-w-md w-full bg-gradient-to-r from-blue-800 to-purple-600 rounded-xl shadow-2xl overflow-hidden p-8 space-y-8 text-center"
      >
        <h2
          style={{ animation: "appear 2s ease-out" }}
          className="text-center text-4xl font-extrabold text-white"
        >
          Welcome
        </h2>
        <p
          style={{ animation: "appear 3s ease-out" }}
          className="text-center text-gray-200"
        >
          Sign up your account
        </p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              placeholder="john"
              className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500 p-1"
              required=""
              id="name"
              name="name"
              type="text"
              autoComplete="off"
              // ref={nameRef}
              onChange={handleChange}
              value={userDetails.name}
            />
            <label
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
            >
              Your Name
            </label>
          </div>

          <div className="relative">
            <input
              placeholder="john@example.com"
              className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500 p-1"
              required=""
              id="email"
              name="email"
              type="email"
              autoComplete="off"
              // ref={emailRef}
              onChange={handleChange}
              value={userDetails.email}
            />
            <label
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
            >
              Email address
            </label>
          </div>

          <div className="relative">
            <input
              placeholder="Password"
              className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500 p-1"
              required=""
              id="password"
              name="password"
              type="password"
              autoComplete="off"
              // ref={passwordRef}
              onChange={handleChange}
              value={userDetails.password}
            />
            <label
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
              htmlFor="password"
            >
              Password
            </label>
          </div>

          <div className="relative">
            <input
              placeholder="number"
              className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500 p-1"
              required=""
              id="number"
              name="number"
              type="number"
              autoComplete="off"
              // ref={numberRef}
              onChange={handleChange}
              value={userDetails.number}
            />
            <label
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
              htmlFor="password"
            >
              Mobile Number
            </label>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-200">
              <input
                className="form-checkbox h-4 w-4 text-purple-600 bg-gray-800 border-gray-300 rounded"
                type="checkbox"
              />
              <span className="ml-2">Remember me</span>
            </label>
          </div>
          <button
            className="w-full py-2 px-4 bg-purple-500 hover:bg-purple-700 rounded-md shadow-lg text-white font-semibold transition duration-200"
            type="submit"
          >
            Sign Up
          </button>
        </form>

        <div className="text-center text-gray-300">
          Already have an autoComplete?
          <span
            className="text-purple-300 hover:underline ml-2 mt-2"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
