import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Widget from "../Widget";
import WidgetModal from "../Widget/Modal";

// Icons
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

export default function Category() {
  const dasboardData = useSelector((state) => state.dashboard);

  const [openAddWidgetModal, setAddWidgetModal] = useState(false);
  const [addWidgetDrawer, setAddWidgetDrawer] = useState(false);

  const handleAddWidgetModalOpen = () => setAddWidgetModal(true);

  const handleAddWidgetDrawerOpen = () => {
    setAddWidgetDrawer(true);
  };

  const handleAddWidgetDrawerClose = () => {
    setAddWidgetDrawer(false);
  };

  //   Debug code need to remove this
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

      <WidgetModal
        open={openAddWidgetModal}
        setAddWidgetModal={setAddWidgetModal}
      />
    </>
  );
}
