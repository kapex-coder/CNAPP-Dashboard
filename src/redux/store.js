import { configureStore } from '@reduxjs/toolkit'
import dashboardSlice from "./slices/dashboardSlice";
import cspmFormSlice from "./slices/cspmFormSlice";

export default configureStore({
  reducer: {
    dashboard: dashboardSlice,
    cspmForm: cspmFormSlice
  }
})