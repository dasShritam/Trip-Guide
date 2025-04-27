import Footer from "../../../Components/Footer/Footer";
import TouristNavbar from "../../../Components/tourist/navbar/TouristNavbar";
import TaxiBookingStatusTable from "./taxiBookingStatusTable";


const ViewTaxiesBooking = () => {
  return (
    <div>
      <TouristNavbar />
      <div className="tw-min-h-96 tw-w-full">
        <h3 className="tw-text-center tw-mt-3">Taxi Bookings </h3>
        <TaxiBookingStatusTable />
      </div>
      <Footer />
    </div>
  );
};

export default ViewTaxiesBooking;
