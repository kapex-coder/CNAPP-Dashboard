import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Tab, Tabs } from "@mui/material";
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

export default function BasicTabs() {
  const [value, setValue] = useState(0);
  const categoriesData = useSelector((state) => state.categories.value);
  const [categories, setCategories] = useState(categoriesData);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
      {categories.map((category) => {})}
      <CustomTabPanel
        value={value}
        index={0}>
        Item One
      </CustomTabPanel>
      <CustomTabPanel
        value={value}
        index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel
        value={value}
        index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}
