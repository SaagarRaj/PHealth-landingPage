import Footer from "./components/Footer";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
        <nav className=" flex items-center justify-between px-4 md:px-[100px] py-3 font-poppins shadow-md ">
          <h1 className="md:text-lg text-bold  font-semibold">
            {" "}
            <Link to="/">PHealth</Link>
          </h1>
          <div className=" flex items-center justify-center space-x-2 md:space-x-4 text-sm">
            <h3 className="cursor-pointer px-3">
              <Link to="/signup">Signup</Link>
            </h3>
          </div>
        </nav>
        <div className="w-full flex justify-center items-center h-[80vh] ">
          <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%] p-4 rounded-xl shadow-[0_0_2px_rgba(255,255,255,0.5),inset_0_0_2px_rgba(255,255,255,0.5),0_0_5px_rgba(255,255,255,0.5),0_0_15px_rgba(255,255,255,0.5),0_0_30px_rgba(255,255,255,0.5)]">
            <h1 className="text-xl font-bold  "> Log in to your account </h1>
            <input
              className="w-full px-4 py-2 border border-black outline-0 rounded-tl-lg rounded-tr-lg text-black"
              type="email"
              placeholder="Enter your e-mail"
            />
            <input
              className="w-full text-black px-4 py-2 border border-black outline-0"
              type="password"
              placeholder="Enter your password"
            />
            <button className="w-full px-4 py-2.5 text-lg font-thin text-white bg-black rounded-bl-lg rounded-br-lg hover:bg-gray-100 hover:text-black">
              Log in
            </button>

            <div className="flex justify-center items-center space-x-3 ">
              <p> New Here ?</p>
              <p className="text-white hover:text-black">
                <Link to="/signup">Signup</Link>
              </p>
            </div>
          </div>
        </div>

        <div className="h-[20vh] mt-8">
          <Footer />{" "}
        </div>
      </div>
    </>
  );
};

export default Login;
