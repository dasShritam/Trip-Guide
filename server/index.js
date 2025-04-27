const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./db/DBConnection");
const app = express();
const cors = require("cors");
const PORT = 4050;
const { touristRoutes } = require("./tourist/tourist.routes");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/upload`));

app.use(cors());
const { errorHandler } = require("./middleware/errorHandler");
const { authRoutes } = require("./auth/auth.routes");
const agencyRoutes = require("./agency/agency.routes");
const hotelRoutes = require("./hotel/hotel.routes");
const packageRoutes = require("./package/package.routes");
const packageBookingRoutes = require("./packageBooking/packageBooking.routes");
const roomRoutes = require("./rooms/rooms.routes");
const roomsBookingRoutes = require("./hotelBooking/hotelBooking.routes");
const taxiRoutes = require("./taxi/taxi.routes");
const taxiBookingRoutes = require("./taxiBooking/taxiBooking.routes");
const foodRoutes = require("./food/food.routes");
const foodBookingRoutes = require("./foodBooking/foodBooking.routes");
const usageRoutes = require("./usage/usage.routes");
const destinationRoutes = require("./topDestinations/topDestination.routes");
const taxiRatingRoutes = require("./rateTaxi/rateTaxi.routes");

app.get("/travel_guide_api", (req, res) => {
  res.send(
    "Server running successfully on http://localhost:4050/travel_guide_api/"
  );
});
app.use("/travel_guide_api/auth", authRoutes);


app.use("/travel_guide_api/tourist", touristRoutes);
app.use("/travel_guide_api/agency", agencyRoutes);
app.use("/travel_guide_api/hotel", hotelRoutes);
app.use("/travel_guide_api/package", packageRoutes);
app.use("/travel_guide_api/package-booking", packageBookingRoutes);
app.use("/travel_guide_api/rooms", roomRoutes);
app.use("/travel_guide_api/rooms-booking", roomsBookingRoutes);
app.use("/travel_guide_api/taxi", taxiRoutes);
app.use("/travel_guide_api/taxi-booking", taxiBookingRoutes);
app.use("/travel_guide_api/food", foodRoutes)
app.use("/travel_guide_api/food-booking",  foodBookingRoutes)
app.use("/travel_guide_api/usage",  usageRoutes)
app.use("/travel_guide_api/top-destinations",  destinationRoutes)
app.use("/travel_guide_api/taxi-rating",  taxiRatingRoutes)

// error routes 
app.use(errorHandler);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `Server created successfully on http://localhost:${PORT}/travel_guide_api`
      );
    });
  })
  .catch((err) => {
    console.log("Error on connect db", err);
  });
