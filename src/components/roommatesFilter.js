import * as React from "react";

import {
  languagesConst,
  majorsConst,
  collegesConst,
  schoolYearsConst,
  dislikesConst,
} from "@/constants/constants";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import Select from "@mui/material/Select";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SimpleAccordion() {
  const allDislikes = dislikesConst;
  const allLanguages = languagesConst;
  const allMajors = majorsConst;
  const allSchoolYear = schoolYearsConst;
  const allColleges = collegesConst;
  const iniYearsChecks = allSchoolYear.reduce((acc, val) => {
    acc[val] = false;
    return acc;
  }, {});
  const iniCollegesChecks = allColleges.reduce((acc, val) => {
    acc[val] = false;
    return acc;
  }, {});
  const iniDislikesChecks = allDislikes.reduce((acc, val) => {
    acc[val] = false;
    return acc;
  }, {});

  const [femaleChecked, setFemaleChecked] = useState("");
  const [maleChecked, setMaleChecked] = useState("");
  const [bedtimeFrom, setBedtimeFrom] = useState("");
  const [bedtimeTo, setBedtimeTo] = useState("");
  const [languages, setLanguages] = useState([]);
  const [majors, setMajors] = useState([]);
  const [colleges, setColleges] = useState(iniCollegesChecks);
  const [dislikes, setDislikes] = useState(iniDislikesChecks);
  const [years, setYears] = useState(iniYearsChecks);

  const handleCollegeCheck = (event) => {
    setColleges({
      ...colleges,
      [event.target.name]: event.target.checked,
    });
  };

  const handleYearsCheck = (event) => {
    setYears({
      ...years,
      [event.target.name]: event.target.checked,
    });
  };

  const handleDislikesCheck = (event) => {
    setDislikes({
      ...dislikes,
      [event.target.name]: event.target.checked,
    });
  };

  const handleButtonClick = (event) => {
    console.log(dislikes);
    console.log(years);
    console.log(colleges);
    console.log(bedtimeFrom);
    console.log(bedtimeTo);
  };

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Gender</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              checked={femaleChecked}
              onChange={(event) => {
                setFemaleChecked(event.target.value);
              }}
              label="Female"
            />
            <FormControlLabel
              control={<Checkbox />}
              checked={maleChecked}
              onChange={(event) => {
                setMaleChecked(event.target.value);
              }}
              label="Male"
            />
          </FormGroup>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Basic Info</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormLabel>Desired College</FormLabel>
            {allColleges.map((college) => {
              return (
                <FormControlLabel
                  control={<Checkbox />}
                  type="checkbox"
                  checked={colleges[college]}
                  label={college}
                  name={college}
                  onChange={handleCollegeCheck}
                />
              );
            })}
          </FormGroup>
          <FormGroup>
            <br />
            <FormLabel>Desired School year</FormLabel>
            {allSchoolYear.map((year) => {
              return (
                <FormControlLabel
                  control={<Checkbox />}
                  type="checkbox"
                  checked={years[year]}
                  label={year}
                  name={year}
                  onChange={handleYearsCheck}
                />
              );
            })}
          </FormGroup>
          <FormControl style={{ width: 200 }}>
            <br />
            <FormLabel>Desired Languages</FormLabel>
            <Select
              value={languages}
              onChange={(e) => setLanguages(e.target.value)}
              multiple
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
              {allLanguages.map((language) => (
                <MenuItem key={language} value={language}>
                  {language}
                </MenuItem>
              ))}
            </Select>
            <br />
          </FormControl>
          <br />
          <FormControl style={{ width: 200 }}>
            <FormLabel>Desired Majors</FormLabel>
            <Select
              value={majors}
              onChange={(e) => setMajors(e.target.value)}
              multiple
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
              {allMajors.map((major) => (
                <MenuItem key={major} value={major}>
                  {major}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Habits</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl>
            <FormLabel>Desired bedtime</FormLabel> <br />
            <div style={{ display: "flex" }}>
              <Typography
                style={{
                  padding: "5px",
                }}
              >
                Between
              </Typography>
              <TextField
                style={{
                  margin: "-5px 5px 10px 5px",
                }}
                id="bed_from_time"
                type="time"
                defaultValue="22:00"
                inputProps={{
                  step: 1800,
                }}
                onChange={(e) => setBedtimeFrom(e.target.value)}
              />
              <Typography
                style={{
                  padding: "5px",
                }}
              >
                and
              </Typography>
              <TextField
                style={{
                  margin: "-5px 5px 10px 5px",
                }}
                id="bed_to_time"
                type="time"
                defaultValue="22:00"
                inputProps={{
                  step: 1800,
                }}
                onChange={(e) => setBedtimeTo(e.target.value)}
              />
            </div>
          </FormControl>
          <br />
          <FormGroup>
            <FormLabel>Lifestyle</FormLabel>
            {allDislikes.map((dislike) => {
              return (
                <FormControlLabel
                  control={<Checkbox />}
                  type="checkbox"
                  checked={dislikes[dislike]}
                  label={"Okay with " + dislike}
                  name={dislike}
                  onChange={handleDislikesCheck}
                />
              );
            })}
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
