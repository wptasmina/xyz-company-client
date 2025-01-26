
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

export default function UpdateAsset() {
  const assets = useLoaderData();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //   submit form
  const onSubmit = async (data) => {
    // asset info
    const asset = {
      product_name: data.product_name,
      product_type: data.product_type,
      product_quantity: Number(data.product_quantity),
    };
    axiosPublic
      .patch(`/assets/${assets._id}`, asset)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: "Update Successfull",
            text: "Asset Update Success",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Error",
            text: "Asset Update Unsuccess",
            icon: "error",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
    reset();
    navigate("/dashboard/asset-list");
    console.log(data);
  };
  
  return (
    <div className="max-w-lg mx-auto bg-gray-100 border border-[#d2d7f8] shadow-lg rounded-lg p-6 mt-8">
      <Helmet>
      <title>TrakSmart | Update Asset </title>
    </Helmet>
      <h2 className="text-2xl font-semibold text-[#031278] mb-4">
        Update Asset
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Product Name */}
        <div>
          <label
            htmlFor="productName"
            className="block text-sm font-medium text-gray-600"
          >
            Product Name
          </label>
          <input
            type="text"
            defaultValue={assets.product_name}
            id="productName"
            {...register("product_name", { required: true })}
            required
            placeholder="Enter product name"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:border-[#36449ccc] focus:outline-none"
          />
          {errors.product_name && (
            <p className="text-red-600">This field is required</p>
          )}
        </div>

        {/* Product Type */}
        <div>
          <label
            htmlFor="productType"
            className="block text-sm font-medium text-gray-600"
          >
            Product Type
          </label>
          <select
            id="productType"
            {...register("product_type", { required: true })}
            required
            defaultValue={assets.product_type}
            className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:border-[#36449ccc] focus:outline-none"
          >
            <option value="Returnable">Returnable</option>
            <option value="Non-Returnable">Non-Returnable</option>
          </select>
          {errors.product_type && (
            <p className="text-red-600">This field is required</p>
          )}
        </div>

        {/* Product Quantity */}
        <div>
          <label
            htmlFor="productQuantity"
            className="block text-sm font-medium text-gray-600"
          >
            Product Quantity
          </label>
          <input
            type="number"
            id="productQuantity"
            required
            {...register("product_quantity", { required: true })}
            defaultValue={assets.product_quantity}
            placeholder="Enter quantity"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:border-[#36449ccc] focus:outline-none"
          />
          {errors.product_quantity && (
            <p className="text-red-600">This field is required</p>
          )}
        </div>

        {/* Add Button */}
        <input
          type="submit"
          value="Update"
          className="w-full bg-[#031278] text-white py-2 cursor-pointer rounded-lg focus:bg-blue-800 focus:outline-none duration-300"
        />
       
      </form>
    </div>
  );
};

