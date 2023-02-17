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

export default function SimpleAccordion() {
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
                // margin: "1",
                // padding: "5px",
                // margin: "2px",
                // "& > :not(style)": {
                //   m: 1,
                //   width: "15ch",
                //   display: "inline-flex",
                // },
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
            <FormControlLabel control={<Checkbox />} label="On-site parking" />
            <FormControlLabel control={<Checkbox />} label="In-door laundry" />
            <FormControlLabel control={<Checkbox />} label="Have AC" />
            <FormControlLabel control={<Checkbox />} label="Have Pool" />
            <FormControlLabel control={<Checkbox />} label="Have Gym" />
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
            <FormControlLabel control={<Checkbox />} label="Pets-friendly" />
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
            <FormControlLabel control={<Checkbox />} label="Non-smoking" />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <br />
      <div style={{ float: "right", margin: "-5px 10px 0px 0px" }}>
        <Button variant="outlined">Save</Button>
      </div>
    </div>
  );
}
