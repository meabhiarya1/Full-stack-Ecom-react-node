// import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import Signupseller from "./Pages/Signupseller";
import Loginseller from "./Pages/Loginseller";

function App() {
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
