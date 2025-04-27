import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../../apis/axiosInstance";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setActivePage } from "../../../../redux/hotel/activePageSlice";
const AddRoom = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const changePage = (newPage) => {
    dispatch(setActivePage(newPage));
  };

  const totalRooms = watch("totalRooms", 0);
  const acRooms = watch("acRooms", 0);

  const sendDataToServer = async (data) => {
    try {
      const formData = new FormData();
      for (const key in data) {
        formData.append(key, data[key]);
      }
      setLoading(true);
      const hotelId = localStorage.getItem("travel_guide_hotel_id");
      if (!hotelId) {
        navigate("/login");
        return;
      }
      const response = await axiosInstance.post(`/rooms`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 201) {
        toast.success("Room created successfully");
        changePage("viewRoom")
      }
    } catch (error) {
      console.error("Error creating room:", error);
      const errorMessage = error.response.data.message || "An error occurred";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };
  const onSubmit = async (data) => {
    const hotelId = localStorage.getItem("travel_guide_hotel_id") || null;
    if (!hotelId) {
      navigate("/login");
      return;
    }
    const {
      acRooms,
      nonAcRooms,
      acRoomPrice,
      nonAcRoomPrice,
      checkInTime,
      checkOutTime,
      roomImg,
    } = data;

    if (acRooms === 0 && nonAcRooms === 0) {
      toast.error("At least one room must be provided");
      return;
    }
    if (
      acRooms < 0 ||
      nonAcRooms < 0 ||
      acRoomPrice < 0 ||
      nonAcRoomPrice < 0
    ) {
      toast.error("Price cannot be negative");
      return;
    }

    if (roomImg.length === 0) {
      toast.error("Room image is required.");
      return;
    }
    const totalRooms = parseInt(acRooms) + parseInt(nonAcRooms);
    const serializedData = {
      ...data,
      hotelId,
      totalRooms,
      roomImg: roomImg[0],
    };
    sendDataToServer(serializedData);
  };

  return (
    <div className="tw-p-6 tw-max-w-3xl tw-mx-auto">
      <h1 className="tw-text-2xl tw-font-bold tw-mb-6 tw-text-gray-800 tw-text-center">
        Provide Room Details
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="tw-bg-white tw-rounded-lg tw-shadow-md tw-p-6"
      >
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6">
          {/* Total Rooms */}

          {/* AC Rooms */}
          <div>
            <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-1">
              AC Rooms
            </label>
            <input
              type="number"
              {...register("acRooms", {
                required: "AC rooms is required",
                min: { value: 0, message: "Cannot be negative" },
              })}
              className="tw-w-full tw-p-2 tw-border tw-rounded-md"
            />
            {errors.acRooms && (
              <p className="tw-text-red-500 tw-text-sm">
                {errors.acRooms.message}
              </p>
            )}
          </div>

          {/* Non-AC Rooms */}
          <div>
            <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-1">
              Non-AC Rooms
            </label>
            <input
              type="number"
              {...register("nonAcRooms", {
                required: "Non-AC rooms is required",
                min: { value: 0, message: "Cannot be negative" },
              })}
              className="tw-w-full tw-p-2 tw-border tw-rounded-md"
            />
            {errors.nonAcRooms && (
              <p className="tw-text-red-500 tw-text-sm">
                {errors.nonAcRooms.message}
              </p>
            )}
          </div>

          {/* AC Room Price */}
          <div>
            <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-1">
            ₹ AC Room Price
            </label>
            <input
              type="number"
              {...register("acRoomPrice", {
                required: "AC room price is required",
                min: { value: 0, message: "Price cannot be negative" },
              })}
              className="tw-w-full tw-p-2 tw-border tw-rounded-md"
            />
            {errors.acRoomPrice && (
              <p className="tw-text-red-500 tw-text-sm">
                {errors.acRoomPrice.message}
              </p>
            )}
          </div>

          {/* Non-AC Room Price */}
          <div>
            <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-1">
              ₹ Non-AC Room Price
            </label>
            <input
              type="number"
              {...register("nonAcRoomPrice", {
                required: "Non-AC room price is required",
                min: { value: 0, message: "Price cannot be negative" },
              })}
              className="tw-w-full tw-p-2 tw-border tw-rounded-md"
            />
            {errors.nonAcRoomPrice && (
              <p className="tw-text-red-500 tw-text-sm">
                {errors.nonAcRoomPrice.message}
              </p>
            )}
          </div>

          {/* Check-in Time */}
          <div>
            <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-1">
              Check-in Time
            </label>
            <input
              type="time"
              {...register("checkInTime", {
                required: "Check-in time is required",
              })}
              className="tw-w-full tw-p-2 tw-border tw-rounded-md"
            />
            {errors.checkInTime && (
              <p className="tw-text-red-500 tw-text-sm">
                {errors.checkInTime.message}
              </p>
            )}
          </div>

          {/* Check-out Time */}
          <div>
            <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-1">
              Check-out Time
            </label>
            <input
              type="time"
              {...register("checkOutTime", {
                required: "Check-out time is required",
              })}
              className="tw-w-full tw-p-2 tw-border tw-rounded-md"
            />
            {errors.checkOutTime && (
              <p className="tw-text-red-500 tw-text-sm">
                {errors.checkOutTime.message}
              </p>
            )}
          </div>
          {/* room image  */}
          <div>
            <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-1">
              Room Photo
            </label>
            <input
              type="file"
              {...register("roomImg", {
                required: "Room image is required.",
              })}
              className="tw-w-full tw-p-2 tw-border tw-rounded-md"
            />
            {errors.checkOutTime && (
              <p className="tw-text-red-500 tw-text-sm">
                {errors.roomImg.message}
              </p>
            )}
          </div>
        </div>

        <div className="tw-mt-6">
          <button
            type="submit"
            disabled={loading}
            className="tw-w-full tw-bg-blue-600 tw-text-white tw-py-2 tw-px-4 tw-rounded-md tw-hover:bg-blue-700 tw-transition-colors tw-duration-200"
          >
            {loading ? "Creating..." : "Create Room"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRoom;
