import { useNavigate } from "react-router-dom";
import { setActivePage } from "../../../../redux/hotel/activePageSlice";
import { useDispatch } from "react-redux";
import { clearLocalStorage } from "../../../../utils/localStorage";
const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const changePage = (newPage) => {
    dispatch(setActivePage(newPage));
  };

  const handleLogout = () => {
    clearLocalStorage();
    navigate("/login");
  };

  return (
    <aside className="tw-h-screen tw-bg-blueShade tw-w-72 tw-p-4 tw-overflow-auto">
      <div>
        <li className="tw-list-none tw-mt-5">
          <div
            onClick={() => changePage("overview")}
            className={`tw-cursor-pointer tw-group tw-relative tw-flex tw-items-center tw-gap-2.5 tw-rounded-sm tw-py-2 tw-px-4 tw-font-medium tw-text-bodydark1 tw-duration-300 tw-ease-in-out tw-text-white tw-no-underline `}
          >
            <h3>Travel Guide</h3>
          </div>
        </li>
        <li
          className="tw-list-none tw-mt-5"
          onClick={() => changePage("overview")}
        >
          <div
            className={`tw-cursor-pointer tw-group tw-relative tw-flex tw-items-center tw-gap-2.5 tw-rounded-sm tw-py-2 tw-px-4 tw-font-medium tw-text-bodydark1 tw-duration-300 tw-ease-in-out tw-text-white tw-no-underline hover:tw-bg-grayDark`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
            Overview
          </div>
        </li>
        <li
          className="tw-list-none tw-mt-5"
          onClick={() => changePage("view-all-users")}
        >
          <div
            className={`tw-cursor-pointer tw-group tw-relative tw-flex tw-items-center tw-gap-2.5 tw-rounded-sm tw-py-2 tw-px-4 tw-font-medium tw-text-bodydark1 tw-duration-300 tw-ease-in-out tw-text-white tw-no-underline hover:tw-bg-grayDark`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            Tourists
          </div>
        </li>
        <li
          className="tw-list-none tw-mt-5"
          onClick={() => changePage("view-all-agencies")}
        >
          <div
            className={` tw-cursor-pointer tw-group tw-relative tw-flex tw-items-center tw-gap-2.5 tw-rounded-sm tw-py-2 tw-px-4 tw-font-medium tw-text-bodydark1 tw-duration-300 tw-ease-in-out tw-text-white tw-no-underline hover:tw-bg-grayDark`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
            </svg>
            Agencies
          </div>
        </li>
        <li
          className="tw-list-none tw-mt-5"
          onClick={() => changePage("view-all-hotels")}
        >
          <div
            className={`tw-cursor-pointer tw-group tw-relative tw-flex tw-items-center tw-gap-2.5 tw-rounded-sm tw-py-2 tw-px-4 tw-font-medium tw-text-bodydark1 tw-duration-300 tw-ease-in-out tw-text-white tw-no-underline hover:tw-bg-grayDark`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 21V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v13" />
              <path d="M6 21V12h12v9" />
              <path d="M9 21v-3h6v3" />
              <path d="M9 6h6" />
            </svg>
            Hotels
          </div>
        </li>
        <li
          className="tw-list-none tw-mt-5"
          onClick={() => changePage("view-all-rooms")}
        >
          <div
            className={`tw-cursor-pointer tw-group tw-relative tw-flex tw-items-center tw-gap-2.5 tw-rounded-sm tw-py-2 tw-px-4 tw-font-medium tw-text-bodydark1 tw-duration-300 tw-ease-in-out tw-text-white tw-no-underline hover:tw-bg-grayDark`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="11" width="18" height="10" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            Rooms
          </div>
        </li>
        <li
          className="tw-list-none tw-mt-5"
          onClick={() => changePage("add-destinations")}
        >
          <div
            className={`tw-cursor-pointer tw-group tw-relative tw-flex tw-items-center tw-gap-2.5 tw-rounded-sm tw-py-2 tw-px-4 tw-font-medium tw-text-bodydark1 tw-duration-300 tw-ease-in-out tw-text-white tw-no-underline hover:tw-bg-grayDark`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-cable-car"
            >
              <path d="M10 3h.01" />
              <path d="M14 2h.01" />
              <path d="m2 9 20-5" />
              <path d="M12 12V6.5" />
              <rect width="16" height="10" x="4" y="12" rx="3" />
              <path d="M9 12v5" />
              <path d="M15 12v5" />
              <path d="M4 17h16" />
            </svg>
            Add Destinations
          </div>
        </li>
        <li
          className="tw-list-none tw-mt-5"
          onClick={() => changePage("view-destinations")}
        >
          <div
            className={`tw-cursor-pointer tw-group tw-relative tw-flex tw-items-center tw-gap-2.5 tw-rounded-sm tw-py-2 tw-px-4 tw-font-medium tw-text-bodydark1 tw-duration-300 tw-ease-in-out tw-text-white tw-no-underline hover:tw-bg-grayDark`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-mountain-snow"
            >
              <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
              <path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19" />
            </svg>
            View Destinations
          </div>
        </li>
        <li
          className="tw-list-none tw-mt-5"
          onClick={() => changePage("taxi-reviews")}
        >
          <div
            className={`tw-cursor-pointer tw-group tw-relative tw-flex tw-items-center tw-gap-2.5 tw-rounded-sm tw-py-2 tw-px-4 tw-font-medium tw-text-bodydark1 tw-duration-300 tw-ease-in-out tw-text-white tw-no-underline hover:tw-bg-grayDark`}
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-star"
            >
              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
            </svg>
            Taxi Reviews
          </div>
        </li>
        <li className="tw-list-none tw-mt-5" onClick={handleLogout}>
          <div
            className={` tw-cursor-pointer tw-group tw-relative tw-flex tw-items-center tw-gap-2.5 tw-rounded-sm tw-py-2 tw-px-4 tw-font-medium tw-text-bodydark1 tw-duration-300 tw-ease-in-out tw-text-white tw-no-underline hover:tw-bg-grayDark`}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 2H10V4H6V2ZM6 14H10V16H6V14ZM10 9L7 6V8H0V10H7V12L10 9ZM14 1H12C11.4477 1 11 1.44772 11 2V4C11 4.55228 11.4477 5 12 5H14V13H12C11.4477 13 11 13.4477 11 14V16C11 16.5523 11.4477 17 12 17H14C15.1046 17 16 16.1046 16 15V3C16 1.89543 15.1046 1 14 1Z"
                fill="#FF0000"
              />
            </svg>
            <span className="tw-text-red-700">Logout</span>
          </div>
        </li>
      </div>
    </aside>
  );
};
export default Sidebar;
