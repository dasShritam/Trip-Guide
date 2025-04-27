//todo
function useLocalStorageId(userType) {

  const id = localStorage.getItem("travel_guide_user_id") || null;
  return id;
}
