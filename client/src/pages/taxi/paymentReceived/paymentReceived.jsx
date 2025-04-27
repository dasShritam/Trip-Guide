import React, { useEffect, useState } from "react";
import axiosInstance from "../../../apis/axiosInstance";

const TaxiPaymentReceived = () => {
  const [requests, setRequests] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const id = localStorage.getItem("travel_guide_taxi_id");
    if (id) {
      getTaxiData(id);
    }
  }, []);
  const getTaxiData = async (id) => {
    try {
      const response = await axiosInstance.get(
        `/taxi-booking/getAllDriverApprovedReqByTaxiId/${id}`
      );
      if (response.status === 200) {
        setRequests(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching requests: ", error);
    }
  };

  console.log('reqq ', requests)
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="tw-container tw-mx-auto tw-p-4">
      <h3 className="tw-text-center tw-mb-5"> Your Approved Requests</h3>
      <table className="tw-w-full tw-table-auto tw-border-collapse">
        <thead>
          <tr className="tw-bg-gray-200">
            <th className="tw-px-4 tw-py-2">No.</th>
            <th className="tw-px-4 tw-py-2">Tourist Name</th>
            <th className="tw-px-4 tw-py-2">Departure</th>
            <th className="tw-px-4 tw-py-2">Destination</th>

            <th className="tw-px-4 tw-py-2">Travel Distance</th>
            <th className="tw-px-4 tw-py-2">Total Fare</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request, idx) => (
            <tr key={request._id} className="tw-border-b">
              <td className="tw-px-4 tw-py-2">{idx + 1}</td>
              <td className="tw-px-4 tw-py-2">{request.touristId?.name}</td>
              <td className="tw-px-4 tw-py-2">{request.pickUpLocation}</td>
              <td className="tw-px-4 tw-py-2">{request.destination}</td>
              <td className="tw-px-4 tw-py-2">{request.travelDistance}</td>
              <td className="tw-px-4 tw-py-2">{request.totalFare}</td>

              {/* <td className="tw-px-4 tw-py-2">
                <button
                  className="tw-bg-blue-500 tw-text-white tw-px-4 tw-py-2 tw-rounded hover:tw-bg-blue-600"
                  onClick={openModal}
                >
                  Book
                </button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaxiPaymentReceived;
