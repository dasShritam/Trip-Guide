import React, { useState } from "react";
import DestinationCard from "./destinationCard";
import ViewDestinationModal from "./viewDestinationModal";
import DeleteConfirmModal from "./deleteConfirmModal";
import axiosInstance from "../../../apis/axiosInstance";
import { toast } from "react-hot-toast";

const DestinationList = ({
  destinations = [],
  getDestination,
  filterDest,
  fixedDest = [],
}) => {
  const [viewDestination, setViewDestination] = useState(null);

  const [deleteDestination, setDeleteDestination] = useState(null);

  const handleDelete = async (destination) => {
    if (destination && destination._id) {
      try {
        const res = await axiosInstance.delete(
          `/top-destinations/${destination._id}`
        );
        if (res.status === 200) {
          toast.success("Destination deleted successfully");
        }
      } catch (error) {
        console.log("error on delete destination", error);
      } finally {
        getDestination();
      }
    }
    setDeleteDestination(null);
  };

  return (
    <div className="tw-min-h-screen tw-bg-gray-50 tw-py-12 tw-px-4 sm:tw-px-6 lg:tw-px-8">
      <div className="tw-max-w-7xl tw-mx-auto">
        <h2 className="tw-text-3xl tw-font-bold tw-text-gray-900 tw-mb-8 tw-text-center">
          Top Destinations
        </h2>
        <form className="tw-flex tw-items-center tw-mb-4 tw-max-w-md tw-mx-auto">
          <label htmlFor="search" className="tw-sr-only">
            Search
          </label>
          <input
            type="text"
            name="search"
            id="search"
            className="tw-w-full tw-py-2 tw-px-4 tw-border tw-rounded-md tw-shadow-sm focus:tw-ring-indigo-500 focus:tw-border-indigo-500"
            placeholder="Search destinations"
            onChange={(e) => {
              const searchQuery = e.target.value.toLowerCase();
              const filteredDestinations = fixedDest.filter((destination) =>
                destination.title.toLowerCase().includes(searchQuery)
              );
              filterDest(filteredDestinations);
            }}
          />
        </form>
        <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination._id}
              destination={destination}
              onView={setViewDestination}
              onDelete={setDeleteDestination}
            />
          ))}
        </div>

        {destinations.length === 0 && (
          <div className="tw-text-center tw-py-12">
            <p className="tw-text-gray-500 tw-text-lg">
              No destinations added yet.
            </p>
          </div>
        )}

        {viewDestination && (
          <ViewDestinationModal
            destination={viewDestination}
            onClose={() => setViewDestination(null)}
          />
        )}

        {deleteDestination && (
          <DeleteConfirmModal
            destination={deleteDestination}
            onConfirm={handleDelete}
            onCancel={() => setDeleteDestination(null)}
          />
        )}
      </div>
    </div>
  );
};

export default DestinationList;
