import React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../../apis/baseURL";
import { Phone, Mail, MapPin } from "lucide-react";

const BookedRoomCard = ({ room, hotel }) => {
  console.log("rrom", room, hotel);
  return (
    <div className=" tw-bg-white tw-min-w-128 tw-rounded-lg tw-shadow-lg tw-overflow-hidden tw-cursor-pointer tw-transition-transform tw-duration-300 hover:tw-scale-105">
      {/* Room Image */}
      <div className="tw-relative tw-min-w-128 tw-h-48 tw-overflow-hidden">
        <img
          src={`${BASE_URL}/${room?.roomImg}`}
          alt={room?.hotelId?.hotelName}
          className="tw-w-full tw-h-full tw-object-cover"
        />
      </div>

      {/* Room Content */}
      <div className="tw-p-4">
        {/* Hotel Info */}
        <div className="tw-mt-3">
          <div className="tw-flex tw-justify-between">
            <h2 className="tw-text-lg tw-font-bold tw-text-gray-800">
              Hotel Name: {hotel?.hotelName}
            </h2>
            <p className="tw-flex tw-items-center tw-text-sm tw-text-gray-600">
              <i className="fas fa-map-marker-alt tw-mr-2 tw-text-red-500"></i>
              <MapPin />
              {hotel?.hotelLocation}
            </p>
          </div>
          <div className="tw-flex tw-justify-between">
            <p className="tw-flex tw-items-center tw-text-sm tw-text-gray-600">
              <Phone /> &nbsp; {hotel?.phoneNumber}
            </p>
            <p className="tw-flex tw-items-center tw-text-sm tw-text-gray-600">
              <Mail /> &nbsp; {hotel?.email}
            </p>
          </div>
        </div>
        <div className="tw-flex tw-justify-between tw-items-center tw-text-sm tw-text-gray-600">
          <div>
            <strong>Check-in:</strong> {room?.checkInTime}
          </div>
          <div>
            <strong>Check-out:</strong> {room?.checkOutTime}
          </div>
        </div>

        {/* Room Details */}
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-4 tw-mt-3">
          {/* AC Rooms */}
          <div className="tw-bg-gray-50 tw-p-3 tw-rounded-lg tw-shadow-sm">
            <h3 className="tw-text-sm tw-font-semibold tw-text-gray-700">
              AC Rooms
            </h3>
            <p className="tw-text-sm tw-text-gray-600">
              Available: {room?.acRooms}
            </p>
            <p className="tw-text-sm tw-font-medium tw-text-gray-800">
              ₹{room?.acRoomPrice}/night
            </p>
          </div>

          {/* Non-AC Rooms */}
          <div className="tw-bg-gray-50 tw-p-3 tw-rounded-lg tw-shadow-sm">
            <h3 className="tw-text-sm tw-font-semibold tw-text-gray-700">
              Non-AC Rooms
            </h3>
            <p className="tw-text-sm tw-text-gray-600">
              Available: {room?.nonAcRooms}
            </p>
            <p className="tw-text-sm tw-font-medium tw-text-gray-800">
              ₹{room?.nonAcRoomPrice}/night
            </p>
          </div>
        </div>

        {/* Timing */}
        
      </div>
    </div>
  );
};

export default BookedRoomCard;
