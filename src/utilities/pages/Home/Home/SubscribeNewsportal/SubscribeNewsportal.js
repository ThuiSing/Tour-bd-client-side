import React from "react";
import "./newsletter.css";

const SubscribeNewsportal = () => {
  return (
    <div className="newsletter md:w-2/3 mx-auto text-center px-4 bg-secondary md:relative left-0 right-0 py-20 rounded-2xl mb-12 md:mb-0">
      <h2 className="text-xl md:text-4xl font-semibold text-secondary">
        Subscribe To Our Newsletter For Latest Update
      </h2>
      <div className="mt-8">
        <input
          className="w-1/2 px-3 py-3 outline-none"
          type="text"
          placeholder="Enter your Email"
        />
        <input
          className="bg-primary text-white px-3 py-3 font-medium"
          type="submit"
          value="Subscribe"
        />
      </div>
    </div>
  );
};

export default SubscribeNewsportal;
