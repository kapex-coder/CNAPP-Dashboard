import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addChartFields,
  updatedFieldValue,
  updateChartField,
} from "../../redux/slices/widgetFormSlice";
import { addWidget } from "../../redux/slices/categoriesSlice";
import {
  Box,
  Button,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

function AddWidgetForm({categoryId, handleClose}) {
  const widgetFormData = useSelector((state) => state.widgetForm.value);
  const dispatch = useDispatch();

  const handleInputChange = (item) => {
    dispatch(updatedFieldValue(item));
  };

  const handleChartFieldInputChange = (item) => {
    dispatch(updateChartField(item));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addWidget({categoryId, widget: widgetFormData }));
    handleClose();
  }

  return (
    <Box
      component="form"
      sx={{ padding: "1rem", flexGrow: 1 }}
      onSubmit={handleFormSubmit}
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
          value={widgetFormData.name}
          onChange={(e) =>
            handleInputChange({ key: "name", value: e.target.value })
          }
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
                onChange={(e) => handleChartFieldInputChange({chartFieldId: field.id, key: "label", value: e.target.value})}
              />
              <TextField
                sx={{ width: "100%" }}
                size="small"
                placeholder="Enter value..."
                variant="outlined"
                onChange={(e) => handleChartFieldInputChange({chartFieldId: field.id, key: "value", value: parseInt(e.target.value)})}
              />
              <TextField
                type="color"
                sx={{ width: "6rem" }}
                size="small"
                variant="outlined"
                onChange={(e) => handleChartFieldInputChange({chartFieldId: field.id, key: "color", value: e.target.value})}
              />
            </Stack>
          ))}
        <Button
          variant="contained"
          onClick={() => dispatch(addChartFields())}>
          Add Chart Fields
        </Button>
      </Box>
      <Stack
        direction="row"
        gap={1}
        justifyContent="end"
        sx={{ marginTop: "auto" }}>
        <Button
          variant="contained"
          onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit" variant="contained">Add Widget</Button>
      </Stack>
    </Box>
  );
}

export default AddWidgetForm;
