import React from "react";
import "./whyus.css";
import travelerIcon from "../../../images/icon/traveller.svg";
import experienceIcon from "../../../images/icon/experience.svg";

const WhyUs = () => {
  return (
    <div className="whyUs py-14 mt-12 px-3 md:px-0">
      <div className="text-center mb-8">
        <h2 className="text-md md:text-2xl font-medium ">Why Us ?</h2>
        <h2 className="text-xl md:text-4xl font-semibold text-secondary md:w-1/3 mx-auto mt-2">
          Why You Are Travel With TourBD
        </h2>
      </div>
      <div className="container mx-auto grid md:grid-cols-4 gap-5">
        <div className="bg-primary text-primary text-center py-8 rounded">
          <i className="fas fa-hands-helping text-8xl mb-5"></i>
          <h3 className="text-2xl md:text-3xl font-semibold">
            100% Trusted Travel Agency
          </h3>
        </div>
        <div className="bg-primary text-primary text-center py-8 rounded">
          <i className="fas fa-globe-asia text-8xl mb-5"></i>
          <h3 className="text-2xl md:text-3xl font-semibold">
            1500+ Worldwide Our Guide
          </h3>
        </div>
        <div className="bg-primary text-primary text-center py-8 rounded">
          <img className="mx-auto mb-5" src={experienceIcon} alt="" />
          <h3 className="text-2xl md:text-3xl font-semibold">
            5+ Years of Travel Experience
          </h3>
        </div>
        <div className="bg-primary text-primary text-center py-8 rounded">
          <img className="mx-auto mb-5" src={travelerIcon} alt="" />
          <h3 className="text-2xl md:text-3xl font-semibold">
            91% of Our Traveller Are Happy
          </h3>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
