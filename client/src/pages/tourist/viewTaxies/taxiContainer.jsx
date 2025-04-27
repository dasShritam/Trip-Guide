import React, { useEffect, useState } from "react";
import axios from "axios";
import axiosInstance from "../../../apis/axiosInstance";
import BookTaxiModal from "./bookTaxiModal";

const TaxiContainer = () => {
  const [taxis, setTaxis] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    getTaxiData();
  }, []);

  const getTaxiData = async () => {
    try {
      const response = await axiosInstance.get("/taxi/get-all-taxies");
      if (response.status === 200) {
        setTaxis(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching taxis: ", error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="tw-container tw-mx-auto tw-p-4">
      <table className="tw-w-full tw-table-auto tw-border-collapse">
        <thead>
          <tr className="tw-bg-gray-200">
            <th className="tw-px-4 tw-py-2">Driver Name</th>
            <th className="tw-px-4 tw-py-2">Contact No</th>

            <th className="tw-px-4 tw-py-2">Duty Area</th>
            <th className="tw-px-4 tw-py-2">Charge Per Km</th>
            <th className="tw-px-4 tw-py-2">Work Experience</th>
            <th className="tw-px-4 tw-py-2">Book</th>
          </tr>
        </thead>
        <tbody>
          {taxis.map((taxi) => (
            <tr key={taxi._id} className="tw-border-b">
              <td className="tw-px-4 tw-py-2">{taxi.driverName}</td>
              <td className="tw-px-4 tw-py-2">{taxi.contactNo}</td>
              <td className="tw-px-4 tw-py-2">{taxi.dutyArea}</td>
              <td className="tw-px-4 tw-py-2">{taxi.chargePerKm}</td>
              <td className="tw-px-4 tw-py-2">{taxi.workExperience}</td>
              <td className="tw-px-4 tw-py-2">
                <button
                  className="tw-bg-blue-500 tw-text-white tw-px-4 tw-py-2 tw-rounded hover:tw-bg-blue-600"
                  onClick={openModal}
                >
                  Book
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && <BookTaxiModal onClose={closeModal} />}
    </div>
  );
};

export default TaxiContainer;
