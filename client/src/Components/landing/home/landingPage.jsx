import popular1 from "../../../Asset/images/agency/popular-1.jpg";
import popular2 from "../../../Asset/images/agency/popular-2.jpg";
import popular3 from "../../../Asset/images/agency/popular-3.jpg";
import package1 from "../../../Asset/images/agency/packege-1.jpg";
import package2 from "../../../Asset/images/agency/packege-2.jpg";
import package3 from "../../../Asset/images/agency/packege-3.jpg";
import gallery1 from "../../../Asset/images/agency/gallery-1.jpg";
import gallery2 from "../../../Asset/images/agency/gallery-2.jpg";
import gallery3 from "../../../Asset/images/agency/gallery-3.jpg";
import gallery4 from "../../../Asset/images/agency/gallery-4.jpg";
import gallery5 from "../../../Asset/images/agency/gallery-5.jpg";
import LandingNavbar from "../../common/landingNavbar/landingNavbar";
import { useNavigate } from "react-router-dom";
import "./landingPage.scss";
export default function LandingPage() {
  const navigate = useNavigate();

  const saveToLS = (key, value) => {
    localStorage.setItem(key, value);
    navigate("/login");
  };
  return (
    <div id="landing-page">
      <LandingNavbar />
      <main>
        <article>
          <section className="hero" id="home">
            <div className="container">
              <h2 className="h1 hero-title">Journey to explore world</h2>

              <p className="hero-text">
                Embark on a journey to uncover the wonders of the world. Every
                destination holds a new adventure, waiting to be explored
              </p>

              <div className="btn-group">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    saveToLS("tourist-clicked-route", "/tourist/view-packages");
                  }}
                >
                  Find Packages
                </button>

                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    saveToLS("tourist-clicked-route", "/tourist/request-taxi");
                  }}
                >
                  Book taxi
                </button>
              </div>
            </div>
          </section>

          <section className="popular" id="destination">
            <div className="container">
              <p className="section-subtitle">Uncover place</p>

              <h2 className="h2 my-section-title">Popular destination</h2>

              <p className="section-text">
                Discover your next dream destination. Whether it's a tropical
                beach, bustling city, or serene mountain escape, adventure
                awaits
              </p>

              <ul className="popular-list">
                <li>
                  <div className="popular-card">
                    <figure className="card-img">
                      <img
                        src={popular1}
                        alt="San miguel, italy"
                        loading="lazy"
                      />
                    </figure>

                    <div className="card-content">
                      <div className="card-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                      </div>

                      <p className="card-subtitle">
                        <a href="#">Italy</a>
                      </p>

                      <h3 className="h3 card-title">
                        <a href="#">San miguel</a>
                      </h3>

                      <p className="card-text">
                        Explore the timeless beauty of San miguel. From Rome's
                        ancient wonders to Venice's romantic canals, every
                        moment is a masterpiece
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="popular-card">
                    <figure className="card-img">
                      <img
                        src={popular2}
                        alt="Burj khalifa, dubai"
                        loading="lazy"
                      />
                    </figure>

                    <div className="card-content">
                      <div className="card-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                      </div>

                      <p className="card-subtitle">
                        <a href="#">Dubai</a>
                      </p>

                      <h3 className="h3 card-title">
                        <a href="#">Burj khalifa</a>
                      </h3>

                      <p className="card-text">
                        Touch the sky at the iconic Burj Khalifa. Experience
                        Dubai from the world's tallest tower and marvel at the
                        breathtaking views
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="popular-card">
                    <figure className="card-img">
                      <img
                        src={popular3}
                        alt="Kyoto temple, japan"
                        loading="lazy"
                      />
                    </figure>

                    <div className="card-content">
                      <div className="card-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                      </div>

                      <p className="card-subtitle">
                        <a href="#">Japan</a>
                      </p>

                      <h3 className="h3 card-title">
                        <a href="#">Kyoto temple</a>
                      </h3>

                      <p className="card-text">
                        Step into the tranquility of Kyoto's ancient temples.
                        Discover the serene beauty and timeless traditions that
                        define Japan's cultural heart
                      </p>
                    </div>
                  </div>
                </li>
              </ul>

              <button
                className="btn btn-primary"
                onClick={() => {
                  saveToLS(
                    "tourist-clicked-route",
                    "/tourist/top-destinations"
                  );
                }}
              >
                More destintions
              </button>
            </div>
          </section>

          <section className="package" id="package">
            <div className="container">
              <p className="section-subtitle">Popular Packeges</p>

              <h2 className="h2 my-section-title">Checkout Our Packeges</h2>

              <ul className="package-list">
                <li style={{ backgroundColor: "red" }}>
                  <div className="package-card">
                    <figure className="card-banner">
                      <img
                        src={package1}
                        alt="Experience The Great Holiday On Beach"
                        loading="lazy"
                      />
                    </figure>

                    <div className="card-content">
                      <h3 className="h3 card-title">
                        Experience The Great Holiday On Beach
                      </h3>

                      <p className="card-text">
                        Immerse yourself in the rich heritage of Japan with our
                        10-day package, exploring Tokyo, Kyoto, and Osaka
                        through guided city tours, traditional tea ceremonies,
                        and visits to historic temples. Experience the
                        convenience of 3- to 5-star hotel stays and the
                        excitement of a bullet train ride. Round-trip airfare
                        and daily breakfast are included for a worry-free
                        cultural escapade.
                      </p>

                      <ul className="card-meta-list">
                        <li className="card-meta-item">
                          <div className="meta-box">
                            <ion-icon name="time"></ion-icon>

                            <p className="text">7D/6N</p>
                          </div>
                        </li>

                        <li className="card-meta-item">
                          <div className="meta-box">
                            <ion-icon name="people"></ion-icon>

                            <p className="text">pax: 10</p>
                          </div>
                        </li>

                        <li className="card-meta-item">
                          <div className="meta-box">
                            <ion-icon name="location"></ion-icon>

                            <p className="text">Malaysia</p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="card-price">
                      <div className="wrapper">
                        <p className="reviews">(25 reviews)</p>

                        <div className="card-rating">
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                        </div>
                      </div>

                      <p className="price">
                        ₹7,500
                        <span>/ per person</span>
                      </p>

                      <button
                        className="btn btn-secondary"
                        onClick={() => {
                          saveToLS(
                            "tourist-clicked-route",
                            "/tourist/view-packages"
                          );
                        }}
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="package-card">
                    <figure className="card-banner">
                      <img
                        src={package2}
                        alt="Summer Holiday To The Oxolotan River"
                        loading="lazy"
                      />
                    </figure>

                    <div className="card-content">
                      <h3 className="h3 card-title">
                        Summer Holiday To The Oxolotan River
                      </h3>

                      <p className="card-text">
                        Escape to the Maldives for a 6-day luxury retreat in an
                        overwater bungalow at a 5-star resort. Enjoy an
                        all-inclusive meal plan, snorkeling excursions, and a
                        sunset dolphin cruise, topped off with a spa treatment
                        and private beach dinner. Round-trip airfare and airport
                        transfers complete this idyllic getaway.
                      </p>

                      <ul className="card-meta-list">
                        <li className="card-meta-item">
                          <div className="meta-box">
                            <ion-icon name="time"></ion-icon>

                            <p className="text">7D/6N</p>
                          </div>
                        </li>

                        <li className="card-meta-item">
                          <div className="meta-box">
                            <ion-icon name="people"></ion-icon>

                            <p className="text">pax: 10</p>
                          </div>
                        </li>

                        <li className="card-meta-item">
                          <div className="meta-box">
                            <ion-icon name="location"></ion-icon>

                            <p className="text">Malaysia</p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="card-price">
                      <div className="wrapper">
                        <p className="reviews">(20 reviews)</p>

                        <div className="card-rating">
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                        </div>
                      </div>

                      <p className="price">
                        ₹ 520,00
                        <span>/ per person</span>
                      </p>

                      <button
                        className="btn btn-secondary"
                        onClick={() => {
                          saveToLS(
                            "tourist-clicked-route",
                            "/tourist/view-packages"
                          );
                        }}
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="package-card">
                    <figure className="card-banner">
                      <img
                        src={package3}
                        alt="Santorini Island's Weekend Vacation"
                        loading="lazy"
                      />
                    </figure>

                    <div className="card-content">
                      <h3 className="h3 card-title">
                        Every journey tells a story. Make yours extraordinary
                        with us
                      </h3>

                      <p className="card-text">
                        Unlock the secrets of the globe. We’ll be your trusted
                        travel companion. Every journey tells a story. Make
                        yours extraordinary with us.
                      </p>

                      <ul className="card-meta-list">
                        <li className="card-meta-item">
                          <div className="meta-box">
                            <ion-icon name="time"></ion-icon>

                            <p className="text">7D/6N</p>
                          </div>
                        </li>

                        <li className="card-meta-item">
                          <div className="meta-box">
                            <ion-icon name="people"></ion-icon>

                            <p className="text">pax: 10</p>
                          </div>
                        </li>

                        <li className="card-meta-item">
                          <div className="meta-box">
                            <ion-icon name="location"></ion-icon>

                            <p className="text">Malaysia</p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="card-price">
                      <div className="wrapper">
                        <p className="reviews">(40 reviews)</p>

                        <div className="card-rating">
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                          <ion-icon name="star"></ion-icon>
                        </div>
                      </div>

                      <p className="price">
                        ₹6,600
                        <span>/ per person</span>
                      </p>

                      <button
                        className="btn btn-secondary"
                        onClick={() => {
                          saveToLS(
                            "tourist-clicked-route",
                            "/tourist/view-packages"
                          );
                        }}
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </li>
              </ul>

              <button
                className="btn btn-primary"
                onClick={() => {
                  saveToLS("tourist-clicked-route", "/tourist/view-packages");
                }}
              >
                View All Packages
              </button>
            </div>
          </section>

          <section className="gallery" id="gallery">
            <div className="container">
              <p className="section-subtitle">Photo Gallery</p>

              <h2 className="h2 my-section-title">Photo's From Travellers</h2>

              <p className="section-text">
                Step into a world of wonder. Your unforgettable journey starts
                with us. Craft memories that last a lifetime. Choose us for your
                next adventure.
              </p>

              <ul className="gallery-list">
                <li className="gallery-item">
                  <figure className="gallery-image">
                    <img src={gallery1} alt="Gallery image" />
                  </figure>
                </li>

                <li className="gallery-item">
                  <figure className="gallery-image">
                    <img src={gallery2} alt="Gallery image" />
                  </figure>
                </li>

                <li className="gallery-item">
                  <figure className="gallery-image">
                    <img src={gallery3} alt="Gallery image" />
                  </figure>
                </li>

                <li className="gallery-item">
                  <figure className="gallery-image">
                    <img src={gallery4} alt="Gallery image" />
                  </figure>
                </li>

                <li className="gallery-item">
                  <figure className="gallery-image">
                    <img src={gallery4} alt="Gallery image" />
                  </figure>
                </li>
              </ul>
            </div>
          </section>

          <section className="cta" id="contact">
            <div className="container">
              <div className="cta-content">
                <p className="section-subtitle">Live in Dream</p>

                <h2 className="h2 section-title">
                  Ready For Unforgatable Travel. Remember Us!
                </h2>

                <p className="section-text">
                  Discover the world like never before. Remember us for your
                  next adventure. Experience the journey of a lifetime. Let us
                  be your guide to unforgettable memories.
                </p>
              </div>

              <button
                className="btn btn-secondary"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Sign Up!
              </button>
            </div>
          </section>
        </article>
      </main>

      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="footer-brand">
              <a href="#" className="logo">
                <img src={gallery5} alt="Tourly logo" />
              </a>

              <p className="footer-text">
                Unleash your wanderlust with us. Think of us for your next
                incredible journey.Adventure awaits at every corner. Keep us in
                mind for your travel dreams.
              </p>
            </div>

            <div className="footer-contact">
              <h4 className="contact-title">Contact Us</h4>

              <p className="contact-text">
                Feel free to contact and reach us !!
              </p>

              <ul>
                <li className="contact-item">
                  <ion-icon name="call-outline"></ion-icon>

                  <a href="tel:+01123456790" className="contact-link">
                    +01 (123) 4567 90
                  </a>
                </li>

                <li className="contact-item">
                  <ion-icon name="location-outline"></ion-icon>

                  <address>Kerala, Trivandrum</address>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <p className="copyright">
              &copy; 2024 <a href="">Tourist Guide</a>. All rights reserved
            </p>

            <ul className="footer-bottom-list">
              <li>
                <a href="#" className="footer-bottom-link">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="footer-bottom-link">
                  Term & Condition
                </a>
              </li>

              <li>
                <a href="#" className="footer-bottom-link">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <a href="#top" className="go-top" data-go-top>
        <ion-icon name="chevron-up-outline"></ion-icon>
      </a>
    </div>
  );
}
