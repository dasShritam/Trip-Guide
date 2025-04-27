import { useState, useEffect } from "react";
import axiosInstance from "../../../apis/axiosInstance";
import "./packageCard.scss";
import { useNavigate } from "react-router-dom";
import BookedRoomCard from "../../../Components/tourist/bookRooms/bookedRoomCard";
const BookedRoomsContainer = () => {
  const navigate = useNavigate();
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    const activeTouristId =
      localStorage.getItem("travel_guide_tourist_id") || null;
    if (activeTouristId) {
      getRooms(activeTouristId);
    } else {
      navigate("/tourist/home");
    }
  }, []);

  const getRooms = async (activeTouristId) => {
    try {
      const res = await axiosInstance.get(
        `/rooms-booking/tourist/${activeTouristId}`
      );
      if (res.status === 200) {
        const data = res.data?.data?.reverse() || [];
        setRooms(data);
      }
    } catch (error) {
      console.log("error on get packages", error);
    }
  };
  console.log('room', rooms)
  return (
    <div id="pack-card-container">
      <h3 className="tw-text-center tw-mt-16">Booked Rooms</h3>
      <div className="tw-mx-auto tw-flex tw-w-11/12 tw-flex-wrap tw-p-5 tw-gap-5 tw-justify-between  tw-bg-neutral-50">
        {rooms.map((item) => {
          return (
            <BookedRoomCard
              key={item._id}
              room={item?.roomId}
              hotel={item?.hotelId}
            />
          );
        })}
      </div>
    </div>
  );
};
export default BookedRoomsContainer;
