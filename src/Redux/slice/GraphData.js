import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGraphData = createAsyncThunk(
  "fetchGraphData",
  async (timePeriod) => {
    // const options = {
    //   method: "GET",
    //   url: process.env.REACT_APP_URL,
    //   params: {
    //     referenceCurrencyUuid: process.env.REACT_APP_referenceCurrencyUui,
    //     timePeriod: timePeriod,
    //   },
    //   headers: {
    //     "X-RapidAPI-Key": process.env.REACT_APP_APIKEY,
    //     "X-RapidAPI-Host": process.env.REACT_APP_HOST,
    //   },
    // };
    // const response = await axios.request(options);
    // return response.data;
    // const response = await fetch("http://localhost:3001/",{
    //     method:"GET",
    //     headers:{
    //         'Content-type':'application/json'
    //     },
    //     body:{
    //         timePeriod:timePeriod
    //     }
    // })
    const response = await axios.get("http://localhost:3001", {
      params: {
        timePeriod: timePeriod,
      },
    });

    console.log("aa gya", response);
    return response.data;
  }
);

const GraphData = createSlice({
  name: "GraphData",
  initialState: {
    data: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGraphData.pending, (state, action) => {
      state.data = null;
    });
    builder.addCase(fetchGraphData.fulfilled, (state, action) => {
      // console.log(action.payload)
      state.data = action.payload;
    });
    builder.addCase(fetchGraphData.rejected, (state, action) => {
      state.data = null;
    });
  },
});

export default GraphData.reducer;
