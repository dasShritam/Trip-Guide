import Footer from "../../../Components/Footer/Footer";
import BookRooms from "../../../Components/tourist/bookRooms/bookRooms";
import TouristNavbar from "../../../Components/tourist/navbar/TouristNavbar";

const ViewHotels = () => {
  return (
    <div>
      <TouristNavbar />
      <div className="tw-min-h-96 tw-w-full">
        <BookRooms />
      </div>
      <Footer />
    </div>
  );
};

export default ViewHotels;
