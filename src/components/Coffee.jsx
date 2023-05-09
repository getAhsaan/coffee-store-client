import React from "react";
import { FaEye, FaTrash } from "react-icons/fa";
import { HiPencil } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Coffee = ({ coffee }) => {
  const { _id, name, chef, price, taste, category, details, photo } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your coffee has been deleted.", "success");
            }
          });
        // console.log("delete confirmed");
      }
    });
  };

  return (
    <div>
      <div className="bg-[#F5F4F1] rounded-xl flex justify-between items-center p-4">
        <div>
          <img
            src={photo}
            alt="coffee photo"
          />
        </div>
        <div>
          <p className="font-raleway text-xl">
            <span className="font-bold">Name:</span> {name}
          </p>
          <p className="font-raleway text-xl">
            <span className="font-bold"> Chef:</span> {chef}
          </p>
          <p className="font-raleway text-xl">
            <span className="font-bold">Price:</span> {price}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <button className="bg-[#D2B48C] hover:btn-primary p-2 rounded-xl m-1">
            <FaEye className="text-3xl text-white"></FaEye>
          </button>
          <Link to={`/updateCoffee/${_id}`}>
            <button className="bg-[#3C393B] hover:btn-secondary p-2 rounded-xl m-1">
              <HiPencil className="text-3xl text-white"></HiPencil>
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="bg-[#EA4744] hover:btn-primary p-2 rounded-xl m-1"
          >
            <FaTrash className="text-3xl text-white"></FaTrash>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Coffee;
