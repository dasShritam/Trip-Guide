export const clearLocalStorage = () => {
  const keysToRemove = [
    "travel_guide_hotel_id",
    "travel_guide_agency_id",
    "travel_guide_tourist_id",
    "travel_guide_admin_id",
    "travel_guide_taxi_id",
  ];
  keysToRemove.forEach((key) => {
    localStorage.removeItem(key);
  });
};
