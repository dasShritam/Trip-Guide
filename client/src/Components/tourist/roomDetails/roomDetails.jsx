import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../apis/axiosInstance";
import RoomDetailsPage from "./roomDetailsPage";
import TouristNavbar from "../navbar/TouristNavbar";
import Footer from "../../Footer/Footer";
export default function RoomPage() {
  // Fetch room data from API
  const { id } = useParams();
  const [roomData, setRoomData] = useState({});
  useEffect(() => {
    if (id) {
      getRoomDetails(id);
    }
  }, [id]);

  const getRoomDetails = async () => {
    try {
      const response = await axiosInstance.get(`/rooms/${id}`);
      if (response.status === 200) {
        setRoomData(response.data.data);
      }
    } catch (error) {
      console.log("Error on get room details", error);
    }
  };

  return (
    <div>
      <TouristNavbar />
      <RoomDetailsPage room={roomData} />
      <Footer />
    </div>
  );
}
