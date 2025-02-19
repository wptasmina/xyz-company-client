import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useEmployeeList from "../hooks/useEmployeeList";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useEmployee from './../hooks/useEmployee';
import { Helmet } from "react-helmet-async";


export default function AddEmployee() {

  const [employee, refetch] = useEmployee();
  const [employeeList, setEmployeeList] = useEmployeeList();
  const [admin, setAdmin] = useState({})
  console.log(admin);

  const [employeeLimit, setEmployeeLimit] = useState(0);

  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

 
  useEffect(() => {
    axiosPublic
    .get(`/hr-account/${user.email}`)
    .then((res) => {
      const data = res.data;
      setAdmin(data)
      if (data.package === "premium") {
        setEmployeeLimit(20);
      } else if (data.package === "standard") {
        setEmployeeLimit(10);
      } else if (data.package === "basic") {
        setEmployeeLimit(5);
      }
    })
  }, [axiosPublic, user.email])

  // Track selected members' IDs
  const [selectedMembers, setSelectedMembers] = useState([]);

  const handleCheckboxChange = (id) => {
    setSelectedMembers(
      (prevSelected) =>
        prevSelected.includes(id)
          ? prevSelected.filter((memberId) => memberId !== id) // Remove if already selected
          : [...prevSelected, id] // Add if not selected
    );
  };

  const handleAddMember = (data) => {
    if (employeeList.length >= employeeLimit) {
      alert(
        "You have reached the employee limit for your package. Upgrade to add more employees."
      );
      return;
    }

    const updateData = {
      employee_status: true,
      hr_email: user.email,
      company_name: admin.company_name,
      company_logo: admin.company_logo,
    };

    axiosPublic
      .patch(`/employee-account/${data._id}`, updateData)
      .then((res) => {
        console.log(res.data);

        // Update employee list locally and re-render
        const updatedEmployeeList = [
          ...employeeList,
          { ...data, employee_status: true },
        ];
        setEmployeeList(updatedEmployeeList);
        refetch();
      })
      .catch((err) => console.error("Error adding member:", err));
  };

  const handleAddSelectedMembers = () => {
    if (employeeList.length + selectedMembers.length > employeeLimit) {
      alert(
        "Adding these employees exceeds your package limit. Upgrade to add more employees."
      );
      return;
    }

    // Update the status of all selected members
    const updatePromises = selectedMembers.map((id) => {
      const updateData = {
        employee_status: true,
        hr_email: user.email,
      };

      return axiosPublic
        .patch(`/employee-account/${id}`, updateData)
        .then(() => {
          const updatedMember = employee.find((member) => member._id === id);
          if (updatedMember) {
            setEmployeeList((prevList) => [
              ...prevList,
              { ...updatedMember, employee_status: true },
            ]);
          }
        });
    });

    // Wait for all updates to complete
    Promise.all(updatePromises)
      .then(() => {
        console.log("All selected members added successfully.");
        setSelectedMembers([]); // Clear selected members
      })
      .catch((err) => console.error("Error adding selected members:", err));
  };


    // Pagination logic
    const [currentPage, setCurrentPage] = useState(1);
    const employeesPerPage = 6;
  
    const indexOfLastEmployee = currentPage * employeesPerPage;
    const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
    const currentEmployees = employee.slice(
      indexOfFirstEmployee,
      indexOfLastEmployee
    );
  
    const totalPages = Math.ceil(employee.length / employeesPerPage);
  
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

  return (
<div className="min-h-screen bg-gray-50 dark:bg-[#000] py-12 px-4 sm:px-6 lg:px-8">
    <Helmet>
      <title>TrakSmart || Add Employee</title>
    </Helmet>
  <div className="max-w-7xl mx-auto space-y-8">
    {/* Package Status Card */}
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-[#031278]">Team Package</h2>
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2">
                {employeeList.slice(0, 3).map((employee, index) => (
                  <img
                    key={index}
                    src={employee.profile}
                    alt=""
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                ))}
                {employeeList.length > 3 && (
                  <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center">
                    <span className="text-xs font-medium text-gray-600">
                      +{employeeList.length - 3}
                    </span>
                  </div>
                )}
              </div>
              <div className="text-sm font-medium text-gray-600">
                {employeeList.length} / {employeeLimit} members
              </div>
            </div>
          </div>
          <button
            onClick={() => console.log("Redirect to package selection")}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-sm transition-all duration-150 ease-in-out transform hover:scale-105"
          >
            Upgrade Package
          </button>
        </div>
        {/* Progress Bar */}
        <div className="mt-6">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-indigo-600 rounded-full transition-all duration-300"
              style={{ width: `${(employeeList.length / employeeLimit) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>

    {/* Available Members Section */}
    <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-[#031278]">Available Members</h2>
          <p className="mt-1 text-sm text-gray-500">Select members to add to your team</p>
        </div>
        <button
          onClick={handleAddSelectedMembers}
          className={`inline-flex items-center px-5 py-2.5 rounded-xl font-medium transition-all duration-150 ${
            selectedMembers.length === 0
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm hover:shadow transform hover:scale-105"
          }`}
          disabled={selectedMembers.length === 0}
        >
          {selectedMembers.length > 0 ? (
            <>
              Add Selected ({selectedMembers.length})
              <span className="ml-2">→</span>
            </>
          ) : (
            "Select Members"
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {employee.map((member) => (
          <div
            key={member._id}
            className={`group relative rounded-xl transition-all duration-200 ${
              selectedMembers.includes(member._id)
                ? "bg-indigo-50 border-2 border-indigo-200"
                : "bg-white border border-gray-200 hover:border-indigo-200"
            }`}
          >
            <div className="p-5">
              <div className="flex items-start space-x-4">
                <div className="relative">
                  <img
                    src={member.profile}
                    alt={member.name}
                    className="w-16 h-16 rounded-full object-cover ring-2 ring-white"
                  />
                  <input
                    type="checkbox"
                    checked={selectedMembers.includes(member._id)}
                    onChange={() => handleCheckboxChange(member._id)}
                    className="absolute -top-1 -right-1 w-5 h-5 rounded-md border-2 border-white text-indigo-600 focus:ring-indigo-500 focus:ring-offset-2"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 truncate">
                    {member.name}
                  </h3>
                  <button
                    onClick={() => handleAddMember(member)}
                    className="mt-1 inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700 group-hover:underline"
                  >
                    Add to Team
                    
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
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

      {employee.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400">No available members found</div>
        </div>
      )}
    </div>
  </div>
</div>
  );
}
