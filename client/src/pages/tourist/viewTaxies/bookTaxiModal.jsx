import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const BookTaxiModal = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { departure, destination, estimateKm, startingTime } = data;
    if (!departure || !destination || !estimateKm || !startingTime) {
      console.log("Please fill all the fields");
      return;
    }

    const serializedData = {
      departure,
      destination,
      estimateKm,
      startingTime,
    };

    handleBooking(serializedData);
  };

  const handleBooking = async (data) => {
    try {
      // Replace with your booking API call
      console.log("Booking data:", data);
      toast.success("Taxi booked successfully");
      onClose();
    } catch (error) {
      console.log("Error on booking process", error);
      toast.error("Something went wrong.");
    }
  };

  return (
    <div className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-50 tw-flex tw-items-center tw-justify-center">
      <div className="tw-bg-white tw-rounded-lg tw-p-8 tw-w-full tw-max-w-md tw-mx-4">
        <h2 className="tw-text-2xl tw-font-bold tw-mb-6 tw-text-gray-800">
          Taxi Booking Details
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="tw-space-y-6">
          <div>
            <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-1">
              Departure
            </label>
            <input
              type="text"
              {...register("departure", {
                required: "Departure is required",
              })}
              className={`tw-w-full tw-px-3 tw-py-2 tw-border tw-rounded-md tw-shadow-sm ${
                errors.departure ? "tw-border-red-500" : "tw-border-gray-300"
              } tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-blue-500`}
            />
            {errors.departure && (
              <p className="tw-mt-1 tw-text-sm tw-text-red-600">
                {errors.departure.message}
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
                errors.destination ? "tw-border-red-500" : "tw-border-gray-300"
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
              Estimate Km
            </label>
            <input
              type="number"
              {...register("estimateKm", {
                required: "Estimate Km is required",
                min: {
                  value: 1,
                  message: "Estimate Km must be at least 1",
                },
              })}
              className={`tw-w-full tw-px-3 tw-py-2 tw-border tw-rounded-md tw-shadow-sm ${
                errors.estimateKm ? "tw-border-red-500" : "tw-border-gray-300"
              } tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-blue-500`}
            />
            {errors.estimateKm && (
              <p className="tw-mt-1 tw-text-sm tw-text-red-600">
                {errors.estimateKm.message}
              </p>
            )}
          </div>

          <div>
            <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-1">
              Starting Time
            </label>
            <input
              type="datetime-local"
              {...register("startingTime", {
                required: "Starting time is required",
              })}
              className={`tw-w-full tw-px-3 tw-py-2 tw-border tw-rounded-md tw-shadow-sm ${
                errors.startingTime ? "tw-border-red-500" : "tw-border-gray-300"
              } tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-blue-500`}
            />
            {errors.startingTime && (
              <p className="tw-mt-1 tw-text-sm tw-text-red-600">
                {errors.startingTime.message}
              </p>
            )}
          </div>

          <div className="tw-flex tw-justify-end tw-space-x-4 tw-mt-8">
            <button
              type="button"
              onClick={onClose}
              className="tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-text-gray-700 tw-bg-gray-100 tw-rounded-md hover:tw-bg-gray-200 tw-transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-text-white tw-bg-blue-600 tw-rounded-md hover:tw-bg-blue-700 tw-transition-colors"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookTaxiModal;