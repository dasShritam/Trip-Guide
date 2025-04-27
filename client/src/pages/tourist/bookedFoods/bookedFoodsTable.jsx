import React, { useEffect, useState } from "react";
import axiosInstance from "../../../apis/axiosInstance";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { Mail, MapPin, PhoneForwarded } from "lucide-react";

const BookedFoodsTable = () => {
  const [requests, setRequests] = useState([]);
  const [hotelInfo, setHotelInfo] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const id = localStorage.getItem("travel_guide_tourist_id") || [];
    if (id) {
      getOrderedFoodData(id);
    }
  }, []);

  const navigate = useNavigate();

  const getOrderedFoodData = async (id) => {
    try {
      const response = await axiosInstance.get(
        `/food-booking/get-orders-by-tourist/${id}`
      );
      if (response.status === 200) {
        let data = response.data?.data || [];
        data.reverse();
        setRequests(data);
      }
    } catch (error) {
      console.error("Error fetching requests: ", error);
    }
  };

  const navigateToHotel = async (id) => {
    try {
      const res = await axiosInstance.get(`/food/get-food-by-id/${id}`);
      if (res.status === 200) {
        const foodData = res.data?.data;
        if (foodData) {
          setHotelInfo(foodData?.hotelId || {});
          setShowModal(true);
        }
      }
    } catch (error) {
      console.log("Error on navigate to hotel", error);
    }
  };

  return (
    <>
      <HotelModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        hotel={hotelInfo}
      />
      <div className="tw-container tw-mx-auto tw-p-4">
        <table className="tw-w-full tw-table-auto tw-border-collapse">
          <thead>
            <tr className="tw-bg-gray-200">
              <th className="tw-px-4 tw-py-2">No.</th>
              <th className="tw-px-4 tw-py-2">Order No</th>
              <th className="tw-px-4 tw-py-2">Date</th>
              <th className="tw-px-4 tw-py-2">Time</th>
              <th className="tw-px-4 tw-py-2">Total count</th>
              <th className="tw-px-4 tw-py-2">Food Item</th>
              <th className="tw-px-4 tw-py-2">Price</th>
              <th className="tw-px-4 tw-py-2">Hotel Info</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request, idx) => (
              <tr key={request._id} className="tw-border-b">
                <td className="tw-px-4 tw-py-2">{idx + 1}</td>
                <td className="tw-px-4 tw-py-2">{request.orderId}</td>
                <td className="tw-px-4 tw-py-2">
                  {request?.dateAndTime?.substring(0, 10)}
                </td>
                <td className="tw-px-4 tw-py-2">
                  {request?.dateAndTime?.slice(11)}
                </td>
                <td className="tw-px-4 tw-py-2">{request.noOfPersons}</td>
                <td className="tw-px-4 tw-py-2">{request.foodId?.name}</td>
                <td className="tw-px-4 tw-py-2">{request.foodId?.price}</td>
                <td className="tw-px-4 tw-py-2">
                  <button
                    className="tw-px-4 tw-py-2 tw-bg-blue-500 tw-text-white"
                    onClick={() => {
                      navigateToHotel(request?.foodId?._id);
                    }}
                  >
                    Hotel Info
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

const HotelModal = ({ isOpen, onClose, hotel }) => {
  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Hotel Name: {hotel?.hotelName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="tw-grid tw-grid-cols-2 tw-gap-4">
          <div className="tw-flex tw-items-center">
            <MapPin className="tw-mr-2" />
            <span>{hotel?.hotelLocation}</span>
          </div>
          <div className="tw-flex tw-items-center">
            <PhoneForwarded className="tw-mr-2" />
            <span>{hotel?.phoneNumber}</span>
          </div>
          <div className="tw-flex tw-items-center">
          <Mail className="tw-mr-2" />
            <span>{hotel?.email}</span>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default BookedFoodsTable;
