import { useEffect, useState } from "react";
import { Building2, Mail, Phone, Calendar, MapPin } from "lucide-react";
import axiosInstance from "../../../../apis/axiosInstance";
import { toast } from "react-hot-toast";

export default function HotelProfile() {
  const [hotelProfile, setHotelProfile] = useState({});
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const imageUrl =
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000";

  const [editProfile, setEditProfile] = useState({
    hotelName: "",
    email: "",
    phoneNumber: "",
    hotelLocation: "",
  });

  const onSubmit = () => {
    console.log("Updated data:", editProfile);
    const { hotelName, email, phoneNumber, hotelLocation } = editProfile;
    if (!validateFields(editProfile)) {
      return;
    }

    sendDataToServer();

    setIsEditModalOpen(false);
  };
  const sendDataToServer = async () => {
    try {
      const res = await axiosInstance.patch(
        `/hotel/updateHotel/${hotelProfile._id}`,
        editProfile
      );
      if (res.status === 200) {
        toast.success("Profile updated successfully");
        getHotelData(hotelProfile._id);
        return;
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const validateFields = (data) => {
    const { hotelName, email, phoneNumber, hotelLocation } = data;
    if (!hotelName) {
      toast.error("Hotel name is required.");
      return false;
    }
    if (!email) {
      toast.error("Email is required.");
      return false;
    }
    // check email format
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      toast.error("Invalid email format.");
      return false;
    }
    if (!phoneNumber) {
      toast.error("Phone number is required.");
      return false;
    }
    if (phoneNumber.length !== 10) {
      toast.error("Phone number should be 10 digits.");
      return false;
    }
    return true;
  };

  useEffect(() => {
    const hotelId = localStorage.getItem("travel_guide_hotel_id");
    if (hotelId) {
      getHotelData(hotelId);
    }
  }, []);

  const getHotelData = async (hotelId) => {
    try {
      const res = await axiosInstance.get(`/hotel/getHotelById/${hotelId}`);
      if (res.status === 200) {
        const data = res.data?.data;

        if (data) {
          setHotelProfile(data);
          const { hotelName, email, phoneNumber, hotelLocation } = data;
          setEditProfile({
            hotelName: hotelName,
            email: email,
            phoneNumber: phoneNumber,
            hotelLocation: hotelLocation,
          });
        }
      }
    } catch (error) {
      console.log("Error on get hotel data", error);
    }
  };

  return (
    <div className="tw-w-full tw-max-w-4xl tw-mx-auto">
      <div className="tw-bg-white tw-rounded-lg tw-shadow-lg tw-overflow-hidden">
        <div className="tw-relative tw-h-48 md:tw-h-64">
          <img
            src={imageUrl}
            alt={hotelProfile?.name}
            className="tw-w-full tw-h-full tw-object-cover"
          />
          <div className="tw-absolute tw-inset-0 tw-bg-black/30" />
        </div>

        <div className="tw-p-6">
          <div className="tw-flex tw-justify-between tw-items-start">
            <div>
              <h1 className="tw-text-3xl tw-font-bold tw-text-gray-900">
                {isEditModalOpen ? (
                  <input
                    type="text"
                    value={editProfile.hotelName}
                    onChange={(e) =>
                      setEditProfile({
                        ...editProfile,
                        hotelName: e.target.value,
                      })
                    }
                    className="tw-border tw-rounded tw-p-2 tw-w-full"
                  />
                ) : (
                  hotelProfile?.hotelName
                )}
              </h1>
              <p className="tw-flex tw-items-center tw-text-gray-600 tw-mt-2">
                <MapPin className="tw-w-4 tw-h-4 tw-mr-2" />
                {isEditModalOpen ? (
                  <input
                    type="text"
                    value={editProfile.hotelLocation}
                    onChange={(e) =>
                      setEditProfile({
                        ...editProfile,
                        hotelLocation: e.target.value,
                      })
                    }
                    className="tw-border tw-rounded tw-p-2 tw-w-full"
                  />
                ) : (
                  hotelProfile?.hotelLocation
                )}
              </p>
            </div>
            {isEditModalOpen && (
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="tw-bg-yellow-400 tw-text-primary tw-px-4 tw-rounded tw-text-white tw-py-2 tw-text-primary-foreground hover:tw-bg-primary/90 tw-transition-colors "
              >
                Cancel
              </button>
            )}
            <button
              onClick={() => {
                if (isEditModalOpen) {
                  onSubmit();
                } else {
                  setIsEditModalOpen(true);
                }
              }}
              className="tw-bg-green-400 tw-text-primary tw-px-4 tw-py-2 tw-rounded tw-text-white hover:tw-bg-primary/90 tw-transition-colors"
            >
              {isEditModalOpen ? "Save" : "Edit Profile"}
            </button>
          </div>

          <div className="tw-mt-6 tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6">
            <div className="tw-flex tw-items-center tw-space-x-3">
              <div className="tw-flex tw-items-center tw-justify-center tw-w-10 tw-h-10 tw-rounded-full tw-bg-primary/10">
                <Mail className="tw-w-5 tw-h-5 tw-text-primary" />
              </div>
              <div>
                <p className="tw-text-sm tw-text-gray-500">Email</p>
                <p className="tw-text-gray-900">
                  {hotelProfile?.email}
                </p>
              </div>
            </div>

            <div className="tw-flex tw-items-center tw-space-x-3">
              <div className="tw-flex tw-items-center tw-justify-center tw-w-10 tw-h-10 tw-rounded-full tw-bg-primary/10">
                <Phone className="tw-w-5 tw-h-5 tw-text-primary" />
              </div>
              <div>
                <p className="tw-text-sm tw-text-gray-500">Phone</p>
                <p className="tw-text-gray-900">
                  {isEditModalOpen ? (
                    <input
                      type="text"
                      value={editProfile.phoneNumber}
                      onChange={(e) =>
                        setEditProfile({
                          ...editProfile,
                          phoneNumber: e.target.value,
                        })
                      }
                      className="tw-border tw-rounded tw-p-2 tw-w-full"
                    />
                  ) : (
                    hotelProfile?.phoneNumber
                  )}
                </p>
              </div>
            </div>

            <div className="tw-flex tw-items-center tw-space-x-3">
              <div className="tw-flex tw-items-center tw-justify-center tw-w-10 tw-h-10 tw-rounded-full tw-bg-primary/10">
                <Building2 className="tw-w-5 tw-h-5 tw-text-primary" />
              </div>
              <div>
                <p className="tw-text-sm tw-text-gray-500">Business Type</p>
                <p className="tw-text-gray-900">Hotel & Accommodation</p>
              </div>
            </div>

            <div className="tw-flex tw-items-center tw-space-x-3">
              <div className="tw-flex tw-items-center tw-justify-center tw-w-10 tw-h-10 tw-rounded-full tw-bg-primary/10">
                <Calendar className="tw-w-5 tw-h-5 tw-text-primary" />
              </div>
              <div>
                <p className="tw-text-sm tw-text-gray-500">Member Since</p>
                <p className="tw-text-gray-900">
                  {hotelProfile?.createdAt?.substring(0, 10)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
