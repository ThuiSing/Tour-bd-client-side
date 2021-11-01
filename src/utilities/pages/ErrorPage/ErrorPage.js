import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="py-24 flex justify-center items-center">
      <div className="text-center">
        <h3 className="font-bold text-5xl md:text-7xl text-secondary">
          404 Error !
        </h3>
        <h4 className="text-2xl md:text-3xl mt-6">Sorry, Page not found</h4>
        <Link to="/">
          <button className="px-8 py-3 bg-btn text-btn mt-4 font-medium rounded">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
