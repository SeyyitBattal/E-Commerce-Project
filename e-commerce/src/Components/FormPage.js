import { fetchRoles } from "../store/actions/globalActions";
import React, { useState, useEffect } from "react";
import { api } from "../api/api";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const FormPage = () => {
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
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                errors.firstName ? "border-red-500" : "border-gray-200"
              } rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
              id="firstName"
              type="text"
              placeholder="First Name"
              {...register("firstName", {
                required: "First name is required",
                minLength: {
                  value: 3,
                  message: "First name should be at least 3 characters",
                },
              })}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs italic">
                {errors.firstName.message}
              </p>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Last Name
            </label>
            <input
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                errors.lastName ? "border-red-500" : "border-gray-200"
              } rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
              id="grid-last-name"
              type="text"
              placeholder="Last Name"
              {...register("lastName", {
                required: "Last name is required",
                minLength: {
                  value: 3,
                  message: "Last name should be at least 3 characters",
                },
              })}
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs italic">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>
        <div className="w-full md:w-1/2 px-3 -mx-3 mb-6">
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
        <div className="flex flex-wrap -mx-3 mb-6">
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
                minLength: {
                  value: 8,
                  message: "Password must have at least 8 characters",
                },
                pattern: {
                  value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/,
                  message:
                    "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-xs italic">
                {errors.password.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Password Check
            </label>
            <input
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                errors.passwordCheck ? "border-red-500" : "border-gray-200"
              } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
              id="grid-password-check"
              type="password"
              placeholder="Password Check"
              onChange={(e) => setPasswordCheck(e.target.value)}
              {...register("passwordCheck", {
                required: "Password check is required",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
            />
            {errors.passwordCheck && (
              <p className="text-red-500 text-xs italic">
                {errors.passwordCheck.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              Role
            </label>
            <div className="relative">
              <select
                value={
                  selectedRoleId === 1
                    ? "Store"
                    : selectedRoleId === 2
                    ? "Customer"
                    : "Admin"
                }
                onChange={(event) => handleRoleChange(event)}
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option>Customer</option>
                <option>Store</option>
                <option>Admin</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {showStoreDiv && (
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 ">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Store Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-first-name"
                type="text"
                placeholder="Store Name"
                {...register("storeName", {
                  required: "First name is required",
                  minLength: {
                    value: 3,
                    message: "Store name should be at least 3 characters",
                  },
                })}
              />
              {errors.storeName && (
                <p className="text-red-500 text-xs italic">
                  {errors.storeName.message}
                </p>
              )}
            </div>
            <div className="w-full px-3 mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Store Tax ID
              </label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                  errors.storeTaxId ? "border-red-500" : "border-gray-200"
                } rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                id="storeTaxId"
                type="text"
                placeholder="TXXXXVXXXXXX"
                {...register("storeTaxId", {
                  required: "Store Tax ID is required",
                  pattern: {
                    value: /^T\d{4}V\d{6}$/,
                    message:
                      "Store Tax ID should match the pattern TXXXXVXXXXXX",
                  },
                })}
              />
              {errors.storeTaxId && (
                <p className="text-red-500 text-xs italic">
                  {errors.storeTaxId.message}
                </p>
              )}
            </div>
            <div className="w-full px-3 mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Store Bank Account
              </label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                  errors.storeBankAccount ? "border-red-500" : "border-gray-200"
                } rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                id="storeBankAccount"
                type="text"
                placeholder="TRXXXXXXXXXXXXXXXXXXXXXXXXXX"
                {...register("storeBankAccount", {
                  required: "Store Bank Account is required",
                  pattern: {
                    value: /^TR\d{26}$/,
                    message: "Please enter a valid TR IBAN",
                  },
                })}
              />
              {errors.storeBankAccount && (
                <p className="text-red-500 text-xs italic">
                  {errors.storeBankAccount.message}
                </p>
              )}
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="flex mx-auto justify-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 text-xl px-12 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-20"
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};
