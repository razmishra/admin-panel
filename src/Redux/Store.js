import { configureStore } from "@reduxjs/toolkit";
import GraphData from "./slice/GraphData";

export const Store = configureStore({
  reducer: {
    graphData: GraphData
  },
});
