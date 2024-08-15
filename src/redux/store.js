import { configureStore } from '@reduxjs/toolkit'
import dashboardSlice from "./slices/dashboardSlice";

export default configureStore({
  reducer: {
    dashboard: dashboardSlice
  }
})