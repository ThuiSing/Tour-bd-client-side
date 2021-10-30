import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";

const RegisterBooking = () => {
  const [service, setService] = useState({});
  const { user } = useAuth();
  const { id } = useParams();
  const history = useHistory();
  // const [showModal, setShowModal] = useState(false);
  // const [bookPackage, setBookpackage] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // load data
  useEffect(() => {
    axios
      .get(`https://glacial-temple-73891.herokuapp.com/packages/${id}`)
      .then((res) => {
        setService(res.data);
      });
  }, []);

  const onSubmit = (data) => {
    const confirm = window.confirm("Are You sure to Book?");
    data.status = "pending";
    data.BookedPackage = service;

    confirm &&
      axios
        .post("https://glacial-temple-73891.herokuapp.com/bookedPackage", data)
        .then((res) => {
          if (res.data.insertedId) {
            alert("Successfully booked");
            history.push("/myPackages");
            console.log(data);
          }
        });
  };
  // console.log(bookPackage);

  return (
    <div className="grid grid-cols-2 container mx-auto">
      <div>
        <div>
          <img src={service.img} alt="" />
        </div>
        <div>
          <h2>{service.name}</h2>
          <h2>{service.description}</h2>
          <h2>{service.price}</h2>
        </div>
      </div>
      <div className="p-2 bg-red-100">
        <h3 className="font-semibold text-2xl my-4">Book This Package</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="font-medium">Name </label>
            <input
              className="bg-gray-100 w-full p-3"
              defaultValue={user.displayName}
              {...register("name")}
              placeholder="Enter Name"
            />
          </div>
          <div>
            <label className="font-medium">Email </label>

            <input
              className="bg-gray-100 w-full p-3"
              type="email"
              defaultValue={user.email}
              {...register("email", { required: true })}
              placeholder="Enter Email"
            />
            <span className="text-red-500">
              {errors.email?.type === "required" && "Email is required"}
            </span>
          </div>
          <div>
            <label className="font-medium">Name </label>
            <input
              className="bg-gray-100 w-full p-3"
              type="number"
              {...register("number", { required: true })}
              placeholder="Enter number"
            />
            <span className="text-red-500">
              {errors.number?.type === "required" && "Number is required"}
            </span>
          </div>
          <div>
            <label className="font-medium">Ordered package Name </label>
            <input
              className="bg-gray-100 w-full p-3"
              defaultValue={service.name}
              {...register("packageName", { required: true })}
              placeholder="Enter package Name"
            />
            <span className="text-red-500">
              {errors.packageName?.type === "required" &&
                "package Name is required"}
            </span>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="font-medium bg-btn text-secondary px-5 py-3 rounded-sm"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
      {/*  {showModal && (
        <div className="modal-bg absolute w-full h-full top-0 -left-0 flex justify-center items-center">
          <div className="bg-secondary py-12 px-5 rounded-md shadow-2xl">
            <h2 className="text-3xl font-semibold uppercase">
              Are you sure to Booking ?
            </h2>
            <div className="text-right mt-7">
              <button
                onClick={() => setBookpackage(true)}
                className=" bg-btn text-secondary px-3 py-2 mr-3"
              >
                Confirm
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-btn text-secondary px-3 py-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default RegisterBooking;
