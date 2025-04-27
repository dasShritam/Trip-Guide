import { Container } from "react-bootstrap";
import "./topPlaces.css";
import { useState } from "react";

export const TopPlaces = () => {
  const [activeRegion, setActiveRegion] = useState("north");
  const regions = {
    north: [
      {
        id: 1,
        place: "Utharakhand",
        image: "https://www.tourmyindia.com/imagess/uttarakhand01-package.webp",
      },
      {
        id: 2,
        place: "Uttar Pradesh",
        image: "https://www.tourmyindia.com/imagess/up-package.webp",
      },
      {
        id: 3,
        place: "Himachal",
        image: "https://www.tourmyindia.com/imagess/himachal-package.webp",
      },
      {
        id: 4,
        place: "Jammu & Kashmir",
        image: "https://www.tourmyindia.com/imagess/j&k-package.webp",
      },
      {
        id: 5,
        place: "Rajasthan",
        image: "https://www.tourmyindia.com/imagess/rajasthan-package.webp",
      },
      {
        id: 6,
        place: "Ladakh",
        image: "https://www.tourmyindia.com/imagess/ladakh-trend.webp",
      },
      {
        id: 7,
        place: "Delhi",
        image: "https://www.tourmyindia.com/imagess/delhi-package.webp",
      },
    ],
    south: [
      {
        id: 1,
        place: "Kerala",
        image: "https://www.tourmyindia.com/imagess/kerala-package.webp",
      },
      {
        id: 2,
        place: "Karnataka",
        image: "https://www.tourmyindia.com/imagess/karnataka-package.webp",
      },
      {
        id: 3,
        place: "Tamilnadu",
        image: "https://www.tourmyindia.com/imagess/tamilnadu-package.webp",
      },
      {
        id: 4,
        place: "Andaman",
        image: "https://www.tourmyindia.com/imagess/andaman-package.webp",
      },
      {
        id: 5,
        place: "Puducherry",
        image: "https://www.tourmyindia.com/imagess/puducherry-package.webp",
      },
      {
        id: 6,
        place: "Andra Pradesh",
        image: "https://www.tourmyindia.com/imagess/andhra-package.webp",
      },
      {
        id: 7,
        place: "Telegana",
        image: "https://www.tourmyindia.com/imagess/telangana-package.webp",
      },
    ],
    east: [
      {
        id: 1,
        place: "Sikkim",
        image: "https://www.tourmyindia.com/imagess/sikkim-package.webp",
      },
      {
        id: 2,
        place: "Arunachal",
        image: "https://www.tourmyindia.com/imagess/arunachal-package.webp",
      },
      {
        id: 3,
        place: "Assam",
        image: "https://www.tourmyindia.com/imagess/assam-package.webp",
      },
      {
        id: 4,
        place: "Odisha",
        image: "https://www.tourmyindia.com/imagess/odisha-package.webp",
      },
      {
        id: 5,
        place: "West Bengal",
        image: "https://www.tourmyindia.com/imagess/wb-package.webp",
      },
      {
        id: 6,
        place: "Nagaland",
        image: "https://www.tourmyindia.com/imagess/nagaland-package.webp",
      },
      {
        id: 7,
        place: "Meghalaya",
        image: "https://www.tourmyindia.com/imagess/meghalaya-package.webp",
      },
    ],
    west: [
      {
        id: 1,
        place: "Goa",
        image: "https://www.tourmyindia.com/imagess/goa-package.webp",
      },
      {
        id: 2,
        place: "Gujarat",
        image: "https://www.tourmyindia.com/imagess/gujarat-package.webp",
      },
      {
        id: 3,
        place: "Maharashtra",
        image: "https://www.tourmyindia.com/imagess/maharashtra-package.webp",
      },
      {
        id: 4,
        place: "Daman & Diu",
        image: "https://www.tourmyindia.com/imagess/daman&diu-package.webp",
      },
      {
        id: 5,
        place: "Dadra & Nagar Haveli",
        image: "https://www.tourmyindia.com/imagess/dadra-package.webp",
      },
      {
        id: 6,
        place: "Gir National park",
        image: "https://www.tourmyindia.com/imagess/gir-package.webp",
      },
      {
        id: 7,
        place: "Pune",
        image: "https://www.tourmyindia.com/imagess/pune-package.webp",
      },
    ],
    center: [
      {
        id: 1,
        place: "Madhya Pradesh",
        image: "https://www.tourmyindia.com/imagess/mp-package.webp",
      },
      {
        id: 2,
        place: "Chattisgarh",
        image: "https://www.tourmyindia.com/imagess/chattisgarh-package.webp",
      },
      {
        id: 3,
        place: "Kanha National Park",
        image: "https://www.tourmyindia.com/imagess/kahna-package.webp",
      },
      {
        id: 4,
        place: "Khajuraho",
        image: "https://www.tourmyindia.com/imagess/khajuraho-package.webp",
      },
      {
        id: 5,
        place: "Bandhavgarh",
        image: "https://www.tourmyindia.com/imagess/bandhavgarh-package.webp",
      },
      {
        id: 6,
        place: "Ujjain",
        image: "https://www.tourmyindia.com/imagess/ujjain-package.webp",
      },
      {
        id: 7,
        place: "Bhopal",
        image: "https://www.tourmyindia.com/imagess/bhopal-package.webp",
      },
    ],
  };
  const data = regions[activeRegion];
  const renderingImages = regions[activeRegion].map((item, index) => {
    if (index === 0) return;
    return (
      <div className="col-md-4 col-6" key={index}>
        <div className="img-container">
          <img src={item?.image} alt="place" className="img-fluid" />
          <b>{item?.place}</b>
        </div>
      </div>
    );
  });

  return (
    <Container className=" mx-auto " id="top-places-container">
      <p className="display-6">
        <strong className="text-primary font-weight-bold">Explore </strong> Top
        Destinations by Region{" "}
      </p>
      <div id="top-places-list">
        <ul className="nav">
          <li className={`nav-item`} onClick={() => setActiveRegion("north")}>
            <button
              className={`nav-link ${activeRegion === "north" && "active"}`}
            >
              North India
            </button>
          </li>
          <li className={`nav-item`} onClick={() => setActiveRegion("south")}>
            <button
              className={`nav-link ${activeRegion === "south" && "active"}`}
            >
              South India
            </button>
          </li>
          <li className={`nav-item `} onClick={() => setActiveRegion("east")}>
            <button
              className={`nav-link ${activeRegion === "east" && "active"}`}
            >
              East India
            </button>
          </li>
          <li className={`nav-item`} onClick={() => setActiveRegion("west")}>
            <button
              className={`nav-link ${activeRegion === "west" && "active"}`}
            >
              West India
            </button>
          </li>
          <li className={`nav-item`} onClick={() => setActiveRegion("center")}>
            <button
              className={`nav-link ${activeRegion === "center" && "active"}`}
            >
              Center India
            </button>
          </li>
        </ul>
      </div>

      <div className="row g-3 mt-3">
        <div className="col-lg-5 col-md-12 col-sm-12">
          <div className="img-container">
            <img src={data[0].image} alt="tourst-place" className="w-100" />
            <b>{data[0]?.place}</b>
          </div>
        </div>
        <div className="col-lg-7 col-md-12 col-12">
          <div className="row g-3 flex-wrap"> {renderingImages}</div>
        </div>
      </div>
    </Container>
  );
};
