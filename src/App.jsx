import { Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
    </Routes>
  );
}
