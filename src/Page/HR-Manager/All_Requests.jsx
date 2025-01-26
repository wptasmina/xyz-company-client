
import { useState } from "react";
import useAllRequest from './../hooks/useAllRequest';
import useAxiosPublic from "../hooks/useAxiosPublic";
import { FaSearch, FaCheck, FaTimes } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

export default function All_Requests() {

  const [searchQuery, setSearchQuery] = useState(""); //search query
  const [requests, refetch] = useAllRequest(searchQuery); //Fetch requests & search query

  const axiosPublic = useAxiosPublic();
  const approved_date = new Date().toISOString();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const approveRequest = (data) => {
    const updateStatus = {
      status: "Approved",
      approved_date,
    };
    axiosPublic
      .patch(`/requested-asset/${data._id}`, updateStatus)
      .then((res) => {
        console.log(res.data);
        refetch();
      });
  };

  const rejectRequest = (data) => {
    const updateStatus = {
      status: "Rejected",
    };
    axiosPublic
      .patch(`/requested-asset/${data._id}`, updateStatus)
      .then((res) => {
        console.log(res.data);
        refetch();
      });
  };

  return (
<div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg
 p-8 mt-8 border border-gray-200">
    <Helmet>
      <title>TrakSmart || All Requests </title>
    </Helmet>
  {/* Search Section */}
  <div className="mb-10">
    <h2 className="md:text-4xl text-2xl font-bold text-[#031278] mb-6">
      Search Requests
    </h2>
    <div className="relative">
      <input
        type="text"
        placeholder="Search by name, email & asset..."
        className="w-full pl-10 py-2 sm:py-3 rounded-full shadow-sm border border-gray-300 focus:border-[#9ea9f1] focus:outline-none outline-none duration-300"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
    </div>
  </div>

  {/* Request List Section */}
  <h2 className="sm:text-3xl text-2xl font-semibold text-[#031278] mb-6">Request List</h2>
  <div className="overflow-x-auto rounded-lg shadow border border-[#9ea9f1]">
    {requests.length === 0 ? (
      <p className="text-center text-gray-500 py-8">
        {searchQuery
          ? "No results found"
          : "No asset requests found. Check back later."}
      </p>
    ) : (
      <table className="w-full border-collapse bg-white">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-6 py-4 text-left text-sm font-medium text-gray-600 uppercase">
              Asset Name
            </th>
            <th className="px-6 py-4 text-left text-sm font-medium text-gray-600 uppercase">
              Asset Type
            </th>
            <th className="px-6 py-4 text-left text-sm font-medium text-gray-600 uppercase">
              Requester Email
            </th>
            <th className="px-6 py-4 text-left text-sm font-medium text-gray-600 uppercase">
              Requester Name
            </th>
            <th className="px-6 py-4 text-left text-sm font-medium text-gray-600 uppercase">
              Request Date
            </th>
            <th className="px-6 py-4 text-left text-sm font-medium text-gray-600 uppercase">
              Additional Note
            </th>
            <th className="px-6 py-4 text-center text-sm font-medium text-gray-600 uppercase">
              Status
            </th>
            <th className="px-6 py-4 text-center text-sm font-medium text-gray-600 uppercase">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request, index) => (
            <tr
              key={request._id}
              className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                {request.asset_name}
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                {request.asset_type}
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                {request.requester_email}
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                {request.requester_name}
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                {formatDate(request.request_date)}
              </td>
              <td className="px-6 py-4 text-sm text-gray-700">
                {request.additional_notes || "N/A"}
              </td>
              <td className="px-6 py-4 text-center">
                <span
                  className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    request.status === "Pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : request.status === "Approved"
                      ? "bg-green-100 text-green-800"
                      : request.status === "Rejected"
                      ? "bg-red-100 text-red-800"
                      : request.status === "Canceled"
                      ? "bg-gray-100 text-gray-800"
                      : request.status === "Returned"
                      ? "bg-blue-100 text-blue-800"
                      : ""
                  }`}
                >
                  {request.status}
                </span>
              </td>
              <td className="px-6 py-4 text-center text-sm">
                {request.status !== "Returned" &&
                  request.status !== "Canceled" && (
                    <div className="flex justify-center space-x-3">
                      {request.status !== "Approved" && (
                        <button
                          onClick={() => approveRequest(request)}
                          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                          title="Approve"
                        >
                          <FaCheck />
                        </button>
                      )}
                      {request.status !== "Rejected" && (
                        <button
                          onClick={() => rejectRequest(request)}
                          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                          title="Reject"
                        >
                          <FaTimes />
                        </button>
                      )}
                    </div>
                  )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
</div>

  );
};

