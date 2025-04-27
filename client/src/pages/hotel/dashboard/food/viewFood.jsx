import React, { useEffect, useState } from "react";
import axiosInstance from "../../../../apis/axiosInstance";
import { BASE_URL } from "../../../../apis/baseURL";
import { useDispatch } from "react-redux";
import { setActivePage } from "../../../../redux/hotel/activePageSlice";
const ViewFood = ({ changeFoodId }) => {
  const [foodItems, setFoodItems] = useState([]);
  const dispatch = useDispatch();
  const fetchFoodItems = async (id) => {
    try {
      const response = await axiosInstance.get(`food/get-food-by-hotel/${id}`);
      if (response.status === 200) {
        const data = response.data?.data?.reverse() || [];
        setFoodItems(data);
      }
    } catch (error) {
      console.error("Error fetching food items:", error);
    }
  };

  useEffect(() => {
    const id = localStorage.getItem("travel_guide_hotel_id");
    if (id) {
        fetchFoodItems(id);
    }
  }, []);

  const changePage = (newPage) => {
    dispatch(setActivePage(newPage));
  };
  return (
    <div className="tw-container tw-mx-auto tw-p-4">
      <h1 className="tw-text-3xl tw-font-bold tw-mb-4 tw-text-center">
        Food Menu
      </h1>
      <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-4">
        {foodItems.map((food) => (
          <div
            key={food.id}
            className="tw-bg-white tw-rounded-lg tw-shadow-md tw-overflow-hidden tw-h-120"
          >
            <img
              src={
                `${BASE_URL}/${food.foodImg}` ||
                "https://via.placeholder.com/150"
              }
              alt={food.name}
              className="tw-w-full tw-h-48 tw-object-cover"
            />
            <div className="tw-p-4">
              <h2 className="tw-text-xl tw-font-bold tw-text-center">
                {food.name}
              </h2>
              <p className="tw-text-gray-700 tw-mb-2">₹ {food.price}</p>
              <p className="tw-text-gray-600 tw-h-20">
                {food.description?.length > 100
                  ? `${food.description?.substring(0, 100)}...`
                  : food.description}
              </p>
              <div className="tw-flex tw-justify-center">
                <button
                  className=" tw-bg-blue-500 tw-text-white tw-py-2 tw-px-4 tw-rounded"
                  onClick={() => {
                    changeFoodId(food._id);
                    changePage("viewFoodDetails");
                  }}
                >
                  View More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewFood;
