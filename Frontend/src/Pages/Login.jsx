import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/login", {
      email: user.email,
      password: user.password,
    }).then((response) => {
      alert(response.data.message);
      setUser({
        email: "",
        password: "",
      });
      console.log(response.data);
      alert(response.data);
    }).catch(err => {
      console.log(err);
    });
  };
  

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
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
            Sign in to your account
          </p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                placeholder="john@example.com"
                className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500 p-1"
                required=""
                id="email"
                name="email"
                type="email"
                autoComplete="off"
                onChange={handleChange}
              />
              <label
                className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
                htmlFor="email" // Using htmlFor instead of for as per React's convention

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
                onChange={handleChange}
              />
              <label
                className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
              >
                Password
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
              <a className="text-sm text-purple-200 hover:underline" href="#">
                Forgot your password?
              </a>
            </div>
            <button
              className="w-full py-2 px-4 bg-purple-500 hover:bg-purple-700 rounded-md shadow-lg text-white font-semibold transition duration-200"
              type="submit"
            >
              Sign In
            </button>
          </form>

          <div className="text-center text-gray-300">
            Don't have an account?
            <span
              className="text-purple-300 hover:underline ml-2 mt-2"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
