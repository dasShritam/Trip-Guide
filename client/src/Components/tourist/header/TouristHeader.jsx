import React from "react";
import earthVideo from "../../../Asset/videos/video-1.mp4";
import { TouristButton } from "../button/TouristButton";
import "./TouristHeader.scss";
import { useNavigate } from "react-router-dom";
export default function TouristHeader() {
  const navigate = useNavigate()
  const navigateToPackages = () => {
    navigate('/tourist/view-packages')
  }
  // const navigateToPackages = () => {
  //   navigate('/tourist/packages')
  // }
  return (
    <div className="hero-container">
      <video src={earthVideo} autoPlay loop muted />
      <div className="video-overlay">
        <h1>Explore the World</h1>
        <p>Your journey begins here..</p>
        <div className="hero-btns">
          <TouristButton
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            redirectionLink={'/tourist/view-packages'}
          >
            View Packages 
          </TouristButton>
          <TouristButton
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            redirectionLink={'/tourist/request-taxi'}
          >
            Request Taxi <i className="far fa-play-circle" />
          </TouristButton>
        </div>
      </div>
    </div>
  );
}
