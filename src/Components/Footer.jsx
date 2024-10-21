import React from "react";
import { LinkSet1, LinkSet2, LinkSet3, LinkSet4 } from "../Constants/Data";
import { FaCaretDown } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col list-none container mx-auto mt-24 mb-10">
      <li className="text-LinkGray underline ml-8 ">Questions? Contact us.</li>
      <div className="grid grid-cols-1 ml-8 gap-5 mt-7 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <ul className="space-y-3">
            {LinkSet1.map((link, index) => (
              <li key={index} className="text-LinkGray underline">
                <a href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="space-y-3">
            {LinkSet2.map((link, index) => (
              <li key={index} className="text-LinkGray underline">
                <a href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="space-y-3">
            {LinkSet3.map((link, index) => (
              <li key={index} className="text-LinkGray underline">
                <a href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="space-y-3">
            {LinkSet4.map((link, index) => (
              <li key={index} className="text-LinkGray underline">
                <a href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button className="mt-10 ml-7 border-2 border-gray-500 w-[120px] rounded-lg py-2 px-5 text-white flex items-center gap-2">
        <span>English</span>
        <FaCaretDown />
      </button>
      <p className="text-LinkGray mt-8 ml-7">Netflix Ethiopia</p>
    </div>
  );
};

export default Footer;
