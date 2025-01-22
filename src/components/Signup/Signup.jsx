import React from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center items-center bg-gray-50 p-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Turn Your Ideas into Reality
          </h2>
          <p className="mt-4 text-gray-600 text-center">
            Join us today and start your journey with amazing opportunities.
          </p>
          <div className="mt-6">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Decor"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Create Your Account
          </h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-gray-600 font-medium mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="John Doe"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-600 font-medium mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="johndoe@gmail.com"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-600 font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
              />
            </div>


            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="text-blue-500 focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-600">
                  I agree to the{" "}
                  <a href="#" className="text-blue-500 hover:underline">
                    terms and conditions
                  </a>
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">or</p>
            <button className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 flex items-center justify-center mt-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                alt="Google"
                className="h-5 w-5 mr-2"
              />
              Sign Up with Google
            </button>
          </div>

          <p className="mt-6 text-center text-gray-600">
            Already have an account?{" "}
            <Link to={"/login"}>
            <a
              href="#"
              className="text-blue-500 hover:underline"
              >
              Log in
            </a>
              </Link>
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default SignUp;
