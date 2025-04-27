import React from "react";
import img2 from "../../img/pic1.jpg";
import img3 from "../../img/pic3.jpg";
import img4 from "../../img/pic3.webp";
import img5 from "../../img/pic4.webp";
import img6 from "../../img/pic6.webp";
import img7 from "../../img/pic9.jpg";

function Footer() {
  return (
    <div>
      <div
        className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <h4 className="text-white mb-3">Company</h4>
              <a className="btn btn-link" href="">
                About Us
              </a>
              <a className="btn btn-link" href="">
                Contact Us
              </a>
              <a className="btn btn-link" href="">
                Privacy Policy
              </a>
              <a className="btn btn-link" href="">
                Terms & Condition
              </a>
              <a className="btn btn-link" href="">
                FAQs & Help
              </a>
            </div>
            <div className="col-lg-4 col-md-6">
              <h4 className="text-white mb-3">Contact</h4>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3"></i> Kerala, India
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3"></i>+012 345 67890
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3"></i>info@example.com
              </p>
              {/* <div className="d-flex pt-2">
                        <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                    </div> */}
            </div>
            <div className="col-lg-4 col-md-6">
              <h4 className="text-white mb-3">Gallery</h4>
              <div className="row g-2 pt-2">
                <div className="col-4">
                  <img className="img-fluid bg-light p-1" src={img6} alt="" />
                </div>
                <div className="col-4">
                  <img className="img-fluid bg-light p-1" src={img7} alt="" />
                </div>
                <div className="col-4">
                  <img className="img-fluid bg-light p-1" src={img2} alt="" />
                </div>
                <div className="col-4">
                  <img className="img-fluid bg-light p-1" src={img3} alt="" />
                </div>
                <div className="col-4">
                  <img className="img-fluid bg-light p-1" src={img4} alt="" />
                </div>
                <div className="col-4">
                  <img className="img-fluid bg-light p-1" src={img5} alt="" />
                </div>
              </div>
            </div>
      
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
