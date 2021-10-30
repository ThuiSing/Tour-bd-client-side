import axios from "axios";
import React from "react";
import { useEffect, useState } from "react/cjs/react.development";

const ManageAllBookedPackages = () => {
  const [bookedPackages, setBookedPackages] = useState([]);

  //get all Booked items
  useEffect(() => {
    axios
      .get("http://localhost:5000/bookedPackage")
      .then((res) => setBookedPackages(res.data));
  }, []);

  //update status
  const updateStatus = (id) => {
    // console.log(id);
    // axios.put(`http://localhost:5000/bookedPackage/${id}`,).then((res) => {
    //   console.log(res);
    // });
  };

  //delete
  const handleDelete = (id) => {
    const confirm = window.confirm("Are you Sure to cancel this Booking ?");

    confirm &&
      axios.delete(`http://localhost:5000/bookedPackage/${id}`).then((res) => {
        if (res.data.deletedCount > 0) {
          const existServices = bookedPackages.filter(
            (service) => service._id !== id
          );
          setBookedPackages(existServices);
        }
        // console.log(res);
      });
  };
  //   console.log(bookedPackages);
  return (
    <div className=" container mx-auto py-10">
      <h2 className="text-4xl font-semibold uppercase mb-7">
        Manage All Booked Packages :
      </h2>
      <div className="overflow-x-scroll lg:overflow-x-auto">
        <table className="table-auto text-center w-full">
          <thead className="h-10 text-secondary">
            <tr>
              <th className="border-2 border-gray-400">NAME</th>
              <th className="border-2 border-gray-400">EMAIL</th>
              <th className="border-2 border-gray-400">package Name</th>
              <th className="border-2 border-gray-400">Booked date Date</th>
              <th className="border-2 border-gray-400">status</th>
              <th className="border-2 border-gray-400">Manage item</th>
            </tr>
          </thead>
          <tbody>
            {bookedPackages.map((bookedPackage) => (
              <tr key={bookedPackage._id} className="border-2 h-12">
                <td className="border-2  border-gray-300">
                  {bookedPackage.name}
                </td>
                <td className="border-2 border-gray-300">
                  {bookedPackage.email}
                </td>
                <td className="border-2 border-gray-300">Paris</td>
                <td className="border-2 border-gray-300">10/12/13</td>
                <td className="border-2 border-gray-300 text-yellow-500 font-medium">
                  {bookedPackage.status}
                </td>
                <td className="border-2 border-gray-300">
                  <button
                    onClick={() => updateStatus(bookedPackage._id)}
                    className="bg-btn p-1 mr-2 hover:bg-primary hover:text-primary transition-all"
                  >
                    update status
                  </button>
                  <button
                    onClick={() => handleDelete(bookedPackage._id)}
                    className="bg-btn p-1 hover:bg-primary hover:text-primary transition-all"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAllBookedPackages;
