import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import axiosInstance from "../BaseUrl";
import GuideNav from "./GuideNav";
import GuideProfNav from "../GuideProf/GuideProfNav";

function ViewPackage({ baseurl }) {
  const id = localStorage.getItem("guidelogid");
  console.log(id);
  const [pack, setpackage] = useState([]);
  useEffect(() => {
    axiosInstance
      .post(`/viewAllPackagesByAgencyId/${id}`)
      .then((res) => {
        console.log(res, "view Package");
        if (res.data.data != undefined) {
          setpackage(res.data.data);
        } else {
          setpackage([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  

  const handleRemove = (id) => {
    axiosInstance.post(`/deletepackegesById/${id}`).then((res) => {
      if (res.data.status == 200) {
        alert("Removed");
        window.location.reload()
      }else if(res.data.status==500){
        alert(res.data.msg)
      }
    });
  };

  return (
    <div>
        <GuideProfNav/>

      <div style={{ minHeight: "300px", margin: "15px 0px",padding:'50px' }}>
        <div className="container text-center">
          <div className="row">
            {pack.length ? (
              pack.map((a) => {
                return (
                  <div className="col-3 mb-5" style={{ margin: "10px 0" }} >
                    <div
                      className="card"
                      style={{ width: "300px", margin: "auto" }}
                    >
                      <img
                        src={`${baseurl}/${a.image.originalname}`}
                        className="card-img-top"
                        alt={a.image.filename}
                        height="240px"
                        style={{objectFit:'cover'}}
                      />
                      <div className="card-body">
                        <h2>{a.title}</h2>
                        <h6 className="card-title">{a.destination}</h6>
                        <p className="card-text text-success" style={{ color: "black" }}>
                        <b>₹ {a.cost}</b>
                        </p>
                        <p className="card-text" style={{ color: "black" }}>
                        {a.days}days and {a.nights}nights
                        </p>
                        <p className="card-text" style={{ color: "black" }}>
                        Accomodation : {a.accomodation}<br/>
                        Food : {a.food} <br/>
                        Travel Mode : {a.travelmode}
                        </p>
                      </div>
                      <div>  <Link
                          to={`/EditPackage/${a._id}`}
                          className="btn btn-success mb-4"
                          style={{ marginRight: "5px" }}
                        >
                          Edit
                        </Link>
                        <button
                          className="btn btn-danger mb-4"
                          onClick={() => {
                            handleRemove(a._id);
                          }}
                        >
                          Delete
                        </button></div>
                    </div>
                  </div>
                );
              })
            ) : (
              <h1>No Packages Available</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewPackage;
