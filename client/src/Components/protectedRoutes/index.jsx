import {Navigate, Outlet} from 'react-router-dom';

export const TouristProtectedRoutes = () => {
    const touristId = localStorage.getItem('travel_guide_tourist_id');
    return touristId ? <Outlet /> : <Navigate to='/login' />
}

export const AgencyProtectedRoutes = () => {
    const agencyId = localStorage.getItem('travel_guide_agency_id');
    return agencyId ? <Outlet /> : <Navigate to='/login' />
}

export const HotelProtectedRoutes = () => {
    const hotelId = localStorage.getItem('travel_guide_hotel_id');
    return hotelId ? <Outlet /> : <Navigate to='/login' />
}
    
export const AdminProtectedRoutes = () => {
    const adminId = localStorage.getItem('travel_guide_admin_id');
    return adminId ? <Outlet /> : <Navigate to='/login' />
}

export const TaxiProtectedRoutes = () => {
    const taxiId = localStorage.getItem('travel_guide_taxi_id');
    return taxiId ? <Outlet /> : <Navigate to='login' />
}