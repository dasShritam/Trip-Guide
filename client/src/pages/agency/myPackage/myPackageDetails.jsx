import { useEffect, useState } from "react";
import Footer from "../../../Components/Footer/Footer";
import AgencyNavbar from "../navbar/navbar";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../apis/axiosInstance";
import { BASE_URL } from "../../../apis/baseURL";
import { useParams } from "react-router-dom";

const MyPackageDetails = () => {
  const navigate = useNavigate();
  const [packageData, setPackageData] = useState({});
  const [bookings, setBookings] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      getpackageData(id);
      getPackageBookings(id);
    }
  }, [id]);

  const getPackageBookings = async (id) => {
    try {
      const res = await axiosInstance.get(`/package-booking/package/${id}`);
      if (res.status === 200) {
        const data = res.data?.data?.reverse() || [];
        setBookings(data);
      }
    } catch (err) {
      console.log("error on get package bookings: ", err);
    }
  };
  const getpackageData = async (id) => {
    try {
      const res = await axiosInstance.get(`/package/getData/${id}`);
      if (res.status === 200) {
        setPackageData(res.data?.data || {});
      }
    } catch (error) {
      console.log("Error on getting packageData: ", error);
    }
  };
  console.log("booking. ", bookings);
  return (
    <>
      <AgencyNavbar />
      <div className="tw-container-fluid tw-bg-primary tw-mt-20">
        <div className="tw-col-lg-10 tw-pt-lg-5 tw-mt-lg-5 tw-text-center">
          <h3 className="tw-display-3 tw-mt-28 tw-mb-3 animated slideInDown tw-text-blueShade">
            Package Details
          </h3>
        </div>
      </div>

      <div className="tw-container tw-mx-auto tw-px-4 tw-py-8">
        <div className="tw-bg-white tw-rounded-lg tw-shadow-lg tw-overflow-hidden">
          {/* Package Image and Basic Info */}
          <div className="md:tw-flex">
            <div className="md:tw-w-1/2">
              <img
                className="tw-w-full tw-h-96 tw-object-cover"
                src={`${BASE_URL}${packageData.packagePhoto}`}
                alt={packageData.packageName}
              />
            </div>
            <div className="md:tw-w-1/2 tw-p-8">
              <h2 className="tw-text-3xl tw-font-bold tw-text-gray-800 tw-mb-4">
                {packageData.packageName}
              </h2>
              <div className="tw-flex tw-items-center tw-mb-4">
                <span className="tw-bg-blue-100 tw-text-blue-800 tw-px-3 tw-py-1 tw-rounded-full tw-text-sm tw-font-semibold">
                  {packageData.packageType}
                </span>
                <div className="tw-ml-4 tw-flex tw-items-center">
                  <span className="tw-text-yellow-400">★</span>
                  <span className="tw-ml-1 tw-text-gray-600">
                    {packageData.rating || "No ratings yet"}
                  </span>
                </div>
              </div>
              <p className="tw-text-gray-600 tw-mb-6">
                {packageData.packageDescription}
              </p>
            </div>
          </div>

          {/* Package Details Grid */}
          <div className="tw-grid md:tw-grid-cols-2 tw-gap-6 tw-p-8 tw-bg-gray-50">
            <div className="tw-space-y-4">
              <div className="tw-flex tw-items-center tw-p-4 tw-bg-white tw-rounded-lg tw-shadow-sm">
                <div className="tw-p-3 tw-bg-blue-100 tw-rounded-full">
                  <svg
                    className="tw-w-6 tw-h-6 tw-text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="tw-ml-4">
                  <h3 className="tw-text-lg tw-font-semibold tw-text-gray-700">
                    Destination
                  </h3>
                  <p className="tw-text-gray-600">{packageData.destination}</p>
                </div>
              </div>

              <div className="tw-flex tw-items-center tw-p-4 tw-bg-white tw-rounded-lg tw-shadow-sm">
                <div className="tw-p-3 tw-bg-green-100 tw-rounded-full">
                  <svg
                    className="tw-w-6 tw-h-6 tw-text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="tw-ml-4">
                  <h3 className="tw-text-lg tw-font-semibold tw-text-gray-700">
                    Duration
                  </h3>
                  <p className="tw-text-gray-600">
                    {packageData.days} Days, {packageData.nights} Nights
                  </p>
                </div>
              </div>
            </div>

            <div className="tw-space-y-4">
              <div className="tw-flex tw-items-center tw-p-4 tw-bg-white tw-rounded-lg tw-shadow-sm">
                <div className="tw-p-3 tw-bg-purple-100 tw-rounded-full">
                  <svg
                    className="tw-w-6 tw-h-6 tw-text-purple-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div className="tw-ml-4">
                  <h3 className="tw-text-lg tw-font-semibold tw-text-gray-700">
                    Cost per Person
                  </h3>
                  <p className="tw-text-gray-600">₹{packageData.costPerHead}</p>
                </div>
              </div>

              <div className="tw-flex tw-items-center tw-p-4 tw-bg-white tw-rounded-lg tw-shadow-sm">
                <div className="tw-p-3 tw-bg-yellow-100 tw-rounded-full">
                  <svg
                    className="tw-w-6 tw-h-6 tw-text-yellow-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <div className="tw-ml-4">
                  <h3 className="tw-text-lg tw-font-semibold tw-text-gray-700">
                    Available Seats
                  </h3>
                  <p className="tw-text-gray-600">
                    {packageData.totalAvailableSeats}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Start Date Section */}
          <div className="tw-p-8 tw-bg-white">
            <div className="tw-flex tw-items-center tw-justify-between">
              <div>
                <h3 className="tw-text-xl tw-font-semibold tw-text-gray-800">
                  Starting Date
                </h3>
                <p className="tw-text-gray-600 tw-mt-1">
                  {packageData.startingDate}
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="tw-text-xl tw-font-semibold tw-text-gray-800 tw-p-8">
              Bookings
            </h3>
            <table className="tw-w-11/12 tw-mx-auto tw-border-collapse tw-p-8 tw-text-left tw-text-gray-600">
              <thead>
                <tr className="tw-bg-gray-200">
                  <th className="tw-px-4 tw-py-2 tw-border-b">No.</th>
                  <th className="tw-px-4 tw-py-2 tw-border-b">Name</th>
                  <th className="tw-px-4 tw-py-2 tw-border-b">Email</th>
                  <th className="tw-px-4 tw-py-2 tw-border-b">Phone Number</th>
                  <th className="tw-px-4 tw-py-2 tw-border-b">Gender</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((item, index) => (
                  <tr
                    key={index}
                    className="tw-odd:bg-white tw-even:bg-gray-100"
                  >
                    <td className="tw-px-4 tw-py-2 tw-border-b">{index + 1}</td>
                    <td className="tw-px-4 tw-py-2 tw-border-b">
                      {item.touristId?.name}
                    </td>
                    <td className="tw-px-4 tw-py-2 tw-border-b">
                      {item.touristId?.email}
                    </td>
                    <td className="tw-px-4 tw-py-2 tw-border-b">
                      {item.touristId?.phoneNumber}
                    </td>
                    <td className="tw-px-4 tw-py-2 tw-border-b">
                      {item.touristId?.gender}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyPackageDetails;
