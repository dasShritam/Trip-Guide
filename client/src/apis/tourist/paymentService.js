import axiosInstance from "../axiosInstance";

export const packageBookingProcess = async (data) => {
  try {
    const res = await axiosInstance.post(
      "/package-booking/add-package-booking",
      data
    );
    if (res.status === 201) {
      return res.data.data;
    }
  } catch (error) {
    throw error;
  }
};

export const hotelBookingProcess = async (data) => {
  try {
    const res = await axiosInstance.post(
      "/rooms-booking/add-hotel-booking",
      data
    );
    if (res.status === 201) {
      return res.data.data;
    }
  } catch (error) {
    throw error;
  }
};

export const taxiBookingProcess = async (id) => {
  try {
    const res = await axiosInstance.patch(`/taxi-booking/payment-accept/${id}`);
    if (res.status === 200) {
      return true
    }
  } catch (error) {
    throw error;
  }
};

export const foodBookingProcess = async (data) => {
  try {
    const res = await axiosInstance.post(`/food-booking`, data);
    if (res.status === 201) {
      return true
    }
  } catch (error) {
    throw error;
  }
}
