import React from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <div className="card flex-shrink-0 w-full max-w-md m-auto shadow-2xl bg-base-100">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <span className="absolute right-4 bottom-11" htmlFor="">
              <FaEye />
            </span>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
            <p className="mt-5">
              New to this website? <Link to="/registration">Register</Link>{" "}
            </p>
            <div className="form-control mt-6">
              <button className="btn btn-gray">Google Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
