import React, { useEffect, useState } from "react";
import axiosInstance from "../../../../apis/axiosInstance";

const TaxiReviews = () => {
  const [reviews, setreviews] = useState([]);

  useEffect(() => {
    getTaxiData();
  }, []);
  const getTaxiData = async (id) => {
    try {
      const response = await axiosInstance.get(`/taxi-rating`);
      if (response.status === 200) {
        setreviews(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching reviews: ", error);
    }
  };
  console.log("review ", reviews);

  return (
    <div className="tw-container tw-mx-auto tw-p-4">
      <h3 className="tw-text-center tw-mb-5"> Taxi Reviews</h3>
      <table className="tw-w-full tw-table-auto tw-border-collapse">
        <thead>
          <tr className="tw-bg-gray-200">
            <th className="tw-px-4 tw-py-2">No.</th>
            <th className="tw-px-4 tw-py-2">Tourist Name</th>
            <th className="tw-px-4 tw-py-2">Taxi Name</th>
            <th className="tw-px-4 tw-py-2">Rating</th>
            <th className="tw-px-4 tw-py-2">Review</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((request, idx) => (
            <tr key={request._id} className="tw-border-b">
              <td className="tw-px-4 tw-py-2">{idx + 1}</td>
              <td className="tw-px-4 tw-py-2">{request.touristId?.name}</td>
              <td className="tw-px-4 tw-py-2">{request.taxiId?.driverName}</td>
              <td className="tw-px-4 tw-py-2">{request.rating}</td>
              <td className="tw-px-4 tw-py-2">{request.review}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaxiReviews;
