import React from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
                type="text"
                id="username"
                placeholder="Username"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
                type="email"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
                type="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline"
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <Link to="/login" className="text-blue-500 hover:text-blue-700">
            <p className="text-gray-700">
              Already have an account? <a href="#" className="text-blue-500 hover:text-blue-700">Log In</a>
            </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
