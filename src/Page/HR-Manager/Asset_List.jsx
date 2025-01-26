import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import { FaEdit, FaTrashAlt, FaSearch, FaSort, FaFilter } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import { BsSliders } from "react-icons/bs";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAsset from './../hooks/useAsset';

const Asset_List = () => {
  const axiosPublic = useAxiosPublic();

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("asc");
  const [productType, setProductType] = useState("all");

  const [assets, refetch] = useAsset({
    search,
    sort,
    product_type: productType,
  });

  const handleDelete = (id) => {
    axiosPublic
      .delete(`/assets/${id}`)
      .then((res) => {
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Good job!",
            text: "Asset Delete SuccessFull",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Error",
            text: "Asset Delete Unsuccess",
            icon: "error",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen bg-white rounded-xl py-10 md:px-8 mt-5">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h2 className="sm:text-4xl text-2xl font-bold text-[#031278]">Asset Management</h2>
          <p className="mt-2 sm:text-md text-sm text-gray-600">
            Manage and track your company assets
          </p>
        </div>

        {/* Filters Section */}
        <div className="bg-white rounded-xl shadow-sm mb-6 space-y-4 md:space-y-0 md:flex md:items-center md:space-x-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by product name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:border-blue-200 focus:outline-none bg-gray-50"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Sort Dropdown */}
          <div className="w-full md:w-48">
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="w-full pl-10 pr-8 py-2.5 border border-gray-300 rounded-lg focus:border-blue-200 focus:outline-none bg-gray-50 appearance-none"
              >
                <option value="">All Quantity</option>
                <option value="asc">Sort by Quantity (Asc)</option>
                <option value="desc">Sort by Quantity (Desc)</option>
              </select>
              <BsSliders className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
            </div>
          </div>

          {/* Type Filter */}
          <div className="w-full md:w-48">
            <div className="relative duration-300">
              <select
                value={productType}
                onChange={(e) => setProductType(e.target.value)}
                className="w-full pl-10 pr-8 py-2.5 border border-gray-300 rounded-lg focus:border-blue-200 focus:outline-none bg-gray-50 duration-300"
              >
                <option value="all">All Types</option>
                <option value="Returnable">Returnable</option>
                <option value="Non-Returnable">Non-Returnable</option>
              </select>
              <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    Product Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    Product Type
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    Quantity
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {assets.map((asset) => (
                  <tr
                    key={asset._id}
                    className="hover:bg-gray-100 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {asset.product_name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          asset.product_type === "Returnable"
                            ? "bg-green-100 text-green-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {asset.product_type}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <div className="text-sm text-gray-900 font-medium">
                        {asset.product_quantity}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <div className="flex items-center justify-center space-x-3">
                        <Link
                          to={`/dashboard/update-asset/${asset._id}`}
                          className="inline-flex items-center px-3 py-1.5 border border-blue-300 text-blue-800 rounded-lg hover:bg-blue-50 transition-colors"
                        >
                          <FaRegPenToSquare className="w-4 h-4" />
                          
                        </Link>
                        <button
                          onClick={() => handleDelete(asset._id)}
                          className="inline-flex items-center px-3 py-1.5 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                        >
                          <FaTrashAlt className="w-4 h-4" />
                          
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Empty State */}
        {assets.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl shadow-sm mt-6">
            <div className="text-gray-500">No assets found</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Asset_List;
