import { useState } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
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

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`categories-tabpanel-${index}`}
      aria-labelledby={`categories-tab-${index}`}
      {...other}>
      {value === index && <Box sx={{ marginBottom: "0.6rem" }}>{children}</Box>}
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
    id: `categories-tab-${index}`,
    "aria-controls": `categories-tabpanel-${index}`,
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
  };

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
    <Box
      sx={{
        width: "100%",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
      }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="categories tabs">
          {categories.map((category) => (
            <Tab
              label={category.category}
              key={category.id}
              {...a11yProps(0)}
            />
          ))}
        </Tabs>
      </Box>
      <Box sx={{padding: "1rem"}}>
        {categories.map((category, index) => {
          return category.widgets.map((widget) => (
            <CustomTabPanel
              key={widget.id}
              value={value}
              index={index}>
              <FormGroup
                sx={{
                  padding: "0.25rem 0.5rem",
                  border: "1px solid rgba(0, 0, 0, 0.4)",
                  borderRadius: "0.25rem",
                }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{ padding: "0 0.5rem" }}
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
      </Box>
      <Stack
        direction="row"
        gap={1}
        justifyContent="end"
        sx={{ marginTop: "auto" }}>
        <Button
          variant="outlined"
          onClick={handleClose}>
          Cancel
        </Button>
        <Button
          type="submit"
          variant="contained"
          onClick={handleSubmit}>
          Submit
        </Button>
      </Stack>
    </Box>
  );
}
