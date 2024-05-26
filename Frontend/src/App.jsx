import { Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import LoginSuccess from "./Pages/LoginSuccess";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/loginsuccess" element={<LoginSuccess />} />
      <Route path="/Signup" element={<Signup />} />
    </Routes>
  );
}
