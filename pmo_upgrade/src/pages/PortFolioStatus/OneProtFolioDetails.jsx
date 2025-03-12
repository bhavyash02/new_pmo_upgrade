import React, { useState } from "react";
import { Dropdown } from "../../components/molecules";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import NumberStepper from "../../components/molecules/NumberStepper";

export default function OneProtFolioDetails({nextStep}) {
  const dropdowns = ["Ramesh", "Lee", "Tony", "Kinesh"];
  const [protfolioStatus, setProtfolioStatus] = useState("");

  // const [inFlight, setInFlight] = useState("");
  // const [projectsOnTrack, setProjectsOnTrack] = useState("");
  // const [newProjects, setNewProjects] = useState("");
  // const [highRisk, setHighRisk] = useState({});
  // const [rampDown, setRampDown] = useState("");
  // const [churn, setChurn] = useState("");

  // console.log(inFlight, 'inFlight')
  // this.props.onActiveNext(false);

  const handleNext = () => {
    if(!protfolioStatus) {
      alert('1')
    } else { 
      alert('2')
      handleClick();
    }
    
  }

  function handleClick() {
    nextStep({value: true, step: 'next'});
  }
  return (
    <>
      <Box sx={{ margin: 3, display: "flex", flex: 1 }}>
        <Dropdown
          input={dropdowns}
          placeholder="Protfolio Status"
          selectedValues={protfolioStatus}
          handleOnSelect={(event, newValue) => {
            setProtfolioStatus(newValue);
            console.log(newValue, "123");
          }}
        />
        <NumberStepper
          placeholder="In Flight (EE)"
        />
        <NumberStepper
          placeholder="Projects on Track"
        />
      </Box>
      <Box sx={{ margin: 3, display: "flex", flexWrap: 1 }}>
        <NumberStepper
          placeholder="New Projects"
        />
        <NumberStepper
          placeholder="Projects at High Risk"
        />
        <NumberStepper placeholder="Ramp Down" />
      </Box>
      <Box sx={{ margin: 3, display: "flex", flexWrap: 1 }}>
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
        <Button variant="contained" sx={{ ml: 1 }} type="submit" onClick={handleNext}>
          Next
        </Button>
      </Box>
     </>
  );
}
