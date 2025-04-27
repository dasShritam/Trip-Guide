import Footer from "../../../Components/Footer/Footer";
import BookRooms from "../../../Components/tourist/bookRooms/bookRooms";
import TouristNavbar from "../../../Components/tourist/navbar/TouristNavbar";
import TaxiContainer from "./taxiContainer";

const ViewTaxies = () => {
  return (
    <div>
      <TouristNavbar />
      <div className="tw-min-h-96 tw-w-full">
        <h3 className="tw-text-center tw-mt-3">Taxies</h3>
        <TaxiContainer />
      </div>
      <Footer />
    </div>
  );
};

export default ViewTaxies;
