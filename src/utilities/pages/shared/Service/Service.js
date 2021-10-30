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
        <h4 className="font-semibold text-xl ">${price}/per person</h4>
        <h3 className="text-3xl text-secondary font-bold ">
          <i className="fas fa-map-marker-alt mr-3 "></i>
          {name}
        </h3>
        <p>{description}</p>
        <h4 className="font-medium text-xl">
          <i className="fas fa-star text-yellow-500 mr-2"></i>
          {rating}+ Ratings
        </h4>
        <div className="text-right">
          <Link to={`/register-booking/${_id}`}>
            <button className="bg-btn text-btn font-semibold rounded-md px-6 py-3 mt-2">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
