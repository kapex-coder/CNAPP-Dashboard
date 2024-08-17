import DashboardCategory from "./DashboardCategory";

import { Container } from "@mui/material";
import DashboardOptions from "./DashboardOptions";

export default function Dashboard() {
  return (
    <Container
      maxWidth="xl"
      sx={{ padding: "1rem 0" }}>
      <DashboardOptions />
      <DashboardCategory />
    </Container>
  );
}
