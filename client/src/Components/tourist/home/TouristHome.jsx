import React, { useEffect } from "react";
import TouristHeader from "../header/TouristHeader";
import TouristNavbar from "../navbar/TouristNavbar";
import Destination from "../destination/Destination";
import TourCategory from "../category/TourCategory";
import Footer from "../../Footer/Footer";
import { useNavigate } from "react-router-dom";
export default function TouristHome() {
  const navigate = useNavigate();
  useEffect(() => {
    const clickedRoute = localStorage.getItem("tourist-clicked-route") || null;
    if (clickedRoute) {
      navigate(clickedRoute);
      localStorage.removeItem("tourist-clicked-route");
    }
  }, []);
  return (
    <div>
      <TouristNavbar />
      <TouristHeader />
      <Destination />
      <TourCategory />
      <Footer />
    </div>
  );
}
