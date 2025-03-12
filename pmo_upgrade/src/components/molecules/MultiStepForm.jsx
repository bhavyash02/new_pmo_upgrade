import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
// import Button from "@mui/material/Button";

const steps = [
    "Portfolio Details",
    "Program",
    "Program Risk",
    "Resources",
    "Customer",
    "Finance"
];

export default function MultipleStepForm({handleSteps}) {
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        if (activeStep < steps.length - 1 && handleSteps.step === 'next') {
            setActiveStep((prevStep) => prevStep + 1);
        }

        if (activeStep > 0 && handleSteps.step === 'prevOne') {
            setActiveStep((prevStep) => prevStep - 1);
        }
    }, [handleSteps])
    

    return (
        <Box 
            sx={{ 
                width: "100%", 
                // minHeight: "80vh",  // Push content down
                display: "flex", 
                flexDirection: "column"
            }}
        >
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => (
                    <Step key={index}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            {/* Display content based on step */}
            <Box sx={{ mt: 2, textAlign: "center", flexGrow: 1 }}>
                <h3>{steps[activeStep]}</h3>
            </Box>

            {/* Navigation Buttons at the Bottom Right */}
            <Box 
                sx={{ 
                    display: "flex", 
                    justifyContent: "flex-end", 
                    mt: "auto",  // Push to bottom
                    p: 3 
                }}
            >
                {/* <Button disabled={activeStep === 0} onClick={handleBack}>
                    Back
                </Button>
                <Button variant="contained" onClick={handleNext} sx={{ ml: 1 }}>
                    {activeStep === steps.length - 1 ? "Next" : "Next"}
                </Button> */}
            </Box>
        </Box>
    );
}
