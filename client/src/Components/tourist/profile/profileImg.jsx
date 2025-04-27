import React from 'react';
import { Camera } from 'lucide-react';

export const ProfileImage = ({ imageUrl, onOpenModal }) => {
  return (
    <div className="tw-relative tw-w-32 tw-h-32 tw-mx-auto tw-mb-4">
      <img
        src={imageUrl || "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&auto=format&fit=crop&q=60"}
        alt="Profile"
        className="tw-w-full tw-h-full tw-rounded-full tw-object-cover tw-border-4 tw-border-white tw-shadow-lg"
      />
      <button
        onClick={onOpenModal}
        className="tw-absolute tw-bottom-0 tw-right-0 tw-bg-blue-500 tw-p-2 tw-rounded-full tw-shadow-lg hover:tw-bg-blue-600 tw-transition-colors"
      >
        <Camera className="tw-w-5 tw-h-5 tw-text-white" />
      </button>
    </div>
  );
}