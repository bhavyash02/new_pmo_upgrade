import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import { Step, Button } from "@mui/material";
import StepLabel from "@mui/material/StepLabel";
import OneProtFolioDetails from "../../pages/PortFolioStatus/OneProtFolioDetails";
import ProgramPage from "../../pages/PortFolioStatus/ProgramPage";
import ProgramRiskPage from "../../pages/PortFolioStatus/ProgramRiskPage";
import ResourcesForm from "../../pages/PortFolioStatus/ResourcesForm";
import CustomerPage from "../../pages/PortFolioStatus/CustomerPage";

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
  setValueAddsStepper,
  genAiStepper,
  setGenAiStepper,
  projectAtRisk,
  setProjectAtRisk,
  rampDown,
  setRampDown,
  chrun,
  setChrun,
  valueAddsDelivered,
  setValueAddsDelivered,
  closure,
  setClosure,
  costImpact,
  setCostImpact,
  writeOff,
  setWriteOff,
  unbilledResources,
  setUnbilledResources,
  growthImpact,
  setGrowthImpact,
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
  settopPerformersDesc,
  csat,
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
  setArchitechtureAdvisory
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
            setValueAddsStepper={setValueAddsStepper}
            genAiStepper={genAiStepper}
            setGenAiStepper={setGenAiStepper}
            valueAddsDelivered={valueAddsDelivered}
            setValueAddsDelivered={setValueAddsDelivered}
          />
        );
      case 2:
        return (
          <h3>
            <ProgramRiskPage
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
          </h3>
        );
      case 3:
        return (
          <ResourcesForm
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
        );
      case 4:
        return <h3><CustomerPage
          csat={csat}
          setCsat={setCsat}
          feedback={feedback}
          setFeedBack={setFeedBack}
          escalation={escalation}
          setEscalation={setEscalation}
          escalationDescription={escalationDescription}
          setEscalationDescription={setEscalationDescription}
          apprecition={apprecition}
          setApprecition={setApprecition}
          apprecitionDescription={apprecitionDescription}
          setApprecitionDescription={setApprecitionDescription}
          critical={critical}
          setCritical={setCritical}
          nonCritical={nonCritical}
          setNonCritical={setNonCritical}
          qbr={qbr}
          setQbr={setQbr}
          capabilitiesPositioned={capabilitiesPositioned}
          setCapabilitiesPositioned={setCapabilitiesPositioned}
          capabilitiesDescription={capabilitiesDescription}
          setCapabilitiesDescription={setCapabilitiesDescription}
          pocsInFlight={pocsInFlight}
          setPocsInFlight={setPocsInFlight}
          pocsPlanned={pocsPlanned}
          setPocsPlanned={setPocsPlanned}
          hackathons={hackathons}
          setHackathons={setHackathons}
          hackathonsDescribed={hackathonsDescribed}
          setHackathonsDescribed={setHackathonsDescribed}
          crossSellOportunity={crossSellOportunity}
          setCrossSellOpportunity={setCrossSellOpportunity}
          architechtureAdvisory={architechtureAdvisory}
          setArchitechtureAdvisory={setArchitechtureAdvisory} /></h3>;
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

      <Box sx={{ display: "flex", flexDirection: "row-reverse", mt: 3 }}>
        <Button
          onClick={handleNext}
          disabled={
            (activeStep === 0 &&
              (!protfolioStatus ||
                !inFlight ||
                !projectsOnTrack ||
                !projectsOnTrack ||
                !newProjects)) ||
            (activeStep === 1 &&
              (!genAITech ||
                !valueAdds ||
                !avbPvbDetails ||
                !valueBoardEvaluation)) ||
            (activeStep === 2 &&
              (!costImpact ||
                !unbilledResources ||
                !growthImpact)) ||
                (activeStep === 3 &&
                (!techinal ||
                  !product ||
                  !manager ||
                  !teamSize ||
                  !voluntary || 
                  !involuntary ||
                  !employeeScore || 
                  !learnings ||
                  !additions ||
                  !attritionRisk ||
                  !topPerformers || 
                  !topPerformersDesc
                )) ||
            (activeStep === 4 &&
              (!csat ||
                !feedback ||
                !critical ||
                !nonCritical ||
                !qbr
              ))
          }
          sx={{ marginLeft: "20px", width: "114px", height: "40px" }}
          variant="contained"
        >
          {activeStep === stepLabels.length - 1 ? "Finish" : "Next"}
        </Button>
        <Button
          onClick={handleBack}
          disabled={activeStep === 0}
          variant="outlined"
          sx={{ marginLeft: "20px", width: "114px", height: "40px" }}
        >
          Previous
        </Button>
        <Button
          onClick={handleBack}
          //   disabled={activeStep === 0}
          variant="outlined"
          sx={{ width: "114px", height: "40px" }}
        >
          Cancel
        </Button>
      </Box>
    </Box>
  );
}
