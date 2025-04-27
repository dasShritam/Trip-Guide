import { useNavigate } from "react-router-dom";
import { setActivePage } from "../../../redux/hotel/activePageSlice";
import { useDispatch } from "react-redux";
import { clearLocalStorage } from "../../../utils/localStorage";
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
    <aside className="tw-h-screen tw-bg-violetShade tw-w-full tw-p-4">
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
          onClick={() => changePage("view-pending-request")}
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
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="6" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12" y2="16" />
            </svg>
            {/* todo add pending svg here */}
            Pending Requests
          </div>
        </li>
        <li
          className="tw-list-none tw-mt-5"
          onClick={() => changePage("view-approved-request")}
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
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Approved Requests
          </div>
        </li>

        <li
          className="tw-list-none tw-mt-5"
          onClick={() => changePage("taxi-reviews")}
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
              class="lucide lucide-star"
            >
              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
            </svg>
            My Reviews
          </div>
        </li>
        <li
          className="tw-list-none tw-mt-5"
          onClick={() => changePage("taxiProfile")}
        >
          <div
            className={`tw-cursor-pointer tw-group tw-relative tw-flex tw-items-center tw-gap-2.5 tw-rounded-sm tw-py-2 tw-px-4 tw-font-medium tw-text-bodydark1 tw-duration-300 tw-ease-in-out tw-text-white tw-no-underline hover:tw-bg-grayDark`}
          >
            <svg
              className="tw-fill-current"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.0002 7.79065C11.0814 7.79065 12.7689 6.1594 12.7689 4.1344C12.7689 2.1094 11.0814 0.478149 9.0002 0.478149C6.91895 0.478149 5.23145 2.1094 5.23145 4.1344C5.23145 6.1594 6.91895 7.79065 9.0002 7.79065ZM9.0002 1.7719C10.3783 1.7719 11.5033 2.84065 11.5033 4.16252C11.5033 5.4844 10.3783 6.55315 9.0002 6.55315C7.62207 6.55315 6.49707 5.4844 6.49707 4.16252C6.49707 2.84065 7.62207 1.7719 9.0002 1.7719Z"
                fill=""
              />
              <path
                d="M10.8283 9.05627H7.17207C4.16269 9.05627 1.71582 11.5313 1.71582 14.5406V16.875C1.71582 17.2125 1.99707 17.5219 2.3627 17.5219C2.72832 17.5219 3.00957 17.2407 3.00957 16.875V14.5406C3.00957 12.2344 4.89394 10.3219 7.22832 10.3219H10.8564C13.1627 10.3219 15.0752 12.2063 15.0752 14.5406V16.875C15.0752 17.2125 15.3564 17.5219 15.7221 17.5219C16.0877 17.5219 16.3689 17.2407 16.3689 16.875V14.5406C16.2846 11.5313 13.8377 9.05627 10.8283 9.05627Z"
                fill=""
              />
            </svg>
            Profile
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
