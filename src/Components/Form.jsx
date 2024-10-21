import React from "react";

const Form = () => {
  return (
    <div className="container mx-auto flex flex-col mt-4 items-center lg:flex lg:flex-row">
      <div className="w-[17rem] sm:w-[30rem]">
        <input
          required
          type="email"
          placeholder="Email Address"
          className={`px-5 py-3 text-xl bg-transparent backdrop-blur-md border border-gray-500 text-white font-medium rounded-md w-full lg:py-6`}
        />
      </div>
      <div className="mt-4 lg:mt-0">
        <a
          href="#"
          className={`bg-BrightRed px-5 py-2 text-white font-semibold text-2xl rounded-md lg:ml-4 lg:py-[21px] lg:px-14 hover:bg-DarkRed hover:ease-in-out duration-300`}
        >
          Get Started {">"}
        </a>
      </div>
    </div>
  );
};

export default Form;
