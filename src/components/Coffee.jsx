import React from "react";
import { FaEye, FaTrash } from "react-icons/fa";
import { HiPencil } from "react-icons/hi2";

const Coffee = ({ coffee }) => {
  const { name, chef, price, taste, category, details, photo } = coffee;
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
          <button className="bg-[#3C393B] hover:btn-secondary p-2 rounded-xl m-1">
            <HiPencil className="text-3xl text-white"></HiPencil>
          </button>
          <button className="bg-[#EA4744] hover:btn-primary p-2 rounded-xl m-1">
            <FaTrash className="text-3xl text-white"></FaTrash>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Coffee;
