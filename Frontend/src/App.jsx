import { Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Success from "./Pages/Success";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/loginsuccess"
        element={<Success name="Login success !!!" />}
      />
      <Route
        path="/contactsuccess"
        element={<Success name="We will reach out to you soon" />}
      />
      <Route
        path="/signupsuccess"
        element={<Success name="Signed up successfully" />}
      />
      <Route path="/Signup" element={<Signup />} />
    </Routes>
  );
}
