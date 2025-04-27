import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Navbar from "../../../../Components/authNavbar/authNavbar";
import taxiImg from "../../../../Asset/images/taxi-signup.jpg";
import axiosInstance from "../../../../apis/axiosInstance";
import { ErrorMessage } from "@hookform/error-message";
import Footer from "../../../../Components/Footer/Footer";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import styles from "./taxiSignup.module.scss";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
function TaxiSignup() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const {
      driverName,
      email,
      password,
      confirmPassword,
      contactNo,
      dutyArea,
      workExperience,
    } = data;
    if (
      !driverName ||
      !email ||
      !password ||
      !confirmPassword ||
      !contactNo ||
      !dutyArea ||
      !workExperience
    ) {
      return;
    }
    if (password !== confirmPassword) {
      return;
    }
    sendDataToServer({ ...data, chargePerKm: 50 });
  };

  const sendDataToServer = async (data) => {
    try {
      const res = await axiosInstance.post("/taxi/signup", data);
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

  const togglePassword = () => setPasswordShown(!passwordShown);

  const toggleConfirmPassword = () =>
    setConfirmPasswordShown(!confirmPasswordShown);

  return (
    <div>
      <Navbar />

      <main className="container1">
        <div className={styles.leftSection}>
          <div>
            <img height={380} src={taxiImg} alt="Panda Logo" />
          </div>
        </div>

        <div className="formWrapper">
          <div className="form">
            <h2>Taxi Registration</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div id={`${styles.agencySignupForm}`}>
                <div className="inputWrapper">
                  <input
                    type="text"
                    name="driverName"
                    {...register("driverName", {
                      required: "Driver name is required.",
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
                    placeholder="Driver Name"
                  />
                  <p className="text-danger">
                    <ErrorMessage errors={errors} name="driverName" />
                  </p>
                </div>

                <div className="inputWrapper">
                  <input
                    type="text"
                    name="dutyArea"
                    {...register("dutyArea", {
                      required: "Duty area/location is required.",
                      minLength: {
                        value: 2,
                        message: "Min. 2 characters required.",
                      },
                      maxLength: {
                        value: 60,
                        message: "Max. 60 characters allowed.",
                      },
                    })}
                    placeholder="Duty Area/Location"
                  />
                  <p className="text-danger">
                    <ErrorMessage errors={errors} name="dutyArea" />
                  </p>
                </div>

                <div className="inputWrapper">
                  <input
                    type="tel"
                    placeholder="Contact No"
                    name="contactNo"
                    {...register("contactNo", {
                      required: "Contact No is required.",
                      pattern: {
                        value: /^\d{10}$/,
                        message: "Invalid contact number",
                      },
                    })}
                  />
                  <p className="text-danger">
                    <ErrorMessage errors={errors} name="contactNo" />
                  </p>
                </div>

                <div className="inputWrapper">
                  <input
                    type="email"
                    name="email"
                    placeholder="E mail"
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
                  <input
                    type="number"
                    name="workExperience"
                    {...register("workExperience", {
                      required: "Work experience is required.",
                      min: {
                        value: 0,
                        message: "Work experience cannot be negative.",
                      },
                    })}
                    placeholder="Work Experience (in years)"
                  />
                  <p className="text-danger">
                    <ErrorMessage errors={errors} name="workExperience" />
                  </p>
                </div>
              </div>
              <div className="d-flex tw-justify-center tw-w-full ">
                <input
                  className="tw-mt-3 tw-text-white tw-bg-gray-800 hover:tw-bg-gray-900 focus:tw-outline-none focus:tw-ring-4 focus:tw-ring-gray-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 me-2 tw-mb-2 dark:tw-bg-gray-800 dark:hover:tw-bg-gray-700 dark:focus:tw-ring-gray-700 dark:tw-border-gray-700"
                  type="submit"
                  name="register"
                  value="Sign Up"
                />
              </div>
            </form>
          </div>
        </div>
      </main>
      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
}

export default TaxiSignup;
