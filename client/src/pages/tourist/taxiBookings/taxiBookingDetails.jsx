import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../apis/axiosInstance";

import Footer from "../../../Components/Footer/Footer";
import TouristNavbar from "../../../Components/tourist/navbar/TouristNavbar";
import TaxiBookingStatusTable from "./taxiBookingStatusTable";
import TaxiBookingDetailsContainer from "./taxiBookingDetailsContainer";

const TaxiBookingDetails = () => {
  const { id } = useParams();
  const [bookingData, setBookingData] = useState({});
  useEffect(() => {
    if (id) {
      getTaxiData(id);
    }
  }, [id]);

  const getTaxiData = async (id) => {
    try {
      const res = await axiosInstance.get("/taxi-booking/getBookingById/" + id);
      if (res.status === 200) {
        setBookingData(res.data?.data);
      }
    } catch (error) {
      console.log("error on get taxi data", error);
    }
  };
  console.log("bbb", bookingData);
  return (
    <div>
      <TouristNavbar />
      <div className="tw-min-h-96 tw-w-full">
        <TaxiBookingDetailsContainer bookingData={bookingData} />
      </div>
      <Footer />
    </div>
  );
};

export default TaxiBookingDetails;
