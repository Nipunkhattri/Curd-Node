import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/authSlice";
import dataReducer from "./features/apicontrol.js";
// import {toastsReducer as toasts} from 'react-toasify-redux';

export default configureStore({
  reducer: {
    data : dataReducer,
    auth: AuthReducer,
  },
});
