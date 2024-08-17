import { createSlice } from '@reduxjs/toolkit';
import categories from "../../data/categories.json";

const initialState = {
    categories
}

export const categoriesSlice = createSlice({
    name: 'cspmWidgetForm',
    initialState,
    reducers: {}
})

export const { } = categoriesSlice.actions

export default categoriesSlice.reducer