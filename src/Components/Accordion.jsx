import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Accordion = ({ Question, Answer }) => {
  const [accordionOpener, setAccordionOpener] = useState(false);

  return (
    <section className="container mx-auto">
      <div className="px-5">
        <button
          onClick={() => setAccordionOpener(!accordionOpener)}
          className="bg-BrightGray px-3 py-7 mt-2 w-full flex flex-row justify-between items-center hover:bg-FAQGray hover:ease-in-out duration-300"
        >
          <h1 className="text-white text-lg ml-4 text-left sm:text-2xl">
            {Question}
          </h1>
          {accordionOpener ? (
            <FaMinus className="text-2xl text-white mr-3" />
          ) : (
            <FaPlus className="text-2xl text-white mr-3" />
          )}
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
            accordionOpener
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden text-white bg-BrightGray mt-[2px]">
            <p className="mx-7 py-7 text-base font-light text-justify sm:text-lg">
              {Answer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accordion;
