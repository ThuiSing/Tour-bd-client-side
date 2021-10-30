import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://glacial-temple-73891.herokuapp.com/packages", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Successfully added on package");
          reset();
        }
      });
  };
  return (
    <div className="flex justify-center item-center py-12">
      <div className=" w-3/5 bg-secondary py-12 px-6 rounded">
        <h2 className="text-4xl font-semibold uppercase mb-6">
          Add More Package :
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label>Package Title / Location</label>
            <input
              className="w-full bg-gray-100 rounded outline-none py-3 px-2 mt-2"
              {...register("name", { required: true })}
              placeholder="Enter Title or location"
            />
            <span className="text-red-500">
              {errors.name?.type === "required" && "Title is required"}
            </span>
          </div>
          <div>
            <label>Package Description</label>
            <input
              className="w-full bg-gray-100 rounded outline-none py-3 px-2 mt-2"
              {...register("description", { required: true })}
              placeholder="Enter Description"
            />
            <span className="text-red-500">
              {errors.description?.type === "required" && "Title is required"}
            </span>
          </div>
          <div>
            <label>Package Image URL</label>
            <input
              className="w-full bg-gray-100 rounded outline-none py-3 px-2 mt-2"
              {...register("img", { required: true })}
              placeholder="Enter Image URL"
            />
            <span className="text-red-500">
              {errors.img?.type === "required" && "Title is required"}
            </span>
          </div>
          <div>
            <label>Package Price</label>
            <input
              className="w-full bg-gray-100 rounded outline-none py-3 px-2 mt-2"
              type="number"
              {...register("price", { required: true })}
              placeholder="Enter Image URL"
            />
            <span className="text-red-500">
              {errors.price?.type === "required" && "Price is required"}
            </span>
          </div>
          <div>
            <label>Package Rating</label>
            <input
              className="w-full bg-gray-100 rounded outline-none py-3 px-2 mt-2"
              type="number"
              {...register("rating", { required: true })}
              placeholder="Enter Rating"
            />
          </div>

          <input
            className="px-9 rounded py-3 font-medium bg-btn text-btn"
            type="submit"
            value="ADD"
          />
        </form>
      </div>
    </div>
  );
};

export default AddService;
