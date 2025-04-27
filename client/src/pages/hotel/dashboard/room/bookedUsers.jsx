import React, { useEffect, useState } from "react";
import { Users, Calendar, Clock, Users2, Phone } from "lucide-react";
import axiosInstance from "../../../../apis/axiosInstance";

const BookedUsersTable = () => {
  const [usersData, setUsersData] = useState([]);
  useEffect(() => {
    const id = localStorage.getItem("travel_guide_hotel_id");
    if (!id) {
      console.log("Login again");
      return;
    }
    getUsersData(id);
  }, []);

  const getUsersData = async (id) => {
    try {
      const response = await axiosInstance.get(`/rooms-booking/hotel/${id}`);
      if (response.status === 200) {
        setUsersData(response.data?.data?.reverse() || []);
      }
    } catch (error) {
      console.log("Error on fetching users data", error);
    }
  };
  console.log("userr", usersData);
  return (
    <div className="tw-bg-white tw-rounded-xl tw-shadow-lg tw-overflow-hidden tw-mt-5">
      <div className="tw-p-6 tw-border-b tw-border-gray-100">
        <div className="tw-flex tw-items-center tw-gap-2">
          <Users className="tw-w-5 tw-h-5 tw-text-blue-600" />
          <h2 className="tw-text-xl tw-font-semibold tw-text-gray-800">
            Booked users
          </h2>
        </div>
      </div>

      <div className="tw-overflow-x-auto">
        <table className="tw-w-full tw-min-w-[600px]">
          <thead>
            <tr className="tw-bg-gray-50">
              <th className="tw-px-6 tw-py-4 tw-text-left tw-text-sm tw-font-semibold tw-text-gray-600">
                No.
              </th>
              <th className="tw-px-6 tw-py-4 tw-text-left tw-text-sm tw-font-semibold tw-text-gray-600">
                Name
              </th>
              <th className="tw-px-6 tw-py-4 tw-text-left tw-text-sm tw-font-semibold tw-text-gray-600">
                Check In Date
              </th>
              <th className="tw-px-6 tw-py-4 tw-text-left tw-text-sm tw-font-semibold tw-text-gray-600">
                Room Type
              </th>
              <th className="tw-px-6 tw-py-4 tw-text-left tw-text-sm tw-font-semibold tw-text-gray-600">
                Gender
              </th>
              <th className="tw-px-6 tw-py-4 tw-text-left tw-text-sm tw-font-semibold tw-text-gray-600">
                Phone Number
              </th>
            </tr>
          </thead>
          <tbody className="tw-divide-y tw-divide-gray-100">
            {usersData.map((order, index) => (
              <tr
                key={index}
                className="hover:tw-bg-gray-50 tw-transition-colors"
              >
                      <td className="tw-px-6 tw-py-4">
                  <div className="tw-flex tw-items-center tw-gap-2">
                    <Calendar className="tw-w-4 tw-h-4 tw-text-gray-400" />

                    <span className="tw-text-gray-600">
                     {index + 1}
                    </span>
                  </div>
                </td>
                <td className="tw-px-6 tw-py-4">
                  <div className="tw-flex tw-items-center tw-gap-3">
                    <div className="tw-w-8 tw-h-8 tw-rounded-full tw-bg-blue-100 tw-flex tw-items-center tw-justify-center">
                      <span className="tw-text-blue-600 tw-font-medium">
                        {order.touristId?.name?.charAt(0)}
                      </span>
                    </div>
                    <span className="tw-text-gray-700">
                      {order.touristId?.name}
                    </span>
                  </div>
                </td>
                <td className="tw-px-6 tw-py-4">
                  <div className="tw-flex tw-items-center tw-gap-2">
                    <Calendar className="tw-w-4 tw-h-4 tw-text-gray-400" />

                    <span className="tw-text-gray-600">
                      {order?.checkInDate ||  "31/12/2024"}
                    </span>
                  </div>
                </td>
                <td className="tw-px-6 tw-py-4">
                  <div className="tw-flex tw-items-center tw-gap-2">
                    <Clock className="tw-w-4 tw-h-4 tw-text-gray-400" />
                    <span className="tw-text-gray-600">
                      {order?.roomType || "09:00"}
                    </span>
                  </div>
                </td>
                <td className="tw-px-6 tw-py-4">
                  <div className="tw-flex tw-items-center tw-gap-2">
                    <Users2 className="tw-w-4 tw-h-4 tw-text-gray-400" />
                    <span className="tw-text-gray-600">{order.touristId?.gender}</span>
                  </div>
                </td>
                <td className="tw-px-6 tw-py-4">
                  <div className="tw-flex tw-items-center tw-gap-2">
                    <Phone className="tw-w-4 tw-h-4 tw-text-gray-400" />
                    <span className="tw-text-gray-600">
                      {order.touristId?.phoneNumber}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookedUsersTable;
