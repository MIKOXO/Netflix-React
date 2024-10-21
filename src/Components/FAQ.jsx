import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className="mt-24">
      <h1 className="mb-10 text-center text-3xl text-white font-bold pb-4 sm:text-5xl">
        Frequently Asked Questions
      </h1>
      <Accordion
        Question="What is Netflix ?"
        Answer="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
      />
      <Accordion
        Question="How much does Netflix cost ?"
        Answer="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD 2.99 to USD 9.99 a month. No extra costs, no contracts."
      />
      <Accordion
        Question="Where can I watch Netflix ?"
        Answer="Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
      />
      <Accordion
        Question="How do I cancel ?"
        Answer="Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
      />
      <Accordion
        Question="What can I watch on Netflix ?"
        Answer="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
      />
      <Accordion
        Question="Is Netflix good for kids ?"
        Answer="The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space."
      />
    </div>
  );
};

export default FAQ;
