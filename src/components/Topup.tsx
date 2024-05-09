import { Typography, Box, Slider, Button } from "@mui/material";
import { useState } from "react";
import { marks } from "../utils/marks";
import CustomSwitch from "./CustomSwitch";
const Topup: React.FC = () => {
  const [sliderAmount, setSliderAmount] = useState<number>(10);
  const [topUp, setTopUp] = useState<boolean>(true);
  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setSliderAmount(typeof newValue === "number" ? newValue : newValue[0]);
  };
  const handleButtonClick = () => {
    console.log(`Credit amount:${sliderAmount}`);
  };
  const handleToggleSwitch = () => {
    setTopUp(!topUp);
  };
  return (
    <Box
      display="flex"
      minWidth="55%"
      minHeight="30vh"
      flexDirection="column"
      borderRadius={8}
      borderColor="#ccc"
      boxShadow={4}
      padding={3}
      gap={3}
    >
      <Box display="flex" flexDirection="column">
        <Box display="flex">
          <Typography variant="h5" fontWeight="bold">
            Setup Auto Top-up
          </Typography>
          <CustomSwitch checked={topUp} onChange={handleToggleSwitch} />
        </Box>
        <Box>
          <Typography variant="subtitle2" color="gray">
            Once the credit goes below a minimum threshold
            <span style={{ color: "#9847FF", fontWeight: "bold" }}> 50 </span>
            ,we will auto-purchase{" "}
            <span style={{ color: "#9847FF", fontWeight: "bold" }}>1200 </span>
            credits and add them to your account.
            <span
              style={{
                fontWeight: "bold",
                color: "GrayText",
                textDecoration: "underline",
              }}
            >
              Learn more
            </span>
          </Typography>
        </Box>
      </Box>
      <Box width={650}>
        <Slider
          sx={{ color: "#9847FF" }}
          value={sliderAmount}
          onChange={handleSliderChange}
          valueLabelDisplay="off"
          shiftStep={5}
          step={5}
          marks={marks.map((mark) => ({
            ...mark,
            label: (
              <Box marginLeft={4} paddingLeft={4}>
                <span>{mark.label[0]}</span>
                <br />
                <span>{mark.label[1]}</span>
              </Box>
            ),
          }))}
          min={5}
          max={30}
        />
      </Box>
      <Box position="relative" top={20}>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#9847FF", textTransform: "none" }}
          onClick={handleButtonClick}
        >
          Confirm auto-purchase
        </Button>
      </Box>
    </Box>
  );
};

export default Topup;
