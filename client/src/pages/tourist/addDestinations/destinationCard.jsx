import React from "react";
import { Eye, Trash2 } from "lucide-react";
import Button from "./ui/Button";
import { BASE_URL } from "../../../apis/baseURL";

const DestinationCard = ({ destination, onView, onDelete }) => {
  const img1Url = `${BASE_URL}${destination.img1}`;
  const img2Url = `${BASE_URL}${destination.img2}`;
  return (
    <div className="tw-bg-white tw-rounded-lg tw-shadow-md tw-overflow-hidden tw-transition-transform hover:tw-transform hover:tw-scale-[1.02]">
      <div className="tw-relative tw-h-48">
        <img
          src={img1Url}
          alt={destination.title}
          className="tw-w-full tw-h-full tw-object-cover"
        />
        <div className="tw-absolute tw-top-0 tw-right-0 tw-p-2">
          {/* <button
            onClick={() => onDelete(destination)}
            className="tw-p-2 tw-bg-red-500/80 tw-rounded-full hover:tw-bg-red-600/80 tw-transition-colors"
          >
            <Trash2 className="tw-w-5 tw-h-5 tw-text-white" />
          </button> */}
        </div>
      </div>

      <div className="tw-p-4">
        <h3 className="tw-text-xl tw-font-semibold tw-line-clamp-2 tw-h-16 tw-text-gray-800 tw-mb-2">
          {destination.title}
        </h3>
        <p className="tw-text-gray-600 tw-line-clamp-2 tw-mb-4 tw-h-20">
          {destination.description}
        </p>


        <Button className="tw-mx-auto" onClick={() => onView(destination)}>
          <Eye className="tw-w-5 tw-h-5" />
          View More
        </Button>
      </div>
    </div>
  );
};

export default DestinationCard;
