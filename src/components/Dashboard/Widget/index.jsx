// Components
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function Widget({widget}) {
  return (
    <>
      <Card>
        <CardContent>
          <Typography>
            {widget.title}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
