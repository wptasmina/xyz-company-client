import useAxiosPublic from "../hooks/useAxiosPublic";
import useEmployeeList from "../hooks/useEmployeeList";
import { FaTrash } from 'react-icons/fa'

export default function My_Employee_List() {
  
  const [employeeList, refetch] = useEmployeeList();
  const axiosPublic = useAxiosPublic();

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

  return (
    <div className="sm:p-8 p-4 bg-white rounded-2xl shadow-lg">
    <Helmet>
      <title>TrakSmart || Employee List </title>
    </Helmet>
      <div className="grid sm:grid-cols-3 grid-cols-1 justify-center items-center sm:gap-4 mb-8">
        <div className=" col-span-2 items-center">
          <h1 className="md:text-3xl text-xl font-bold text-[#031278]">Employee List</h1>
          <p className="text-gray-500 text-sm mt-1">Manage your team members</p>
        </div>
        <div className="bg-blue-50 px-4 py-3 rounded-lg mt-6 sm:mt-0">
          <span className="text-blue-600 sm:font-medium text-sm">
            Total Members: {employeeList.length}
          </span>
        </div>
      </div>
      
      <div className="overflow-x-auto rounded-xl border border-[#b7c0f7]">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                Employee
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                Type
              </th>
              <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {employeeList.map((employee) => (
              <tr key={employee.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-4">
                    <img
                      src={employee.profile}
                      alt={employee.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                    />
                    <div>
                      <div className="text-sm font-semibold text-gray-900">
                        {employee.name}
                      </div>
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
                    <FaTrash className="mr-2 h-4 w-4" />
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {employeeList.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No employees found</p>
        </div>
      )}
    </div>
  );
}