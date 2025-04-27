<!-- 1. header-top  -->

        <div class="header-top">
          <div class="container">
            <a href="tel:+01123456790" class="helpline-box">
              <div class="icon-box">
                <ion-icon name="call-outline"></ion-icon>
              </div>

              <div class="wrapper">
                <p class="helpline-title">For Further Inquires :</p>

                <p class="helpline-number">+01 (123) 4567 90</p>
              </div>
            </a>

            <a href="#" class="logo">
              <img src={logoBlue} alt="Tourly logo" />
            </a>

            <div class="header-btn-group">
              <button class="search-btn" aria-label="Search">
                <ion-icon name="search"></ion-icon>
              </button>

              <button
                class="nav-open-btn"
                aria-label="Open Menu"
                data-nav-open-btn
              >
                <ion-icon name="menu-outline"></ion-icon>
              </button>
            </div>
          </div>
        </div>

<!-- tour search  -->
<section class="tour-search">
            <div class="container">
              <form action="" class="tour-search-form">
                <div class="input-wrapper">
                  <label for="destination" class="input-label">
                    Search Destination*
                  </label>

                  <input
                    type="text"
                    name="destination"
                    id="destination"
                    required
                    placeholder="Enter Destination"
                    class="input-field"
                  />
                </div>

                <div class="input-wrapper">
                  <label for="people" class="input-label">
                    Pax Number*
                  </label>

                  <input
                    type="number"
                    name="people"
                    id="people"
                    required
                    placeholder="No.of People"
                    class="input-field"
                  />
                </div>

                <div class="input-wrapper">
                  <label for="checkin" class="input-label">
                    Checkin Date**
                  </label>

                  <input
                    type="date"
                    name="checkin"
                    id="checkin"
                    required
                    class="input-field"
                  />
                </div>

                <div class="input-wrapper">
                  <label for="checkout" class="input-label">
                    Checkout Date*
                  </label>

                  <input
                    type="date"
                    name="checkout"
                    id="checkout"
                    required
                    class="input-field"
                  />
                </div>

                <button type="submit" class="btn btn-secondary">
                  Inquire now
                </button>
              </form>
            </div>
          </section>
