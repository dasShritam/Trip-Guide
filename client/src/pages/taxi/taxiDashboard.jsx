import { useState, useEffect } from "react";
import TaxiDashboardLayout from "./taxiDashboardLayout";
import Overview from "./overview/overview";
import { useSelector } from "react-redux";
import { LoadingSpinner } from "../../Components/common/loadingSpinner/loadingSpinner";
import TaxiBookingRequests from "./viewReq/viewPendingReq.jsx";
import TaxiApprovedRequests from "./viewReq/viewApprovedReq.jsx";
import TaxiProfile from "./profile/taxiProfile.jsx";
import TaxiReviews from "./taxiRating/taxiRating.jsx";

const TaxiDashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const activePage = useSelector((state) => state.hotelActivePage.activePage);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <TaxiDashboardLayout>
      {activePage === "overview" && <Overview />}
      {activePage === "view-pending-request" && <TaxiBookingRequests />}
      {activePage === "view-approved-request" && <TaxiApprovedRequests />}
      {activePage === "taxiProfile" && <TaxiProfile />}
      {activePage === "taxi-reviews" && <TaxiReviews />}
    </TaxiDashboardLayout>
  );
};

export default TaxiDashboard;
