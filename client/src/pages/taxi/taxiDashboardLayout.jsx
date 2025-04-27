import Sidebar from "./sidebar/sidebar";
import hotelImg from "../../Asset/images/hotel-img.jpg";
const TaxiDashboardLayout = ({ children }) => {
  return (
    <div className="tw-flex tw-h-screen tw-overflow-hidden">
      <div style={{ width: "24%" }}>
        <Sidebar />
      </div>
      <main className="tw-bg-dashboardBlue tw-h-screen tw-w-full ">
        <div
          className="tw-mx-auto tw-max-w-screen-2xl tw-p-4 tw-h-full tw-w-100% tw-overflow-scroll"
          style={{
            backgroundImage: `url(${hotelImg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          {children}
        </div>
      </main>
    </div>
  );
};
export default TaxiDashboardLayout;
