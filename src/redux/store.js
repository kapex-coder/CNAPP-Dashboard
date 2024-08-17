import { configureStore } from '@reduxjs/toolkit'
import dashboardSlice from "./slices/dashboardSlice";
import cspmFormSlice from "./slices/cspmFormSlice";
import categoriesSlice from "./slices/categoriesSlice";

export default configureStore({
  reducer: {
    dashboard: dashboardSlice,
    cspmForm: cspmFormSlice,
    categories: categoriesSlice
  }
})