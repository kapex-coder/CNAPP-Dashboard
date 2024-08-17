import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from "./slices/categoriesSlice";
import widgetFormSlice from "./slices/widgetFormSlice";

export default configureStore({
  reducer: {
    categories: categoriesSlice,
    widgetForm: widgetFormSlice
  }
})