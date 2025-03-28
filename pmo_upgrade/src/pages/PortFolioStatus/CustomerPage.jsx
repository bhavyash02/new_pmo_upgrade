import React from "react";
import {
    Box, Stack, TextField, Typography, FormControlLabel, RadioGroup, Radio, 
} from "@mui/material";
import NumberStepper from "../../components/molecules/NumberStepper";

export default function CustomerPage({ csat,
    setCsat,
    feedback,
    setFeedBack,
    escalation,
    setEscalation,
    escalationDescription,
    setEscalationDescription,
    apprecition,
    setApprecition,
    apprecitionDescription,
    setApprecitionDescription,
    critical,
    setCritical,
    nonCritical,
    setNonCritical,
    qbr,
    setQbr,
    capabilitiesPositioned,
    setCapabilitiesPositioned,
    capabilitiesDescription,
    setCapabilitiesDescription,
    pocsInFlight,
    setPocsInFlight,
    pocsPlanned,
    setPocsPlanned,
    hackathons,
    setHackathons,
    hackathonsDescribed,
    setHackathonsDescribed,
    crossSellOportunity,
    setCrossSellOpportunity,
    architechtureAdvisory,
    setArchitechtureAdvisory }) {

    return (
        <Box sx={{ width: "100%", paddingX: 2 }}>
            {/* First Row */}
            <Stack
                direction="row"
                spacing={3}
                justifyContent="space-between"
                alignItems="flex-start"
                padding="20px"
            >
                {/* CSAT */}
                <Box sx={{ flex: 1 }}>
                    <NumberStepper placeholder={"CSAT(Customer Satisfaction Score - out of 10)"} counter={csat} setCounter={setCsat} mandatory={true} width="100%" />
                </Box>

                {/* Feedback */}
                <Box sx={{ flex: 1 }}>
                    <Typography sx={{ fontSize: "14px", marginBottom: "5px", textAlign: "left", marginLeft: "40px" }}>Feedback<span style={{ color: "red" }}>*</span></Typography>
                    <TextField sx={{ width: "340px", alignItems: "left", marginLeft: "20px" }} placeholder="Enter Description" variant="outlined" onChange={(e) => setFeedBack(e.target.value)} />
                </Box>
                <Box sx={{ flex: 1 }}>
                    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1, marginLeft: "50px", width: "340px"}}>
                        <NumberStepper placeholder="Escalations" counter={escalation} setCounter={setEscalation} width="100px" />
                        <TextField sx={{ width: "100%", marginTop: "28px" }} placeholder="Enter Description" variant="outlined" />
                    </Box>
                </Box>
            </Stack>

            {/* Second Row */}
            <Stack direction="row" justifyContent="space-between" alignItems="flex-start" padding="20px">
                <Box sx={{ display: "flex", gap: 2, width: "340px" }}>
                    <NumberStepper placeholder="Apprecitions" counter={apprecition} setCounter={setApprecition} width="100px" />
                    <TextField placeholder="Enter Description" variant="outlined" sx={{ width: "100%", marginTop: "28px" }} onChange={(e) => setApprecitionDescription(e.target.value)} />
                </Box>
                <Box sx={{ border: "1px solid #ccc", padding: 2, borderRadius: 2, width: "310px" }}>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            fontWeight: "bold",
                            marginRight: "auto",
                            marginRight: "20px",
                            position: "relative",
                            top: -35,
                            right: 25,
                            background: "white",
                            padding: "0 4px",
                        }}
                    >
                        Early Warning Indicators
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2, marginBottom: "30px" }}>
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            <NumberStepper placeholder="Critical" counter={critical} setCounter={setCritical} mandatory={true} width="130px" />
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            <NumberStepper placeholder="Non Critical" counter={nonCritical} setCounter={setNonCritical} mandatory={true} width="130px" />
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1, width: "330px" }}>
                    <Typography variant="subtitle1" sx={{ fontSize:"15px", marginRight: "auto" }}>
                        QBR<span style={{ color: "red" }}>*</span>
                    </Typography>
                    <RadioGroup
                        row
                        value={qbr}
                        onChange={(e) => setQbr(e.target.value)}
                    >
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                </Box>
            </Stack>

            {/* Third Row */}
            <Stack direction="row" spacing={3} justifyContent="space-between" alignItems="flex-start" padding="20px">
                <Box sx={{ display: "flex", gap: 2, width: "340px" }}>
                    <NumberStepper placeholder="Capabilities Positioned" counter={capabilitiesPositioned} setCounter={setCapabilitiesPositioned} width="100px" />
                    <TextField placeholder="Enter Description" variant="outlined" sx={{ width: "100%", marginTop: "30px" }} onChange={(e) => setCapabilitiesDescription(e.target.value)} />
                </Box>
                <NumberStepper placeholder="PoCs in Flight" counter={pocsInFlight} setCounter={setPocsInFlight} width="340px" dollarSymbol={true} />
                <NumberStepper placeholder="PoCs Planned(This month)" counter={pocsPlanned} setCounter={setPocsPlanned} width="340px" dollarSymbol={true} />
            </Stack>

            {/* Fourth Row */}
            <Stack direction="row" spacing={3} justifyContent="space-between" alignItems="center" padding="20px">
                <Box sx={{ display: "flex", gap: 2, marginRight: "90px", width: "340px" }}>
                    <NumberStepper placeholder="Hackathon/s" counter={hackathons} setCounter={setHackathons} width="100px" />
                    <TextField placeholder="Enter Description" variant="outlined" sx={{ width: "100%", marginTop: "30px", }} onChange={(e) => setHackathonsDescribed(e.target.value)} />
                </Box>
                {/* Cross Sell Opportunity Field */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    <Typography variant="subtitle1" sx={{fontSize:"14px", marginRight: "180px" }}>
                        Cross Sell Opportunity
                    </Typography>
                    <TextField placeholder="Enter Description" variant="outlined" sx={{ width: "340px"}} onChange={(e) => setCrossSellOpportunity(e.target.value)} />
                </Box>

                {/* Extra Text Field */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    <Typography variant="subtitle1" sx={{fontSize:"14px", marginRight: "200px" }}>
                        Architecture/Advisory
                    </Typography>
                    <TextField placeholder="Enter Description" variant="outlined" sx={{ width: "340px", marginLeft: "10px" }} onChange={(e) => setArchitechtureAdvisory(e.target.value)} />
                </Box>
            </Stack>
        </Box>
    );
}
