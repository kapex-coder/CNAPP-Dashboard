import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { updateCategories } from "../../redux/slices/categoriesSlice";
import {
  Box,
  Button,
  Checkbox,
  Stack,
  Tab,
  Tabs,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import { useSelector } from "react-redux";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function CategoryTabs({ handleClose }) {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const categoriesData = useSelector((state) => state.categories.value);
  const [categories, setCategories] = useState(categoriesData);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSubmit = () => {
    dispatch(updateCategories({ categories }));
    handleClose();
  }

  const updateWidgetIsActive = ({ category, widgetId }) => {
    const updatedWidgets = category.widgets.map((widget) => {
      if (widget.id === widgetId) {
        return { ...widget, isActive: !widget.isActive };
      }
      return widget;
    });
    const updatedCategory = { ...category, widgets: updatedWidgets };
    const updatedCategories = categories.map((cat) =>
      cat.id === category.id ? updatedCategory : cat
    );
    setCategories(updatedCategories);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example">
          {categories.map((category) => (
            <Tab
              label={category.category}
              key={category.id}
              {...a11yProps(0)}
            />
          ))}
        </Tabs>
      </Box>
      {categories.map((category, index) => {
        return category.widgets.map((widget) => (
          <CustomTabPanel
            key={widget.id}
            value={value}
            index={index}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={widget.isActive}
                    onChange={() =>
                      updateWidgetIsActive({ category, widgetId: widget.id })
                    }
                  />
                }
                label={widget.name}
              />
            </FormGroup>
          </CustomTabPanel>
        ));
      })}
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
        <Button
          type="submit"
          variant="contained"
          onClick={handleSubmit}>
          Add Widget
        </Button>
      </Stack>
    </Box>
  );
}
