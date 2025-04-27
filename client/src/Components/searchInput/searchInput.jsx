export function SearchBox({ searchingItems, placeholder = "Search.." }) {
  return (
    <div className="tw-flex tw-justify-center tw-items-center tw-min-h-3.5 tw-bg-gray-100">
      <div className="tw-relative tw-w-96">
        <input
          type="text"
          className="tw-w-full tw-pl-10 tw-pr-4 tw-py-2 tw-rounded-lg tw-border tw-border-gray-300 focus:tw-border-blue-500 focus:tw-outline-none focus:tw-ring focus:tw-ring-blue-200"
          placeholder={placeholder}
          onChange={(e) => searchingItems(e.target.value)}
        />
        <div className="tw-absolute tw-inset-y-0 tw-left-0 tw-pl-3 tw-flex tw-items-center tw-pointer-events-none">
          <svg
            className="tw-w-5 tw-h-5 tw-text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35m2.35-7.65a8 8 0 11-16 0 8 8 0 0116 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
