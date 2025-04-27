import { BASE_URL } from "../../../apis/baseURL";
import { useState } from "react";
import BookPackageModal from "./bookPackageModal";
const PackageCard = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClose = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="package-card tw-mt-10 tw-w-full">
        
        <figure className="card-banner">
          <img
            className="tw-h-full tw-w-full"
            src={`${BASE_URL}/${item?.packagePhoto}`}
            alt="Experience The Great Holiday On Beach"
            loading="lazy"
          />
        </figure>

        <div className="card-content">
          <h3 className="h3 card-title">{item?.packageName}</h3>

          <p className="card-text tw-h-52 tw-overflow-y-auto">
            {item?.packageDescription}
          </p>

          <ul className="card-meta-list">
            <li className="card-meta-item">
              <div className="meta-box">
                <ion-icon name="time"></ion-icon>

                <p className="text tw-mb-0">
                  {item?.days}D/{item?.nights}N
                </p>
              </div>
            </li>

            <li className="card-meta-item">
              <div className="meta-box">
                <ion-icon name="people"></ion-icon>

                <p className="text tw-mb-0">TAS: {item?.totalAvailableSeats}</p>
              </div>
            </li>

            <li className="card-meta-item">
              <div className="meta-box">
                <ion-icon name="location"></ion-icon>

                <p className="text tw-mb-0">{item?.startingDate}</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="card-price">
          <div className="wrapper">
            <p className="reviews">({item?.review?.length || 0} reviews)</p>

            <div className="card-rating">
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
            </div>
          </div>

          <p className="price">
            {item?.costPerHead}
            <span> / per person</span>
          </p>

          <button
            className="btn btn-secondary"
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            Book Now
          </button>
        </div>
      </div>

      {isModalOpen && <BookPackageModal item={item} onClose={onClose} />}
    </>
  );
};
export default PackageCard;
