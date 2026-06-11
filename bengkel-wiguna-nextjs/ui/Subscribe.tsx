// components/ui/Newsletter.tsx
"use client";

import React, { useState } from "react";

const Subscribe: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      alert("Please enter an email address.");
      return;
    }
    alert(`Subscribed with ${email}!`);
    setEmail("");
  };

  return (
    <div
      className="bg-[linear-gradient(to_bottom,#98fcff,#d7e0ff)] dark:bg-none dark:bg-gray-800 rounded-xl lg:p-8 p-5 flex flex-col mb-2 aos-init aos-animate mb-6"
      data-aos="zoom-in"
      data-aos-delay="0"
      data-aos-duration="300"
    >
      <div className="flex flex-col p-2">
        <span className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-2 leading-tight">
          Our Subscribe delivers fresh updates to your inbox
        </span>
        <p className="text-gray-700 font-medium text-[17px]">
          A weekly digest to help you of latest news, articles and resources
        </p>
        <div className="flex flex-col gap-2 mt-4 mb-3">
          <input
            type="text"
            placeholder="Enter email address."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 rounded-md bg-white text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSubscribe}
            className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 border-0 rounded-md text-base font-medium transition-colors duration-300"
          >
            <span>Subscribe</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
