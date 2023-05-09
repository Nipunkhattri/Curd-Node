import React from 'react'
import { useState,useEffect } from 'react'
import { register } from '../redux/features/authSlice.js';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./Register.css"
import "./login.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";

const initialState = {
    email:"",
    password:""
};

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [formValue, setFormValue] = useState(initialState);
    const dispatch = useDispatch();

    const {email, password} = formValue;
    const navigate = useNavigate();

    // useEffect(() => {
    //     error && toast.error(error);
    // }, [error]);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("hiiiiiiiiii");

        if (password && email) {
            console.log(formValue);
            setLoading(true);
            dispatch(register({ formValue, navigate }))
            .then(() => {
              setLoading(false);
            })
            .catch((err) => {
              setLoading(false);
              // setError(error);
            });
            // console.log(response.data)
        }
    };

    const onInputChange = (e) => {
        let { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    };

    return (
    <>
    <ToastContainer autoClose={2000} />
    <div className="min-h-screen purple-primary flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-2xl font-bold mt-10 text-white">Create Account</h2>
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
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
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
                SignUp
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Register
