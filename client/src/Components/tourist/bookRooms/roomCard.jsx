import React from "react";
import "./RoomCard.css";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../../apis/baseURL";
const RoomCard = ({ room }) => {
  const navigate = useNavigate();
  return (
    <div
      className="room-card tw-cursor-pointer"
      onClick={() => navigate(`/tourist/room/${room._id}`)}
    >
      <div className="room-card-image">
        <img
          src={`${BASE_URL}/${room.roomImg}`}
          alt={room.hotelId?.hotelName}
        />
      </div>

      <div className="room-card-content">
        <div className="hotel-info">
          <h2>{room.hotelId?.hotelName}</h2>
          <p className="location">
            <i className="fas fa-map-marker-alt"></i>
            {room.hotelId?.hotelLocation}
          </p>
          <p className="contact">
            <i className="fas fa-phone"></i> {room.hotelId?.phoneNumber}
          </p>
        </div>

        <div className="room-details">
          <div className="room-type">
            <div className="ac-rooms">
              <h3>AC Rooms</h3>
              <p>Available: {room.acRooms}</p>
              <p className="price">₹{room.acRoomPrice}/night</p>
            </div>
            <div className="non-ac-rooms">
              <h3>Non-AC Rooms</h3>
              <p>Available: {room.nonAcRooms}</p>
              <p className="price">₹{room.nonAcRoomPrice}/night</p>
            </div>
          </div>

          <div className="timing">
            <div className="check-in">
              <p>
                <strong>Check-in:</strong> {room.checkInTime}
              </p>
            </div>
            <div className="check-out">
              <p>
                <strong>Check-out:</strong> {room.checkOutTime}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
