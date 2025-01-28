import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";

export default function MyTeam() {
  const axiosPublic = useAxiosPublic();
  const [myData, setMyData] = useState({});
  const [myTeam, setMyTeam] = useState([]);
  const [admin, setAdmin] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axiosPublic.get(`/employee-account/${user.email}`).then((res) => {
      setMyData(res.data);
    });

    axiosPublic.get(`/hr-account/${myData.hr_email}`).then((res) => {
      setAdmin(res.data);
    });

    axiosPublic.get(`/employee-accounts/${myData.hr_email}`).then((res) => {
      setMyTeam(res.data);
    });
  }, [axiosPublic, myData.hr_email, user.email]);

  const paginatedTeam = myTeam.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(myTeam.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg sm:p-6 p-4 mt-8">
      <Helmet>
        <title>TrakSmart || My Team</title>
      </Helmet>

      <h2 className="text-2xl font-semibold text-[#031278] mb-4">Team Members</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#031278] text-white">
              <th className="px-4 py-2 sm:text-md">Image</th>
              <th className="px-4 py-2 sm:text-md">Name</th>
              <th className="px-4 py-2 sm:text-md">Member Type</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr key={admin._id} className="hover:bg-gray-100">
              <td className="px-4 py-2">
                <img
                  src={admin.company_logo}
                  alt={admin.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
              </td>
              <td className="px-4 py-2 font-medium text-gray-800">{admin.name}</td>
              <td className="px-4 py-2 flex items-center space-x-2">
                <span className="text-green-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 2.5c0-.69.56-1.25 1.25-1.25h2a1.25 1.25 0 011.25 1.25v.5h1.25A1.75 1.75 0 0117.25 4v1.5a1.75 1.75 0 01-1.75 1.75H7.5A1.75 1.75 0 015.75 5.5V4c0-.97.78-1.75 1.75-1.75H8.75v-.5zm-1.5 7.5H16.5m-4.5 4h-3m3 0h3m-3 0v2.75m0-2.75v-2.25"
                    />
                  </svg>
                </span>
                <span className="text-gray-700">{admin.role}</span>
              </td>
            </tr>
            {paginatedTeam.map((team) => (
              <tr key={team._id} className="hover:bg-gray-100">
                <td className="px-4 py-2">
                  <img
                    src={team.profile}
                    alt={team.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </td>
                <td className="px-4 py-2 font-medium text-gray-800">{team.name}</td>
                <td className="px-4 py-2 flex items-center space-x-2">
                  <span className="text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.75 2.5c0-.69.56-1.25 1.25-1.25h2a1.25 1.25 0 011.25 1.25v.5h1.25A1.75 1.75 0 0117.25 4v1.5a1.75 1.75 0 01-1.75 1.75H7.5A1.75 1.75 0 015.75 5.5V4c0-.97.78-1.75 1.75-1.75H8.75v-.5zm-1.5 7.5H16.5m-4.5 4h-3m3 0h3m-3 0v2.75m0-2.75v-2.25"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700">{team.role}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-4 sm:gap-0 mt-6 border rounded-md p-2">
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
    </div>
  );
}
