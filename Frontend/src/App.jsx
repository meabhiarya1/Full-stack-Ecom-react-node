// import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import Signupseller from "./Pages/Signupseller";
import Loginseller from "./Pages/Loginseller";
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
