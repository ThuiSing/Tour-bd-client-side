import React from "react";
import { useForm } from "react-hook-form";

const ContactUs = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div
      id="contactUs"
      className="py-12 mt-10 container mx-auto grid md:grid-cols-2 px-3 md:px-0"
    >
      <div className="space-y-4">
        <h2 className=" text-2xl md:text-3xl font-semibold">Get in touch</h2>
        <p className="text-sm md:text-md">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          cum quas, aliquid, id voluptatem harum quo optio minus architecto
          distinctio excepturi sint quis ex dicta, voluptas dolorem iusto rerum
          fugiat?
        </p>
        <div className="flex items-center py-3">
          <div>
            <i className="far fa-clock text-5xl md:text-6xl"></i>
          </div>
          <div className="ml-3">
            <h3 className="text-xl md:text-2xl font-semibold text-secondary">
              Open Hour
            </h3>
            <h3 className="text-md md:text-xl text-gray-700">sat - Thus At</h3>
            <h4 className="text-md md:text-xl text-gray-700">
              9.00 am - 10.00pm
            </h4>
          </div>
        </div>
        <div className="flex items-center py-3">
          <div>
            <i className="far fa-clock text-5xl md:text-6xl"></i>
          </div>
          <div className="ml-3">
            <h3 className="text-xl md:text-2xl font-semibold text-secondary">
              Close Hour
            </h3>
            <h3 className="text-md md:text-xl text-gray-700">
              Friday Office Close
            </h3>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl mt-8 md:mt-0 md:text-3xl font-semibold mb-8">
          Message us
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row justify-between">
            <input
              className="md:w-1/2 border p-3 border-gray-400"
              {...register("name")}
              placeholder="Name"
            />
            <input
              className="md:w-1/2 md:ml-4 mt-8 md:mt-0 border border-gray-400 p-3"
              {...register("email", { required: true })}
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between mt-8">
            <input
              className="md:w-1/2 border p-3 border-gray-400"
              {...register("subject")}
              placeholder="subject"
            />
            <input
              type="number"
              className="md:w-1/2 md:ml-4 mt-8 md:mt-0 border border-gray-400 p-3"
              {...register("phone", { required: true })}
              placeholder="phone"
            />
          </div>
          <textarea
            className="w-full border border-gray-400 p-3 mt-8 h-56"
            {...register("message", { required: true })}
            placeholder="message"
          />
          <div className="text-right mt-8">
            <input
              className="px-3 py-2 md:px-7 md:py-3 bg-btn text-secondary font-medium hover:bg-primary hover:text-btnTwo transition-all"
              type="submit"
              value="Message"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
