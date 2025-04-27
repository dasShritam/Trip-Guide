import React, { useState } from "react";
import {toast} from "react-hot-toast";

export const EditProfileForm = ({ profile, onSave, onCancel }) => {
  const [formData, setFormData] = useState(profile);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agencyName || !formData.agencyAddress) {
      toast.error("Fields can't be empty!");
      return;
    }
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="tw-space-y-4">
      <div>
        <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700">
          Agency Name
        </label>
        <input
          type="text"
          value={formData.agencyName}
          onChange={(e) => setFormData({ ...formData, agencyName: e.target.value })}
          className="tw-mt-1 tw-block tw-w-full tw-rounded-md tw-border-gray-300 tw-shadow-sm focus:tw-border-blue-500 focus:tw-ring-blue-500 tw-p-2 tw-border"
        />
      </div>
      <div>
        <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700">
        Agency Address
        </label>
        <input
          type="text"
          value={formData.agencyAddress}
          onChange={(e) =>
            setFormData({ ...formData, agencyAddress: e.target.value })
          }
          className="tw-mt-1 tw-block tw-w-full tw-rounded-md tw-border-gray-300 tw-shadow-sm focus:tw-border-blue-500 focus:tw-ring-blue-500 tw-p-2 tw-border"
        />
      </div>
      <div>
        <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700">
          Phone Number
        </label>
        <input
          type="tel"
          value={formData.phoneNumber}
          onChange={(e) =>
            setFormData({ ...formData, phoneNumber: e.target.value })
          }
          className="tw-mt-1 tw-block tw-w-full tw-rounded-md tw-border-gray-300 tw-shadow-sm focus:tw-border-blue-500 focus:tw-ring-blue-500 tw-p-2 tw-border"
        />
      </div>
      <div className="tw-flex tw-justify-end tw-space-x-3 tw-mt-6">
        <button
          type="button"
          onClick={onCancel}
          className="tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-text-gray-700 tw-bg-white tw-border tw-border-gray-300 tw-rounded-md hover:tw-bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-text-white tw-bg-blue-500 tw-rounded-md hover:tw-bg-blue-600"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};
