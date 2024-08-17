import { createSlice } from '@reduxjs/toolkit';

export const cspmFormSlice = createSlice({
  name: 'cspmWidgetForm',
  initialState: [],
  reducers: {
    increment: state => {
      state.value += 1
    }
  }
})

export const { increment } = cspmFormSlice.actions

export default cspmFormSlice.reducer