import { Link } from "react-router-dom";
const LoginSuccess = () => {
  return (
    <>
      <nav className=" flex items-center justify-between px-4 md:px-[100px] py-3 font-poppins shadow-md ">
        <h1 className="md:text-lg text-bold text-white font-semibold">
          <Link to={"/"}>PHealth</Link>
        </h1>
        <div className=" flex items-center justify-center space-x-2 md:space-x-4 text-sm"></div>
      </nav>

      <div>
        <section>
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <h1 className=" mb-4 text-4xl font-thin text-white md:text-5xl lg:text-6xl">
              Login Success !!!!
            </h1>
          </div>
        </section>
      </div>
    </>
  );
};

export default LoginSuccess;
