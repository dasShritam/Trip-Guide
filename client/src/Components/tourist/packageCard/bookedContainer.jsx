import { useState, useEffect } from "react";
import axiosInstance from "../../../apis/axiosInstance";
import PackageCard from "./packageCard";
import "./packageCard.scss";
import { useNavigate } from "react-router-dom";
import BookedPackageCard from "./bookedCard";
const BookedContainer = () => {
  const navigate = useNavigate();
  const [packages, setPackages] = useState([]);
  const [filteredPacks, setFilterdPacks] = useState([]);
  const [searchedItem, setSearchedItem] = useState("");
  useEffect(() => {
    const activeTouristId =
      localStorage.getItem("travel_guide_tourist_id") || null;
    if (activeTouristId) {
      getPackages(activeTouristId);
    } else {
      navigate("/tourist/home");
    }
  }, []);

    useEffect(() => {
      const filtered = packages.filter((pack) => {
        return pack.packageName.toLowerCase().includes(searchedItem.toLowerCase());
      });
      setFilterdPacks(filtered);
    }, [searchedItem]);
  

  const getPackages = async (activeTouristId) => {
    try {
      const res = await axiosInstance.get(
        `/package-booking/tourist/${activeTouristId}`
      );
      if (res.status === 200) {
        const data = res.data?.data?.reverse() || [];
        setPackages(data);
        setFilterdPacks(data);
      }
    } catch (error) {
      console.log("error on get packages", error);
    }
  };
  return (
    <div id="pack-card-container">
      <h3 className="tw-text-center tw-mt-16">Booked Packages</h3>
      <div className="tw-mx-auto tw-flex tw-w-11/12 tw-flex-wrap tw-p-5 tw-gap-5 tw-justify-between tw-bg-neutral-50">
        {filteredPacks.map((item) => {
          return <BookedPackageCard key={item._id} item={item?.packageId} />;
        })}
      </div>
    </div>
  );
};
export default BookedContainer;
