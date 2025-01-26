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
    <div className="p-8 bg-white rounded-2xl shadow-lg">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Employee List</h1>
          <p className="text-gray-500 mt-1">Manage your team members</p>
        </div>
        <div className="bg-blue-50 px-4 py-2 rounded-lg">
          <span className="text-blue-600 font-semibold">
            Total Members: {employeeList.length}
          </span>
        </div>
      </div>
      
      <div className="overflow-x-auto rounded-xl border border-gray-200">
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
                    <span className="px-3 py-1 inline-flex text-sm font-medium bg-gray-100 text-gray-800 rounded-full">
                      Employee
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <button
                    onClick={() => handleRemoveMember(employee)}
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg text-sm font-medium text-white bg-red-600 hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
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
