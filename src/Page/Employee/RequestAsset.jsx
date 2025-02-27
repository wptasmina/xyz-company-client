import { useState, useEffect, useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { FaSearch } from "react-icons/fa";

export default function RequestAsset() {
  const { user } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [status, setStatus] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [availabilityFilter, setAvailabilityFilter] = useState("all");
  const [assetTypeFilter, setAssetTypeFilter] = useState("all");
  const [sortOption, setSortOption] = useState("asc");
  const [filteredAssets, setFilteredAssets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items per page
  const [hr, setHr] = useState();

  const axiosPublic = useAxiosPublic();
  const assets = useLoaderData();

  useEffect(() => {
    axiosPublic.get(`/employee-account/${user.email}`).then((res) => {
      const employeeStatus = res.data.employee_status;
      setStatus(employeeStatus);
    });

    axiosPublic.get(`/employee-account/${user.email}`).then((res) => {
      const findHR = res.data.hr_email;
      setHr(findHR);
    });
  }, [user.email, axiosPublic, hr]);

  useEffect(() => {
    let filtered = assets.filter((asset) =>
      asset.product_name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (availabilityFilter !== "all") {
      filtered = filtered.filter((asset) => {
        const isAvailable = asset.product_quantity > 0;
        return availabilityFilter === "Available" ? isAvailable : !isAvailable;
      });
    }

    if (assetTypeFilter !== "all") {
      filtered = filtered.filter(
        (asset) => asset.product_type === assetTypeFilter
      );
    }

    if (sortOption === "asc") {
      filtered = filtered.sort(
        (a, b) => a.product_quantity - b.product_quantity
      );
    } else if (sortOption === "desc") {
      filtered = filtered.sort(
        (a, b) => b.product_quantity - a.product_quantity
      );
    }

    setFilteredAssets(filtered);
  }, [assets, searchQuery, availabilityFilter, assetTypeFilter, sortOption]);

  const handleRequest = (asset) => {
    setSelectedAsset(asset);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedAsset(null);
  };

  const handleRequestSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const additional_notes = form.additional_notes.value;

    const requester_name = user.displayName;
    const requester_email = user.email;
    const request_date = new Date().toISOString();
    const asset_id = selectedAsset._id;

    const requestedAsset = {
      asset_id,
      requester_name,
      requester_email,
      status: "Pending",
      request_date,
      additional_notes,
      hr_email: hr,
    };

    const response = await axiosPublic.post("/requested-asset", requestedAsset);
    handleModalClose();
    if (response.data.insertedId) {
      Swal.fire({
        title: "Request",
        text: "Asset request submitted successfully!",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Failed",
        text: "Failed to submit asset request. Please try again.",
        icon: "error",
      });
    }
  };

  const paginatedAssets = filteredAssets.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredAssets.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  if (status === true) {
    return (
      <div className="w-10/12 mx-auto p-4 dark:bg-[#000]">
        <Helmet>
          <title>TrakSmart | Request Assets</title>
        </Helmet>
        <div className="flex justify-between flex-wrap items-center gap-4 mb-6 dark:text-gray-800">
          <div className="flex items-center w-full sm:w-1/2 md:w-1/3 border border-[#1753c2] rounded-md cursor-pointer shadow-sm">
            <FaSearch className="text-gray-500 ml-3" />
            <input
              type="text"
              placeholder="Search assets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-2 rounded w-full focus:outline-none outline-none dark:text-white dark:bg-transparent"
            />
          </div>

          <div className="w-full sm:w-auto md:w-1/4">
            <select
              className="border border-[#1753c2] p-2 rounded focus:outline-none outline-none w-full"
              onChange={(e) => setAvailabilityFilter(e.target.value)}
            >
              <option value="all">All Availability</option>
              <option value="Available">Available</option>
              <option value="Out of stock">Out of stock</option>
            </select>
          </div>

          <div className="w-full sm:w-auto md:w-1/4">
            <select
              className="border border-[#1753c2] p-2 rounded focus:outline-none outline-none w-full"
              onChange={(e) => setAssetTypeFilter(e.target.value)}
            >
              <option value="all">All Asset Types</option>
              <option value="Returnable">Returnable</option>
              <option value="Non-Returnable">Non-Returnable</option>
            </select>
          </div>
        </div>

        <div className="bg-white dark:text-gray-800 shadow-md rounded overflow-hidden">
          <table className="table-auto w-full">
            <thead className="bg-[#031278] text-white">
              <tr>
                <th className="px-4 py-2 text-left">Asset Name</th>
                <th className="px-4 py-2 text-left">Asset Type</th>
                <th className="px-4 py-2 text-left">Availability</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedAssets?.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center py-4 text-gray-500 dark:text-gray-800">
                    No assets found.
                  </td>
                </tr>
              ) : (
                paginatedAssets?.map((asset) => (
                  <tr key={asset._id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2">{asset.product_name}</td>
                    <td className="px-4 py-2">{asset.product_type}</td>
                    <td className=" text-sm">
                      <span
                        className={`px-2 py-1 rounded ${
                          asset.product_quantity > 0
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {asset.product_quantity > 0
                          ? "Available"
                          : "Out of stock"}
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      <button
                        className={`px-3 py-1 text-sm text-white rounded ${
                          asset.product_quantity === 0
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-[#1753c2] hover:bg-[#144b9c]"
                        }`}
                        disabled={asset.product_quantity === 0}
                        onClick={() => handleRequest(asset)}
                      >
                        Request
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Start */}
        <div className="flex justify-center gap-4 sm:gap-0 mt-6 border rounded-md p-2 dark:text-gray-800">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 sm:mr-32 rounded ${
              currentPage === 1
                ? "bg-gray-200 cursor-not-allowed"
                : "bg-[#031278] text-white hover:bg-[#144b9c]"
            }`}
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 mx-1 rounded ${
                currentPage === index + 1
                  ? "bg-[#031278] text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 sm:ml-32 rounded ${
              currentPage === totalPages
                ? "bg-gray-200 cursor-not-allowed"
                : "bg-[#031278] text-white hover:bg-[#144b9c]"
            }`}
          >
            Next
          </button>
        </div>
        {/* Pagination End */}

        {isModalOpen && selectedAsset && (
          <form onSubmit={handleRequestSubmit}>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                <h2 className="text-xl font-semibold mb-4">
                  Request Asset: {selectedAsset.product_name}
                </h2>
                <textarea
                  name="additional_notes"
                  placeholder="Enter additional notes (optional)"
                  className="w-full border border-gray-300 p-2 rounded mb-4"
                ></textarea>
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    className="bg-gray-300 px-4 py-2 rounded"
                    onClick={handleModalClose}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-[#1753c2] text-white px-4 py-2 rounded"
                  >
                    Submit Request
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    );
  } else {
    return (
      <div className="text-center p-6">
        <p>You are not authorized to access this page.</p>
      </div>
    );
  }
}
