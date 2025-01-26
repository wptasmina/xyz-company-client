import { useState, useEffect, useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";

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

    // Apply sorting by product_quantity (ascending or descending)
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

  // modal open func
  const handleRequest = (asset) => {
    setSelectedAsset(asset);
    setIsModalOpen(true);
  };

  // modal close func
  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedAsset(null);
  };

  // handle sending asset request
  const handleRequestSubmit = async (e) => {
    e.preventDefault();

    // get additional note data
    const form = e.target;
    const additional_notes = form.additional_notes.value;

    // destructure posted info
    const requester_name = user.displayName;
    const requester_email = user.email;
    const request_date = new Date().toISOString();
    const asset_id = selectedAsset._id;

    // posted info
    const requestedAsset = {
      asset_id,
      requester_name,
      requester_email,
      status: "Pending",
      request_date,
      additional_notes,
      hr_email: hr,
    };

    // post request api
    const response = await axiosPublic.post("/requested-asset", requestedAsset);
    // after send request then close modal
    handleModalClose();
    // after successfully send request then open this modal
    if (response.data.insertedId) {
      Swal.fire({
        title: "Request",
        text: "Asset request submitted successfully!",
        icon: "success",
      });
    }
    // when failed request then open then modal
    else {
      Swal.fire({
        title: "Failed",
        text: "Failed to submit asset request. Please try again.",
        icon: "error",
      });
    }
  };

  if (status === true) {
    return (
     
      <div className="max-w-6xl mx-auto p-6">
      <Helmet>
        <title>TrakSmart | Request Assets </title>
      </Helmet>
        {/* Filters Section */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Search assets..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-[#1753c2] p-2 rounded w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-[#1753c2]"
          />
          <select
            className="border border-[#1753c2] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#1753c2]"
            onChange={(e) => {
              const value = e.target.value;
              setAvailabilityFilter(value);

              // Automatically set sort option based on availability filter
              if (value === "Available") {
                setSortOption("desc");
              } else if (value === "Out of stock") {
                setSortOption("asc");
              } else {
                setSortOption("asc"); // Default to ascending for "All"
              }
            }}
          >
            <option value="all">All Availability</option>
            <option value="Available">Available</option>
            <option value="Out of stock">Out of stock</option>
          </select>

          {/* Asset Type Filter Dropdown */}
          <select
            className="border border-[#1753c2] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#1753c2]"
            onChange={(e) => setAssetTypeFilter(e.target.value)}
          >
            <option value="all">All Asset Types</option>
            <option value="Returnable">Returnable</option>
            <option value="Non-Returnable">Non-Returnable</option>
          </select>
        </div>

        {/* Assets Table */}
        <div className="bg-white shadow-md rounded overflow-hidden">
          <table className="table-auto w-full">
            <thead className="bg-[#1753c2] text-white">
              <tr>
                <th className="px-4 py-2 text-left">Asset Name</th>
                <th className="px-4 py-2 text-left">Asset Type</th>
                <th className="px-4 py-2 text-left">Availability</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredAssets?.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center py-4 text-gray-500">
                    No assets found.
                  </td>
                </tr>
              ) : (
                filteredAssets?.map((asset) => (
                  <tr key={asset._id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2">{asset.product_name}</td>
                    <td className="px-4 py-2">{asset.product_type}</td>
                    <td className="px-4 py-2">
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
                        className={`px-4 py-2 text-white rounded ${
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

        {/* Modal Section */}
        {isModalOpen && selectedAsset && (
          <form onSubmit={handleRequestSubmit}>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-6 rounded shadow-lg w-1/3">
                <h2 className="text-2xl font-semibold mb-4">Request Asset</h2>
                <textarea
                  className="border p-2 w-full rounded mb-4"
                  placeholder="Add any additional notes..."
                  name="additional_notes"
                />
                <div className="flex justify-between">
                  <button
                    type="button"
                    className="bg-gray-500 text-white px-4 py-2 rounded"
                    onClick={handleModalClose}
                  >
                    Close
                  </button>
                  <button className="bg-[#1753c2] text-white px-4 py-2 rounded">
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
      <div
        id="affiliation-message"
        className="bg-yellow-100 text-yellow-800 p-4 rounded-lg mb-6"
      >
        <p className="text-lg">
          ⚠ You are not affiliated with any company. Please contact your HR to
          complete the affiliation process.
        </p>
      </div>
    );
  }
}
