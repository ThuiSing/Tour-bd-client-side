import React from "react";
import { useForm } from "react-hook-form";

const ContactUs = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div
      id="contactUs"
      className="py-12 mt-10 container mx-auto grid grid-cols-2"
    >
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold">Get in touch</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          cum quas, aliquid, id voluptatem harum quo optio minus architecto
          distinctio excepturi sint quis ex dicta, voluptas dolorem iusto rerum
          fugiat?
        </p>
        <div className="flex items-center py-3">
          <div>
            <i className="far fa-clock text-6xl"></i>
          </div>
          <div className="ml-3">
            <h3 className="text-2xl font-semibold text-secondary">Open Hour</h3>
            <h3 className="text-xl text-gray-700">sat - Thus At</h3>
            <h4 className="text-xl text-gray-700">9.00 am - 10.00pm</h4>
          </div>
        </div>
        <div className="flex items-center py-3">
          <div>
            <i className="far fa-clock text-6xl"></i>
          </div>
          <div className="ml-3">
            <h3 className="text-2xl font-semibold text-secondary">
              Close Hour
            </h3>
            <h3 className="text-xl text-gray-700">Friday Office Close</h3>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-semibold mb-8">Message us</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-between">
            <input
              className="w-1/2 border p-3 border-gray-400"
              {...register("name")}
              placeholder="Name"
            />
            <input
              className="w-1/2 ml-4 border border-gray-400 p-3"
              {...register("email", { required: true })}
              placeholder="Email"
            />
          </div>
          <div className="flex justify-between mt-8">
            <input
              className="w-1/2 border p-3 border-gray-400"
              {...register("subject")}
              placeholder="subject"
            />
            <input
              type="number"
              className="w-1/2 ml-4 border border-gray-400 p-3"
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
              className="px-7 py-3 bg-btn text-secondary font-medium hover:bg-primary hover:text-btnTwo transition-all"
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
