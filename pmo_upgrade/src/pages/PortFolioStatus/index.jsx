import React, { useState, useEffect } from "react";
import Dropdown from "../../components/molecules/Dropdown";
import apiUrlConfig from "../../config/apiUrlConfig";
import MultipleStepForm from "../../components/molecules/MultiStepForm";
import {
  Box, Typography, Select,
  MenuItem
} from "@mui/material";
import dayjs from "dayjs";
import { fetchPortfolioData } from "../../modules/ApiCalls";

function PortFolioStatus() {
  const today = dayjs();

  const [selectedMonth, setSelectedMonth] = useState(today.format("MMMM"));
  const [selectedYear, setSelectedYear] = useState(today.year());
  const [buHead, setBuHead] = useState("");
  const [engagementDirector, setEngagementDirector] = useState("");
  const [deliveryDirector, setDeliveryDirector] = useState("");
  const [deliveryManager, setDeliveryManager] = useState("");
  const [selectedEngagementDirector, setSelectedEngagementDirector] = useState("");
  const [selectedDeliveryDirector, setSelectedDeliveryDirector] = useState("");
  const [selectedDeliveryManager, setSelectedDeliveryManager] = useState("");
  const [selectedBuHead, setSelectedBuHead] = useState("");
  // section One
  const [protfolioStatus, setProtfolioStatus] = useState("");
  const [changePortfolioStatus, setChangePortfolioStatus] = useState(null);
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
  const [learnings, setLearnings] = useState("");
  const [additions, setAdditions] = useState(0);
  const [attritionRisk, setAttritionRisk] = useState(0);
  const [topPerformers, setTopPerformers] = useState(0);
  const [topPerformersDesc, settopPerformersDesc] = useState("");
  // section Five
  const [csat, setCsat] = useState(0)
  const [feedback, setFeedBack] = useState("")
  const [escalation, setEscalation] = useState(0)
  const [escalationDescription, setEscalationDescription] = useState("")
  const [apprecition, setApprecition] = useState(0)
  const [apprecitionDescription, setApprecitionDescription] = useState("")
  const [critical, setCritical] = useState(0)
  const [nonCritical, setNonCritical] = useState(0)
  const [qbr, setQbr] = useState("")
  const [capabilitiesPositioned, setCapabilitiesPositioned] = useState(0)
  const [capabilitiesDescription, setCapabilitiesDescription] = useState(0)
  const [pocsInFlight, setPocsInFlight] = useState(0)
  const [pocsPlanned, setPocsPlanned] = useState(0)
  const [hackathons, setHackathons] = useState(0)
  const [hackathonsDescribed, setHackathonsDescribed] = useState(0)
  const [crossSellOportunity, setCrossSellOpportunity] = useState("")
  const [architechtureAdvisory, setArchitechtureAdvisory] = useState("")
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [budget, setBudget] = useState(0);
  const [totalSpend, setTotalSpend] = useState(0);
  const [gm, setGm] = useState("");
  const [resources, setResources] = useState(0);
  const [spend, setSpend] = useState(0);
  const [totalInvoice, setTotalInvoice] = useState(0);
  const [invoiceNotRealized, setInvoiceNotRealized] = useState(0);
  const [sunkCosts, setSunkCosts] = useState(0);

  const { apiUrl } = apiUrlConfig;
  const dropdown = ["engagement_director", "delivery_director", "delivery_manager", "bu_head", "portfolio_status"];
  useEffect(() => {
    const fetchData = async () => {
      await fetchPortfolioData(apiUrl, dropdown, setEngagementDirector, setDeliveryDirector, setDeliveryManager, setBuHead, setProtfolioStatus);
    };
    fetchData();
  }, []);
  const dropdowns = ["Ramesh", "Lee", "Tony", "Kinesh"];

  // Check if both required fields are selected
  const isStepFormEnabled = selectedDeliveryDirector && selectedDeliveryManager;



  return (
    <Box sx={{ margin: "40px auto", maxWidth: "1400px", width: "100%" }}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", marginRight: "150px", marginBottom: "20px" }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: 600, textAlign: "left" }}
        >
          Add Portfolio Status for {selectedMonth} {selectedYear}
        </Typography>

        <Box sx={{ display: "flex", gap: 1, marginBottom: "20px" }}>
          <Box>
            <Typography sx={{ marginRight: "200px" }}>Month<span style={{ color: "red" }}>*</span></Typography>
            <Select sx={{ "width": "250px", marginRight: "20px" }}
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              size="small"
            >
              {[
                "January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
              ].map((month) => (
                <MenuItem key={month} value={month}>
                  {month}
                </MenuItem>
              ))}
            </Select>
          </Box>
          <Box>

            <Typography sx={{ marginRight: "200px" }}>Year<span style={{ color: "red" }}>*</span></Typography>
            <Select sx={{ "width": "250px" }}
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              size="small"
            >
              {Array.from({ length: 9 }, (_, i) => dayjs().year() - i).map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: 4 }}>
        {[
          { label: "BU Head", state: buHead, setState: setBuHead, changeState: selectedBuHead, setChangeState: setSelectedBuHead },
          {
            label: "Engagement Director",
            state: engagementDirector,
            setState: setEngagementDirector,
            changeState: selectedEngagementDirector,
            setChangeState: setSelectedEngagementDirector,
          },
          {
            label: "Delivery Director",
            state: deliveryDirector,
            setState: setDeliveryDirector,
            changeState: selectedDeliveryDirector,
            setChangeState: setSelectedDeliveryDirector,
            required: true,
          },
          {
            label: "Delivery Manager",
            state: deliveryManager,
            setState: setDeliveryManager,
            changeState: selectedDeliveryManager,
            setChangeState: setSelectedDeliveryManager,
            required: true,
          },
        ].map(({ label, state, setState, changeState, setChangeState, required }) => (
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
              input={state}
              handleOnSelect={(event, newValue) => {
                setChangeState(newValue);
              }}
              selectedValues={changeState}
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
          margin: "60px auto 0",
          border: "1px solid #D9D9D9",
          borderRadius: "20px",
        }}
      >
        <MultipleStepForm
          changePortfolioStatus={changePortfolioStatus}
          setChangePortfolioStatus={setChangePortfolioStatus}
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
          setArchitechtureAdvisory={setArchitechtureAdvisory}
          totalRevenue={totalRevenue}
          setTotalRevenue={setTotalRevenue}
          budget={budget}
          setBudget={setBudget}
          totalSpend={totalSpend}
          setTotalSpend={setTotalSpend}
          gm={gm}
          setGm={setGm}
          resources={resources}
          setResources={setResources}
          spend={spend}
          setSpend={setSpend}
          totalInvoice={totalInvoice}
          setTotalInvoice={setTotalInvoice}
          invoiceNotRealized={invoiceNotRealized}
          setInvoiceNotRealized={setInvoiceNotRealized}
          sunkCosts={sunkCosts}
          setSunkCosts={setSunkCosts}
        />
      </Box>
    </Box>
  );
}

export default PortFolioStatus;
