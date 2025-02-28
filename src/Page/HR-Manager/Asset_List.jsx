import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import { FaTrashAlt, FaSearch, FaFilter } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import { BsSliders } from "react-icons/bs";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAsset from "./../hooks/useAsset";
import { Helmet } from "react-helmet-async";

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

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const assetsPerPage = 10;

  // Calculate the indices for the current page
  const indexOfLastAsset = currentPage * assetsPerPage;
  const indexOfFirstAsset = indexOfLastAsset - assetsPerPage;
  const currentAssets = assets.slice(indexOfFirstAsset, indexOfLastAsset);
  const totalPages = Math.ceil(assets.length / assetsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleDelete = (id) => {
    axiosPublic
      .delete(`/assets/${id}`)
      .then((res) => {
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Success",
            text: "Asset deleted successfully!",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Error",
            text: "Failed to delete asset.",
            icon: "error",
          });
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#212121] pb-10">
      <Helmet>
        <title>TrakSmart || Asset List</title>
      </Helmet>

      <div className="w-11/12 mx-auto md:p-4 rounded-md">
        {/* Header Section */}
        <div className="mb-8">
          <h2 className="sm:text-4xl text-2xl font-bold text-[#031278] dark:text-gray-100">
            Asset Management
          </h2>
          <p className="mt-2 sm:text-md text-sm text-gray-600 dark:text-gray-400">
            Manage and track your company assets (Asset List)
          </p>
        </div>

        {/* Filters Section */}
        <div className="bg-white dark:bg-gray-900 dark:text-gray-900 rounded-xl shadow-sm mb-6 space-y-4 md:space-y-0 md:flex md:items-center md:space-x-4">
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
        <div className="bg-white dark:bg-gray-200 backdrop:blur-lg rounded-xl shadow-sm overflow-hidden border">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-[#031278]">
                  <th className="dark:text-gray-50 px-6 py-4 text-left text-xs font-semibold text-gray-50 uppercase tracking-wider">
                    Product Name
                  </th>
                  <th className="dark:text-gray-50 px-6 py-4 text-left text-xs font-semibold text-gray-50 uppercase tracking-wider">
                    Product Type
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-semibold text-gray-50 uppercase tracking-wider">
                    Quantity
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-semibold text-gray-50 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 ">
                {currentAssets.map((asset) => (
                  <tr
                    key={asset._id}
                    className="hover:bg-gray-100 dark:hover:bg-black transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900 dark:text-gray-800">
                        {asset.product_name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium  ${
                          asset.product_type === "Returnable"
                            ? "bg-green-100 text-green-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {asset.product_type}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <div className="text-sm text-gray-900 font-medium dark:text-gray-800">
                        {asset.product_quantity}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <div className="flex items-center justify-center space-x-3">
                        <Link
                          to={`/dashboard/update-asset/${asset._id}`}
                          className="inline-flex items-center px-3 py-1.5 border border-blue-300 text-blue-900 rounded-lg hover:bg-blue-50 transition-colors"
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

        {/* Pagination */}
        {assets.length > 0 && (
          <div className="flex justify-evenly items-center my-6 duration-300 border border-[#354ef059] shadow-md rounded-md py-2 px-8">
            <p className="text-sm text-left text-gray-600">
              Showing {indexOfFirstAsset + 1}-
              {Math.min(indexOfLastAsset, assets.length)} of {assets.length}{" "}
              assets
            </p>
            <div className="flex space-x-2 duration-300 ">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === index + 1
                      ? "bg-[#031278] text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        )}

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
