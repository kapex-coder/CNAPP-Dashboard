import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Widget from "./Widget";
import DonutChart from "./Charts/DonutChart";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import AddWidgetDrawer from "./Drawers/AddWidgetDrawer";

export default function DashboardCategory({ category = null }) {
  return (
    <Box sx={{ padding: "1rem 0" }}>
      {category && (
        <>
          <Typography
            variant="subtitle2"
            component="h2">
            {category.name}
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
                <Widget categoryId={category.id} widget={widget}>
                  <DonutChart data={widget.chartData} />
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
                  <AddWidgetDrawer categoryId={category.id} />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </>
      )}
    </Box>
  );
}
