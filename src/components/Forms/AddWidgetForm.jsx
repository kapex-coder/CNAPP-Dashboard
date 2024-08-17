import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addChartFields, updatedFieldValue, resetWidgetFormState } from "../../redux/slices/widgetFormSlice";
import {
  Box,
  Button,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

function AddWidgetForm() {
  const widgetFormData = useSelector((state) => state.widgetForm.value);
  const dispatch = useDispatch();

  const handleInputChange = (item) => {
    dispatch(updatedFieldValue(item))
  }

  console.log("widgetForm ---> ", widgetFormData);

  return (
    <Box
      component="form"
      sx={{ padding: "1rem", flexGrow: 1 }}
      noValidate
      autoComplete="off">
      <Box>
        <InputLabel htmlFor="name">Name:</InputLabel>
        <TextField
          id="name"
          sx={{ width: "100%" }}
          size="small"
          placeholder="Enter the widget name..."
          variant="outlined"
          onChange={(e) => handleInputChange({ key: "lastName", value: e.target.value})}
        />
      </Box>
      <Box>
        <Typography>Chart Data:</Typography>
        {widgetFormData.chartData &&
          widgetFormData.chartData.map((field) => (
            <Stack
            key={field.id}
              direction="row"
              gap={1}>
              <TextField
                sx={{ width: "100%" }}
                size="small"
                placeholder="Enter label..."
                variant="outlined"
              />
              <TextField
                sx={{ width: "100%" }}
                size="small"
                placeholder="Enter value..."
                variant="outlined"
              />
              <TextField
                type="color"
                sx={{ width: "6rem" }}
                size="small"
                variant="outlined"
              />
            </Stack>
          ))}
        <Button variant="contained" onClick={() => dispatch(addChartFields())}>Add Chart Fields</Button>
      </Box>
      <Stack
        direction="row"
        gap={1}
        justifyContent="end"
        sx={{ marginTop: "auto" }}>
        <Button variant="contained" onClick={() => dispatch(resetWidgetFormState())}>Cancel</Button>
        <Button variant="contained">Confirm</Button>
      </Stack>
    </Box>
  );
}

export default AddWidgetForm;
