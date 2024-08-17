import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Widget from "./Widget";
import CspmPieChart from "./Charts/CspmPieChart";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import {
  Box,
  Button,
  Card,
  CardContent,
  Drawer,
  Grid,
  Typography,
} from "@mui/material";

export default function DashboardCategory() {
  const dasboardData = useSelector((state) => state.dashboard);

  const [addWidgetDrawer, setAddWidgetDrawer] = useState(false);

  const handleAddWidgetDrawerOpen = () => {
    setAddWidgetDrawer(true);
  };

  const handleAddWidgetDrawerClose = () => {
    setAddWidgetDrawer(false);
  };

  //   Debug code need to remove this
  console.log("dasboardData ---> ", dasboardData);

  return (
    <Box sx={{padding: "1rem 0"}}>
      {dasboardData.map((category) => {
        return (
          <React.Fragment key={category.id}>
            <Typography
              variant="subtitle2"
              component="h2">
              {category.title}
            </Typography>
            <Grid
              container
              spacing={{ xs: 1, md: 2 }}>
              {category.widgets.map((widget) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={widget.id}>
                  <Widget widget={widget}>
                    <CspmPieChart />
                  </Widget>
                </Grid>
              ))}
              <Grid
                item
                xs={12}
                sm={6}
                md={4}>
                <Card sx={{ height: "100%" }}>
                  <CardContent
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                    }}>
                    <Button
                      variant="outlined"
                      startIcon={<AddOutlinedIcon />}
                      onClick={handleAddWidgetDrawerOpen}>
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
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </React.Fragment>
        );
      })}
    </Box>
  );
}
