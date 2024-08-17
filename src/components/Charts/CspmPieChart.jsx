import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";

const size = {
  height: 150,
};

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 20,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText
      x={left + width / 2}
      y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function PieChartWithCenterLabel() {
  const data = [
    { value: 2, label: "Connected (2)" },
    { value: 2, label: "Not Connected (2)" },
    { value: 0, label: "Failed (2)" },
    { value: 0, label: "Warning (2)" },
    { value: 0, label: "Not available (2)" },
    { value: 0, label: "Passed (2)" },
  ];
  
  return (
    <PieChart
      series={[{ data, innerRadius: 65, startAngle: -180, endAngle: 360, cx: 100 }]}
      sx={{ justifyContent: "space-between" }}
      height={200}
      >
      <PieCenterLabel>Center label</PieCenterLabel>
    </PieChart>
  );
}
