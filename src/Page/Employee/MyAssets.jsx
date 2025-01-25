import { useState, useEffect, useContext } from "react";
import {
  FaSearch,
  FaTrash,
  FaPrint,
  FaArrowAltCircleLeft,
} from "react-icons/fa";
import { AiOutlineReload } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosPublic from "../hooks/useAxiosPublic";

export default function MyAssets() {
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterType, setFilterType] = useState(""); // New state for asset type filter
  const [status, setStatus] = useState(false);

  useEffect(() => {
    axiosPublic.get(`/employee-account/${user.email}`).then((res) => {
      const employeeStatus = res.data.employee_status;
      setStatus(employeeStatus);
    });
  }, [user.email, axiosPublic]);

  const { data: requestedAssets = [], refetch } = useQuery({
    queryKey: ["requestedAssets", user.email, search, filterStatus, filterType], // Add filterType to queryKey
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/requested-asset?email=${user.email}&search=${search}&status=${filterStatus}&asset_type=${filterType}`
      );
      return res.data;
    },
  });

  const cancelRequest = (id) => {
    const updateStatus = { status: "Canceled" };
    axiosPublic
      .patch(`/requested-asset/${id}`, updateStatus)
      .then(() => refetch());
  };

  const printAssetDetails = (asset) => {
    console.log(`Printing details for asset: ${asset.name}`);
  };

  const returnAsset = (id) => {
    const updateStatus = { status: "Returned" };
    axiosPublic
      .patch(`/requested-asset/${id}`, updateStatus)
      .then(() => refetch());
  };

  if (status) {
    return (
      <div className="p-6 bg-gray-100 min-h-screen">
        {/* Search and Filter Section */}
        <div className="bg-white p-4 rounded-md shadow-md mb-6 flex flex-wrap gap-4 items-center">
          <div className="flex items-center w-full md:w-1/2 border rounded-lg shadow-sm">
            <FaSearch className="text-gray-500 ml-3" />
            <input
              type="text"
              placeholder="Search by Asset Name..."
              className="flex-grow p-2 border-0 focus:ring-0 focus:outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <select
            className="border p-2 rounded-lg shadow-sm focus:ring-indigo-500"
            value={filterStatus}
            onChange={(e) => {
              setFilterStatus(e.target.value);
              refetch();
            }}
          >
            <option value="">Filter by Status</option>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
            <option value="Returned">Returned</option>
            <option value="Canceled">Canceled</option>
          </select>

          <select
            className="border p-2 rounded-lg shadow-sm focus:ring-indigo-500"
            value={filterType}
            onChange={(e) => {
              setFilterType(e.target.value);
              refetch();
            }}
          >
            <option value="">Filter by Type</option>
            <option value="Returnable">Returnable</option>
            <option value="Non-Returnable">Non-Returnable</option>
          </select>

          <button
            className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400 shadow-sm flex items-center"
            onClick={() => {
              setSearch("");
              setFilterStatus("");
              setFilterType(""); // Reset asset type filter
              refetch();
            }}
          >
            <AiOutlineReload className="mr-2" /> Reset Filters
          </button>
        </div>

        {/* Asset List Section */}
        <div className="bg-white p-4 rounded-md shadow-lg">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="p-3 text-left text-sm font-semibold">
                  Asset Name
                </th>
                <th className="p-3 text-left text-sm font-semibold">
                  Asset Type
                </th>
                <th className="p-3 text-left text-sm font-semibold">
                  Request Date
                </th>
                <th className="p-3 text-left text-sm font-semibold">
                  Approval Date
                </th>
                <th className="p-3 text-left text-sm font-semibold">
                  Request Status
                </th>
                <th className="p-3 text-left text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {requestedAssets.length > 0 ? (
                requestedAssets.map((asset, index) => (
                  <tr
                    key={asset._id}
                    className={`${
                      index % 2 === 0 ? "bg-gray-100" : "bg-white"
                    } hover:bg-indigo-50`}
                  >
                    <td className="p-3 border text-sm">{asset.asset_name}</td>
                    <td className="p-3 border text-sm">{asset.asset_type}</td>
                    <td className="p-3 border text-sm">
                      {formatDate(asset.request_date)}
                    </td>
                    <td className="p-3 border text-sm">
                      {formatDate(asset.approved_date)}
                    </td>
                    <td className="p-3 border text-sm">
                      <span
                        className={`px-3 py-1 rounded text-white text-xs font-medium ${
                          asset.status === "Pending"
                            ? "bg-yellow-500"
                            : asset.status === "Approved"
                              ? "bg-green-500"
                              : asset.status === "Returned"
                                ? "bg-blue-500"
                                : "bg-gray-500"
                        }`}
                      >
                        {asset.status}
                      </span>
                    </td>
                    <td className="p-3 border text-sm">
                      {asset.status === "Pending" && (
                        <button
                          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 mr-2 flex items-center"
                          onClick={() => cancelRequest(asset._id)}
                        >
                          <FaTrash className="mr-1" /> Cancel
                        </button>
                      )}
                      {asset.status === "Approved" && (
                        <>
                          <button
                            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2 flex items-center"
                            onClick={() => printAssetDetails(asset)}
                          >
                            <FaPrint className="mr-1" /> Print
                          </button>
                          {asset.asset_type === "Returnable" && (
                            <button
                              className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 flex items-center"
                              onClick={() => returnAsset(asset._id)}
                            >
                              <FaArrowAltCircleLeft className="mr-1" /> Return
                            </button>
                          )}
                        </>
                      )}
                      {asset.status === "Returned" && (
                        <button
                          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 flex items-center"
                          onClick={() => printAssetDetails(asset)}
                        >
                          <FaPrint className="mr-1" /> Print
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="p-3 text-center text-gray-500">
                    No requested assets found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-yellow-100 text-yellow-800 p-4 rounded-lg mb-6">
        <p className="text-lg">
          ⚠ You are not affiliated with any company. Please contact your HR to
          complete the affiliation process.
        </p>
      </div>
    );
  }
}
