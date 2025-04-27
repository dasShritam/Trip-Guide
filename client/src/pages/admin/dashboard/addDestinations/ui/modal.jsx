import React from 'react';
import { X } from 'lucide-react';

const Modal = ({ children, onClose, className = '' }) => {
  return (
    <div className="tw-fixed tw-inset-0 tw-bg-black/50 tw-flex tw-items-center tw-justify-center tw-p-4 tw-z-50">
      <div className={`tw-bg-white tw-rounded-lg tw-w-full tw-max-h-[90vh] tw-overflow-y-auto ${className}`}>
        <button
          onClick={onClose}
          className="tw-absolute tw-right-4 tw-top-4 tw-z-10 tw-p-2 tw-bg-white/80 tw-rounded-full hover:tw-bg-white/90 tw-transition-colors"
        >
          <X className="tw-w-6 tw-h-6 tw-text-gray-800" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;