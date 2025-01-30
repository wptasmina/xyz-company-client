import { useState } from "react";
import useAllRequest from "./../hooks/useAllRequest";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { FaSearch, FaCheck, FaTimes } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

export default function All_Requests() {
  const [searchQuery, setSearchQuery] = useState(""); // Search query
  const [requests, refetch] = useAllRequest(searchQuery); // Fetch requests & search query

  const [currentPage, setCurrentPage] = useState(1); // Pagination state
  const requestsPerPage = 10; // Number of requests per page

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

  // Pagination logic
  const indexOfLastRequest = currentPage * requestsPerPage;
  const indexOfFirstRequest = indexOfLastRequest - requestsPerPage;
  const currentRequests = requests.slice(
    indexOfFirstRequest,
    indexOfLastRequest
  );

  const totalPages = Math.ceil(requests.length / requestsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="w-11/12 mx-auto bg-white rounded-lg mt-8 md:p-6 border-gray-200">
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
            className="w-full pl-10 py-2 sm:py-3 rounded-full shadow-sm border border-gray-300 focus:border-[#9ea9f1] focus:outline-none duration-300"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Request List Section */}
      <h2 className="sm:text-3xl text-2xl font-semibold text-[#031278] mb-6">
        Request List
      </h2>
      <div className="overflow-x-auto rounded-lg shadow border border-[#9ea9f167]">
        {currentRequests.length === 0 ? (
          <p className="text-center text-gray-500 py-8">
            {searchQuery
              ? "No results found"
              : "No asset requests found. Check back later."}
          </p>
        ) : (
          <>
            <table className="w-full border-collapse bg-[#031278]">
              <thead>
                <tr className="bg-[#031278] text-white">
                  <th className="px-6 py-4 text-left text-sm font-medium uppercase">
                    Asset Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium uppercase">
                    Asset Type
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium uppercase">
                    Requester Email
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium uppercase">
                    Requester Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium uppercase">
                    Request Date
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium uppercase">
                    Additional Note
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-medium uppercase">
                    Status
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-medium uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentRequests.map((request, index) => (
                  <tr
                    key={request._id}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-6 py-4 text-sm font-medium">
                      {request.asset_name}
                    </td>
                    <td className="px-6 py-4 text-sm">{request.asset_type}</td>
                    <td className="px-6 py-4 text-sm">{request.requester_email}</td>
                    <td className="px-6 py-4 text-sm">{request.requester_name}</td>
                    <td className="px-6 py-4 text-sm">
                      {formatDate(request.request_date)}
                    </td>
                    <td className="px-6 py-4 text-sm">
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
                            ? "bg-red-100 text-red-600"
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
                                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-600 transition"
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

            {/* Pagination */}
            <div className="flex justify-center gap-8 items-center p-4 mt-4 mb-6 border border-[#354ef059] shadow-md rounded-md py-2 bg-gray-50 border-t">
              <p className="text-sm text-gray-600">
                Showing {indexOfFirstRequest + 1}-
                {Math.min(indexOfLastRequest, requests.length)} of{" "}
                {requests.length} requests
              </p>
              <div className="flex space-x-2">
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                    className={`px-4 py-2 rounded-md ${
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
          </>
        )}
      </div>
    </div>
  );
}
