import React from "react";
import { Dropdown } from "../../components/molecules";
import { Box, Button, Stack } from "@mui/material";
import NumberStepper from "../../components/molecules/NumberStepper";

export default function OneProtFolioDetails({
  protfolioStatus,
  setProtfolioStatus,
}) {
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
      <Box sx={{ flex: 1, width: "100%" }}>
        <Stack
          direction="row"
          spacing={3}
          justifyContent="space-between"
          alignItems="flex-start"
          padding="20px"
        >
          <Dropdown
            input={dropdowns}
            placeholder="Portfolio Status*"
            selectedValues={protfolioStatus}
            handleOnSelect={(event, newValue) => setProtfolioStatus(newValue)}
          />
          <NumberStepper placeholder="In Flight (EE)" />
          <NumberStepper placeholder="Projects on Track" />
        </Stack>
      </Box>
      <Box sx={{ width: "100%", flexWrap: 1 }}>
        <Stack
          direction="row"
          spacing={3}
          justifyContent="space-between"
          alignItems="flex-start"
          padding="20px"
        >
          <NumberStepper placeholder="New Projects" />
          <NumberStepper placeholder="Projects at High Risk" />
          <NumberStepper placeholder="Ramp Down" />
        </Stack>
      </Box>
      <Box sx={{ width: "100%", flexWrap: 1 }}>
        <Stack
          direction="row"
          spacing={3}
          justifyContent="space-between"
          alignItems="flex-start"
          padding="20px"
        >
          <NumberStepper placeholder="Churn" />
        </Stack>
      </Box>
    </>
  );
}
