import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import { Step, Button } from "@mui/material";
import StepLabel from "@mui/material/StepLabel";
import OneProtFolioDetails from "../../pages/PortFolioStatus/OneProtFolioDetails";
import ProgramPage from "../../pages/PortFolioStatus/ProgramPage";

const stepLabels = [
    "Portfolio Details",
    "Program Details",
    "Program Risk",
    "Resources",
    "Customer",
    "Finance",
];

export default function MultipleStepForm({
    setProtfolioStatus,
    protfolioStatus,
    inFlight,
    setInFlight,
    projectsOnTrack,
    setProjectsOnTrack,
    newProjects,
    setNewProjects,
    newProspects,
    setNewProspects,
    newInitiatives,
    setNewInitiatives,
    avbPvbDetails,
    setAvbPvbDetails,
    valueAdds,
    setValueAdds,
    genAITech,
    setGenAITech,
    valueBoardEvaluation,
    setValueBoardEvaluation,
    valueAddsStepper,
    setValueAddsStepper, genAiStepper,
    setGenAiStepper,
    valueAddsDelivered,
    setValueAddsDelivered
}) {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        if (activeStep < stepLabels.length - 1) {
            setActiveStep((prevStep) => prevStep + 1);
        }
    };

    const handleBack = () => {
        if (activeStep > 0) {
            setActiveStep((prevStep) => prevStep - 1);
        }
    };

    const renderStepContent = () => {
        switch (activeStep) {
            case 0:
                return (
                    <OneProtFolioDetails
                        protfolioStatus={protfolioStatus}
                        setProtfolioStatus={setProtfolioStatus}
                    />
                );
            case 1:
                return (
                    <ProgramPage
                        newProspects={newProspects}
                        setNewProspects={setNewProspects}
                        newInitiatives={newInitiatives}
                        setNewInitiatives={setNewInitiatives}
                        avbPvbDetails={avbPvbDetails}
                        setAvbPvbDetails={setAvbPvbDetails}
                        valueAdds={valueAdds}
                        setValueAdds={setValueAdds}
                        genAITech={genAITech}
                        setGenAITech={setGenAITech}
                        valueBoardEvaluation={valueBoardEvaluation}
                        setValueBoardEvaluation={setValueBoardEvaluation}
                        valueAddsStepper={valueAddsStepper}
                        setValueAddsStepper={setValueAddsStepper} genAiStepper={genAiStepper}
                        setGenAiStepper={setGenAiStepper}
                        valueAddsDelivered={valueAddsDelivered}
                        setValueAddsDelivered={setValueAddsDelivered}
                    />
                );
            case 2:
                return <h3>Program Risk</h3>;
            case 3:
                return <h3>Resources</h3>;
            case 4:
                return <h3>Customer</h3>;
            case 5:
                return <h3>Finance</h3>;
            default:
                return <h3>Unknown Step</h3>;
        }
    };

    return (
        <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {stepLabels.map((label, index) => (
                    <Step key={index}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            <Box sx={{ mt: 2, textAlign: "center", flexGrow: 1 }}>
                {renderStepContent()}
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
                <Button
                    onClick={handleBack}
                    disabled={activeStep === 0}
                    variant="outlined"
                >
                    Back
                </Button>

                <Button
                    onClick={handleNext}
                    disabled={
                        (activeStep === 0 && !protfolioStatus) ||
                        (activeStep === 1 &&
                            (!genAITech ||
                                !valueAdds ||
                                !avbPvbDetails ||
                                !valueBoardEvaluation))
                    }
                    variant="contained"
                >
                    {activeStep === stepLabels.length - 1 ? "Finish" : "Next"}
                </Button>
            </Box>
        </Box>
    );
}
