export const LoadingSpinner = () => {
  return (
    <div className="tw-min-h-screen tw-flex tw-items-center tw-justify-center tw-bg-gray-100">
      <div className="tw-flex tw-flex-col tw-items-center tw-space-y-4">
        <div className="tw-w-12 tw-h-12 tw-border-4 tw-border-blue-500 tw-border-t-transparent tw-rounded-full tw-animate-spin"></div>
        <p className="tw-text-lg tw-font-medium tw-text-gray-600">Loading...</p>
      </div>
    </div>
  );
};
