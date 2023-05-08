import React from "react";

const AddCoffee = () => {
  return (
    <div className=" bg-[#F4F3F0]">
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
    </div>
  );
};

export default AddCoffee;
