import React, { useState } from "react";
import {
    Box, Stack, TextField, Typography, InputAdornment,
    FormControlLabel, RadioGroup, Radio, Button
} from "@mui/material";
import NumberStepper from "../../components/molecules/NumberStepper";

export default function ProgramPage({ nextStep }) {
    const [valueBoardEvaluation, setValueBoardEvaluation] = useState("");
    const handleNext = () => {
        // if(!protfolioStatus) {
        //   // alert('1')
        // } else { 
        //   // alert('2')
        handleClick();
        // }

    }

    function handleClick() {
        nextStep({ value: true, step: 'next' });
    }

    return (
        <Box sx={{ width: "100%", paddingX: 2 }}>
            {/* First Row */}
            <Stack direction="row" spacing={3} justifyContent="space-between" alignItems="flex-start" padding="20px">
                <NumberStepper placeholder="New Prospects" />
                <NumberStepper placeholder="New Initiatives" />

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
                    <TextField
                        sx={{ width: "350px" }}
                        variant="outlined"
                        placeholder="Enter Amount"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>
                        }}
                    />
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

                {/* AVB/PVB Details - Right Aligned */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1, width: "350px" }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 500, marginRight: "auto" }}>
                        AVB/PVB Details<span style={{ color: "red" }}>*</span>
                    </Typography>
                    <TextField
                        sx={{ width: "350px" }}
                        variant="outlined"
                        placeholder="Enter Amount"
                    />
                </Box>
            </Stack>
            <Stack direction="row" spacing={3} justifyContent="space-between" alignItems="flex-start" padding="20px">
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1, width: "350px" }}>
                    <Typography variant="subtitle1" sx={{ fontSize: 14, marginRight: "auto" }}>
                        GenAI/New Technology Initiatives
                    </Typography>
                    <Box sx={{ display: "flex", gap: 2 }}>
                        <TextField variant="outlined" sx={{ width: "100px" }} />
                        <TextField placeholder="Enter Description" variant="outlined" sx={{ width: "250px" }} />
                    </Box>
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
