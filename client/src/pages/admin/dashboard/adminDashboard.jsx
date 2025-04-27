import { useState, useEffect } from "react";
import AdminDashboardLayout from "./adminDashboardLayout";
import Overview from "./overview/overview";
import { useSelector } from "react-redux";
import { LoadingSpinner } from "../../../Components/common/loadingSpinner/loadingSpinner";
import ViewAllUsers from "./viewAllUsers/viewAllUsers";
import ViewAllAgencies from "./viewAllAgencies/viewAllAgencies";
import ViewAllHotels from "./viewAllHotels/viewAllHotels";
import ViewAllRooms from "./viewAllRooms/viewAllRooms";
import AddDestinations from "./addDestinations/addDestinations";
import ViewDestinations from "./addDestinations/viewDestinations";
import TaxiReviews from "./viewTaxiRatings/viewTaxiRatings";

const AdminDashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const activePage = useSelector((state) => state.hotelActivePage.activePage);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <AdminDashboardLayout>
      {activePage === "overview" && <Overview />}
      {activePage === "view-all-users" && <ViewAllUsers />}
      {activePage === "view-all-agencies" && <ViewAllAgencies />}
      {activePage === "view-all-hotels" && <ViewAllHotels />}
      {activePage === "view-all-rooms" && <ViewAllRooms />}
      {activePage === "add-destinations" && <AddDestinations />}
      {activePage === "view-destinations" && <ViewDestinations />}
      {activePage === "taxi-reviews" && <TaxiReviews />}
    
    </AdminDashboardLayout>
  );
};

export default AdminDashboard;
