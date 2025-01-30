import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useEmployeeList from "../hooks/useEmployeeList";
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function My_Employee_List() {
  const [employeeList, refetch] = useEmployeeList();
  const axiosPublic = useAxiosPublic();

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const employeesPerPage = 10;

  // Get current employees for the page
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = employeeList.slice(indexOfFirstEmployee, indexOfLastEmployee);

  // Calculate total pages
  const totalPages = Math.ceil(employeeList.length / employeesPerPage);

  const handleRemoveMember = (data) => {
    const updateData = {
      employee_status: false,
      hr_email: null,
    };

    axiosPublic
      .patch(`/employee-account/${data._id}`, updateData)
      .then((res) => {
        console.log(res.data);
        refetch();
      });
    console.log("Removing member:", data._id);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="sm:p-6 p-4 w-11/12 mx-auto bg-white rounded-2xl shadow-lg">
      <Helmet>
        <title>TrakSmart || Employee List</title>
      </Helmet>
      <div className="grid sm:grid-cols-6 grid-cols-1 justify-center items-center sm:gap-4 mb-8">
        <div className=" lg:col-span-5 col-span-4 items-center">
          <h1 className="md:text-3xl text-xl font-bold text-[#031278]">Employee List</h1>
          <p className="text-gray-500 text-sm mt-1">Manage your team members</p>
        </div>
        <div className="bg-blue-50 lg:col-span-1 col-span-2 px-4 py-3 rounded-lg mt-6 sm:mt-0">
          <span className="text-[#031278] sm:font-medium text-sm">
            Total Members: {employeeList.length}
          </span>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-[#b7c0f7]">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-[#031278]">
              <th className="px-6 py-4 text-left text-sm font-semibold text-white">Employee</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-white">Type</th>
              <th className="px-6 py-4 text-right text-sm font-semibold text-white">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentEmployees.map((employee) => (
              <tr key={employee.id} className="hover:bg-[#e9ebf8] transition-colors">
                <td className="px-6 py-2 whitespace-nowrap">
                  <div className="flex items-center sm:space-x-4 space-x-3">
                    <img
                      src={employee.profile}
                      alt={employee.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                    />
                    <div>
                      <div className="text-sm font-semibold text-gray-900">{employee.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {employee.type === "admin" ? (
                    <span className="px-3 py-1 inline-flex text-sm font-medium bg-blue-100 text-blue-800 rounded-full">
                      Admin
                    </span>
                  ) : (
                    <span className="px-3 py-1 inline-flex text-sm font-medium bg-gray-200 text-gray-800 rounded-full">
                      Employee
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <button
                    onClick={() => handleRemoveMember(employee)}
                    className="inline-flex items-center px-2 py-2 border rounded-lg text-xs font-medium text-white bg-red-600 focus:outline-none focus:ring-red-500"
                  >
                    <RiDeleteBin6Line className="mr-2 h-4 w-4" />
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="flex justify-center gap-8 items-center p-4 mt-4 mb-6 border border-[#354ef059] shadow-md rounded-md py-2 bg-gray-50 border-t">
          <p className="text-sm text-gray-600">
            Showing {indexOfFirstEmployee + 1}-
            {Math.min(indexOfFirstEmployee, employeeList.length)} of{" "}
            {employeeList.length} employeeList
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

      {employeeList.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No employees found</p>
        </div>
      )}
    </div>
  );
}
