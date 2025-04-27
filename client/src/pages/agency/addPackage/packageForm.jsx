import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { toast } from "react-hot-toast";
import axiosInstance from "../../../apis/axiosInstance";
import { useNavigate } from "react-router-dom";
const PackageForm = () => {
  const [agencyId, setAgencyId] = useState("");
  useEffect(() => {
    const id = localStorage.getItem("travel_guide_agency_id") || null;
    if (id) {
      setAgencyId(id);
    }else {
      toast.error("Please login first");
      navigate('/login')
    }
  }, []);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const {
      packageName,
      packageDescription,
      packageType,
      costPerHead,
      totalAvailableSeats,
      startingDate,
      days,
      nights,
      destination,
      packagePhoto,
    } = data;

    if (
      !packageName ||
      !packageDescription ||
      !packageType ||
      !costPerHead ||
      !totalAvailableSeats ||
      !startingDate ||
      !days ||
      !nights ||
      !destination ||
      packagePhoto.length === 0
    ) {
      console.log("All fields are required", data);
      return;
    }
    const serializedData = {
      packageName,
      packageDescription,
      packageType,
      costPerHead,
      totalAvailableSeats,
      startingDate,
      days,
      nights,
      destination,
      agencyId,
      packagePhoto: packagePhoto[0],
    };
    sendDataToServer(serializedData);
  };
  const sendDataToServer = async (data) => {
    try {
      const formData = new FormData();

      for (const key in data) {
        formData.append(key, data[key]);
      }

      const res = await axiosInstance.post("/package/add-package", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (res.status === 201) {
        toast.success("Package created successfully");
        navigate("/agency/my-packages");
      }
    } catch (error) {
      const statusCode = error?.response?.status;
      if (statusCode === 400) {
        const msg = error?.response?.data?.errors[0] || "Something went wrong.";
        toast.error(msg);
      } else {
        const msg = error?.response?.data?.message || "Something went wrong.";
        toast.error(msg);
      }
      console.error("Error on create package: ", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="tw-bg-gray-50 tw-mt-24 tw-w-11/12 tw-mx-auto tw-min-h-128 p-5"
    >
      <div className="tw-flex tw-flex-wrap tw--mx-3 tw-mb-6">
        <div className="tw-w-full md:tw-w-1/2 tw-px-3 tw-mb-6 md:tw-mb-0">
          <label
            className="tw-block tw-uppercase tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2"
            htmlFor="packageName"
          >
            Package Name
          </label>
          <input
            className="tw-appearance-none tw-block tw-w-full tw-bg-gray-200 tw-text-gray-700 tw-border tw-border-gray-200 tw-rounded tw-py-3 tw-px-4 tw-mb-3 tw-leading-tight focus:tw-outline-none focus:tw-bg-white"
            id="packageName"
            type="text"
            placeholder="Enter package name"
            {...register("packageName", {
              required: "Package name is required.",
            })}
          />
          <p className="tw-text-red-500 tw-text-xs tw-italic">
            <ErrorMessage errors={errors} name="packageName" />
          </p>
        </div>
        <div className="tw-w-full md:tw-w-1/2 tw-px-3">
          <label
            className="tw-block tw-uppercase tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2"
            htmlFor="packageDescription"
          >
            Package Description
          </label>
          <input
            className="tw-appearance-none tw-block tw-w-full tw-bg-gray-200 tw-text-gray-700 tw-border tw-border-gray-200 tw-rounded tw-py-3 tw-px-4 tw-leading-tight focus:tw-outline-none focus:tw-bg-white"
            id="packageDescription"
            type="text"
            placeholder="Enter package description"
            {...register("packageDescription", {
              required: "Package description is required.",
            })}
          />
          <p className="tw-text-red-500 tw-text-xs tw-italic">
            <ErrorMessage errors={errors} name="packageDescription" />
          </p>
        </div>
      </div>
      <div className="tw-flex tw-flex-wrap tw--mx-3 tw-mb-6">
        <div className="tw-w-full md:tw-w-1/2 tw-px-3 tw-mb-6 md:tw-mb-0">
          <label
            className="tw-block tw-uppercase tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2"
            htmlFor="packageType"
          >
            Package Type
          </label>
          <select
            className="tw-block tw-appearance-none tw-w-full tw-bg-gray-200 tw-border tw-border-gray-200 tw-text-gray-700 tw-py-3 tw-px-4 tw-pr-8 tw-rounded tw-leading-tight focus:tw-outline-none focus:tw-bg-white"
            id="packageType"
            {...register("packageType", {
              required: "Package type is required.",
            })}
          >
            <option value="">Select package type</option>
            <option value="Adventure">Adventure</option>
            <option value="Honeymoon">Honeymoon</option>
            <option value="Family">Family</option>
            <option value="Group">Group</option>
            <option value="Solo">Solo</option>
            <option value="Couple">Couple</option>
            <option value="Luxury">Luxury</option>
            <option value="Other">Other</option>
          </select>
          <p className="tw-text-red-500 tw-text-xs tw-italic">
            <ErrorMessage errors={errors} name="packageType" />
          </p>
        </div>
        <div className="tw-w-full md:tw-w-1/2 tw-px-3">
          <label
            className="tw-block tw-uppercase tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2"
            htmlFor="packagePrice"
          >
            Cost Per Head
          </label>
          <input
            className="tw-appearance-none tw-block tw-w-full tw-bg-gray-200 tw-text-gray-700 tw-border tw-border-gray-200 tw-rounded tw-py-3 tw-px-4 tw-leading-tight focus:tw-outline-none focus:tw-bg-white"
            id="costPerHead"
            type="number"
            placeholder="Cost per head"
            {...register("costPerHead", {
              required: "Cost per head is required.",
            })}
          />
          <p className="tw-text-red-500 tw-text-xs tw-italic">
            <ErrorMessage errors={errors} name="costPerHead" />
          </p>
        </div>
      </div>

      <div className="tw-flex tw-flex-wrap tw--mx-3 tw-mb-6">
        <div className="tw-w-full md:tw-w-1/2 tw-px-3 tw-mb-6 md:tw-mb-0">
          <label
            className="tw-block tw-uppercase tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2"
            htmlFor="packageType"
          >
            Destination
          </label>

          <input
            className="tw-appearance-none tw-block tw-w-full tw-bg-gray-200 tw-text-gray-700 tw-border tw-border-gray-200 tw-rounded tw-py-3 tw-px-4 tw-leading-tight focus:tw-outline-none focus:tw-bg-white"
            id="destination"
            type="text"
            placeholder="Enter destinations"
            {...register("destination", {
              required: "Destination is required.",
            })}
          />

          <p className="tw-text-red-500 tw-text-xs tw-italic">
            <ErrorMessage errors={errors} name="destination" />
          </p>
        </div>

        <div className="tw-w-full md:tw-w-1/2 tw-px-3">
          <label
            className="tw-block tw-uppercase tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2"
            htmlFor="packagePrice"
          >
            Starting date
          </label>
          <input
            className="tw-appearance-none tw-block tw-w-full tw-bg-gray-200 tw-text-gray-700 tw-border tw-border-gray-200 tw-rounded tw-py-3 tw-px-4 tw-leading-tight focus:tw-outline-none focus:tw-bg-white"
            id="startingDate"
            type="date"
            min={new Date().toISOString().split("T")[0]}
            {...register("startingDate", {
              required: "Starting date is required.",
            })}
          />
          <p className="tw-text-red-500 tw-text-xs tw-italic">
            <ErrorMessage errors={errors} name="startingDate" />
          </p>
        </div>
      </div>

      <div className="tw-flex tw-flex-wrap tw--mx-3 tw-mb-6">
        <div className="tw-w-full md:tw-w-1/2 tw-px-3 tw-mb-6 md:tw-mb-0">
          <label
            className="tw-block tw-uppercase tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2"
            htmlFor="packageType"
          >
            Days
          </label>

          <input
            className="tw-appearance-none tw-block tw-w-full tw-bg-gray-200 tw-text-gray-700 tw-border tw-border-gray-200 tw-rounded tw-py-3 tw-px-4 tw-leading-tight focus:tw-outline-none focus:tw-bg-white"
            id="days"
            type="number"
            placeholder="Enter number of days"
            {...register("days", { required: "Number of days is required." })}
          />

          <p className="tw-text-red-500 tw-text-xs tw-italic">
            <ErrorMessage errors={errors} name="days" />
          </p>
        </div>

        <div className="tw-w-full md:tw-w-1/2 tw-px-3">
          <label
            className="tw-block tw-uppercase tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2"
            htmlFor="packagePrice"
          >
            Nights
          </label>
          <input
            className="tw-appearance-none tw-block tw-w-full tw-bg-gray-200 tw-text-gray-700 tw-border tw-border-gray-200 tw-rounded tw-py-3 tw-px-4 tw-leading-tight focus:tw-outline-none focus:tw-bg-white"
            id="startingDate"
            type="number"
            placeholder="Enter number of nights"
            {...register("nights", {
              required: "Total number of night is required.",
            })}
          />
          <p className="tw-text-red-500 tw-text-xs tw-italic">
            <ErrorMessage errors={errors} name="nights" />
          </p>
        </div>
      </div>

      <div className="tw-flex tw-flex-wrap tw--mx-3 tw-mb-6">
        <div className="tw-w-full md:tw-w-1/2 tw-px-3 tw-mb-6 md:tw-mb-0">
          <label
            className="tw-block tw-uppercase tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2"
            htmlFor="packageDuration"
          >
            Total Available seats
          </label>
          <input
            className="tw-appearance-none tw-block tw-w-full tw-bg-gray-200 tw-text-gray-700 tw-border tw-border-gray-200 tw-rounded tw-py-3 tw-px-4 tw-leading-tight focus:tw-outline-none focus:tw-bg-white"
            id="totalAvailableSeats"
            type="number"
            placeholder="Enter package duration"
            {...register("totalAvailableSeats", {
              required: "Total available seats is required.",
            })}
          />
          <p className="tw-text-red-500 tw-text-xs tw-italic">
            <ErrorMessage errors={errors} name="totalAvailableSeats" />
          </p>
        </div>

        <div className="tw-w-full md:tw-w-1/2 tw-px-3 tw-mb-6 md:tw-mb-0">
          <label
            className="tw-block tw-uppercase tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2"
            htmlFor="packageDuration"
          >
            Package photo
          </label>
          <input
            className="tw-appearance-none tw-block tw-w-full tw-bg-gray-200 tw-text-gray-700 tw-border tw-border-gray-200 tw-rounded tw-py-3 tw-px-4 tw-leading-tight focus:tw-outline-none focus:tw-bg-white"
            id="packagePhoto"
            type="file"
            accept="image/*"
            {...register("packagePhoto", {
              required: "Package photo is required.",
            })}
          />
          <p className="tw-text-red-500 tw-text-xs tw-italic">
            <ErrorMessage errors={errors} name="packagePhoto" />
          </p>
        </div>
      </div>
      <div className="tw-flex tw-justify-center">
        <input
          type="submit"
          value="Add Package"
          className="tw-bg-blue-500 tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded hover:tw-bg-blue-700 focus:tw-outline-none focus:tw-shadow-outline"
        />
      </div>
    </form>
  );
};

export default PackageForm;
