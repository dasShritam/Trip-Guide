import Footer from "../../../Components/Footer/Footer";
import TouristNavbar from "../../../Components/tourist/navbar/TouristNavbar";
import BookedContainer from "../../../Components/tourist/packageCard/bookedContainer";

const BookedPackages = () => {
  return (
    <div>
      <TouristNavbar />
      <BookedContainer />
      <Footer />
    </div>
  );
};
export default BookedPackages;
