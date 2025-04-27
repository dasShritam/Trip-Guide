import React from 'react';
import { X } from 'lucide-react';

export const TouristProfileModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-50 tw-flex tw-items-center tw-justify-center tw-z-50">
      <div className="tw-bg-white tw-rounded-lg tw-p-6 tw-max-w-2xl tw-w-full tw-mx-4 tw-relative">
        <button
          onClick={onClose}
          className="tw-absolute tw-top-4 tw-right-4 tw-text-gray-500 hover:tw-text-gray-700"
        >
          <X className="tw-w-6 tw-h-6" />
        </button>
        {children}
      </div>
    </div>
  );
}