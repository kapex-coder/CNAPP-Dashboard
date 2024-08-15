import { createSlice } from '@reduxjs/toolkit';
import initialState from "../../data/dashboard.json";

export const dashboardSlice = createSlice({
  name: 'widgets',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

export const { increment, incrementByAmount } = dashboardSlice.actions

export default dashboardSlice.reducer