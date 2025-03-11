import React, { useState } from "react";
import { Dropdown } from "../../components/molecules";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import NumberStepper from "../../components/molecules/NumberStepper";

export default function OneProtFolioDetails() {


  const dropdowns = ["Ramesh", "Lee", "Tony", "Kinesh"];
  return (
    <>
    {/* <form onSubmit= {e => contactSubmit(e)}> */}
      <Box sx={{ margin: 3, display: "flex", flex: 1 }}>
        <Dropdown placeholder="Protfolio Status" />
        <NumberStepper placeholder="In Flight (EE)" />
        <NumberStepper placeholder="Projects on Track" />
      </Box>
      <Box sx={{ margin: 5, display: "flex", flexWrap: 1 }}>
        <NumberStepper placeholder="New Projects" />
        <NumberStepper placeholder="Projects at High Risk" />
        <NumberStepper placeholder="Ramp Down" />
      </Box>
      <Box sx={{ margin: 5, display: "flex", flexWrap: 1 }}>
        <NumberStepper placeholder="Churn" />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          mt: "auto", // Push to bottom
          p: 3,
        }}
      >
        <Button>
          {/* disabled={activeStep === 0} onClick={handleBack} */}
          Back
        </Button>
        <Button variant="contained" sx={{ ml: 1 }}>
          {/* onClick={handleNext} */}
          {/* {activeStep === steps.length - 1 ? "Next" : "Next"} */}
          Next
        </Button>
      </Box>
      {/* </form> */}
      </>
  );
}
