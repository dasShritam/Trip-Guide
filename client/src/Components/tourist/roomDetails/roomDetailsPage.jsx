import React, { useState } from "react";
import "./roomDetails.css";
import { BASE_URL } from "../../../apis/baseURL";
import BookRoomModal from "./bookRoomModal";

const RoomDetailsPage = ({ room }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onClose = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="room-details-container">
        <div className="room-hero ">
          <img
            src={`${BASE_URL}/${room.roomImg}`}
            alt="Hotel Room"
            className="room-hero-image tw-mx-auto tw-h-auto tw-max-h-[400px] tw-w-auto"
          />
        </div>

        <div className="room-info-grid">
          <div className="info-card">
            <h3>Room Availability</h3>
            <p>AC Rooms: {room.acRooms}</p>
            <p>Non-AC Rooms: {room.nonAcRooms}</p>
            <p>Total Rooms: {room.totalRooms}</p>
          </div>

          <div className="info-card">
            <h3>Pricing</h3>
            <p>AC Room: ₹{room.acRoomPrice}/night</p>
            <p>Non-AC Room: ₹{room.nonAcRoomPrice}/night</p>
          </div>

          <div className="info-card">
            <h3>Timings</h3>
            <p>Check-in: {room.checkInTime}</p>
            <p>Check-out: {room.checkOutTime}</p>
          </div>

          <div className="info-card">
            <h3>Hotel Details</h3>
            <p>Name: {room.hotelId?.hotelName}</p>
            <p>Location: {room.hotelId?.hotelLocation}</p>
            <p>Contact: {room.hotelId?.phoneNumber}</p>
            <p>Email: {room.hotelId?.email}</p>
          </div>
        </div>

        <div className="tw-flex tw-mx-auto ">
          <button
            onClick={() => {
              setIsModalOpen(true);
            }}
            className="tw-mx-auto tw-bg-blue-500 tw-text-white tw-rounded-md tw-p-2 tw-mt-4"
          >
            Book Now
          </button>
        </div>
      </div>

      {isModalOpen && <BookRoomModal item={room} onClose={onClose} />}
    </>
  );
};

export default RoomDetailsPage;
