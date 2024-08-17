// Components
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function Widget({children, widget}) {
  return (
    <>
      <Card sx={{height: "100%"}}>
        <CardContent>
          <Typography>
            {widget.name}
          </Typography>
          {children}
        </CardContent>
      </Card>
    </>
  );
}
