import React, { useState } from "react";
import Dropdown from "../../components/molecules/Dropdown";
import MultipleStepForm from "../../components/molecules/MultiStepForm";
import { Box, Typography } from "@mui/material";
import OneProtFolioDetails  from "./OneProtFolioDetails";

function PortFolioStatus() {
    const [buHead, setBuHead] = useState("");
    const [engagementDirector, setEngagementDirector] = useState("");
    const [deliveryDirector, setDeliveryDirector] = useState("");
    const [deliveryManager, setDeliveryManager] = useState("");

    const dropdowns = ["Ramesh", "Lee", "Tony", "Kinesh"];

    // Check if both required fields are selected
    const isStepFormEnabled = deliveryDirector && deliveryManager;

    return (
        <Box sx={{ margin: 5 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, marginBottom: 10, marginRight:150 }}>
                Add Portfolio Status For March 2025
            </Typography>

            <Box sx={{ display: "flex", gap: 4 }}>
                {[
                    { label: "BU Head", state: buHead, setState: setBuHead },
                    { label: "Engagement Director", state: engagementDirector, setState: setEngagementDirector },
                    { label: "Delivery Director", state: deliveryDirector, setState: setDeliveryDirector, required: true },
                    { label: "Delivery Manager", state: deliveryManager, setState: setDeliveryManager, required: true },
                ].map(({ label, state, setState, required }) => (
                    <Box key={label} sx={{ display: "flex", flexDirection: "column", minWidth: 200 }}>
                        <Typography sx={{ fontWeight: 500, marginBottom: 1, textAlign: "center", marginRight:"auto" }}>
                            {label} {required && <span style={{ color: "red" }}>*</span>}
                        </Typography>
                        <Dropdown
                            input={dropdowns}
                            handleOnSelect={(event, newValue) => setState(newValue)}
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
                <MultipleStepForm />
                <OneProtFolioDetails />
            </Box>
        </Box>
    );
}

export default PortFolioStatus;