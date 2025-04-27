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
    <aside className="tw-h-screen tw-bg-blueShade tw-w-72 tw-p-4">
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
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                stroke="white"
                stroke-width="2"
                fill="none"
              />
              <rect x="6" y="6" width="5" height="5" fill="white" />
              <rect x="13" y="6" width="5" height="5" fill="white" />
              <rect x="6" y="13" width="5" height="5" fill="white" />
              <rect x="13" y="13" width="5" height="5" fill="white" />
            </svg>
            Overview
          </div>
        </li>
        <li
          className="tw-list-none tw-mt-5"
          onClick={() => changePage("addFood")}
        >
          <div
            className={`tw-cursor-pointer tw-group tw-relative tw-flex tw-items-center tw-gap-2.5 tw-rounded-sm tw-py-2 tw-px-4 tw-font-medium tw-text-bodydark1 tw-duration-300 tw-ease-in-out tw-text-white tw-no-underline hover:tw-bg-grayDark`}
          >
            <svg
              className="fill-current"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 0C8.44772 0 8 0.447715 8 1V6C8 6.55228 8.44772 7 9 7C9.55228 7 10 6.55228 10 6V1C10 0.447715 9.55228 0 9 0Z"
                fill="#FFFFFF"
              />
              <path
                d="M6 1C6 0.447715 6.44772 0 7 0H7.5V6H7C6.44772 6 6 5.55228 6 5V1Z"
                fill="#FFFFFF"
              />
              <path
                d="M11.5 0H12C12.5523 0 13 0.447715 13 1V5C13 5.55228 12.5523 6 12 6H11.5V0Z"
                fill="#FFFFFF"
              />
              <path
                d="M0 11C0 9.89543 0.895431 9 2 9H16C17.1046 9 18 9.89543 18 11V12C18 12.5523 17.5523 13 17 13H1C0.447715 13 0 12.5523 0 12V11Z"
                fill="#FFFFFF"
              />
              <path
                d="M3 14C2.44772 14 2 14.4477 2 15V16C2 17.1046 2.89543 18 4 18H14C15.1046 18 16 17.1046 16 16V15C16 14.4477 15.5523 14 15 14H3Z"
                fill="#FFFFFF"
              />
            </svg>
            Add Food
          </div>
        </li>
        <li
          className="tw-list-none tw-mt-5"
          onClick={() => changePage("viewFood")}
        >
          <div
            className={` tw-cursor-pointer tw-group tw-relative tw-flex tw-items-center tw-gap-2.5 tw-rounded-sm tw-py-2 tw-px-4 tw-font-medium tw-text-bodydark1 tw-duration-300 tw-ease-in-out tw-text-white tw-no-underline hover:tw-bg-grayDark`}
          >
            <svg
              className="fill-current"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 1C3 0.447715 3.44772 0 4 0H14C14.5523 0 15 0.447715 15 1V3C15 3.55228 14.5523 4 14 4H4C3.44772 4 3 3.55228 3 3V1Z"
                fill="#FFFFFF"
              />
              <path
                d="M1 7C1 6.44772 1.44772 6 2 6H16C16.5523 6 17 6.44772 17 7V9C17 9.55228 16.5523 10 16 10H2C1.44772 10 1 9.55228 1 9V7Z"
                fill="#FFFFFF"
              />
              <path
                d="M4 12C4 11.4477 4.44772 11 5 11H13C13.5523 11 14 11.4477 14 12V14C14 14.5523 13.5523 15 13 15H5C4.44772 15 4 14.5523 4 14V12Z"
                fill="#FFFFFF"
              />
            </svg>
            View Food
          </div>
        </li>
        <li
          className="tw-list-none tw-mt-5"
          onClick={() => changePage("addRoom")}
        >
          <div
            className={`tw-cursor-pointer tw-group tw-relative tw-flex tw-items-center tw-gap-2.5 tw-rounded-sm tw-py-2 tw-px-4 tw-font-medium tw-text-bodydark1 tw-duration-300 tw-ease-in-out tw-text-white tw-no-underline hover:tw-bg-grayDark`}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 4H60V60H4V4Z" stroke="white" stroke-width="4" />
              <path d="M16 44H48V60H16V44Z" fill="white" />
              <path d="M20 28H44V44H20V28Z" fill="white" />
              <path d="M12 8H52V28H12V8Z" fill="white" />
            </svg>
            Add Room
          </div>
        </li>
        <li
          className="tw-list-none tw-mt-5"
          onClick={() => changePage("viewRoom")}
        >
          <div
            className={`tw-cursor-pointer tw-group tw-relative tw-flex tw-items-center tw-gap-2.5 tw-rounded-sm tw-py-2 tw-px-4 tw-font-medium tw-text-bodydark1 tw-duration-300 tw-ease-in-out tw-text-white tw-no-underline hover:tw-bg-grayDark`}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 3H15V15H3V3Z" stroke="white" stroke-width="2" />
              <path d="M5 10H13V15H5V10Z" fill="white" />
              <path d="M6 6H12V10H6V6Z" fill="white" />
              <path d="M4 4H14V6H4V4Z" fill="white" />
            </svg>
            View Room
          </div>
        </li>
        <li
          className="tw-list-none tw-mt-5"
          onClick={() => changePage("hotelProfile")}
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
