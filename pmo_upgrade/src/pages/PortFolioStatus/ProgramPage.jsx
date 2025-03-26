import React, { useState } from "react";
import {
    Box, Stack, TextField, Typography, InputAdornment,
    FormControlLabel, RadioGroup, Radio, FormControl, FormHelperText
} from "@mui/material";
import NumberStepper from "../../components/molecules/NumberStepper";

export default function ProgramPage({ newProspects, setNewProspects, newInitiatives, setNewInitiatives, avbPvbDetails, setAvbPvbDetails, valueAdds, setValueAdds, genAITech, setGenAITech, valueBoardEvaluation, setValueBoardEvaluation, valueAddsStepper, setValueAddsStepper, genAiStepper, setGenAiStepper, valueAddsDelivered,
    setValueAddsDelivered }) {
    const [avbPvbError, setAvbPvbError] = useState(false);
    const [genAiError, setGenAiError] = useState(false)

    return (
        <Box sx={{ width: "100%", paddingX: 2 }}>
            {/* First Row */}
            <Stack direction="row" spacing={3} justifyContent="space-between" alignItems="flex-start" padding="20px">
                <NumberStepper placeholder="New Prospects" counter={newProspects} setCounter={setNewProspects} width="350px" />
                <NumberStepper placeholder="New Initiatives" counter={newInitiatives} setCounter={setNewInitiatives} width="350px" />

                {/* Value Adds Delivered */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1, width: "320px" }}>
                    {/* <Typography variant="subtitle1" sx={{ fontSize: 14, marginRight: "auto" }}>
                        Value Adds Delivered
                    </Typography> */}
                    <Box sx={{ display: "flex", gap: 2 }}>
                        <NumberStepper placeholder="Value Adds Delivered" counter={valueAddsStepper} setCounter={setValueAddsStepper} width="150px" />
                        <TextField placeholder="Enter Description" variant="outlined" sx={{ width: "250px", marginTop: "28px" }} onChange={(e) => setValueAddsDelivered(e.target.value)} />
                    </Box>
                </Box>
            </Stack>

            {/* Second Row */}
            <Stack direction="row" spacing={3} justifyContent="space-between" alignItems="flex-start" paddingX="20px">
                {/* Value Adds Revenue */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1, width: "320px" }}>

                    <NumberStepper placeholder=" Value Adds (Revenue)" counter={valueAdds} setCounter={setValueAdds} width="350px" mandatory={true} dollarSymbol={true} disabled={!valueAddsStepper ? true : false}></NumberStepper>
                </Box>

                {/* Value Board Evaluation - Fixed Alignment */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1, width: "320px" }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 200, marginRight: "auto", marginTop: "10px" }}>
                        Value Board Evaluation Done<span style={{ color: "red" }}>*</span>
                    </Typography>
                    <RadioGroup
                        row
                        value={valueBoardEvaluation}
                        onChange={(e) => setValueBoardEvaluation(e.target.value)}
                    >
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                </Box>

                {/* AVB/PVB Details with Validation */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1, width: "320px" }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 500, marginRight: "auto" }}>
                        AVB/PVB Details<span style={{ color: "red" }}>*</span>
                    </Typography>
                    <FormControl sx={{ width: "320px" }} error={avbPvbError}>
                        <TextField
                            variant="outlined"
                            placeholder="Enter Amount"
                            onChange={(e) => {
                                setAvbPvbDetails(e.target.value);
                                setAvbPvbError(false); // Remove error when user starts typing
                            }}
                            onBlur={() => {
                                if (!avbPvbDetails) {
                                    setAvbPvbError(true); // Show error when field is empty
                                }
                            }}
                        />
                        {avbPvbError && <FormHelperText>Please add AVB/PVB Details</FormHelperText>}
                    </FormControl>
                </Box>
            </Stack>

            <Stack direction="row" spacing={3} justifyContent="space-between" alignItems="flex-start" padding="20px">
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1, width: "320px" }}>
                    {/* <Typography variant="subtitle1" sx={{ fontSize: 14, marginRight: "auto" }}>
                        GenAI/New Technology Initiatives<span style={{ color: "red" }}>*</span>
                    </Typography> */}
                    <FormControl sx={{ width: "320px" }} error={genAiError}>
                        <Box sx={{ display: "flex", gap: 2 }}>
                            <NumberStepper placeholder="GenAI/New Technology Initiatives" counter={genAiStepper} setCounter={setGenAiStepper} width="150px" mandatory={true} />
                            <TextField placeholder="Enter Description" variant="outlined" sx={{ width: "150px", marginTop: "30px" }} onChange={(e) => {
                                setGenAITech(e.target.value)
                                setGenAiError(false)
                            }}
                                onBlur={() => {
                                    if (!genAITech) {
                                        setGenAiError(true); // Show error when field is empty
                                    }
                                }} />
                        </Box>
                        {genAiError && <FormHelperText>Please Add GenAI/New Technology Initiatives</FormHelperText>}
                    </FormControl>

                </Box>
            </Stack>
        </Box>
    );
}
