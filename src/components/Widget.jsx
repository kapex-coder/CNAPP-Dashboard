import { useDispatch } from "react-redux";
import { removeWidget } from "../redux/slices/categoriesSlice";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Stack, Typography, IconButton } from "@mui/material";

export default function Widget({ children, widget, categoryId }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeWidget({ categoryId, widgetId: widget.id }));
  };
  return (
    <>
      <Card sx={{ height: "100%" }}>
        <CardContent>
          <Stack
            direction="row"
            sx={{ justifyContent: "space-between", alignItems: "center" }}>
            <Typography>{widget.name}</Typography>
            <IconButton size="small" onClick={handleRemove}>
              <CloseOutlinedIcon  />
            </IconButton>
          </Stack>
          {children}
        </CardContent>
      </Card>
    </>
  );
}
