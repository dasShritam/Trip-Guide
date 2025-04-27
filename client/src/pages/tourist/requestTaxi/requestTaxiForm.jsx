import React, { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { toast } from "react-hot-toast";
import taxiImg from "../../../Asset/images/taxi-booking.jpg";
import axiosInstance from "../../../apis/axiosInstance";
import { useNavigate } from "react-router-dom";
const RequestTaxiForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const navigate = useNavigate();
  const [totalFare, setTotalFare] = useState(0);
  const [touristId, setTouristId] = useState("");

  const travelDistance = useWatch({
    control,
    name: "travelDistance",
    defaultValue: 0,
  });

  const onSubmit = (data) => {
    const { pickUpLocation, destination, travelDistance, pickUpDateTime } =
      data;
    if (
      !touristId ||
      !pickUpLocation ||
      !destination ||
      travelDistance === undefined ||
      !totalFare ||
      !pickUpDateTime ||
      !totalFare
    ) {
      console.log("Please fill all the fields");
      return;
    }

    // check pickUpDateTime is future date or not
    


    sendDataToServer({ ...data, touristId, totalFare });
  };
  const sendDataToServer = async (data) => {
    try {
      const res = await axiosInstance.post("/taxi-booking/taxi-request", data);
      if (res.status === 201) {
        toast.success("Your request sent successfully.");
        navigate("/tourist/view-taxi-booking");
      }
    } catch (error) {
      const msg = error?.response?.data?.message || "Server issue.";
      toast.error(msg);
      console.log("Error on send req", error);
    }
  };
  const calculateFare = (distance) => {
    const baseFare = 50;
    const chargePerKM = 10;
    const totalKMCharge = distance * chargePerKM;
    const totalCharge = baseFare + totalKMCharge;
    setTotalFare(totalCharge);
  };
  const getTouristId = () => {
    const id = localStorage.getItem("travel_guide_tourist_id") || null;
    if (id) {
      setTouristId(id);
    }
  };
  useEffect(() => {
    if (travelDistance) {
      calculateFare(travelDistance);
    }
  }, [travelDistance]);

  useEffect(() => {
    getTouristId();
  }, []);
  return (
    <div className=" tw-mt-10 tw-flex tw-items-center tw-justify-center tw-min-h-screen tw-bg-gray-100">
      <div className="tw-bg-white tw-rounded-lg tw-shadow-lg tw-overflow-hidden tw-w-full tw-max-w-4xl tw-flex">
        <div
          className="tw-w-1/2 tw-bg-cover"
          style={{ backgroundImage: `url(${taxiImg})` }}
        ></div>
        <div className="tw-w-1/2 tw-p-8">
          <h2 className="tw-text-2xl tw-font-bold tw-mb-6 tw-text-gray-800">
            Request a Taxi
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="tw-space-y-6">
            <div>
              <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-1">
                Pick Up Location
              </label>
              <input
                type="text"
                {...register("pickUpLocation", {
                  required: "Pick up location is required",
                })}
                className={`tw-w-full tw-px-3 tw-py-2 tw-border tw-rounded-md tw-shadow-sm ${
                  errors.pickUpLocation
                    ? "tw-border-red-500"
                    : "tw-border-gray-300"
                } tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-blue-500`}
              />
              {errors.pickUpLocation && (
                <p className="tw-mt-1 tw-text-sm tw-text-red-600">
                  {errors.pickUpLocation.message}
                </p>
              )}
            </div>

            <div>
              <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-1">
                Destination
              </label>
              <input
                type="text"
                {...register("destination", {
                  required: "Destination is required",
                })}
                className={`tw-w-full tw-px-3 tw-py-2 tw-border tw-rounded-md tw-shadow-sm ${
                  errors.destination
                    ? "tw-border-red-500"
                    : "tw-border-gray-300"
                } tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-blue-500`}
              />
              {errors.destination && (
                <p className="tw-mt-1 tw-text-sm tw-text-red-600">
                  {errors.destination.message}
                </p>
              )}
            </div>

            <div>
              <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-1">
                Travel Distance (KM)
              </label>
              <input
                type="number"
                {...register("travelDistance", {
                  required: "Travel distance is required",
                  min: {
                    value: 0,
                    message: "Travel distance must be at least 1 KM",
                  },
                  max: {
                    value: 5000,
                    message: "Travel distance must be within 5000 km",
                  },
                })}
                className={`tw-w-full tw-px-3 tw-py-2 tw-border tw-rounded-md tw-shadow-sm ${
                  errors.travelDistance
                    ? "tw-border-red-500"
                    : "tw-border-gray-300"
                } tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-blue-500`}
              />
              {errors.travelDistance && (
                <p className="tw-mt-1 tw-text-sm tw-text-red-600">
                  {errors.travelDistance.message}
                </p>
              )}
            </div>

            <div>
              <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-1">
                Pick Up Date & Time
              </label>
              <input
                type="datetime-local"
    
                {...register("pickUpDateTime", {
                  required: "Pick up date & time is required",
                  validate: (value) => {
                    const selectedDate = new Date(value);
                    const currentDate = new Date();
                    currentDate.setHours(0, 0, 0, 0);
                    return selectedDate >= currentDate || "Pick up date & time must be valid";
                  },
                })}
                className={`tw-w-full tw-px-3 tw-py-2 tw-border tw-rounded-md tw-shadow-sm ${
                  errors.pickUpDateTime
                    ? "tw-border-red-500"
                    : "tw-border-gray-300"
                } tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-blue-500`}
              />
              {errors.pickUpDateTime && (
                <p className="tw-mt-1 tw-text-sm tw-text-red-600">
                  {errors.pickUpDateTime.message}
                </p>
              )}
            </div>

            <div>
              <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-1">
                Total Fare
              </label>
              <input
                type="text"
                value={totalFare}
                readOnly
                className="tw-w-full tw-px-3 tw-py-2 tw-border tw-rounded-md tw-shadow-sm tw-border-gray-300 tw-bg-gray-100 tw-cursor-not-allowed"
              />
            </div>

            <div className="tw-flex tw-justify-center tw-space-x-4 tw-mt-8">
              <button
                type="submit"
                className="tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-text-white tw-bg-blue-600 tw-rounded-md hover:tw-bg-blue-700 tw-transition-colors"
              >
                Request Taxi
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestTaxiForm;
