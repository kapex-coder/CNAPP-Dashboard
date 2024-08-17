import { useState } from "react";
import { useDispatch } from "react-redux";
import { resetWidgetFormState } from "../../redux/slices/widgetFormSlice";

import { Box, Button, Drawer, Typography } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { styled } from "@mui/material/styles";

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    minWidth: "400px",
  },
}));

function AddWidgetDrawer({ children }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    dispatch(resetWidgetFormState())
    setOpen(false);
  };
  return (
    <>
      <Button
        variant="outlined"
        startIcon={<AddOutlinedIcon />}
        onClick={handleOpen}>
        Add widget
      </Button>
      <StyledDrawer
        anchor="right"
        open={open}
        onClose={handleClose}
        sx={{ minWidth: "500px" }}>
        <Box
          sx={{
            padding: "0.25rem 1rem",
            backgroundColor: "#1a237e",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
          }}>
          <Typography
            variant="h6"
            sx={{ margin: "0" }}
            gutterBottom>
            Add widget
          </Typography>
          <CloseOutlinedIcon onClick={handleClose} />
        </Box>
        {children}
      </StyledDrawer>
    </>
  );
}

export default AddWidgetDrawer;
