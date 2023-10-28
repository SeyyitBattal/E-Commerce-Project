import { fetchRoles } from "../store/actions/globalActions";
import React, { useState, useEffect } from "react";
import { api } from "../api/api";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const LoginPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRoles());
  }, [dispatch]);
  const notifySuccess = () =>
    toast.success("Login successful. You are directed to the products page.", {
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
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [passwordCheck, setPasswordCheck] = useState("");
  const [selectedRoleId, setSelectedRoleId] = useState(2);
  const [showStoreDiv, setShowStoreDiv] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);
    if (selectedRoleId) data.role_id = selectedRoleId;

    const adminInfo = {
      name: data.firstName + " " + data.lastName,
      email: data.email,
      password: data.password,
      role_id: data.role_id,
    };

    const userInfo = {
      name: data.firstName + " " + data.lastName,
      email: data.email,
      password: data.password,
      role_id: data.role_id,
    };

    const storeInfo = {
      name: data.firstName + " " + data.lastName,
      email: data.email,
      password: data.password,
      role_id: data.role_id,
      store: {
        name: data.storeName,
        tax_no: data.storeTaxId,
        bank_account: data.storeBankAccount,
      },
    };

    const successMessage =
      "You need to click the link in the email to activate your account!";
    const successState = { message: successMessage };

    const handleSuccess = () => {
      setTimeout(() => {
        history.push({
          pathname: "/products",
          state: successState,
        });
      }, 5000);
      notifySuccess();
    };

    const handleError = (error) => {
      setLoading(false);
      console.error("Error submitting form data: ", error);
      notifyError();
    };

    if (selectedRoleId === 1) {
      api
        .post("/signup", storeInfo)
        .then((response) => {
          setLoading(false);
          console.log(response.data);
          handleSuccess();
        })
        .catch((error) => {
          handleError(error);
        })
        .finally(function () {
          setLoading(false);
        });
    } else if (selectedRoleId === 2) {
      api
        .post("/signup", userInfo)
        .then((response) => {
          setLoading(false);
          console.log(response.data);
          handleSuccess();
        })
        .catch((error) => {
          handleError(error);
        })
        .finally(function () {
          setLoading(false);
        });
    } else if (selectedRoleId === 3) {
      api
        .post("/signup", adminInfo)
        .then((response) => {
          setLoading(false);
          console.log(response.data);
          handleSuccess();
        })
        .catch((error) => {
          handleError(error);
        })
        .finally(function () {
          setLoading(false);
        });
    }
  };

  const handleRoleChange = (event) => {
    if (event.target.value === "Store") {
      setShowStoreDiv(true);
      setSelectedRoleId(1);
    } else if (event.target.value === "Customer") {
      setShowStoreDiv(false);
      setSelectedRoleId(2);
    } else {
      setShowStoreDiv(false);
      setSelectedRoleId(3);
    }
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
