import React, { useEffect, useState } from "react";
import {
    Box, Stack, TextField, Typography, InputAdornment,
    FormControlLabel, RadioGroup, Radio, FormControl, FormHelperText
} from "@mui/material";
import NumberStepper from "../../components/molecules/NumberStepper";

export default function ProgramPage({ newProspects, setNewProspects, newInitiatives, setNewInitiatives, avbPvbDetails, setAvbPvbDetails, valueAdds, setValueAdds, genAITech, setGenAITech, valueBoardEvaluation, setValueBoardEvaluation }) {
    const [avbPvbError, setAvbPvbError] = useState(false);
    const [valueAddsError, setValueAddsError] = useState(false)
    const [genAiError, setGenAiError] = useState(false)

    return (
        <Box sx={{ width: "100%", paddingX: 2 }}>
            {/* First Row */}
            <Stack direction="row" spacing={3} justifyContent="space-between" alignItems="flex-start" padding="20px">
                <NumberStepper placeholder="New Prospects" counter={newProspects} setCounter={setNewProspects} />
                <NumberStepper placeholder="New Initiatives" counter={newInitiatives} setCounter={setNewInitiatives} />

                {/* Value Adds Delivered */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1, width: "350px" }}>
                    <Typography variant="subtitle1" sx={{ fontSize: 14, marginRight: "auto" }}>
                        Value Adds Delivered
                    </Typography>
                    <Box sx={{ display: "flex", gap: 2 }}>
                        <TextField variant="outlined" sx={{ width: "100px" }} />
                        <TextField placeholder="Enter Description" variant="outlined" sx={{ width: "250px" }} />
                    </Box>
                </Box>
            </Stack>

            {/* Second Row */}
            <Stack direction="row" spacing={3} justifyContent="space-between" alignItems="flex-start" paddingX="20px">
                {/* Value Adds Revenue */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1, width: "350px" }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 500, marginRight: "auto" }}>
                        Value Adds (Revenue)<span style={{ color: "red" }}>*</span>
                    </Typography>
                    <FormControl sx={{ width: "350px" }} error={valueAddsError}>
                        <TextField
                            sx={{ width: "350px" }}
                            variant="outlined"
                            placeholder="Enter Amount"
                            onChange={(e) => {
                                setValueAdds(e.target.value)
                                setValueAddsError(false)
                            }}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">$</InputAdornment>
                            }}
                            onFocus={() => {
                                if (!valueAdds) {
                                    setValueAddsError(true); // Show error when field is empty
                                }
                            }}
                        />
                        {valueAddsError && <FormHelperText>Please fill this field as its mandatory</FormHelperText>}
                    </FormControl>
                </Box>

                {/* Value Board Evaluation - Fixed Alignment */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1, width: "350px" }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 500, marginRight: "auto" }}>
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
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1, width: "350px" }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 500, marginRight: "auto" }}>
                        AVB/PVB Details<span style={{ color: "red" }}>*</span>
                    </Typography>
                    <FormControl sx={{ width: "350px" }} error={avbPvbError}>
                        <TextField
                            variant="outlined"
                            placeholder="Enter Amount"
                            onChange={(e) => {
                                setAvbPvbDetails(e.target.value);
                                setAvbPvbError(false); // Remove error when user starts typing
                            }}
                            onFocus={() => {
                                if (!avbPvbDetails) {
                                    setAvbPvbError(true); // Show error when field is empty
                                }
                            }}
                        />
                        {avbPvbError && <FormHelperText>Please fill this field as its mandatory</FormHelperText>}
                    </FormControl>
                </Box>
            </Stack>

            <Stack direction="row" spacing={3} justifyContent="space-between" alignItems="flex-start" padding="20px">
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1, width: "350px" }}>
                    <Typography variant="subtitle1" sx={{ fontSize: 14, marginRight: "auto" }}>
                        GenAI/New Technology Initiatives<span style={{ color: "red" }}>*</span>
                    </Typography>
                    <FormControl sx={{ width: "350px" }} error={genAiError}>
                        <Box sx={{ display: "flex", gap: 2 }}>
                            <TextField variant="outlined" sx={{ width: "100px" }} />
                            <TextField placeholder="Enter Description" variant="outlined" sx={{ width: "250px" }} onChange={(e) => {
                                setGenAITech(e.target.value)
                                setGenAiError(false)
                            }}
                                onFocus={() => {
                                    if (!genAITech) {
                                        setGenAiError(true); // Show error when field is empty
                                    }
                                }} />
                        </Box>
                        {genAiError && <FormHelperText>Please fill this field as its mandatory</FormHelperText>}
                    </FormControl>

                </Box>
            </Stack>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    mt: "auto", // Push to bottom
                    p: 3,
                }}
            >
            </Box>
        </Box>
    );
}
