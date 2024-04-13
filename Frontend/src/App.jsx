// import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Customer/Login";
import Signup from "./Pages/Customer/Signup";
import Home from "./Pages/Home/Home";
import Signupseller from "./Pages/Seller/Signupseller";
import Loginseller from "./Pages/Seller/Loginseller";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { dataSliceActions } from "./Store/dataReducer";
import axios from "axios";

function App() {

  const dispatch = useDispatch()
  const dataState = useSelector(state => state)
  console.log(dataState)

  useEffect(() => {
    axios.get("http://localhost:5000/").then((response) => {

      dispatch(dataSliceActions.addData(response.data.product)) 
      // dispatch(cartSliceActions.addData(response.data.product)) 

    }).catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/sellerlogin" element={<Loginseller />} />
        <Route path="/sellersignup" element={<Signupseller />} />
      </Routes>
    </>
  );
}

export default App;
