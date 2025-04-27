import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/common/login/login";
import LandingAboutPage from "./pages/About/About";
import TouristSignup from "./Components/tourist/signup/TouristSignup";
import { Toaster } from "react-hot-toast";
import TouristHome from "./Components/tourist/home/TouristHome";
import NotFound from "./Components/common/not-found/NotFound";
import ForgotPassword from "./Components/common/forgot-password/ForgotPassword";
import AgencyRegister from "./pages/agency/signup/AgencySignup";
import AgencyHome from "./pages/agency/home/home";
import LandingPage from "./Components/landing/home/landingPage";
import AddPackage from "./pages/agency/addPackage/addPackage";
import HotelRegister from "./pages/hotel/signup/hotelSignup";
import HotelDashboard from "./pages/hotel/dashboard/hotelDashboard";
import MyPackage from "./pages/agency/myPackage/myPackage";
import ViewPackages from "./pages/tourist/viewPackages/viewPackages";
import TouristProfile from "./pages/tourist/profile/profile";
import {
  TouristProtectedRoutes,
  AgencyProtectedRoutes,
  HotelProtectedRoutes,
  AdminProtectedRoutes,
  TaxiProtectedRoutes,
} from "./Components/protectedRoutes";
import MyPackageDetails from "./pages/agency/myPackage/myPackageDetails";
import BookedPackages from "./pages/tourist/bookedPackages/bookedPackages";
import ViewHotels from "./pages/tourist/viewHotels/viewHotels";
import RoomPage from "./Components/tourist/roomDetails/roomDetails";
import BookedRooms from "./pages/tourist/bookedRooms/bookedRooms";
import AdminDashboard from "./pages/admin/dashboard/adminDashboard";
import TaxiSignup from "./pages/hotel/taxi/signup/taxiSignup";
import TaxiDashboard from "./pages/taxi/taxiDashboard";
import ViewTaxies from "./pages/tourist/viewTaxies/viewTaxies";
import RequestTaxi from "./pages/tourist/requestTaxi/requestTaxi";
import ViewTaxiesBooking from "./pages/tourist/taxiBookings/taxiBookings";
import TaxiBookingDetails from "./pages/tourist/taxiBookings/taxiBookingDetails";
import TouristViewFood from "./pages/tourist/viewFood/viewFood";
import ViewFoodDetails from "./pages/tourist/viewFood/viewFoodDetails";
import BookedFoods from "./pages/tourist/bookedFoods/bookedFoods";
import ViewHotelDetails from "./pages/tourist/viewHotelDetails/viewHotelDetails";
import AgencyProfile from "./pages/agency/profile/profile";
import ViewDestinations from "./pages/tourist/addDestinations/viewDestinations";
import "./App.css";
import "./index.css";
function App() {
  return (
    <BrowserRouter basename="travel_guide">
      <div className="App">
        <Toaster />
        <Routes>
          {/* public routes  */}
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/tourist/signup" element={<TouristSignup />} />
          <Route path="/agency/signup" element={<AgencyRegister />} />
          <Route path="/hotel/signup" element={<HotelRegister />} />
          <Route path="/taxi/signup" element={<TaxiSignup />} />
          <Route path="/about" element={<LandingAboutPage />} />
          {/* tourist routes  */}
          <Route element={<TouristProtectedRoutes />}>
            <Route path="/tourist/home" element={<TouristHome />} />
            <Route path="/tourist/view-packages" element={<ViewPackages />} />
            <Route
              path="/tourist/booked-packages"
              element={<BookedPackages />}
            />
            <Route path="/tourist/view-hotels" element={<ViewHotels />} />
            <Route path="/tourist/booked-rooms" element={<BookedRooms />} />
            <Route path="/tourist/request-taxi" element={<RequestTaxi />} />
            <Route path="/tourist/view-taxi" element={<ViewTaxies />} />
            <Route path="/tourist/view-taxi-booking" element={<ViewTaxiesBooking />} />
            <Route path="/tourist/view-taxi-booking/:id" element={<TaxiBookingDetails />} />
            <Route path="/tourist/profile" element={<TouristProfile />} />
            <Route path="/tourist/room/:id" element={<RoomPage />} />
            <Route path="/tourist/view-foods" element={<TouristViewFood />} />
            <Route path="/tourist/booked-foods" element={<BookedFoods />} />
            <Route path="/tourist/view-foods/:id" element={<ViewFoodDetails />} />
            <Route path="/tourist/view-hotel-details/:id" element={<ViewHotelDetails />} />
            <Route path="/tourist/top-destinations" element={<ViewDestinations />} />
          </Route>

          {/* Agency routes */}
          <Route element={<AgencyProtectedRoutes />}>
            <Route path="/agency/home" element={<AgencyHome />} />
            <Route path="/agency/add-package" element={<AddPackage />} />
            <Route path="/agency/my-packages" element={<MyPackage />} />
            <Route path="/agency/profile" element={<AgencyProfile />} />
            <Route
              path="/agency/my-packages/:id"
              element={<MyPackageDetails />}
            />
          </Route>

          {/* hotels routes */}
          <Route element={<HotelProtectedRoutes />}>
            <Route path="/hotel/dashboard" element={<HotelDashboard />} />
          </Route>

          {/* admin routes */}
          <Route element={<AdminProtectedRoutes />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Route>

          {/* taxi routes  */}
          <Route element={<TaxiProtectedRoutes />}>
            <Route path="/taxi/dashboard" element={<TaxiDashboard />} />
          </Route>

          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
