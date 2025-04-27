import { useEffect, useState } from "react";
import DestinationList from "./destinationList";
import axiosInstance from "../../../../apis/axiosInstance";
import TouristNavbar from "../../../../Components/tourist/navbar/TouristNavbar";
import Footer from "../../../../Components/Footer/Footer";

function ViewDestinations() {
  const [destinations, setDestinations] = useState([]);
  const [fixedDest, setFixedDest] = useState([]);
  const filterDest = (filterd) => {
    setDestinations(filterd);
  };
  useEffect(() => {
    getDestination();
  }, []);
  const getDestination = async () => {
    try {
      const res = await axiosInstance.get("/top-destinations/get-all");
      if (res.status === 200) {
        const data = res?.data?.data?.reverse() || [];
        setDestinations(data);
        setFixedDest(data)
      }
    } catch (error) {
      console.log("error on get destination", error);
    }
  };

  return (
    <div>
      <DestinationList
        destinations={destinations}
        getDestination={getDestination}
        fixedDest={fixedDest}
        filterDest={filterDest}
      />
    </div>
  );
}

export default ViewDestinations;
