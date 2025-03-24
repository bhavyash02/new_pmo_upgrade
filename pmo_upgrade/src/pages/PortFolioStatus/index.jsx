import React, { useState } from "react";
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
  const [genAiStepper, setGenAiStepper] = useState(0);
  const [valueAddsStepper, setValueAddsStepper] = useState(0);
  const [valueAddsDelivered, setValueAddsDelivered] = useState("");
  // section Three
  const [closure, setClosure] = useState(0);
  const [costImpact, setCostImpact] = useState(0);
  const [writeOff, setWriteOff] = useState(0);
  const [unbilledResources, setUnbilledResources] = useState(0);
  const [growthImpact, setGrowthImpact] = useState(0);
  // section Four
  const [techinal, setTechinal] = useState(0);
  const [product, setProduct] = useState(0);
  const [manager, setManager] = useState(0);
  const [teamSize, setTeamSize] = useState(0);
  const [voluntary, setVoluntary] = useState(0);
  const [involuntary, setInvoluntary] = useState(0);
  const [employeeScore, setEmployeeScore] = useState(0);
  const [learnings, setLearnings] = useState(0);
  const [additions, setAdditions] = useState(0);
  const [attritionRisk, setAttritionRisk] = useState(0);
  const [topPerformers, setTopPerformers] = useState(0);
  const [topPerformersDesc, settopPerformersDesc] = useState(0);

  const dropdowns = ["Ramesh", "Lee", "Tony", "Kinesh"];

  // Check if both required fields are selected
  const isStepFormEnabled = deliveryDirector && deliveryManager;

  return (
    <Box sx={{ margin: "40px auto", maxWidth: "1400px", width: "100%" }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: 600, marginBottom: 10, textAlign: "left" }}
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
          filter: isStepFormEnabled ? "none" : "blur(4px)",
          pointerEvents: isStepFormEnabled ? "auto" : "none", // Disable click
          opacity: isStepFormEnabled ? 1 : 0.5, // Reduce visibility
          maxWidth: "1400px",
          width: "100%",
          margin: "80px auto 0",
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
          techinal={techinal}
          setTechinal={setTechinal}
          product={product}
          setProduct={setProduct}
          manager={manager}
          setManager={setManager}
          teamSize={teamSize}
          setTeamSize={setTeamSize}
          voluntary={voluntary}
          setVoluntary={setVoluntary}
          involuntary={involuntary}
          setInvoluntary={setInvoluntary}
          employeeScore={employeeScore}
          setEmployeeScore={setEmployeeScore}
          learnings={learnings}
          setLearnings={setLearnings}
          additions={additions}
          setAdditions={setAdditions}
          attritionRisk={attritionRisk}
          setAttritionRisk={setAttritionRisk}
          topPerformers={topPerformers}
          setTopPerformers={setTopPerformers}
          topPerformersDesc={topPerformersDesc}
          settopPerformersDesc={settopPerformersDesc}
        />
      </Box>
    </Box>
  );
}

export default PortFolioStatus;
