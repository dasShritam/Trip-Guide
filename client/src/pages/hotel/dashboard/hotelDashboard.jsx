import { useState, useEffect } from "react";
import HotelDashboardLayout from "./hotelDashboardLayout";
import Overview from "./overview/overview";
import AddRoom from "./room/addRoom";
import { useSelector } from "react-redux";
import AddFood from "./food/addFood";
import { LoadingSpinner } from "../../../Components/common/loadingSpinner/loadingSpinner";
import ViewRoom from "./room/viewRoom";
import ViewFood from "./food/viewFood";
import ViewFoodDetails from "./food/viewFoodDetails";
import HotelProfile from "./profile/hotelProfile";

const HotelDashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const activePage = useSelector((state) => state.hotelActivePage.activePage);
  const [activeFoodId, setActiveFoodId] = useState("");
  const changeFoodId = (id) => {
    setActiveFoodId(id);
  };
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <HotelDashboardLayout>
      {activePage === "overview" && <Overview />}
      {activePage === "addFood" && <AddFood />}
      {activePage === "viewFood" && <ViewFood changeFoodId={changeFoodId} />}
      {activePage === "viewFoodDetails" && <ViewFoodDetails activeFoodId={activeFoodId} />}
      {activePage === "addRoom" && <AddRoom />}
      {activePage === "viewRoom" && <ViewRoom />}
      {activePage === "hotelProfile" && <HotelProfile />}

    </HotelDashboardLayout>
  );
};

export default HotelDashboard;
