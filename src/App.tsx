import "./App.css";
import { Box } from "@mui/material";
import Topup from "./components/Topup";
function App() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Topup />
    </Box>
  );
}

export default App;
