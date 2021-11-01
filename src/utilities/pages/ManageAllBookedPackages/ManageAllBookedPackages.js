import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ManageAllBookedPackages = () => {
  const [bookedPackages, setBookedPackages] = useState([]);

  //get all Booked items
  useEffect(() => {
    axios
      .get("https://glacial-temple-73891.herokuapp.com/bookedPackage")
      .then((res) => setBookedPackages(res.data));
  }, []);

  //delete
  const handleDelete = (id) => {
    const confirm = window.confirm("Are you Sure to cancel this Booking ?");

    confirm &&
      axios
        .delete(
          `https://glacial-temple-73891.herokuapp.com/bookedPackage/${id}`
        )
        .then((res) => {
          if (res.data.deletedCount > 0) {
            const existServices = bookedPackages.filter(
              (service) => service._id !== id
            );
            setBookedPackages(existServices);
          }
          // console.log(res);
        });
  };
  // console.log(bookedPackages);
  return (
    <div className=" container mx-auto py-10">
      <h2 className="text-2xl md:text-4xl font-semibold uppercase mb-7">
        Manage All Booked Packages :
      </h2>
      <div className="overflow-x-scroll lg:overflow-x-auto">
        <table className="table-auto text-center w-full">
          <thead className="h-10 text-secondary">
            <tr>
              <th className="border-2 border-gray-400">NAME</th>
              <th className="border-2 border-gray-400">EMAIL</th>
              <th className="border-2 border-gray-400">Booked Package</th>
              <th className="border-2 border-gray-400">Booked Date</th>
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
                <td className="border-2 border-gray-300">
                  {bookedPackage.packageName}
                </td>
                <td className="border-2 border-gray-300">
                  {bookedPackage.date}
                </td>
                <td className="border-2 border-gray-300 text-yellow-500 font-medium">
                  {bookedPackage.status}
                </td>
                <td className="border-2 border-gray-300">
                  <Link
                    to={`/all-booked-packages/update-booked-item/${bookedPackage._id}`}
                  >
                    <button className="bg-primary text-white p-1 mr-1 hover:bg-white hover:text-red-600 transition-all">
                      update
                    </button>
                  </Link>

                  <button
                    onClick={() => handleDelete(bookedPackage._id)}
                    className="bg-red-700 text-white p-1 hover:bg-white hover:text-red-600 transition-all"
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
