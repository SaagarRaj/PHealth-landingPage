import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import Contact from "./components/Contact";
const Home = () => {
  return (
    <div className=" bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
      <Navbar />
      <div className=" flex-col justify-center px-8 md:px-[100px] min-h-[90vh]">
        <p className="font-poppins w-full md:text-8xl mt-[100px] font-bold text-center text-4xl ">
          PHealth
        </p>
        <p className="font-poppin mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="m-5 p-5">
          <Cards />
        </div>
        <div>
          <Contact />
        </div>
      </div>

      <div className="px-8 h-[10vh]  border-white">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
