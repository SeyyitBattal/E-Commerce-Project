import React, { useState, useEffect } from "react";
import { api } from "../api/api";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeUserActionCreator } from "../store/actions/userActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const LoginPage = () => {
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      dispatch(changeUserActionCreator(userData));
    }
  }, []);
  const notifySuccess = () =>
    toast.success("Login successful. You are directed to the home page.", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const notifyError = () =>
    toast.error("Login failed. Please try again", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);

    const loginInfo = {
      email: data.email,
      password: data.password,
    };

    const loginUser = (loginInfo) => {
      return (dispatch) => {
        api
          .post("/login", loginInfo)
          .then((response) => {
            const userData = response.data;
            localStorage.setItem("userData", JSON.stringify(userData));
            dispatch(changeUserActionCreator(userData));
            handleSuccess();
          })
          .catch((error) => {
            handleError(error);
          })
          .finally(() => {
            setLoading(false);
          });
      };
    };

    const successMessage =
      "You successfully logged in! You are directed to the home page.";
    const successState = { message: successMessage };

    const handleSuccess = () => {
      notifySuccess();

      setTimeout(() => {
        history.push({
          pathname: "/",
          state: successState,
        });
      }, 5000);
    };

    const handleError = (error) => {
      setLoading(false);
      console.error("Error to login: ", error);
      notifyError();
    };
    dispatch(loginUser(loginInfo));
  };

  return (
    <div className="flex mx-auto justify-center my-20">
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="mx-auto flex flex-wrap justify-center ">
          <div className="w-full px-6 -mx-3 mb-6 ">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              e-mail
            </label>
            <input
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                errors.email ? "border-red-500" : "border-gray-200"
              } rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
              type="text"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Please enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="flex flex-wrap -mx-3 mb-6 w-full  px-3   ">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Password
              </label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                  errors.password ? "border-red-500" : "border-gray-200"
                } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                id="grid-password"
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-xs italic">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="flex mx-auto justify-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 text-xl px-12 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-8"
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};
