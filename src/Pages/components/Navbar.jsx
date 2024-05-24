import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between px-4 md:px-[100px] py-3 font-poppins shadow-md ">
      <h1 className="md:text-lg text-bold  font-semibold">PHealth</h1>
      <div className=" flex items-center justify-center space-x-2 md:space-x-4 text-sm">
        <h3 className="cursor-pointer px-3">
          <Link to="/signup">Signup</Link>
        </h3>
        <h3 className="cursor-pointer px-3">
          <Link to="/login">Login</Link>
        </h3>
      </div>
    </nav>
  );
};

export default Navbar;
