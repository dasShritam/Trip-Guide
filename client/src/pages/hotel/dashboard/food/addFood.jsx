import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../../apis/axiosInstance";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setActivePage } from "../../../../redux/hotel/activePageSlice";
const AddFood = () => {
  const navigate = useNavigate();
  const [hotelId, setHotelId] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const id = localStorage.getItem("travel_guide_hotel_id");
    if (!id) {
      navigate("/login");
      return;
    }
    setHotelId(id)
  }, []);

  const sendDataToServer = async (data) => {
    try {
      const formData = new FormData();
      for (const key in data) {
        formData.append(key, data[key]);
      }
      setLoading(true);

      const response = await axiosInstance.post(`/food`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 201) {
        toast.success("Food added successfully");
        dispatch(setActivePage("viewFood"));
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
    
    const { name, price, foodImg, description, foodType, ingredients } = data;

    if (!name || !price || !description || !foodType || !ingredients) {
      console.log("all fields are required", data);
      return;
    }

    if (foodImg.length === 0) {
      toast.error("Room image is required.");
      return;
    }
    const serializedData = {
      ...data,
      hotelId,
      foodImg: foodImg[0],
    };
    sendDataToServer(serializedData);
  };

  return (
    <div className="tw-p-6  tw-max-w-3xl tw-mx-auto">
      <h1 className="tw-text-2xl tw-font-bold tw-mb-6 tw-text-gray-800 tw-text-center">
        Add Food Details
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="tw-bg-white tw-rounded-lg tw-shadow-md tw-p-6"
      >
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6">
          <div>
            <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-1">
              Food name
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Food name is required",
              })}
              className="tw-w-full tw-p-2 tw-border tw-rounded-md"
            />
            {errors.name && (
              <p className="tw-text-red-500 tw-text-sm">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Non-AC Rooms */}
          <div>
            <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-1">
              Food Price
            </label>
            <input
              type="number"
              {...register("price", {
                required: "Food Price is required",
                min: { value: 0, message: "Cannot be negative" },
              })}
              className="tw-w-full tw-p-2 tw-border tw-rounded-md"
            />
            {errors.price && (
              <p className="tw-text-red-500 tw-text-sm">
                {errors.price.message}
              </p>
            )}
          </div>

          <div>
            <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-1">
              Food Image
            </label>
            <input
              type="file"
              {...register("foodImg", {
                required: "Food image is required",
              })}
              className="tw-w-full tw-p-2 tw-border tw-rounded-md"
            />
            {errors.foodImg && (
              <p className="tw-text-red-500 tw-text-sm">
                {errors.foodImg.message}
              </p>
            )}
          </div>

          <div>
            <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-1">
              Food type
            </label>
            <div className="tw-flex tw-justify-start">
              <div>
                <input
                  {...register("foodType", {
                    required: "Please select a option",
                  })}
                  type="radio"
                  value="veg"
                  name="foodType"
                />
                <label className="tw-mx-3">Veg</label>
              </div>
              <div className="tw-ms-10">
                <input
                  {...register("foodType", {
                    required: "Please select a option",
                  })}
                  type="radio"
                  value="non-veg"
                  name="foodType"
                />
                <label className="tw-mx-3">Non Veg</label>
              </div>
            </div>
            {errors.foodType && (
              <p className="tw-text-red-500 tw-text-sm">
                {errors.foodType.message}
              </p>
            )}
          </div>
          <div>
            <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-1">
              Ingredients
            </label>
            <input
              className="tw-w-full tw-p-2 tw-border tw-rounded-md"
              type="text"
              {...register("ingredients", {
                required: "Please enter ingredeints",
              })}
            />

            {errors.ingredients && (
              <p className="tw-text-red-500 tw-text-sm">
                {errors.ingredients.message}
              </p>
            )}
          </div>
          <div>
            <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-1">
              Food Description
            </label>
            <input
              type="text"
              {...register("description", {
                required: "Food description is required",
              })}
              className="tw-w-full tw-p-2 tw-border tw-rounded-md"
            />
            {errors.description && (
              <p className="tw-text-red-500 tw-text-sm">
                {errors.description.message}
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
            {loading ? "Creating..." : "Add Food"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFood;
