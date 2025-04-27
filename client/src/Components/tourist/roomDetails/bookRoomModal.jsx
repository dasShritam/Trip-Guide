import { useForm } from "react-hook-form";
// import TouristAPIs from "../../../apis/tourist";
import { hotelBookingProcess } from "../../../apis/tourist/paymentService";
import { toast } from "react-hot-toast";

const BookRoomModal = ({ item, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const {
      cardHolderName,
      cardNumber,
      expiryDate,
      cvv,
      checkInDate,
      checkOutDate,
      roomType,
    } = data;
    if (
      !cardHolderName ||
      !cardNumber ||
      !expiryDate ||
      !cvv ||
      !checkInDate ||
      !checkOutDate ||
      !roomType
    ) {
      console.log("Please fill all the fields");
      return;
    }
    const roomId = item._id || null;
    const touristId = localStorage.getItem("travel_guide_tourist_id") || null;
    const hotelId = item.hotelId?._id || null;

    if (!roomId || !touristId || !hotelId) {
      console.log("Please login to book the package");
      return;
    }
    const serializedData = {
      roomId,
      touristId,
      hotelId,
      accountHolderName: cardHolderName,
      accountNumber: cardNumber,
      expiryDate,
      cvv,
      checkInDate,
      checkOutDate,
      roomType,
    };

    handlePayment(serializedData);
  };

  const handlePayment = async (data) => {
    try {
      const res = await hotelBookingProcess(data);
      if (res) {
        toast.success("Room booked successfully");
        onClose();
      }
    } catch (error) {
      console.log("Error on payment process", error);
      toast.error("Something went wrong.");
    }
  };

  return (
    <div className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-50 tw-flex tw-items-center tw-justify-center">
      <div className="tw-bg-white tw-rounded-lg tw-p-8 tw-w-full tw-max-w-md tw-mx-4">
        <h2 className="tw-text-2xl tw-font-bold tw-mb-6 tw-text-gray-800">
          Payment Details
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="tw-space-y-6">
          <div>
            <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-4">
              <div>
                <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-1">
                  Check-in Date
                </label>
                <input
                  type="date"
                  {...register("checkInDate", {
                    required: "Check-in date is required",
                  })}
                  className={`tw-w-full tw-px-3 tw-py-2 tw-border tw-rounded-md tw-shadow-sm ${
                    errors.checkInDate
                      ? "tw-border-red-500"
                      : "tw-border-gray-300"
                  } tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-blue-500`}
                />
                {errors.checkInDate && (
                  <p className="tw-mt-1 tw-text-sm tw-text-red-600">
                    {errors.checkInDate.message}
                  </p>
                )}
              </div>

              <div>
                <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-1">
                  Check-out Date
                </label>
                <input
                  type="date"
                  {...register("checkOutDate", {
                    required: "Check-out date is required",
                  })}
                  className={`tw-w-full tw-px-3 tw-py-2 tw-border tw-rounded-md tw-shadow-sm ${
                    errors.checkOutDate
                      ? "tw-border-red-500"
                      : "tw-border-gray-300"
                  } tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-blue-500`}
                />
                {errors.checkOutDate && (
                  <p className="tw-mt-1 tw-text-sm tw-text-red-600">
                    {errors.checkOutDate.message}
                  </p>
                )}
              </div>
            </div>

            <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-1">
              Room Type
            </label>
            <select
              {...register("roomType", {
                required: "Room type is required",
              })}
              className={`tw-w-full tw-px-3 tw-py-2 tw-border tw-rounded-md tw-shadow-sm ${
                errors.roomType ? "tw-border-red-500" : "tw-border-gray-300"
              } tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-blue-500`}
            >
              <option value="">Select Room Type</option>
              <option value="AC">AC</option>
              <option value="NON-AC">Non-AC</option>
            </select>
            {errors.roomType && (
              <p className="tw-mt-1 tw-text-sm tw-text-red-600">
                {errors.roomType.message}
              </p>
            )}
            <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-1">
              Card Holder Name
            </label>

            <input
              type="text"
              {...register("cardHolderName", {
                required: "Card holder name is required",
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Please enter a valid name",
                },
              })}
              className={`tw-w-full tw-px-3 tw-py-2 tw-border tw-rounded-md tw-shadow-sm ${
                errors.cardHolderName
                  ? "tw-border-red-500"
                  : "tw-border-gray-300"
              } tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-blue-500`}
            />
            {errors.cardHolderName && (
              <p className="tw-mt-1 tw-text-sm tw-text-red-600">
                {errors.cardHolderName.message}
              </p>
            )}
          </div>

          <div>
            <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-1">
              Card Number
            </label>
            <input
              type="text"
              maxLength="16"
              {...register("cardNumber", {
                required: "Card number is required",
                pattern: {
                  value: /^[0-9]{16}$/,
                  message: "Please enter a valid 16-digit card number",
                },
              })}
              className={`tw-w-full tw-px-3 tw-py-2 tw-border tw-rounded-md tw-shadow-sm ${
                errors.cardNumber ? "tw-border-red-500" : "tw-border-gray-300"
              } tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-blue-500`}
            />
            {errors.cardNumber && (
              <p className="tw-mt-1 tw-text-sm tw-text-red-600">
                {errors.cardNumber.message}
              </p>
            )}
          </div>

          <div className="tw-grid tw-grid-cols-2 tw-gap-4">
            <div>
              <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-1">
                Expiry Date
              </label>
              <input
                type="text"
                placeholder="MM/YY"
                maxLength="5"
                {...register("expiryDate", {
                  required: "Expiry date is required",
                  pattern: {
                    value: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
                    message: "Enter valid date (MM/YY)",
                  },
                })}
                className={`tw-w-full tw-px-3 tw-py-2 tw-border tw-rounded-md tw-shadow-sm ${
                  errors.expiryDate ? "tw-border-red-500" : "tw-border-gray-300"
                } tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-blue-500`}
              />
              {errors.expiryDate && (
                <p className="tw-mt-1 tw-text-sm tw-text-red-600">
                  {errors.expiryDate.message}
                </p>
              )}
            </div>

            <div>
              <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-1">
                CVV
              </label>
              <input
                type="password"
                maxLength="3"
                {...register("cvv", {
                  required: "CVV is required",
                  pattern: {
                    value: /^[0-9]{3}$/,
                    message: "Enter valid CVV",
                  },
                })}
                className={`tw-w-full tw-px-3 tw-py-2 tw-border tw-rounded-md tw-shadow-sm ${
                  errors.cvv ? "tw-border-red-500" : "tw-border-gray-300"
                } tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-blue-500`}
              />
              {errors.cvv && (
                <p className="tw-mt-1 tw-text-sm tw-text-red-600">
                  {errors.cvv.message}
                </p>
              )}
            </div>
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

export default BookRoomModal;
