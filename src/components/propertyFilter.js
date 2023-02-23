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
  const [parkingChecked, setParkingChecked] = useState(false);
  const [laundryChecked, setLaundryChecked] = useState(false);
  const [poolChecked, setPoolChecked] = useState(false);
  const [gymChecked, setGymChecked] = useState(false);
  const [acChecked, setAcChecked] = useState(false);
  const [petChecked, setPetChecked] = useState(false);
  const [smokingChecked, setSmokingChecked] = useState(false);

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
              onChange={(event) => {
                setBudgetMax(event.target.value);
              }}
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
              onChange={(event) => {
                setBudgetMin(event.target.value);
              }}
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
              onChange={(event) => {
                setSizeMax(event.target.value);
              }}
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
              onChange={(event) => {
                setSizeMin(event.target.value);
              }}
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
                onChange={(event) => {
                  setDistance(event.target.value);
                }}
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
              onChange={(event) => {
                setParkingChecked(event.target.value);
              }}
              label="On-site parking"
            />
            <FormControlLabel
              control={<Checkbox />}
              checked={laundryChecked}
              onChange={(event) => {
                setLaundryChecked(event.target.value);
              }}
              label="In-door laundry"
            />
            <FormControlLabel
              control={<Checkbox />}
              checked={acChecked}
              onChange={(event) => {
                setAcChecked(event.target.value);
              }}
              label="Have AC"
            />
            <FormControlLabel
              control={<Checkbox />}
              checked={poolChecked}
              onChange={(event) => {
                setPoolChecked(event.target.value);
              }}
              label="Have Pool"
            />
            <FormControlLabel
              control={<Checkbox />}
              checked={gymChecked}
              onChange={(event) => {
                setGymChecked(event.target.value);
              }}
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
              onChange={(event) => {
                setPetChecked(event.target.value);
              }}
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
              onChange={(event) => {
                setSmokingChecked(event.target.value);
              }}
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
