import { useForm } from "react-hook-form";
import { foodBookingProcess, taxiBookingProcess } from "../../../apis/tourist/paymentService";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const FoodPaymentModal = ({ foodId,touristId, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate()
  const onSubmit = (data) => {
    const { cardHolderName, cardNumber, expiryDate, cvv, noOfPersons, dateAndTime } = data;
    if (!cardHolderName || !cardNumber || !expiryDate || !cvv || !dateAndTime || !noOfPersons) {
      console.log("Please fill all the fields");
      return;
    }
    const serializedData = {
      foodId,
      touristId,
      dateAndTime,
      noOfPersons,
      accountHolderName: cardHolderName,
      cardNumber,
      expiryDate,
      cvv,
    };

    handlePayment(serializedData);
  };

  const handlePayment = async (data) => {
    try {
      const res = await foodBookingProcess(data);

      if (res) {
        toast.success("Your order has confirmed.");
        navigate(`/tourist/booked-foods`)
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
          <div className="tw-grid tw-grid-cols-2 tw-gap-4">
            <div>
              <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-1">
                Date and time
              </label>
              <input
                type="datetime-local"
                {...register("dateAndTime", {
                  required: "Date and time is required",
                  validate: (value) => {
                    const selectedDate = new Date(value);
                    const currentDate = new Date();
                    currentDate.setHours(0, 0, 0, 0);
                    return selectedDate >= currentDate || "Date & time must be valid";
                  },
                })}
                className={`tw-w-full tw-px-3 tw-py-2 tw-border tw-rounded-md tw-shadow-sm ${
                  errors.dateAndTime
                    ? "tw-border-red-500"
                    : "tw-border-gray-300"
                } tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-blue-500`}
              />
              {errors.dateAndTime && (
                <p className="tw-mt-1 tw-text-sm tw-text-red-600">
                  {errors.dateAndTime.message}
                </p>
              )}
            </div>
            <div>
              <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-1">
                No of persons
              </label>
              <input
                type="number"
                {...register("noOfPersons", {
                  required: "Number of persons is required",
                  min: {
                    value: 1,
                    message: "Minimum should be one"
                  },
                  max: {
                    value: 100,
                    message: "Maximum should be 100"
                  }
                })}
                className={`tw-w-full tw-px-3 tw-py-2 tw-border tw-rounded-md tw-shadow-sm ${
                  errors.noOfPersons
                    ? "tw-border-red-500"
                    : "tw-border-gray-300"
                } tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-blue-500`}
              />
              {errors.noOfPersons && (
                <p className="tw-mt-1 tw-text-sm tw-text-red-600">
                  {errors.noOfPersons.message}
                </p>
              )}
            </div>
          </div>
          <div>
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

export default FoodPaymentModal;
