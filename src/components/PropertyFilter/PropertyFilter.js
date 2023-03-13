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
import { propertyFiltering } from "../../firebase/filtering";

export default function PropertyFilter(props) {
  const [budgetMin, setBudgetMin] = useState("");
  const [budgetMax, setBudgetMax] = useState("");
  const [numBedrooms, setNumBedrooms] = useState("");
  const [numBathrooms, setNumBathrooms] = useState("");
  const [distance, setDistance] = useState("");
  const [parkingChecked, setParkingChecked] = useState(false);
  const [laundryChecked, setLaundryChecked] = useState(false);
  const [poolChecked, setPoolChecked] = useState(false);
  const [gymChecked, setGymChecked] = useState(false);
  const [acChecked, setAcChecked] = useState(false);
  const [petChecked, setPetChecked] = useState(false);
  const [smokingChecked, setSmokingChecked] = useState(false);

  const handleButtonClick = (event) => {
    var pref = {
      budgetMin: budgetMin,
      budgetMax: budgetMax,
      numBedrooms: numBedrooms,
      numBathrooms: numBathrooms,
      distance: distance,
      parkingChecked: parkingChecked,
      laundryChecked: laundryChecked,
      poolChecked: poolChecked,
      gymChecked: gymChecked,
      acChecked: acChecked,
      petChecked: petChecked,
      smokingChecked: smokingChecked,
    };

    propertyFiltering(pref).then((returnedList) =>
      props.onFilteringProperties(returnedList)
    );
  };

  return (
    <div
      style={{
        margin: "20px 0px 0px 0px",
        width: "20%",
        maxWidth: "350px",
        minWidth: "150px",
      }}
    >
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
          <Typography>Beds & Baths</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {" "}
          <FormControl sx={{ m: 1 }}>
            <InputLabel htmlFor="num_bedrooms">Number of Bedrooms</InputLabel>
            <OutlinedInput
              id="num_bedrooms"
              label="Number of Bedrooms"
              onChange={(event) => {
                setNumBedrooms(event.target.value);
              }}
              value={numBedrooms}
            />
          </FormControl>
          <FormControl sx={{ m: 1 }}>
            <InputLabel htmlFor="num_bathrooms">Number of Bathrooms</InputLabel>
            <OutlinedInput
              id="num_bathrooms"
              label="Number of Bathrooms"
              onChange={(event) => {
                setNumBathrooms(event.target.value);
              }}
              value={numBathrooms}
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
                setParkingChecked(event.target.checked);
              }}
              label="On-site parking"
            />
            <FormControlLabel
              control={<Checkbox />}
              checked={laundryChecked}
              onChange={(event) => {
                setLaundryChecked(event.target.checked);
              }}
              label="In-door laundry"
            />
            <FormControlLabel
              control={<Checkbox />}
              checked={acChecked}
              onChange={(event) => {
                setAcChecked(event.target.checked);
              }}
              label="Have AC"
            />
            <FormControlLabel
              control={<Checkbox />}
              checked={poolChecked}
              onChange={(event) => {
                setPoolChecked(event.target.checked);
              }}
              label="Have Pool"
            />
            <FormControlLabel
              control={<Checkbox />}
              checked={gymChecked}
              onChange={(event) => {
                setGymChecked(event.target.checked);
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
                setPetChecked(event.target.checked);
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
                setSmokingChecked(event.target.checked);
              }}
              label="Non-smoking"
            />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <br />
      <div style={{ float: "right", margin: "-5px 10px 0px 0px" }}>
        <Button variant="contained" onClick={handleButtonClick}>
          Search
        </Button>
      </div>
    </div>
  );
}
