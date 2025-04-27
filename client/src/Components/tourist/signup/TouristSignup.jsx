import React, { useState } from "react";
import { Link } from "react-router-dom";
import gif from "../../../img/custlog.jpeg";
import Navbar from "../../authNavbar/authNavbar";
import Footer from "../../Footer/Footer";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import axiosInstance from "../../../apis/axiosInstance";
import { useNavigate } from "react-router-dom";
import "./TouristSignup.css";
import { toast } from "react-hot-toast";
export default function TouristSignup() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const togglePassword = () => setPasswordShown(!passwordShown);

  const toggleConfirmPassword = () =>
    setConfirmPasswordShown(!confirmPasswordShown);

  const onSubmit = (data) => {
    const {
      name,
      email,
      password,
      phoneNumber,
      idType,
      gender,
      country,
      touristPhoto,
      idPhoto,
      confirmPassword,
    } = data;

    if (
      !name ||
      !email ||
      !password ||
      !phoneNumber ||
      !idType ||
      !gender ||
      !country ||
      !touristPhoto ||
      !idPhoto ||
      !confirmPassword ||
      password !== confirmPassword
    ) {
      console.log("missing", data);
      return;
    }
    const serializedData = {
      name,
      email,
      password,
      phoneNumber,
      idType,
      gender,
      country,
      touristPhoto: touristPhoto[0],
      idPhoto: idPhoto[0],
    };
    sendDataToServer(serializedData);
  };
  const sendDataToServer = async (data) => {
    try {
      const res = await axiosInstance.post("/tourist/signup", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (res.status === 201) {
        toast.success("Registration successful");
        navigate("/login");
      }
    } catch (error) {
      const statusCode = error?.response?.status;
      if (statusCode === 400) {
        const msg = error?.response?.data?.message || "Email already taken!";
        toast.error(msg);
      } else {
        const msg = error?.response?.data?.message || "Something went wrong.";
        toast.error(msg);
      }
      console.error("Error on tourist registration: ", error);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <main
          className="container row"
          style={{ boxShadow: " 0 10px 1rem #0004" }}
        >
          {/* <div className="back"></div> */}
          <div className="brand col-6">
            <h1>
              <span className="name">
                <span>ADVENTURE</span>
                <span> </span>
              </span>
              IS OUT THERE
            </h1>

            <img
              src={gif}
              height={690}
              style={{ objectFit: "cover" }}
              alt="Panda Logo"
            />
          </div>
          <div
            className="formWrapper col-6"
            style={{ backgroundColor: "white" }}
          >
            <div className="form">
              <h2>New member card</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div id="tourist-signup-form">
                  <div className="inputWrapper">
                    <input
                      type="text"
                      name="name"
                      {...register("name", {
                        required: "Full name is required.",
                        minLength: {
                          value: 2,
                          message: "Min. 2 characters required.",
                        },
                        pattern: {
                          value: /^[a-zA-Z\s]*$/,
                          message: "Only letters are allowed",
                        },
                        maxLength: {
                          value: 30,
                          message: "Max. 30 characters allowed.",
                        },
                      })}
                      placeholder="Full Name"
                    />
                    <p className="text-danger">
                      <ErrorMessage errors={errors} name="name" />
                    </p>
                  </div>
                  <div className="inputWrapper">
                    <input
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      {...register("email", {
                        required: "Email is required.",

                        pattern: {
                          value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                          message: "Email format is incorrect.",
                        },
                      })}
                    />

                    <p className="text-danger">
                      <ErrorMessage errors={errors} name="email" />
                    </p>
                  </div>
                  <div className="inputWrapper">
                    <input
                      type="text"
                      name="country"
                      placeholder="Country of residence"
                      {...register("country", {
                        required: "Country is required.",

                        pattern: {
                          value: /^[a-zA-Z\s]*$/,
                          message: "Only letters are allowed",
                        },
                        maxLength: {
                          value: 30,
                          message: "Max. 30 characters allowed.",
                        },
                      })}
                    />
                    <p className="text-danger">
                      <ErrorMessage errors={errors} name="country" />
                    </p>
                  </div>

                  <div className="inputWrapper">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      name="phoneNumber"
                      {...register("phoneNumber", {
                        required: "Phone Number is required.",
                        pattern: {
                          value: /^\d{10}$/,
                          message: "Invalid phone number",
                        },
                      })}
                    />

                    <p className="text-danger">
                      <ErrorMessage errors={errors} name="phoneNumber" />
                    </p>
                  </div>

                  <div className="inputWrapper password-box">
                    <div className="password-box">
                      <input
                        type={`${passwordShown ? "text" : "password"}`}
                        placeholder="Password"
                        name="password"
                        {...register("password", {
                          required: "Password is required",
                          minLength: {
                            value: 8,
                            message: "Min. 8 characters required.",
                          },
                        })}
                      />
                      <i
                        style={{
                          top: "0",
                          bottom: "0",
                          display: "flex",
                          alignItems: "center",
                        }}
                        onClick={togglePassword}
                      >
                        {passwordShown ? <FaEyeSlash /> : <FaEye />}
                      </i>
                    </div>
                    <p className="text-danger">
                      <ErrorMessage errors={errors} name="password" />
                    </p>
                  </div>

                  <div className="inputWrapper">
                    <div className="password-box">
                      <input
                        type={`${confirmPasswordShown ? "text" : "password"}`}
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        {...register("confirmPassword", {
                          required: "Confirm password is required.",
                          validate: (value) => {
                            if (watch("password") !== value) {
                              return "Your passwords do not match.";
                            }
                          },
                        })}
                      />
                      <i
                        style={{
                          top: "0",
                          bottom: "0",
                          display: "flex",
                          alignItems: "center",
                        }}
                        onClick={toggleConfirmPassword}
                      >
                        {confirmPasswordShown ? <FaEyeSlash /> : <FaEye />}
                      </i>
                    </div>

                    <p className="text-danger">
                      <ErrorMessage errors={errors} name="confirmPassword" />
                    </p>
                  </div>

                  <div className="inputWrapper">
                    <select
                      name="gender"
                      {...register("gender", {
                        required: "Plese select your gender",
                      })}
                      style={{ border: "1px solid grey" }}
                    >
                      <option value="">Select Gender</option>
                      <option value="Male"> Male </option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    <p className="text-danger">
                      <ErrorMessage errors={errors} name="gender" />
                    </p>
                  </div>

                  <div className="inputWrapper">
                    <select
                      name="idType"
                      id="id-type"
                      {...register("idType", {
                        required: "Choose verification ID",
                      })}
                      style={{ border: "1px solid grey" }}
                    >
                      <option value="">Select verification ID</option>
                      <option value="Passport">Passport</option>
                      <option value="Aadhaar Card">Aadhar</option>
                      <option value="Voter ID">Voter ID</option>
                      <option value="Driving License">Driving License</option>
                      <option value="PAN Card">PAN Card</option>
                    </select>
                    <p className="text-danger">
                      <ErrorMessage errors={errors} name="idType" />
                    </p>
                  </div>
                  {/* <div className="d-flex align-items-center ">
                  <label htmlFor="idPhoto">Upload your ID Photo: </label>
                </div> */}
                  <div className="inputWrapper">
                    <input
                      className="mx-auto"
                      {...register("idPhoto", {
                        required: "ID photo is required",
                      })}
                      type="file"
                      accept="image/*"
                      name="idPhoto"
                      style={{ width: "100%" }}
                    />
                    <p>Upload ID Photo</p>
                    <p className="text-danger">
                      <ErrorMessage errors={errors} name="idPhoto" />
                    </p>
                  </div>
                  {/* <div className="d-flex align-items-center ">
                  <label htmlFor="idPhoto">Upload your photo: </label>
                </div> */}
                  <div className="inputWrapper">
                    <input
                      className="mx-auto"
                      {...register("touristPhoto", {
                        required: "Your Photo is required",
                      })}
                      type="file"
                      name="touristPhoto"
                      style={{ width: "100%" }}
                      accept="image/*"
                    />
                    <p>Upload Your Photo</p>
                    <p className="text-danger">
                      <ErrorMessage errors={errors} name="touristPhoto" />
                    </p>
                  </div>
                </div>

                <div className="d-flex justify-content-center w-100 mt-5">
                  <input
                    type="submit"
                    name="touristData"
                    id="touristData"
                    value="Sign Up"
                    className="btn btn-dark"
                    style={{ height: "60px", width: "13rem" }}
                  />
                </div>
              </form>

              <span id="login1" style={{ color: "black" }}>
                Already have an account?{" "}
                <Link to="/login" title="Login" style={{ color: "darkblue" }}>
                  Log in!
                </Link>
              </span>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
