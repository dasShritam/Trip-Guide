import React from "react";
import About from "../../../Components/About/About";
import Footer from "../../../Components/Footer/Footer";
import { TopPlaces } from "../../../Components/topPlaces/topPlaces";
import AgencyNavbar from "../navbar/navbar";
import styles from "./home.module.scss";
function AgencyHomePage() {
  return (
    <>
      <AgencyNavbar />
      <div>
        <div className="container-fluid bg-primary py-5 mb-5 hero-header">
          <div className="container py-5 mt-5">
            <div className="row justify-content-center py-5">
              <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                <h1 className={styles.agencyHeadingText}>
                Crafting Exceptional Travel Experience
                </h1>

                <p className={styles.agencyContent}>
                Create, manage, and customize the best travel packages with ease.
                </p>
              </div>
            </div>
          </div>
        </div>
        <About />
        <TopPlaces />
      </div>
      <Footer />
    </>
  );
}

export default AgencyHomePage;
