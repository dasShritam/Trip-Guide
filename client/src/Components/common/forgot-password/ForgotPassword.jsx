import touristImg from "../../../Asset/images/fp.png";
import Navbar from "../../authNavbar/authNavbar";
import Footer from "../../Footer/Footer";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useState } from "react";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import styles from "./ForgotPassword.module.scss";
import axiosInstance from "../../../apis/axiosInstance";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
function ForgotPassword() {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (credentials) => {
    console.log("cred", credentials);

    const { email, password } = credentials;
    if (!email || !password) {
      return;
    }
    // if ()
    sendDataToServer(credentials);
  };

  const sendDataToServer = async (data) => {
    try {
      const res = await axiosInstance.patch("/auth/forgot-password", data);
      if (res.status === 200) {
        toast.success("Password changed successfully.");
        navigate("/login");
      }
    } catch (error) {
      const status = error?.response?.status;
      if (status === 400) {
        toast.error("You can't use old password as new password");
      } else if (status === 404) {
        const msg = error?.response?.data?.message;
        toast.error(msg);
      }

      console.log("error on login", error);
    }
  };
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => setPasswordShown(!passwordShown);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const toggleConfirmPassword = () =>
    setConfirmPasswordShown(!confirmPasswordShown);

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
            <img
              src={touristImg}
              alt="Tourist Login"
              //   style={{ objectFit: "cover" }}
            />
          </div>

          <div className="formWrapper col-6">
            <div className="forgot-form w-100">
              {/* <h3 className="text-center">Log In</h3> */}
              <h2 className="text-center mb-5">Forgot Password</h2>
              <form
                className="px-5 d-flex flex-column justify-content-between"
                style={{
                  height: "300px",
                }}
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="inputWrapper">
                  <input
                    type="email"
                    name="email"
                    placeholder="E mail"
                    {...register("email", {
                      required: "Email is required.",
                      pattern: {
                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        message: "Email format is incorrect",
                      },
                    })}
                  />
                  <p className="text-danger">
                    <ErrorMessage errors={errors} name="email" />
                  </p>
                </div>

                <div className="inputWrapper">
                  <div className="password-box">
                    <input
                      type={`${passwordShown ? "text" : "password"}`}
                      name="password"
                      placeholder="New Password"
                      {...register("password", {
                        required: "New Password is required",
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
                      name="confirm-password"
                      placeholder="Confirm Password"
                      {...register("confirmPassword", {
                        required: "Confirm Password is required",
                        validate: (value) => {
                          if (watch("password") !== value) {
                            return "Your passwords do not match";
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
                      {passwordShown ? <FaEyeSlash /> : <FaEye />}
                    </i>
                  </div>
                  <p className="text-danger">
                    <ErrorMessage errors={errors} name="confirmPassword" />
                  </p>
                </div>
                <input
                  style={{ backgroundColor: "#08d5b7" }}
                  type="submit"
                  value="Submit"
                  className={`${styles.loginBtn} p-0`}
                />
              </form>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default ForgotPassword;
