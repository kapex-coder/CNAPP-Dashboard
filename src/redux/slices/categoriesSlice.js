import { createSlice } from '@reduxjs/toolkit';
import categories from "../../data/categories.json";

const initialState = {
    value: categories
}

export const categoriesSlice = createSlice({
    name: 'cspmWidgetForm',
    initialState,
    reducers: {
        addWidget: (state, action) => {
            const { categoryId, widget } = action.payload;
            const category = state.value.find(cat => cat.id === categoryId);
            if (category) {
                category.widgets.push({id: crypto.randomUUID(), ...widget});
            }
        }
    }
})

export const { } = categoriesSlice.actions

export default categoriesSlice.reducer