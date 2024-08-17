// Components
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CspmPieChart from "../../Charts/CspmPieChart";

export default function Widget({widget}) {
  return (
    <>
      <Card sx={{height: "100%"}}>
        <CardContent>
          <Typography>
            {widget.title}
          </Typography>
          <CspmPieChart />
        </CardContent>
      </Card>
    </>
  );
}
