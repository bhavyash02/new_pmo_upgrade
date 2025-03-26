import React, { useState } from "react";
import { Dropdown } from "../../components/molecules";
import {
  Box,
  Stack,
  Typography,
  InputAdornment,
  TextField,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormControl,
  FormHelperText,
} from "@mui/material";
import NumberStepper from "../../components/molecules/NumberStepper";

export default function ResourcesForm({
  techinal,
  setTechinal,
  product,
  setProduct,
  manager,
  setManager,
  teamSize,
  setTeamSize,
  voluntary,
  setVoluntary,
  involuntary,
  setInvoluntary,
  employeeScore,
  setEmployeeScore,
  learnings,
  setLearnings,
  additions,
  setAdditions,
  attritionRisk,
  setAttritionRisk,
  topPerformers,
  setTopPerformers,
  topPerformersDesc,
  settopPerformersDesc
}) {
  const [teamSizeError, setTeamSizeError] = useState(false);
  const [learningError, setLearningError] = useState(false);
  const [additionsError, setAdditionsError] = useState(false);
  const [attritionsError, setAttritionsError] = useState(false);
  const [employeeScoreError, setEmployeeScoreError] = useState(false);
  const [performersError, setPerformersError] = useState(false);
  return (
    <>
      {/* First Row */}
      <Box sx={{ flex: 1, width: "100%" }}>
        <Stack
          direction="row"
          spacing={3}
          justifyContent="space-between"
          alignItems="flex-start"
          padding="20px"
        >
          <Box
            sx={{
              border: "1px solid #ccc",
              padding: 2,
              borderRadius: 2,
              marginRight: "70px",
              width: "765px",
              position: "relative",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bold",
                marginRight: "auto",
                marginRight: "40px",
                position: "absolute",
                top: -15,
                left: 25,
                background: "white",
                padding: "0 4px",
              }}
            >
              Open Positions(9)
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "30px",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <NumberStepper
                  placeholder="Techinal"
                  counter={techinal}
                  setCounter={setTechinal}
                  mandatory={true}
                  width="220px"
                />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <NumberStepper
                  placeholder="Product"
                  counter={product}
                  setCounter={setProduct}
                  mandatory={true}
                  width="220px"
                />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <NumberStepper
                  placeholder="Lead/Manager"
                  counter={manager}
                  setCounter={setManager}
                  mandatory={true}
                  width="220px"
                />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              width: "320px",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 500, marginRight: "auto" }}
            >
              Current Team Size<span style={{ color: "red" }}>*</span>
            </Typography>
            <FormControl sx={{ width: "320px" }} error={teamSizeError}>
              <TextField
                sx={{ width: "320px" }}
                variant="outlined"
                placeholder="Current Team Size"
                onChange={(e) => {
                  setTeamSize(e.target.value);
                  setTeamSizeError(false);
                }}
                onBlur={() => {
                  if (!teamSize) {
                    setTeamSizeError(true); // Show error when field is empty
                  }
                }}
              />
              {teamSizeError && (
                <FormHelperText>Please add Current Team Size</FormHelperText>
              )}
            </FormControl>
          </Box>
        </Stack>
      </Box>
      {/* Second Row */}
      <Box sx={{ flex: 1, width: "100%" }}>
        <Stack
          direction="row"
          spacing={3}
          justifyContent="space-between"
          alignItems="flex-start"
          padding="20px"
        >
          <Box
            sx={{
              border: "1px solid #ccc",
              padding: 2,
              borderRadius: 2,
              marginRight: "70px",
              position: "relative",
              maxWidth: "290px",
              width: "100%"
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bold",
                marginRight: "auto",
                marginRight: "40px",
                position: "absolute",
                top: -15,
                left: 25,
                background: "white",
                padding: "0 4px",
              }}
            >
              Attrition
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: 2,
                marginBottom: "30px",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <NumberStepper
                  placeholder="Voluntary"
                  counter={voluntary}
                  setCounter={setVoluntary}
                  mandatory={true}
                  width="128px"
                />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <NumberStepper
                  placeholder="Involuntary"
                  counter={involuntary}
                  setCounter={setInvoluntary}
                  mandatory={true}
                  width="127px"
                />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              width: "320px",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 500, marginRight: "auto", fontSize: "14px" }}
            >
              ESAT(Employee Satisfaction Score - out of 10)
              <span style={{ color: "red" }}>*</span>
            </Typography>
            <FormControl sx={{ width: "320px" }} error={employeeScoreError}>
              <TextField
                sx={{ width: "320px" }}
                variant="outlined"
                placeholder="Enter"
                onChange={(e) => {
                  setEmployeeScore(e.target.value);
                  setEmployeeScoreError(false);
                }}
                onBlur={() => {
                  if (!employeeScore) {
                    setEmployeeScoreError(true); // Show error when field is empty
                  }
                }}
              />
              {employeeScoreError && (
                <FormHelperText>Please add Value Adds (Revenue)</FormHelperText>
              )}
            </FormControl>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              width: "320px",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 500, marginRight: "auto" }}
            >
              Learning/Certifications<span style={{ color: "red" }}>*</span>
            </Typography>
            <FormControl sx={{ width: "320px" }} error={learningError}>
              <TextField
                sx={{ width: "320px" }}
                variant="outlined"
                placeholder="Learning/Certifications"
                onChange={(e) => {
                  setLearnings(e.target.value);
                  setLearningError(false);
                }}
                onBlur={() => {
                  if (!learnings) {
                    setLearningError(true); // Show error when field is empty
                  }
                }}
              />
              {learningError && (
                <FormHelperText>Please add Value Adds (Revenue)</FormHelperText>
              )}
            </FormControl>
          </Box>
        </Stack>
      </Box>
      {/* Third Row */}
      <Box sx={{ flex: 1, width: "100%" }}>
        <Stack
          direction="row"
          spacing={3}
          justifyContent="space-between"
          alignItems="flex-start"
          padding="20px"
        >
          <FormControl sx={{ width: "320px" }} error={additionsError}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 500, marginRight: "auto" }}
            >
              New Additions<span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              variant="outlined"
              placeholder="Enter Amount"
              onChange={(e) => {
                setAdditions(e.target.value);
                setAdditionsError(false); // Remove error when user starts typing
              }}
              onBlur={() => {
                if (!additions) {
                  setAdditionsError(true); // Show error when field is empty
                }
              }}
            />
            {additionsError && (
              <FormHelperText>Please add Value Adds 1 (Revenue)</FormHelperText>
            )}
          </FormControl>
          <FormControl sx={{ width: "320px" }} error={attritionsError}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 500, marginRight: "auto" }}
            >
              Attrition Risk<span style={{ color: "red" }}>*</span>
            </Typography>
            <TextField
              variant="outlined"
              placeholder="Enter Amount"
              onChange={(e) => {
                setAttritionRisk(e.target.value);
                setAttritionsError(false); // Remove error when user starts typing
              }}
              onBlur={() => {
                if (!attritionRisk) {
                  setAttritionsError(true); // Show error when field is empty
                }
              }}
            />
            {attritionsError && (
              <FormHelperText>
                Please add Value Adds 12 (Revenue)
              </FormHelperText>
            )}
          </FormControl>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              width: "320px",
            }}
          >
            <FormControl sx={{ width: "320px" }} error={performersError}>
              <Box sx={{ display: "flex", gap: 2 }}>
                <NumberStepper
                  placeholder="Top Performers"
                  counter={topPerformers}
                  setCounter={setTopPerformers}
                  width="120px"
                  mandatory={true}
                />
                <TextField
                  placeholder="Enter Description"
                  variant="outlined"
                  sx={{ width: "180px", marginTop: "30px" }}
                  onChange={(e) => {
                    settopPerformersDesc(e.target.value);
                    setPerformersError(false);
                  }}
                  onBlur={() => {
                    if (!topPerformersDesc) {
                      setPerformersError(true); // Show error when field is empty
                    }
                  }}
                />
              </Box>
              {performersError && (
                <FormHelperText>Please Add Top Performer</FormHelperText>
              )}
            </FormControl>
          </Box>
        </Stack>
      </Box>
    </>
  );
}
