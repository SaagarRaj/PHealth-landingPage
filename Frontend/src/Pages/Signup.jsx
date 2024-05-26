import { useState } from "react";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import { Url } from "./Url";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [merchantId, setMerchantId] = useState("NA");
  const navigate = useNavigate();
  const handleCheckBox = (event) => {
    setIsChecked(event.target.checked);
  };
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(Url + "/auth/signup", {
        username,
        email,
        merchantId,
        password,
      });
      navigate("/signupsuccess");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
        <nav className=" flex items-center justify-between px-4 md:px-[100px] py-3 font-poppins shadow-md ">
          <h1 className="md:text-lg text-bold  font-semibold">
            <Link to="/">PHealth</Link>
          </h1>
          <div className=" flex items-center justify-center space-x-2 md:space-x-4 text-sm">
            <h3 className="cursor-pointer px-3">
              <Link to="/login">Login</Link>
            </h3>
          </div>
        </nav>

        <div className="w-full flex justify-center items-center h-[80vh]  ">
          <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%] p-3 pt-4 pb-4 rounded-xl shadow-[0_0_2px_rgba(255,255,255,0.5),inset_0_0_2px_rgba(255,255,255,0.5),0_0_5px_rgba(255,255,255,0.5),0_0_15px_rgba(255,255,255,0.5),0_0_30px_rgba(255,255,255,0.5)]">
            <h1 className="text-xl font-bold  "> Create an account </h1>
            <div className="flex justify-center items-center space-x-3 ">
              <label className="relative flex justify-between items-center group">
                Merchant account ?
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckBox}
                  className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md"
                />
                <span className="w-12 h-5 flex items-center flex-shrink-0 ml-4 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-green-400 after:w-4 after:h-4 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6 group-hover:after:translate-x-1"></span>
              </label>
            </div>

            <input
              className="w-full px-4 py-2 border-2 border-black outline-0 rounded-tl-lg rounded-tr-lg text-black"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your usename"
            />
            {isChecked && (
              <>
                <input
                  className="w-full px-4 py-2 border-2 border-black outline-0  text-black"
                  type="text"
                  placeholder="Enter Merchant Id"
                  onChange={(e) => setMerchantId(e.target.value)}
                />
              </>
            )}
            <input
              className="w-full px-4 py-2 border-2 border-black outline-0  text-black"
              type="email"
              placeholder="Enter your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="w-full px-4 py-2 border-2 border-black outline-0 rounded-bl-lg rounded-br-lg  text-black"
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="w-full px-4 py-2.5 text-lg font-thin text-white bg-black rounded-bl-lg rounded-br-lg hover:bg-gray-100 hover:text-black"
              onClick={handleClick}
            >
              Sign up
            </button>
          </div>
        </div>
        <div className="h-[20vh]">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Signup;
