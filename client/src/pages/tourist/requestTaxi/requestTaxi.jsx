import Footer from "../../../Components/Footer/Footer";
import TouristNavbar from "../../../Components/tourist/navbar/TouristNavbar";
import RequestTaxiForm from "./requestTaxiForm";

const RequestTaxi = () => {
  return (
    <div>
      <TouristNavbar />
      <div className="tw-mt-5">
        <RequestTaxiForm />
      </div>
      <Footer />
    </div>
  );
};

export default RequestTaxi;
