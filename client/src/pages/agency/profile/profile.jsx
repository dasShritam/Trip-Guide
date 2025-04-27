import React, { useEffect, useState } from "react";
import { Edit } from "lucide-react";
import { EditProfileForm } from "./editProfileForm";
import { TouristProfileModal } from "../../../Components/tourist/profile/profileModel";
import Footer from "../../../Components/Footer/Footer";
import axiosInstance from "../../../apis/axiosInstance";
import { BASE_URL } from "../../../apis/baseURL";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import AgencyNavbar from "../navbar/navbar";

function AgencyProfile() {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const id = localStorage.getItem("travel_guide_agency_id") || null;
    if (id) {
      getAgencyData(id);
    } else {
      navigate("/login");
    }
  }, []);
  const getAgencyData = async (id) => {
    try {
      const res = await axiosInstance.get(`/agency/getAgencyById/${id}`);
      if (res.status === 200) {
        setProfile(res.data?.data);
      }
    } catch (error) {
      console.log("Error on get tourist data", error);
    }
  };

  const handleSaveProfile = (updatedProfile) => {
    setProfile(updatedProfile);
    const obj = {};

    obj.name = updatedProfile.name;
    obj.country = updatedProfile.country;
    obj.phoneNumber = updatedProfile.phoneNumber;

    if (obj.name === "" || obj.country === "" || obj.phoneNumber === "") {
      toast.error("Field can't be empty");
      return;
    }

    if (obj.phoneNumber.length !== 10) {
      toast.error("Phone number must be 10 digits");
      return;
    }

    sendDataServer(obj, updatedProfile._id);

    console.log("updat => ", obj);
    setIsEditModalOpen(false);
  };

  const sendDataServer = async (obj, id) => {
    try {
      const res = await axiosInstance.patch(`/tourist/updateAgency/${id}`, obj);
      if (res.status === 200) {
        toast.success("Profile updated successfully");
      }
    } catch (error) {
      console.log("error on tourist update", error);
    }
  };

  return (
    <div className="tw-min-h-screen tw-bg-gray-100">
      <AgencyNavbar />
      <br />
      <br />
      <div className="tw-max-w-4xl tw-mx-auto tw-py-12 tw-px-4 " >
        <div className="tw-bg-white tw-rounded-lg tw-shadow-lg tw-p-8">
          <div className="tw-flex tw-justify-end">
            <button
              onClick={() => setIsEditModalOpen(true)}
              className="tw-flex tw-items-center tw-gap-2 tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-text-white tw-bg-blue-500 tw-rounded-md hover:tw-bg-blue-600"
            >
              <Edit className="tw-w-4 tw-h-4" />
              Edit Profile
            </button>
          </div>

          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6 ">
            <div>
              <h3 className="tw-text-sm tw-font-medium tw-text-gray-500">
                Name
              </h3>
              <p className="tw-mt-1 tw-text-sm tw-text-gray-900">
                {profile?.agencyName}
              </p>
            </div>

            <div className="tw-space-y-4">
              <div>
                <h3 className="tw-text-sm tw-font-medium tw-text-gray-500">
                  Email
                </h3>
                <p className="tw-mt-1 tw-text-sm tw-text-gray-900">
                  {profile?.email}
                </p>
              </div>
            </div>

            <div>
              <h3 className="tw-text-sm tw-font-medium tw-text-gray-500">
                Phone Number
              </h3>
              <p className="tw-mt-1 tw-text-sm tw-text-gray-900">
                {profile?.phoneNumber}
              </p>
            </div>
            <div className="tw-space-y-4">
              <div>
                <h3 className="tw-text-sm tw-font-medium tw-text-gray-500">
                  Address
                </h3>
                <p className="tw-mt-1 tw-text-sm tw-text-gray-900">
                  {profile?.agencyAddress}
                </p>
              </div>
            </div>
            <div className="tw-space-y-4">
              <div>
                <h3 className="tw-text-sm tw-font-medium tw-text-gray-500">
                  Joined since
                </h3>
                <p className="tw-mt-1 tw-text-sm tw-text-gray-900">
                  {profile?.createdAt?.substring(0, 10)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TouristProfileModal
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
      >
        <div className="tw-max-w-md tw-mx-auto">
          <img
            src={
              isImageModalOpen
                ? `${BASE_URL}${profile.idPhoto}`
                : `${BASE_URL}${profile.touristPhoto}`
            }
            alt="Certificate"
            className="tw-w-full tw-h-auto tw-rounded-lg"
          />
        </div>
      </TouristProfileModal>

      <TouristProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
      >
        <div className="tw-max-w-2xl tw-mx-auto">
          <h2 className="tw-text-xl tw-font-bold tw-mb-4">Edit Profile</h2>
          <EditProfileForm
            profile={profile}
            onSave={handleSaveProfile}
            onCancel={() => setIsEditModalOpen(false)}
          />
        </div>
      </TouristProfileModal>
      <Footer />
    </div>
  );
}

export default AgencyProfile;
