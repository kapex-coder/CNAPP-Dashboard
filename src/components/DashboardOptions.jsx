import { useState } from "react";

import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import LoopOutlinedIcon from "@mui/icons-material/LoopOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import {
  Box,
  Button,
  Drawer,
  FormControl,
  IconButton,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";

function DashboardOptions() {
  const [days, setDays] = useState(2);
  const [addWidgetDrawer, setAddWidgetDrawer] = useState(false);

  const handleDaysChange = (event) => {
    setDays(event.target.value);
  };

  const handleAddWidgetDrawerOpen = () => {
    setAddWidgetDrawer(true);
  };

  const handleAddWidgetDrawerClose = () => {
    setAddWidgetDrawer(false);
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 0",
      }}>
      <Typography
        variant="subtitle1"
        component="h1">
        CNAPP Dashboard
      </Typography>
      <Stack
        spacing={2}
        direction="row">
        <Button
          variant="outlined"
          size="small"
          onClick={handleAddWidgetDrawerOpen}
          endIcon={<AddOutlinedIcon />}>
          Add widget
        </Button>
        <Drawer
          anchor="right"
          open={addWidgetDrawer}
          onClose={handleAddWidgetDrawerClose}>
          <Typography
            variant="h6"
            gutterBottom>
            Add widget
          </Typography>
        </Drawer>
        <IconButton
          sx={{
            border: "1px solid rgba(0, 0, 0, 0.3)",
            borderRadius: "6px",
            paddingLeft: "6px",
            paddingRight: "6px",
          }}
          size="small"
          aria-label="refresh">
          <LoopOutlinedIcon fontSize="inherit" />
        </IconButton>
        <IconButton
          size="small"
          sx={{
            border: "1px solid rgba(0, 0, 0, 0.3)",
            borderRadius: "6px",
            paddingLeft: "6px",
            paddingRight: "6px",
          }}
          aria-label="list menu">
          <MoreVertOutlinedIcon fontSize="inherit" />
        </IconButton>
        <FormControl sx={{ m: 1, minWidth: 150 }}>
          <Select
            value={days}
            onChange={handleDaysChange}
            displayEmpty
            size="small"
            sx={{ fontSize: "0.875rem" }}
            inputProps={{ "aria-label": "Days Filter" }}>
            <MenuItem value={2}>Last 2 days</MenuItem>
            <MenuItem value={7}>Last 7 days</MenuItem>
            <MenuItem value={30}>Last 30 days</MenuItem>
            <MenuItem value={60}>Last 60 days</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </Box>
  );
}

export default DashboardOptions;
