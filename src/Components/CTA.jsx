import React from "react";
import Form from "./Form";

const CTA = () => {
  return (
    <div className="flex flex-col justify-center items-center my-10 px-5">
      <h1 className="text-white text-center">
        Ready to watch? Enter your email or mobile number to create or restart
        your membership.
      </h1>
      <div>
        <Form />
      </div>
    </div>
  );
};

export default CTA;
