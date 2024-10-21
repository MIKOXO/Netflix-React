import React from "react";
import logo from "../Assets/logo.png";

const Navbar = () => {
  return (
    <section className="container mx-auto flex flex-row justify-between items-center px-4 py-8 lg:px-32">
      <div>
        <img
          src={logo}
          className="w-[7rem] h-[2rem] sm:w-[9.25rem] sm:h-[2.5rem] "
        />
      </div>
      <div>
        <a
          href="#"
          className="bg-BrightRed px-6 py-2 text-white text-[18px] font-semibold outline-none rounded-lg hover:bg-DarkRed hover:ease-in-out duration-300"
        >
          Sign In
        </a>
      </div>
    </section>
  );
};

export default Navbar;
