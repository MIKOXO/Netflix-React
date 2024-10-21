import React from "react";
import Feature1 from "./Feature1";
import Feature2 from "./Feature2";
import feature1pic from "../Assets/feature-1.png";
import feature2pic from "../Assets/feature-2.png";
import feature3pic from "../Assets/feature-3.png";
import feature4pic from "../Assets/feature-4.png";

const Features = () => {
  return (
    <div>
      <Feature1
        header="Enjoy on your TV"
        description="Watch on Smart TVs,Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        image={feature1pic}
      />

      <div className="border border-b-[12px] border-BordedGray w-full" />

      <Feature2
        header="Download your shows to watch offline"
        description="Save your favorites easily and always have something to watch."
        image={feature2pic}
      />

      <div className="border border-b-[12px] border-BordedGray w-full" />

      <Feature1
        header="Watch everywhere"
        description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        image={feature3pic}
      />

      <div className="border border-b-[12px] border-BordedGray w-full" />

      <Feature2
        header="Create profiles for kids"
        description="Send kids on adventures with their favorite characters in a space made just for them—free with your membership"
        image={feature4pic}
      />

      <div className="border border-b-[12px] border-BordedGray w-full" />
    </div>
  );
};

export default Features;
