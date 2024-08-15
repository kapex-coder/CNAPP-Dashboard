// Styles
import "./App.css";

// Components
import Box from "@mui/material/Box";
import Dashboard from "./components/Dashboard";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Box>
        <Navigation />
        <Dashboard />
      </Box>
    </>
  );
}

export default App;
