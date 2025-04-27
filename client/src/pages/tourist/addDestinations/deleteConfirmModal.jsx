import React from 'react';
import { AlertTriangle } from 'lucide-react';
import Modal from './ui/modal';
import Button from './ui/Button';

const DeleteConfirmModal = ({ destination, onConfirm, onCancel }) => {
  if (!destination) return null;

  return (
    <Modal onClose={onCancel} className="tw-max-w-md">
      <div className="tw-p-6">
        <div className="tw-flex tw-items-center tw-gap-4 tw-mb-4">
          <div className="tw-p-3 tw-bg-red-100 tw-rounded-full">
            <AlertTriangle className="tw-w-6 tw-h-6 tw-text-red-600" />
          </div>
          <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900">Delete Destination</h3>
        </div>
        
        <p className="tw-text-gray-600 tw-mb-6">
          Are you sure you want to delete "{destination.title}"? This action cannot be undone.
        </p>

        <div className="tw-flex tw-gap-3 tw-justify-end">
          <Button variant="secondary" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => onConfirm(destination)}>
            Delete
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteConfirmModal;