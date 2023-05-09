import React from "react";
import { useState, useEffect } from "react";
import { login } from "../redux/features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { ToastContainer } from "react-toastify";
// import NotificationBox from "./NotificationBox";
import "./login.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";

const initialState = {
  email: "",
  Password: "",
};

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const [formlogin, setFormlogin] = useState(initialState);
  const dispatch = useDispatch();
  const { email, Password } = formlogin;
  const navigate = useNavigate();

  // useEffect(() => {
  //     error && toast.error(error);
  // }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("hiiiiiiiiii");
    // console.log(formValue);
    if (Password && email) {
      console.log(formlogin);
      setLoading(true);
      dispatch(login({ formlogin, navigate }))
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        // setError(error.message);
      });
      // <NotificationBox message="Success message" type="success" />
    }
  };

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormlogin({ ...formlogin, [name]: value });
  };

  return (
    <>
    <div className="min-h-screen purple-primary flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-white">Log in to your account</h2>
      </div>
      {loading?<div className="loader mt-4">
      <FontAwesomeIcon icon={faSpinner} spin />
    </div>:<></>}
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white mr-4 ml-4 rounded-2xl py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                  placeholder="email"
                  value={email}
                  onChange={onInputChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="Password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={Password}
                  onChange={onInputChange}
                />
              </div>
            </div>
    
            <div>
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full flex justify-center py-2 px-4 border-2  text-sm font-medium rounded-md  border-black bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default Login;
