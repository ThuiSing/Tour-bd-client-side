import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";

const MyServices = () => {
  const { user } = useAuth();
  const [myServices, setMyServices] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://glacial-temple-73891.herokuapp.com/bookedPackage?email=${user.email}`
      )
      .then((res) => {
        setMyServices(res.data);
        // console.log(res);
      });
  }, [user]);

  //cancel Booked packages
  const handleCancel = (id) => {
    // console.log(id);
    const confirm = window.confirm("Are you Sure to cancel this Booking ?");

    confirm &&
      axios
        .delete(
          `https://glacial-temple-73891.herokuapp.com/bookedPackage/${id}`
        )
        .then((res) => {
          if (res.data.deletedCount > 0) {
            alert("Deleted Successfully");
            const existServices = myServices.filter(
              (service) => service._id !== id
            );
            setMyServices(existServices);
          }
        });
  };
  return (
    <div className="container mx-auto py-12 px-3 md:px-0">
      <h3 className="text-2xl md:text-4xl text-secondary font-bold uppercase pb-8">
        My Ordered packages :
      </h3>
      {myServices.length < 0 ? (
        <div>
          <h2 className="text-xl text-red-500 font-bold">
            No Booking Package Found !
          </h2>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-y-5 gap-x-4  overflow-hidden">
          {myServices.map((service) => (
            <div
              key={service._id}
              className="flex flex-col mb-4 sm:mb-0 sm:flex-row border-2 rounded items-center "
            >
              <div className=" sm:w-1/3 mb-2 sm:mb-0">
                <img src={service.BookedPackage.img} alt="" />
              </div>
              <div className="px-4 sm:px-0 ml-5 sm:w-2/3 p-3 space-y-3 sm:space-y-1">
                <h3 className="text-2xl font-semibold uppercase flex items-center text-green-800">
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  {service.BookedPackage.name}
                </h3>
                <p className="text-gray-600">
                  {service.BookedPackage.description.slice(0, 110)}...
                </p>
                <h4 className="font-medium">
                  Status :
                  <span className="text-yellow-500"> {service.status}</span>
                </h4>
                <button
                  onClick={() => handleCancel(service._id)}
                  className="bg-btn text-secondary px-4 font-medium py-2"
                >
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyServices;
