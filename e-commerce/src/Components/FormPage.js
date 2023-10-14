import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const FormPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm();
  const [passwordCheck, setPasswordCheck] = useState("");

  const onSubmit = (data) => {
    if (data.password !== passwordCheck) {
      alert("Passwords do not match");
    } else {
      console.log(data);
    }
  };
  console.log(errors);

  const [showStoreDiv, setShowStoreDiv] = useState(false);

  const handleRoleChange = (event) => {
    if (event.target.value === "Store") {
      setShowStoreDiv(true);
    } else {
      setShowStoreDiv(false);
    }
  };

  return (
    <div className="flex mx-auto justify-center my-20">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="firstName"
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
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
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
        <div class="w-full md:w-1/2 px-3 -mx-3 mb-6">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
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
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
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

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-state"
            >
              Role
            </label>
            <div class="relative">
              <select
                value={showStoreDiv ? "Store" : "Customer"}
                onChange={(event) => handleRoleChange(event)}
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option>Customer</option>
                <option>Store</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  class="fill-current h-4 w-4"
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
            <div class="w-full md:w-1/2 px-3 mb-6 ">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Store Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
                {...register("storeName", {
                  required: "Store name is required",
                })}
              />
              {errors.storeName && (
                <p className="text-red-500 text-xs italic">
                  {errors.storeName.message}
                </p>
              )}
            </div>
            <div class="w-full px-3 mb-6">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Store Tax ID
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
              />
            </div>
            <div class="w-full px-3 mb-6">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Store Bank Account
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>
        )}
        <input type="submit" />
      </form>
    </div>
  );
};
