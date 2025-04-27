import pic3 from "../../img/pic3.webp";

function About() {
  return (
    <div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ minHeight: "400px" }}
            >
              <div className="position-relative h-100">
                <img
                  className="img-fluid position-absolute w-100 h-100"
                  src={pic3}
                  alt=""
                  style={{ objectFit: "cover;" }}
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h6 className="section-title bg-white text-start text-primary pe-3">
                About Us
              </h6>
              <h1 className="mb-4">
                Welcome to <span className="text-primary">Tourist Guide</span>
              </h1>
              <p className="mb-4">
                Welcome to our comprehensive tourism management system! Our
                platform offers a seamless and user-centric experience, designed
                to cater to all your travel needs. With dedicated modules for
                administrators, users, restaurants, and hotels, we've created a
                one-stop solution to enhance your travel journey. For
                administrators, managing tourism details, food options, hotels,
                routes, bookings, and transport information has never been
                easier. Users can explore, register, and access a wealth of
                information including restaurant and hotel details, route
                options, accommodation booking, and even discover nearby tourist
                attractions. With the ability to leave reviews, access previous
                travelers' feedback, and plan your own itinerary, you're in
                control of your travel experience. Restaurants and hotels also
                have their dedicated spaces to effortlessly register, login, and
                update their offerings, ensuring that the information provided
                to users is always up-to-date. Join us in revolutionizing the
                way you travel - whether you're an administrator, a business
                owner, or an enthusiastic traveler, our platform is here to
                simplify and enhance every aspect of your journey.
              </p>
              {/* <p className="mb-4">
                Joy Travels is a member of prestigious trade bodies like Kashmir
                tour and travel association and Just Dial and approved by
                Department of Tourism, Government of Jammu and Kashmir.
              </p> */}
              {/* <div className="row gy-2 gx-4 mb-4">
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2"></i>First
                    Class Flights
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2"></i>
                    Handpicked Hotels
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2"></i>5 Star
                    Accommodations
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2"></i>Latest
                    Model Vehicles
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2"></i>150
                    Premium City Tours
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2"></i>24/7
                    Service
                  </p>
                </div>
              </div> */}
              {/* <a className="btn btn-primary py-3 px-5 mt-2" href="">
                Read More
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
