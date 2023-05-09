import {createSlice , createAsyncThunk}  from "@reduxjs/toolkit"
import * as api from "../api";
import { toast } from "react-toastify";
// import NotificationBox from "../../components/NotificationBox.js";
// import { error } from "react-toastify-redux";

export const register = createAsyncThunk(
    'auth/register',
    async ({formValue, navigate },{rejectWithValue}) => {
      try { 
        console.log(formValue)
        const response = await api.signUp(formValue);
        console.log(response)
        toast.success("Registered successfully");
        // <NotificationBox message="Success message" type="success" />
        navigate("/");
        return response.data;
      } catch (err) {
        // toast.error("Something Wrong");
        toast.error(err.response.data.message)
        return rejectWithValue(err.response.data);
      }
    }
);

export const login = createAsyncThunk(
    'auth/login',
    async ({formlogin, navigate },{rejectWithValue}) => {
      try { 
        console.log(formlogin)
        const response = await api.login(formlogin);
        console.log(response);
        console.log("Login successfully");
        if(response){
          toast.success("Login successfully");
          navigate("/");
          return response.data;
        }
      } catch (err) {
        toast.error("Invalid Credaintials");
        // navigate("/Login")
        return rejectWithValue(err.response.data);
      }
    }
);
const persistedState = localStorage.getItem('profile')
  ?  JSON.parse(localStorage.getItem('profile')) : null;

const authSlice = createSlice({
    name:"auth",
    initialState:{
      user:persistedState,
      error:"",
      loading:false
    },
    reducers:{
      setUser: (state, action) => {
        state.user = action.payload;
      },
      setLogout: (state, action) => {
        localStorage.clear();
        state.user = null;
      },
    },
    extraReducers:{
      [register.pending]: (state, action) => {
        state.loading = true;
      },
      [register.fulfilled]: (state, action) => {
        state.loading = false;
        localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
        state.user = action.payload;
      },
      [register.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      },
      [login.pending]: (state, action) => {
        state.loading = true;
      },
      [login.fulfilled]: (state, action) => {
        state.loading = false;
        localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
        state.user = action.payload;
      },
      [login.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      },
    }
});

export const { setUser, setLogout } = authSlice.actions;

export default authSlice.reducer;
