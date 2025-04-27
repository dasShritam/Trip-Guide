import { useState, useEffect } from "react";
import axios from "axios";
import axiosInstance from "../../../../apis/axiosInstance";

const ViewAllAgencies = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;
  const totalPages = Math.ceil(filteredUsers.length / rowsPerPage);
  const startIdx = (currentPage - 1) * rowsPerPage;
  const endIdx = startIdx + rowsPerPage;
  const currentUsers = filteredUsers.slice(startIdx, endIdx);
  useEffect(() => {
    fetchUsers();
  }, [currentPage]);

  const fetchUsers = async () => {
    try {
      const response = await axiosInstance.get(`/agency/getAllAgencies`);
      const data = response.data.data?.reverse() || [];
      setUsers(data);
      setFilteredUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleDeactivate = async (userId) => {
    try {
      await axios.patch(`/api/users/${userId}/deactivate`);
      fetchUsers();
    } catch (error) {
      console.error("Error deactivating user:", error);
    }
  };

  return (
    <div className="tw-p-6 ">
      <h1 className="tw-text-2xl tw-font-bold tw-mb-6 tw-overflow-auto">
        View All Agencies
      </h1>

      <div className="tw-flex tw-items-center tw-justify-between tw-mb-6">
        <input
          type="text"
          className="tw-w-full tw-p-2 tw-px-4 tw-rounded-md tw-bg-gray-100 tw-text-gray-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="Search by name or email"
          onChange={(e) => {
            const searchValue = e.target.value.toLowerCase();
            if (!searchValue) {
              setFilteredUsers(users);
            }
            const filteredUsers = users.filter(
              (user) =>
                user.agencyName.toLowerCase().includes(searchValue) ||
                user.email.toLowerCase().includes(searchValue)
            );
            setFilteredUsers(filteredUsers);
          }}
        />
      </div>
      {/* Table */}
      <div
        className="tw-overflow-auto tw-bg-white tw-rounded-lg tw-shadow "
        style={{ maxHeight: "500px" }}
      >
        <table className="  tw-min-w-full tw-divide-y tw-divide-gray-200 tw-max-h-96 ">
          <thead className="tw-bg-gray-50">
            <tr>
              <th className="tw-px-6 tw-py-3 tw-text-left tw-text-xs tw-font-medium tw-text-gray-500 tw-uppercase tw-tracking-wider">
                No.
              </th>
              <th className="tw-px-6 tw-py-3 tw-text-left tw-text-xs tw-font-medium tw-text-gray-500 tw-uppercase tw-tracking-wider">
                Name
              </th>
              <th className="tw-px-6 tw-py-3 tw-text-left tw-text-xs tw-font-medium tw-text-gray-500 tw-uppercase tw-tracking-wider">
                Email
              </th>
              <th className="tw-px-6 tw-py-3 tw-text-left tw-text-xs tw-font-medium tw-text-gray-500 tw-uppercase tw-tracking-wider">
                Phone
              </th>

              <th className="tw-px-6 tw-py-3 tw-text-left tw-text-xs tw-font-medium tw-text-gray-500 tw-uppercase tw-tracking-wider">
                Address
              </th>

              <th className="tw-px-6 tw-py-3 tw-text-left tw-text-xs tw-font-medium tw-text-gray-500 tw-uppercase tw-tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="tw-bg-white tw-divide-y tw-divide-gray-200">
            {currentUsers.map((user, idx) => (
              <tr key={user._id}>
                <td className="tw-px-6 tw-py-4 tw-whitespace-nowrap">
                  {idx + 1 + (currentPage * rowsPerPage - 5)}
                </td>
                <td className="tw-px-6 tw-py-4 tw-whitespace-nowrap">
                  {user.agencyName}
                </td>
                <td className="tw-px-6 tw-py-4 tw-whitespace-nowrap">
                  {user.email}
                </td>
                <td className="tw-px-6 tw-py-4 tw-whitespace-nowrap">
                  {user.phoneNumber}
                </td>

                <td className="tw-px-6 tw-py-4 tw-whitespace-nowrap tw-min-w-28 tw-max-w-32 tw-overflow-auto">
                  {user.agencyAddress}
                </td>

                <td>
                  <button
                    onClick={() => handleDeactivate(user._id)}
                    className="tw-bg-red-500 tw-text-white tw-px-3 tw-py-1 tw-rounded hover:tw-bg-red-600"
                  >
                    Deactivate
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="tw-flex tw-justify-center tw-mt-4 tw-gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`tw-px-3 tw-py-1 tw-rounded ${
              currentPage === page
                ? "tw-bg-blue-500 tw-text-white"
                : "tw-bg-gray-200 tw-text-gray-700 hover:tw-bg-gray-300"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ViewAllAgencies;
