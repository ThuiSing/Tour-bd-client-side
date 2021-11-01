import axios from "axios";
import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = ({ showAll }) => {
  const [services, setServices] = useState([]);
  // console.log(showAll);
  useEffect(() => {
    axios
      .get("https://glacial-temple-73891.herokuapp.com/packages")
      .then((res) => setServices(res.data));
  }, []);
  return (
    <div className="container mx-auto py-12 px-3 md:px-0">
      {showAll ? (
        <div>
          <h3 className="text-4xl text-secondary font-bold uppercase">
            Our All Packages :
          </h3>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="font-medium text-btnTwo mb-2">choose your Packages</h2>
          <p className="text-2xl md:text-4xl text-secondary tracking-wider md:w-2/5 mx-auto font-bold uppercase">
            Select Your Best Package For Your Travel
          </p>
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-10 mt-10">
        {(showAll ? services : services.slice(0, 6)).map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
