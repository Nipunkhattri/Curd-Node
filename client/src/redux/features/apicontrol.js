import {createSlice , createAsyncThunk}  from "@reduxjs/toolkit"
import * as api from "../api";
import { toast } from "react-toastify";
// import NotificationBox from "../../components/NotificationBox.js";

export const Getdata = createAsyncThunk(
    'data/Getdata',
    async ({navigate },{rejectWithValue}) => {
      try { 
        // console.log(formValue)
        const response = await api.getdata();
        console.log(response)
        // toast.success("Registered successfully");
        // // <NotificationBox message="Success message" type="success" />
        // navigate("/question");
        return response.data;
      } catch (err) {
        toast.error(err.response.data.message)
        return rejectWithValue(err.response.data);
      }
    }
);

export const deletedata = createAsyncThunk(
    'data/deletedata',
    async ({email,navigate},{rejectWithValue}) => {
      try { 
        console.log(email);
        const response = await api.deletecontact(email);
        console.log(response)
        toast.success("deleted successfully");
        // // <NotificationBox message="Success message" type="success" />
        navigate("/");
        return response.data;
      } catch (err) {
        toast.error(err.response.data.message)
        return rejectWithValue(err.response.data);
      }
    }
);

export const postdata = createAsyncThunk(
    'data/postdata',
    async ({values,navigate},{rejectWithValue}) => {
      try { 
        console.log(values);
        const response = await api.postcontact(values);
        console.log(response)
        toast.success("Posted successfully");
        // // <NotificationBox message="Success message" type="success" />
        navigate("/");
        return response.data;
      } catch (err) {
        toast.error(err.response.data.message)
        return rejectWithValue(err.response.data);
      }
    }
);

export const updatedata = createAsyncThunk(
    'data/updatedata',
    async ({values,email,navigate},{rejectWithValue}) => {
        console.log(values);
      try { 
        console.log(values);
        const response = await api.updatecontact(values,email);
        console.log(response)
        toast.success("updated successfully");
        // // <NotificationBox message="Success message" type="success" />
        navigate("/");
        return response.data;
      } catch (err) {
        toast.error(err.response.data.message)
        return rejectWithValue(err.response.data);
      }
    }
);

const persistedState = localStorage.getItem('data')
  ?  JSON.parse(localStorage.getItem('data')) : null;

const dataSlice = createSlice({
    name:"data",
    initialState:{
      data:persistedState,
      error:"",
      loading:false
    },
    reducers:{
      setdata: (state, action) => {
        state.data = action.payload;
      }
    },
    extraReducers:{
      [Getdata.pending]: (state, action) => {
        state.loading = true;
      },
      [Getdata.fulfilled]: (state, action) => {
        state.loading = false;
        localStorage.setItem("data", JSON.stringify([ ...action.payload ]));
        state.data = action.payload;
      },
      [Getdata.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      }
    }
});

export const { setdata } = dataSlice.actions;

export default dataSlice.reducer;
