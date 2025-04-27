import { useEffect, useState } from "react";
import axiosInstance from "../../../apis/axiosInstance";
import "./RoomCard.css";
import RoomCard from "./roomCard";
const BookRooms = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    getAllRooms();
  }, []);

  const getAllRooms = async () => {
    const response = await axiosInstance.get("/rooms");
    if (response.status === 200) {
      setRooms(response.data?.data?.reverse() || []);
    }
  };
  console.log('room', rooms)
  return (
    <div>
      <h4 className="tw-text-center tw-mt-20">Available Rooms</h4>

      <div className="rooms-container">
        {rooms.map((room) => (
          <RoomCard key={room._id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default BookRooms;
