import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SimpleAccordion() {
  const [budgetMin, setBudgetMin] = useState("");
  const [budgetMax, setBudgetMax] = useState("");
  const [sizeMin, setSizeMin] = useState("");
  const [sizeMax, setSizeMax] = useState("");
  const [distance, setDistance] = useState("");
  const [parkingChecked, setParkingChecked] = React.useState(false);
  const [laundryChecked, setLaundryChecked] = React.useState(false);
  const [poolChecked, setPoolChecked] = React.useState(false);
  const [gymChecked, setGymChecked] = React.useState(false);
  const [acChecked, setAcChecked] = React.useState(false);
  const [petChecked, setPetChecked] = React.useState(false);
  const [smokingChecked, setSmokingChecked] = React.useState(false);

  const handlebudgetMinChange = (event) => {
    setBudgetMin(event.target.value);
  };
  const handlebudgetMaxChange = (event) => {
    setBudgetMax(event.target.value);
  };
  const handlesizeMinChange = (event) => {
    setSizeMin(event.target.value);
  };
  const handlesizeMaxChange = (event) => {
    setSizeMax(event.target.value);
  };
  const handleDistanceChange = (event) => {
    setDistance(event.target.value);
  };
  const handleParkingChecked = (event) => {
    setParkingChecked(event.target.checked);
  };
  const handleLaundryChecked = (event) => {
    setLaundryChecked(event.target.checked);
  };
  const handlePoolChecked = (event) => {
    setPoolChecked(event.target.checked);
  };
  const handleAcChecked = (event) => {
    setAcChecked(event.target.checked);
  };
  const handleGymChecked = (event) => {
    setGymChecked(event.target.checked);
  };
  const handlePetChecked = (event) => {
    setPetChecked(event.target.checked);
  };
  const handleSmokingChecked = (event) => {
    setSmokingChecked(event.target.checked);
  };

  const handleButtonClick = (event) => {
    console.log(budgetMax);
    console.log(budgetMin);
    console.log(sizeMax);
    console.log(sizeMin);
    console.log(distance);
    console.log(smokingChecked);
    // call functions on the backend layer
  };
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Budget</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl sx={{ m: 1 }}>
            <InputLabel htmlFor="budget_maximum">Maximum</InputLabel>
            <OutlinedInput
              id="budget_maximum"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              label="Maximum"
              onChange={handlebudgetMaxChange}
              value={budgetMax}
            />
          </FormControl>
          <FormControl sx={{ m: 1 }}>
            <InputLabel htmlFor="budget_minimum">Minimum</InputLabel>
            <OutlinedInput
              id="budget_minimum"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              label="Minimum"
              onChange={handlebudgetMinChange}
              value={budgetMin}
            />
          </FormControl>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Square Feet</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {" "}
          <FormControl sx={{ m: 1 }}>
            <InputLabel htmlFor="size_maximum">Maximum</InputLabel>
            <OutlinedInput
              id="size_maximum"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              label="Maximum"
              onChange={handlesizeMaxChange}
              value={sizeMax}
            />
          </FormControl>
          <FormControl sx={{ m: 1 }}>
            <InputLabel htmlFor="size_minimum">Minimum</InputLabel>
            <OutlinedInput
              id="size_minimum"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              label="Minimum"
              onChange={handlesizeMinChange}
              value={sizeMin}
            />
          </FormControl>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Distance to School</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box component="form" noValidate autoComplete="off">
            <div
              style={{
                display: "flex",
              }}
            >
              <Typography
                style={{
                  padding: "5px",
                }}
              >
                Within
              </Typography>
              <TextField
                style={{
                  margin: "-5px 5px 10px 5px",
                }}
                id="distance-maximum"
                label="miles"
                variant="outlined"
                onChange={handleDistanceChange}
                value={distance}
              />
              <Typography
                style={{
                  padding: "5px",
                }}
              >
                to school
              </Typography>
            </div>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Amentities</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              checked={parkingChecked}
              onChange={handleParkingChecked}
              label="On-site parking"
            />
            <FormControlLabel
              control={<Checkbox />}
              checked={laundryChecked}
              onChange={handleLaundryChecked}
              label="In-door laundry"
            />
            <FormControlLabel
              control={<Checkbox />}
              checked={acChecked}
              onChange={handleAcChecked}
              label="Have AC"
            />
            <FormControlLabel
              control={<Checkbox />}
              checked={poolChecked}
              onChange={handlePoolChecked}
              label="Have Pool"
            />
            <FormControlLabel
              control={<Checkbox />}
              checked={gymChecked}
              onChange={handleGymChecked}
              label="Have Gym"
            />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Pets</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              checked={petChecked}
              onChange={handlePetChecked}
              label="Pets-friendly"
            />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Smoking</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              checked={smokingChecked}
              onChange={handleSmokingChecked}
              label="Non-smoking"
            />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <br />
      <div style={{ float: "right", margin: "-5px 10px 0px 0px" }}>
        <Button variant="outlined" onClick={handleButtonClick}>
          Save
        </Button>
      </div>
    </div>
  );
}
