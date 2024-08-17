// Styles
import "./App.css";

// Components
import Box from "@mui/material/Box";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Box>
        <Header />
        <Dashboard />
      </Box>
    </>
  );
}

export default App;
