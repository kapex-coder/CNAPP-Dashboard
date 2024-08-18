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
            variant="subtitle1"
            component="h2"
            sx={{paddingBottom: "0.35rem"}}>
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
              <Card sx={{ height: "100%", minHeight: "200px" }}>
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
