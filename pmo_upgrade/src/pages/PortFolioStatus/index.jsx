import React, { useState, useEffect } from "react";
import Dropdown from "../../components/molecules/Dropdown";
import MultipleStepForm from "../../components/molecules/MultiStepForm";
import { Box, Typography } from "@mui/material";

function PortFolioStatus() {
    const [buHead, setBuHead] = useState("");
    const [engagementDirector, setEngagementDirector] = useState("");
    const [deliveryDirector, setDeliveryDirector] = useState("");
    const [deliveryManager, setDeliveryManager] = useState("");
    // section One
    const [protfolioStatus, setProtfolioStatus] = useState(null);
    const [inFlight, setInFlight] = useState(null);
    const [projectsOnTrack, setProjectsOnTrack] = useState(null);
    const [newProjects, setNewProjects] = useState(null);
    const [projectAtRisk, setProjectAtRisk] = useState(null);
    const [rampDown, setRampDown] = useState(null);
    const [chrun, setChrun] = useState(null);
    // section Two
    const [newProspects, setNewProspects] = useState(0);
    const [newInitiatives, setNewInitiatives] = useState(0);
    const [avbPvbDetails, setAvbPvbDetails] = useState("");
    const [valueAdds, setValueAdds] = useState("");
    const [genAITech, setGenAITech] = useState("");
    const [valueBoardEvaluation, setValueBoardEvaluation] = useState("");
    const [genAiStepper, setGenAiStepper] = useState(0)
    const [valueAddsStepper, setValueAddsStepper] = useState(0);
    const [valueAddsDelivered, setValueAddsDelivered] = useState("")
    const [closure, setClosure] = useState(0);
    const [costImpact, setCostImpact] = useState(0);
    const [writeOff, setWriteOff] = useState(0);
    const [unbilledResources, setUnbilledResources] = useState(0);
    const [growthImpact, setGrowthImpact] = useState(0);

    const dropdowns = ["Ramesh", "Lee", "Tony", "Kinesh"];

    // Check if both required fields are selected
    const isStepFormEnabled = deliveryDirector && deliveryManager;

    return (
        <Box sx={{ margin: 5 }}>
            <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: 600, marginBottom: 10, marginRight: 150 }}
            >
                Add Portfolio Status For March 2025
            </Typography>

            <Box sx={{ display: "flex", gap: 4 }}>
                {[
                    { label: "BU Head", state: buHead, setState: setBuHead },
                    {
                        label: "Engagement Director",
                        state: engagementDirector,
                        setState: setEngagementDirector,
                    },
                    {
                        label: "Delivery Director",
                        state: deliveryDirector,
                        setState: setDeliveryDirector,
                        required: true,
                    },
                    {
                        label: "Delivery Manager",
                        state: deliveryManager,
                        setState: setDeliveryManager,
                        required: true,
                    },
                ].map(({ label, state, setState, required }) => (
                    <Box
                        key={label}
                        sx={{ display: "flex", flexDirection: "column", minWidth: 200 }}
                    >
                        <Typography
                            sx={{
                                fontWeight: 500,
                                marginBottom: 1,
                                textAlign: "center",
                                marginRight: "auto",
                            }}
                        >
                            {label} {required && <span style={{ color: "red" }}>*</span>}
                        </Typography>
                        <Dropdown
                            input={dropdowns}
                            handleOnSelect={(event, newValue) => {
                                setState(newValue);
                                console.log(newValue);
                            }}
                            selectedValues={state}
                        />
                    </Box>
                ))}
            </Box>
            {/* Stepper with Blur & Disable Effect */}
            <Box
                sx={{
                    marginTop: 10,
                    filter: isStepFormEnabled ? "none" : "blur(4px)",
                    pointerEvents: isStepFormEnabled ? "auto" : "none", // Disable click
                    opacity: isStepFormEnabled ? 1 : 0.5, // Reduce visibility
                }}
            >
                <MultipleStepForm
                    setProtfolioStatus={setProtfolioStatus}
                    protfolioStatus={protfolioStatus}
                    inFlight={inFlight}
                    setInFlight={setInFlight}
                    projectsOnTrack={projectsOnTrack}
                    setProjectsOnTrack={setProjectsOnTrack}
                    newProjects={newProjects}
                    setNewProjects={setNewProjects}
                    projectAtRisk={projectAtRisk}
                    setProjectAtRisk={setProjectAtRisk}
                    rampDown={rampDown}
                    setRampDown={setRampDown}
                    chrun={chrun}
                    setChrun={setChrun}
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
                    setValueAddsStepper={setValueAddsStepper}
                    genAiStepper={genAiStepper}
                    setGenAiStepper={setGenAiStepper}
                    valueAddsDelivered={valueAddsDelivered}
                    setValueAddsDelivered={setValueAddsDelivered}
                    closure={closure}
                    setClosure={setClosure}
                    costImpact={costImpact}
                    setCostImpact={setCostImpact}
                    writeOff={writeOff}
                    setWriteOff={setWriteOff}
                    unbilledResources={unbilledResources}
                    setUnbilledResources={setUnbilledResources}
                    growthImpact={growthImpact}
                    setGrowthImpact={setGrowthImpact}
                />
                {/* <OneProtFolioDetails nextStep={steps} /> */}
            </Box>
        </Box>
    );
}

export default PortFolioStatus;
