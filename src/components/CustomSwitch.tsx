import { styled } from "@mui/material/styles";
import { Switch } from "@mui/material";
const CustomSwitch = styled(Switch)(({ theme }) => ({
  width: 58,
  padding: 8,
  "& .MuiSwitch-thumb": {
    width: 20,
    height: 20,
    backgroundColor: "white",
  },
  "& .MuiSwitch-track": {
    borderRadius: 22,
    backgroundColor: "gray",
  },
  "& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
    backgroundColor: "#05CD29",
  },
}));
export default CustomSwitch;
