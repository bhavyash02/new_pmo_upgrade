import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";

const steps = [
    "Portfolio Details",
    "Program",
    "Program Risk",
    "Resources",
    "Customer",
    "Finance"
];

export default function HorizontalLinearAlternativeLabelStepper() {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        if (activeStep < steps.length - 1) {
            setActiveStep((prevStep) => prevStep + 1);
        }
    };

    const handleBack = () => {
        if (activeStep > 0) {
            setActiveStep((prevStep) => prevStep - 1);
        }
    };

    return (
        <Box sx={{ width: "100%" }}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => (
                    <Step key={index}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            {/* Display content based on step */}
            <Box sx={{ mt: 2, textAlign: "center" }}>
                <h3>{steps[activeStep]}</h3>
            </Box>

            {/* Navigation Buttons */}
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <Button disabled={activeStep === 0} onClick={handleBack}>
                    Back
                </Button>
                <Button variant="contained" onClick={handleNext} sx={{ ml: 1 }}>
                    {activeStep === steps.length - 1 ? "Next" : "Next"}
                </Button>
            </Box>
        </Box>
    );
}
