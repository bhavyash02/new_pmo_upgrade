import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Dropdown from "../../components/molecules/Dropdown";
import apiUrlConfig from "../../config/apiUrlConfig";
import MultipleStepForm from "../../components/molecules/MultiStepForm";
import {
  Box, Typography, Select,
  MenuItem
} from "@mui/material";
import dayjs from "dayjs";
import { fetchPortfolioData, CreateUpdatePortFolioStatus } from "../../modules/ApiCalls";

function PortFolioStatus() {
  const today = dayjs();

  const location = useLocation();
  const row = location.state?.row;
  const viewProject = location.state?.viewProject;

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
  const [newProjects, setNewProjects] = useState();
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
  const [onSubmit, setOnSubmit] = useState(false);

  const { apiUrl } = apiUrlConfig;
  const dropdown = ["engagement_director", "delivery_director", "delivery_manager", "bu_head", "portfolio_status"];
  useEffect(() => {
    const fetchData = async () => {
      await fetchPortfolioData(apiUrl, dropdown, setEngagementDirector, setDeliveryDirector, setDeliveryManager, setBuHead, setProtfolioStatus);
    };
    fetchData();
  }, []);
  console.log(row, "row")
  useEffect(() => {
    if (viewProject) {
      setSelectedMonth(row.month_year.split(" ")[0]);
      setSelectedYear(row.month_year.split(" ")[1]);
      setSelectedDeliveryDirector(row.delivery_director);
      setSelectedDeliveryManager(row.delivery_manager);
      setChangePortfolioStatus(row.portfolio_status);
      setInFlight(row.in_flight_ee)
      setProjectsOnTrack(row.projects_on_track)
      setNewProjects(row.new_projects_en)
      setProjectAtRisk(row.projects_at_high_risk)
      setRampDown(row.ramp_down)
      setChrun(row.churn)
      setNewProspects(row.new_prospects)
      setNewInitiatives(row.new_initiatives)
      setValueAddsStepper(row.value_adds_delivered)
      setValueAddsDelivered(row.value_adds_delivered_desc)
      setValueAdds(row.value_adds_revenue)
      setValueBoardEvaluation(row.value_board_done)
      setAvbPvbDetails(row.avb_pvb_details)
      setGenAiStepper(row.genai_initiatives)
      setGenAITech(row.genai_desc)
      setClosure(row.closing_risk)
      setCostImpact(row.potential_cost_impact)
      setWriteOff(row.write_off)
      setUnbilledResources(row.unbilled_resources)
      setGrowthImpact(row.potential_growth_impact)
      setTechinal(row.open_technical)
      setProduct(row.open_product)
      setManager(row.open_manager)
      setTeamSize(row.current_team_size)
      setVoluntary(row.voluntary_attrition)
      setInvoluntary(row.involuntary_attrition)
      setEmployeeScore(row.esat_score)
      setLearnings(row.learning_certifications)
      setAdditions(row.new_additions)
      setAttritionRisk(row.attrition_risk)
      setTopPerformers(row.top_performers)
      settopPerformersDesc(row.top_performers_desc)
      setCsat(row.csat_score)
      setFeedBack(row.feedback)
      setEscalation(row.escalations)
      setEscalationDescription(row.escalation_desc)
      setApprecition(row.appreciations)
      setApprecitionDescription(row.appreciations_desc)
      setCritical(row.early_warning_critical)
      setNonCritical(row.early_warning_non_critical)
      setQbr(row.qbr)
      setCapabilitiesPositioned(row.capabilities_positioned)
      setCapabilitiesDescription(row.capabilities_desc)
      setPocsInFlight(row.pocs_in_flight)
      setPocsPlanned(row.pocs_planned)
      setCrossSellOpportunity(row.cross_sell_opportunity)
      setArchitechtureAdvisory(row.architecture_advisory)
      setHackathons(row.accathons)
      setHackathonsDescribed(row.accathons_desc)
      setTotalRevenue(row.total_revenue)
      setBudget(row.budget_value)
      setTotalSpend(row.total_spend)
      setGm(row.gm_percentage)
      setResources(row.resource_status_id)
      setTotalSpend(row.total_spend)
      setTotalInvoice(row.invoice_total)
      setInvoiceNotRealized(row.invoice_not_realized_30d)
      setSunkCosts(row.sunk_costs)
    }
  }, [viewProject]);


  useEffect(() => {
    if (onSubmit) {
      const CreateUpdateData = async () => {
        const a = await CreateUpdatePortFolioStatus(changePortfolioStatus, selectedMonth, selectedYear, apiUrl, selectedBuHead, selectedEngagementDirector, selectedDeliveryDirector, selectedDeliveryManager,
          protfolioStatus,
          inFlight,
          projectsOnTrack,
          newProjects,
          projectAtRisk,
          rampDown,
          chrun,
          newProspects,
          newInitiatives,
          avbPvbDetails,
          valueAdds,
          genAITech,
          valueBoardEvaluation,
          valueAddsStepper,
          genAiStepper,
          valueAddsDelivered,
          closure,
          costImpact,
          writeOff,
          unbilledResources,
          growthImpact,
          techinal,
          product,
          manager,
          teamSize,
          voluntary,
          involuntary,
          employeeScore,
          learnings,
          additions,
          attritionRisk,
          topPerformers,
          topPerformersDesc,
          csat,
          feedback,
          escalation,
          escalationDescription,
          apprecition,
          apprecitionDescription,
          critical,
          nonCritical,
          qbr,
          capabilitiesPositioned,
          capabilitiesDescription,
          pocsInFlight,
          pocsPlanned,
          hackathons,
          hackathonsDescribed,
          crossSellOportunity,
          architechtureAdvisory,
          totalRevenue,
          budget,
          totalSpend,
          gm,
          resources,
          spend,
          totalInvoice,
          invoiceNotRealized,
          sunkCosts);
        console.log(a, "A")
      };
      CreateUpdateData();

    }
  }, [onSubmit]);
  // const dropdowns = ["Ramesh", "Lee", "Tony", "Kinesh"];

  // Check if required fields are selected
  const isStepFormEnabled = selectedDeliveryDirector



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
              disabled={viewProject}
              onChange={(e) => setSelectedMonth(e.target.value)}
              size="small"
            >
              {[
                "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
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
              disabled={viewProject}
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
              disabled={viewProject}
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
          viewProject={viewProject}
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
          setOnSubmit={setOnSubmit}
        />
      </Box>
    </Box>
  );
}

export default PortFolioStatus;
