import { useState } from "react";

// Components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import DashboardCategory from "./Category";
import Drawer from "@mui/material/Drawer";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// Icons
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import LoopOutlinedIcon from "@mui/icons-material/LoopOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";

export default function Dashboard() {
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
    <>
      <Box sx={{ padding: "0.5rem 1rem" }}>
        <Container maxWidth={false}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
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
                }}
                aria-label="refresh">
                <LoopOutlinedIcon fontSize="inherit" />
              </IconButton>
              <IconButton
                sx={{
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  borderRadius: "6px",
                }}
                aria-label="list menu">
                <MoreVertOutlinedIcon fontSize="inherit" />
              </IconButton>
              <FormControl sx={{ m: 1, minWidth: 150 }}>
                <Select
                  value={days}
                  onChange={handleDaysChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Days Filter" }}>
                  <MenuItem value={2}>Last 2 days</MenuItem>
                  <MenuItem value={7}>Last 7 days</MenuItem>
                  <MenuItem value={30}>Last 30 days</MenuItem>
                  <MenuItem value={60}>Last 60 days</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Box>
          <DashboardCategory />
        </Container>
      </Box>
    </>
  );
}
