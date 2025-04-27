import { useEffect, useState } from "react";
import Footer from "../../../Components/Footer/Footer";
import AgencyNavbar from "../navbar/navbar";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../apis/axiosInstance";
import { BASE_URL } from "../../../apis/baseURL";
const MyPackage = () => {
  const navigate = useNavigate();
  const [agencyId, setAgencyId] = useState("");
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    const id = localStorage.getItem("travel_guide_agency_id") || null;
    if (!id) {
      navigate("/login");
    } else {
      setAgencyId(id);
      getPackages(id);
    }
  }, []);
  const getPackages = async (id) => {
    try {
      const res = await axiosInstance.get(`/package/agency/${id}`);
      if (res.status === 200) {
        const data = res.data?.data?.reverse() || []; 
        console.log('data', data)
        setPackages(data);
      }
    } catch (error) {
      console.log("Error on getting packages: ", error);
    }
  };
  return (
    <>
      <AgencyNavbar />
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white mb-3 animated slideInDown">
                My Packages
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
            {packages.length === 0 && (
              <div className="col-lg-12 tw-flex tw-justify-center tw-items-center tw-h-40">
                <h1 className="tw-text-2xl tw-font-bold">No packages found</h1>
              </div>
            )}
            {packages.map((item) => (
              <div
                key={item._id}
                className="col-lg-4 col-md-6 wow fadeInUp tw-bg-slate-200"
                data-wow-delay="0.1s"
              >
                <div className="tw-flex tw-justify-center tw-align-middle">
                  <img
                    className=" tw-w-auto tw-h-72"
                    src={`${BASE_URL}/${item.packagePhoto}`}
                    alt="package"
                  />
                </div>
                <div className="package-item">
                  <div className="text-center p-4 ">
                    <h3 className="mb-4">{item.packageName}</h3>
                    <h6 className="mb-0">{item.packageType}</h6>
                    <div className="tw-justify-center tw-flex tw-mt-5">
                      <button className="btn btn-primary py-2 px-4 ms-2" onClick={() => {
                        navigate(`/agency/my-packages/${item._id}`)
                      }}>
                        View More{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyPackage;
