import React, { useEffect, useState } from "react";
import axiosInstance from "../../../../apis/axiosInstance";
import { BASE_URL } from "../../../../apis/baseURL";
import { Clock, Utensils, DollarSign, Tag } from "lucide-react";
import OrderedUsersTable from "./orderedUsers";

const ViewFoodDetails = ({ activeFoodId }) => {
  const [foodItem, setFoodItem] = useState({});
  const [orders, setOrders] = useState([]);
  const fetchFoodItem = async () => {
    try {
      const response = await axiosInstance.get(
        `food/get-food-by-id/${activeFoodId}`
      );
      if (response.status === 200) {
        const data = response.data?.data || {};
        setFoodItem(data);
      }
    } catch (error) {
      console.error("Error fetching food items:", error);
    }
  };

  const fetchAllTheOrders = async () => {
    try {
      const res = await axiosInstance.get(`food-booking/get-orders-by-food/${activeFoodId}`);
      if (res.status === 200) {
        setOrders(res.data?.data?.reverse() || [])
      }
    } catch (error) {
      console.log('Error on fetch all orders', error)
    }
  }
  useEffect(() => {
    if (activeFoodId) {
      fetchFoodItem();
      fetchAllTheOrders()
    }
  }, [activeFoodId]);

  return (

    <div className="tw-container tw-mx-auto tw-p-4 tw-max-w-4xl">
      <div className="tw-bg-white tw-rounded-2xl tw-shadow-lg tw-overflow-hidden">
        {/* Image Section */}
        <div className="tw-relative tw-h-[400px]">
          <img
            src={`${BASE_URL}/${foodItem.foodImg}`}
            alt={foodItem.name}
            className="tw-w-full tw-h-full tw-object-cover"
          />
          <div className="tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-bg-gradient-to-b tw-from-black/50 tw-to-transparent tw-p-6">
            <span className="tw-inline-block tw-bg-orange-500 tw-text-white tw-px-3 tw-py-1 tw-rounded-full tw-text-sm tw-font-medium">
              {foodItem.foodType}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="tw-p-8">
          <div className="tw-flex tw-justify-between tw-items-start tw-mb-6">
            <h1 className="tw-text-3xl tw-font-bold tw-text-gray-800">
              {foodItem.name}
            </h1>
            <div className="tw-flex tw-items-center tw-gap-2 tw-bg-green-50 tw-px-4 tw-py-2 tw-rounded-full">
              
              <span className="tw-text-xl tw-font-bold tw-text-green-600">
                ₹ {foodItem.price}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="tw-text-gray-600 tw-mb-8 tw-leading-relaxed">
            {foodItem.description}
          </p>

          {/* Ingredients Section */}
          <div className="tw-bg-gray-50 tw-rounded-xl tw-p-6 tw-mb-6">
            <div className="tw-flex tw-items-center tw-gap-2 tw-mb-4">
              <Utensils className="tw-w-5 tw-h-5 tw-text-orange-500" />
              <h2 className="tw-text-xl tw-font-semibold tw-text-gray-800">
                Ingredients
              </h2>
            </div>
            <p className="tw-text-gray-600 tw-leading-relaxed">
              {foodItem.ingredients}
            </p>
          </div>

          {/* Food Type Tag */}
          <div className="tw-flex tw-items-center tw-gap-2 tw-text-gray-500">
            <Tag className="tw-w-4 tw-h-4" />
            <span className="tw-text-sm">Type: {foodItem.foodType}</span>
          </div>
        </div>
      </div>

      <OrderedUsersTable orders={orders}/>
    </div>

  );
};

export default ViewFoodDetails;
