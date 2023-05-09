import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./features/apicontrol.js";
// import {toastsReducer as toasts} from 'react-toasify-redux';

export default configureStore({
  reducer: {
    data : dataReducer
  },
});
