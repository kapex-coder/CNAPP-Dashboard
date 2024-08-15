import React from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Widget from "../Widget";

// Icons
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

export default function Category() {
  const dasboardData = useSelector((state) => state.dashboard);

  console.log("dasboardData ---> ", dasboardData);

  return (
    <>
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
                  <Widget widget={widget} />
                </Grid>
              ))}
              <Grid
                item
                xs={12}
                sm={6}
                md={4}>
                <Card>
                  <CardContent sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Button
                      variant="outlined"
                      startIcon={<AddOutlinedIcon />}>
                      Add widget
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </React.Fragment>
        );
      })}
    </>
  );
}
