import React from "react";

const Feature2 = (featureProp) => {
  return (
    <section className="container mx-auto px-4 my-24">
      <div className="flex flex-col-reverse justify-center items-center gap-12 lg:gap-0 lg:flex lg:flex-row">
        <div className="w-[100%] justify-center items-center flex lg:w-[50%]">
          <img src={featureProp.image} className="w-3/4" />
        </div>
        <div className="flex flex-col text-center text-white w-[100%] lg:text-left lg:w-[50%]">
          <h1 className="text-4xl px-3 py-3 font-semibold lg:px-10 lg:text-5xl">
            {featureProp.header}
          </h1>
          <p className="text-xl px-5 py-3 font-normal lg:max-w-[470px] lg:px-10">
            {featureProp.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Feature2;
