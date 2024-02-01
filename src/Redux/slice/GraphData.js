import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGraphData = createAsyncThunk(
  "fetchGraphData",
  async (timePeriod) => {
    const response = await axios.get("https://admin-backend-xcub.onrender.com/", {
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
