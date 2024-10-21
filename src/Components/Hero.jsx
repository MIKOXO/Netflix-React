import React from "react";
import Form from "./Form";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 flex flex-col justify-center items-center mt-16 sm:mt-32 lg:mt-60">
      <div className="flex flex-col text-white text-center">
        <h1 className="px-4 text-2xl font-bold mb-4 md:text-4xl lg:text-6xl">
          Unlimited movies, TV shows, and more
        </h1>
        <p className="px-4 text-base font-light py-1 lg:text-2xl">
          Watch anywhere. Cancel anytime.
        </p>
        <p className="px-4 text-base font-light lg:text-2xl">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
      </div>
      <div>
        <Form />
      </div>
    </section>
  );
};

export default Hero;
