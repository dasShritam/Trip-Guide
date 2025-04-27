// @ts-ignore
import ReactStars from "react-rating-stars-component";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import axiosInstance from "../../../../apis/axiosInstance";
export const ReviewTaxi = ({ taxiId, touristId }) => {
  const [reviewData, setReviewData] = useState({
    rating: 0,
    review: "",
    touristId: "",
    taxiId: "",
  });

  console.log('revi data', reviewData)

  const changeReview = (e) => {
    const { name, value } = e.target;
    setReviewData({ ...reviewData, [name]: value });
  };

  const ratingChanged = (newRating) => {
    setReviewData({ ...reviewData, rating: newRating });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reviewData.review !== "" && reviewData.rating !== 0) {
      sendDataToServer();
    } else {
      toast.error("Please provide a review and rating");
    }
  };

  const sendDataToServer = async () => {
    try {
      const res = await axiosInstance.post("/taxi-rating", reviewData);
      if (res.status === 200) {
        toast.success("Review added successfully");
        setReviewData({ ...reviewData, review: "", rating: 0 });
      } else {
        throw new Error("Couldn't add review");
      }
    } catch (error) {
      toast.error("Couldn't add review");
    }
  };

  useEffect(() => {
    if (taxiId?._id && touristId?._id) {
      setReviewData({
        ...reviewData,
        touristId: touristId._id,
        taxiId: taxiId._id,
      });
    }
  }, []);
  return (
    <div>
      <div
        className="mt-3 mx-auto shadow p-3"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "200px",
        }}
      >
        <div>
          <h5 className="text-center ">Review your experience </h5>
        </div>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={30}
          activeColor="#ffd700"
        />
        <form
          className="d-flex justify-content-center align-items-center mt-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            style={{ height: "33px", width: "75%" }}
            value={reviewData.review}
            id="review"
            name="review"
            onChange={changeReview}
            placeholder="Write a review"
            className="form-control"
          />
          <button type="submit" className="btn ms-5 btn-success ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
