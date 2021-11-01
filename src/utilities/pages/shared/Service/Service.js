import React from "react";
import { Link } from "react-router-dom";
import "./service.css";

const Service = ({ service }) => {
  //   console.log(service);
  const { _id, name, img, description, price, rating } = service;
  return (
    <div className="service-card border transform bg-white pb-10 rounded-md shadow-md">
      <div className="overflow-hidden ">
        <img
          className="mx-auto service-card-img transition duration-500"
          src={img}
          alt=""
        />
      </div>
      <div className="lg:mx-14 mt-4 space-y-2">
        <h4 className="font-semibold text-md md:text-xl ">
          ${price}/per person
        </h4>
        <h3 className="text-2xl md:text-3xl text-secondary font-bold ">
          <i className="fas fa-map-marker-alt mr-3 "></i>
          {name}
        </h3>
        <p className="text-sm md:text-md">{description}</p>
        <h4 className="font-medium text-md md:text-xl">
          <i className="fas fa-star text-yellow-500 mr-2"></i>
          {rating}+ Ratings
        </h4>
        <div className="md:text-right text-center">
          <Link to={`/register-booking/${_id}`}>
            <button className="bg-btn text-btn font-semibold py-1 px-2 rounded-md md:px-6 md:py-3 mt-2">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
