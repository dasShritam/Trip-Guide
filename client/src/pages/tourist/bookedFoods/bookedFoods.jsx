import Footer from "../../../Components/Footer/Footer";
import TouristNavbar from "../../../Components/tourist/navbar/TouristNavbar";
import BookedFoodsTable from "./bookedFoodsTable";

const BookedFoods = () => {
  return (
    <div>
      <TouristNavbar />
      <div className="tw-min-h-96 tw-w-11/12 tw-mx-auto">
        <h3 className="tw-text-center tw-mt-3">Food Bookings </h3>
        <BookedFoodsTable />
      </div>
      <Footer />
    </div>
  );
};
export default BookedFoods;
