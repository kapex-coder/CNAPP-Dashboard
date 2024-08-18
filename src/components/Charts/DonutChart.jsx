import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

const size = {
  height: 150,
};

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: "1rem",
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

const defaultChartData = [
  { value: 2, label: "Connected (2)" },
  { value: 2, label: "Not Connected (2)" },
];

export default function DonutChart({ data = defaultChartData }) {
  const totalDataValue = data.reduce((accu, currentValue) => {
    return accu + currentValue.value;
  }, 0);

  return (
    <PieChart
      series={[
        { data, innerRadius: 50, outerRadius: 70, startAngle: -180, endAngle: 360, cx: 70 },
      ]}
      sx={{ justifyContent: "space-between" }}
      height={200}>
      <PieCenterLabel>
        {totalDataValue} Total
      </PieCenterLabel>
    </PieChart>
  );
}
