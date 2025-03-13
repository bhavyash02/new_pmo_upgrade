import React from "react";
import { Dropdown } from "../../components/molecules";
import { Box, Button } from "@mui/material";
import NumberStepper from "../../components/molecules/NumberStepper";

export default function OneProtFolioDetails({ protfolioStatus, setProtfolioStatus }) {
  const dropdowns = ["Ramesh", "Lee", "Tony", "Kinesh"];

  // const handleNext = () => {
  //   if (!protfolioStatus) {
  //     alert("Please select a Portfolio Status before proceeding.");
  //   } else {
  //     nextStep({ step: "next" }); // Update step
  //   }
  // };

  return (
    <>
      <Box sx={{ margin: 3, display: "flex", flex: 1 }}>
        <Dropdown
          input={dropdowns}
          placeholder="Portfolio Status*"
          selectedValues={protfolioStatus}
          handleOnSelect={(event, newValue) => setProtfolioStatus(newValue)}
        />
        <NumberStepper placeholder="In Flight (EE)" />
        <NumberStepper placeholder="Projects on Track" />
      </Box>
      <Box sx={{ margin: 3, display: "flex", flexWrap: 1 }}>
        <NumberStepper placeholder="New Projects" />
        <NumberStepper placeholder="Projects at High Risk" />
        <NumberStepper placeholder="Ramp Down" />
      </Box>
      <Box sx={{ margin: 3, display: "flex", flexWrap: 1 }}>
        <NumberStepper placeholder="Churn" />
      </Box>
    </>
  );
}
