import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        id: crypto.randomUUID(),
        name: "",
        lastName: "",
        chartData: []
    }
}

const getChartFields = () => ({
    id: crypto.randomUUID(),
    label: "",
    value: "",
    color: ""
})

export const widgetFormSlice = createSlice({
    name: "addWidgetForm",
    initialState,
    reducers: {
        addChartFields: (state) => {
            state.value.chartData.push(getChartFields());
        },
        updatedFieldValue: (state, action) => {
            const {key, value} = action.payload;
            state.value[key] = value;
        },
        resetWidgetFormState: (state) => {
            state.value = initialState.value;
        },
        updateChartField: (state, action) => {
            const {chartFieldId, key, value} = action.payload;
            const chartData = state.value.chartData.map((field) => {
                if (field.id === chartFieldId) {
                    return {...field, [key]: value };
                }
                return field;
            });
            state.value.chartData = chartData;
        }
    },
});

export const { addChartFields, updatedFieldValue, resetWidgetFormState } = widgetFormSlice.actions;

export default widgetFormSlice.reducer;