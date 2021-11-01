import axios from "axios";
import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

const UpdateBookedManagItem = () => {
  const [detailsBooked, setDetailsBooked] = useState({});
  const { id } = useParams();
  const [newStatusVal, setNewStatusVal] = useState("");
  const history = useHistory();
  useEffect(() => {
    axios
      .get(`https://glacial-temple-73891.herokuapp.com/bookedPackage/${id}`)
      .then((res) => {
        console.log(res);
        setDetailsBooked(res.data);
      });
  }, []);

  const getVal = (e) => {
    setNewStatusVal(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    detailsBooked.status = newStatusVal;
    // console.log(detailsBooked);
    // console.log(newStatusVal);
    axios
      .put(
        `https://glacial-temple-73891.herokuapp.com/bookedPackage/${id}`,
        detailsBooked
      )
      .then((res) => {
        console.log(res);
        if (res.data.modifiedCount > 0) {
          alert("Status Changed Successfully");
          history.push("/all-booked-packages");
        }
      });
  };
  return (
    <div className="py-12 bg-secondary">
      <div className="container mx-auto">
        <h2 className="mb-5 text-2xl md:text-3xl text-secondary font-semibold">
          Change Status From here
        </h2>
        <div>
          <form onSubmit={handleSubmit}>
            <label className="text-xl" htmlFor="status">
              Choose Status:
            </label>
            <select onBlur={getVal} id="status">
              <option>Pending</option>
              <option>Approved</option>
              <option>Rejected</option>
            </select>
            <br />
            <button
              className="bg-btn text-seconfary px-3 py-2 mt-2"
              type="submit"
            >
              Change now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateBookedManagItem;
