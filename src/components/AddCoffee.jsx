import React from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const coffeeDetails = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    // console.log(coffeeDetails);
    // send data to the server
    fetch("http://localhost:3000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffeeDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee added successfully",
            icon: "success",
          });
        }
      });
  };
  return (
    <form
      onSubmit={handleAddCoffee}
      className=" bg-[#F4F3F0]"
    >
      <div className="md:px-28 md:py-20">
        <h2
          className="text-center text-5xl pt-8 md:pt-0 font-rancho text-[#374151] drop-shadow-xl"
          style={{ textShadow: "2px 2px 5px #374151" }}
        >
          Add New Coffee
        </h2>
        <p className="text-center py-8 px-12 text-xl font-raleway">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        {/* Name and Chef */}
        <div className="md:flex md:gap-8 md:my-4">
          <div className="form-control mb-4 md:my-0 w-10/12 mx-auto md:w-1/2">
            <label className="label">
              <span className="label-text text-xl font-semibold font-raleway">
                Name
              </span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter coffee name"
              className="input input-bordered bg-white"
            />
          </div>
          <div className="form-control mb-4 md:my-0 w-10/12 mx-auto md:w-1/2">
            <label className="label">
              <span className="label-text text-xl font-semibold font-raleway">
                Chef
              </span>
            </label>
            <input
              type="text"
              name="chef"
              placeholder="Enter coffee chef"
              className="input input-bordered bg-white"
            />
          </div>
        </div>
        {/* Supplier and Taste */}
        <div className="md:flex md:gap-8 md:my-4">
          <div className="form-control mb-4 md:my-0 w-10/12 mx-auto md:w-1/2">
            <label className="label">
              <span className="label-text text-xl font-semibold font-raleway">
                Supplier
              </span>
            </label>
            <input
              type="text"
              name="supplier"
              placeholder="Enter coffee supplier"
              className="input input-bordered bg-white"
            />
          </div>
          <div className="form-control mb-4 md:my-0 w-10/12 mx-auto md:w-1/2">
            <label className="label">
              <span className="label-text text-xl font-semibold font-raleway">
                Taste
              </span>
            </label>
            <input
              type="text"
              name="taste"
              placeholder="Enter coffee taste"
              className="input input-bordered bg-white"
            />
          </div>
        </div>
        {/* Category and Details */}
        <div className="md:flex md:gap-8 md:my-4">
          <div className="form-control mb-4 md:my-0 w-10/12 mx-auto md:w-1/2">
            <label className="label">
              <span className="label-text text-xl font-semibold font-raleway">
                Category
              </span>
            </label>
            <input
              type="text"
              name="category"
              placeholder="Enter coffee category"
              className="input input-bordered bg-white"
            />
          </div>
          <div className="form-control mb-4 md:my-0 w-10/12 mx-auto md:w-1/2">
            <label className="label">
              <span className="label-text text-xl font-semibold font-raleway">
                Details
              </span>
            </label>
            <input
              type="text"
              name="details"
              placeholder="Enter coffee details"
              className="input input-bordered bg-white"
            />
          </div>
        </div>
        {/* Photo */}
        <div className="flex md:gap-8 md:my-4">
          <div className="form-control mb-4 md:my-0 w-10/12 md:w-full mx-auto">
            <label className="label">
              <span className="label-text text-xl font-semibold font-raleway">
                Photo
              </span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter photo URL"
              className="input input-bordered bg-white"
            />
          </div>
        </div>
        <div className="form-control mb-4 md:my-0 mt-6">
          <input
            type="submit"
            value="Add Coffee"
            className="btn btn-outline w-10/12 md:w-full mx-auto my-8 capitalize bg-[#D2B48C] font-rancho text-2xl text-[#331A15]"
          />
        </div>
      </div>
    </form>
  );
};

export default AddCoffee;
