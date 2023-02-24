import React from 'react';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {
	FormControlLabel,
	FormControl,
	FormLabel,
    FormGroup,
    Switch,
	RadioGroup,
	Radio,
	Select,
	MenuItem,
	Box,
	Chip,
    IconButton,
    Avatar,
} from '@mui/material/';
import {ContactInfoInput, ContactInfoSwitch} from './ContactInfo';

import { collegesConst, schoolYearsConst, languagesConst, majorsConst } from '@/constants/constants';

const allColleges = collegesConst;
const allYears = schoolYearsConst;
const allMajors = majorsConst;
const allLanguages = languagesConst;

export default function EditPersonalInformationForm(props) {
    // TODO: get initial state for these values from firebase
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
    const [name, setName] = useState('');
	const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [emailPublic, setEmailPublic] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneNumberPublic, setPhoneNumberPublic] = useState(false);
    const [discord, setDiscord] = useState('');
    const [discordPublic, setDiscordPublic] = useState(false);
    const [instagram, setInstagram] = useState('');
    const [instagramPublic, setInstagramPublic] = useState(false);
    const [linkedin, setLinkedIn] = useState('');
    const [linkedinPublic, setLinkedInPublic] = useState(false);
    const [facebook, setFacebook] = useState('');
    const [facebookPublic, setFacebookPublic] = useState(false);
	const [college, setCollege] = useState('');
	const [year, setYear] = useState('');
	const [major, setMajor] = useState('');
	const [languages, setLanguages] = useState([]);
    const [bio, setBio] = useState('');
    const [profilePic, setProfilePic] = useState('');

    const handleChangeProfilePic = (event) => {
        // TODO: integrate with firebase
        console.log("upload an image");
	};

    const test = (e) => {
        console.log(e);
    }

    return (
            <React.Fragment>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant="h5">
                            Personal Information
                        </Typography>
                    </Grid>
                    <Grid container item xs={12} sm={6} rowSpacing={2} p={2}>
                        <Grid item xs={12}>
                            <IconButton onClick={handleChangeProfilePic}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: "10rem", height: "10rem" }}/>
                            </IconButton>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="name"
                                name="name"
                                label="Name"
                                autoComplete="name"
                                fullWidth
                                variant="standard"
                                value={name}
                                disabled={!props.editing}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Grid>                    
                        <Grid item xs={12}>
                            <FormControl fullWidth disabled={!props.editing}>
                                <FormLabel>Gender</FormLabel>
                                <RadioGroup row onChange={(e) => setGender(e.target.value)}>
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} sm={6} rowSpacing={2} columnSpacing={2} p={2}>
                        <Grid item xs={12} md={4}>
                            <FormControl fullWidth disabled={!props.editing}>
                                <FormLabel>College</FormLabel>
                                <Select value={college} onChange={(e) => setCollege(e.target.value)}>
                                    {allColleges.map((college) => (
                                        <MenuItem key={college} value={college}>
                                            {college}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <FormControl fullWidth disabled={!props.editing}>
                                <FormLabel>School Year</FormLabel>
                                <Select value={year} onChange={(e) => setYear(e.target.value)}>
                                    {allYears.map((year) => (
                                        <MenuItem key={year} value={year}>
                                            {year}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <FormControl fullWidth disabled={!props.editing}>
                                <FormLabel>Major</FormLabel>
                                <Select value={major} onChange={(e) => setMajor(e.target.value)}>
                                    {allMajors.map((major) => (
                                        <MenuItem key={major} value={major}>
                                            {major}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth disabled={!props.editing}>
                                <FormLabel>Languages</FormLabel>
                                <Select
                                    value={languages}
                                    onChange={(e) => setLanguages(e.target.value)}
                                    multiple
                                    renderValue={(selected) => (
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                            {selected.map((value) => (
                                                <Chip key={value} label={value} />
                                            ))}
                                        </Box>
                                    )}>
                                    {allLanguages.map((language) => (
                                        <MenuItem key={language} value={language}>
                                            {language}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="outlined-multiline-static"
                                label="Bio"
                                multiline
                                fullWidth
                                rows={4}
                                value={bio}
                                placeholder="Tell everyone a little about yourself"
                                inputProps={{ maxLength: 150 }}
                                disabled={!props.editing}
                                onChange={(e) => setBio(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} sm={6} rowSpacing={2} sx={{ px: 2, pb: 2, display: "flex", alignContent: "flex-start"}}>
                        < ContactInfoInput 
                            id="email"
                            label="Email"
                            value={email}
                            autoComplete="email"
                            disabled={!props.editing}
                            handleUserInput={setEmail}
                        />
                        <ContactInfoSwitch
                            id={"emailPublic"}
                            checked={emailPublic}
                            disabled={!props.editing}
                            handleUserInput={setEmailPublic}
                        />
                        <ContactInfoInput 
                            id="phoneNumber"
                            label="Phone Number"
                            value={phoneNumber}
                            autoComplete="tel"
                            disabled={!props.editing}
                            handleUserInput={setPhoneNumber}
                        />
                        <ContactInfoSwitch
                            id="phoneNumberPublic"
                            checked={phoneNumberPublic}
                            disabled={!props.editing}
                            handleUserInput={setPhoneNumberPublic}
                        />
                    </Grid>
                    <Grid container item xs={12} sm={6} rowSpacing={2} columnSpacing={2} sx={{ px: 2, pb: 2}}>
                        <ContactInfoInput 
                            id="discord"
                            label="Discord"
                            value={discord}
                            disabled={!props.editing}
                            handleUserInput={setDiscord}
                        />
                        <ContactInfoSwitch
                            id="discordPublic"
                            checked={discordPublic}
                            disabled={!props.editing}
                            handleUserInput={setDiscordPublic}
                        />
                        <ContactInfoInput
                            id="instagram"
                            label="Instagram"
                            value={instagram}
                            disabled={!props.editing}
                            handleUserInput={setInstagram}
                        />
                        <ContactInfoSwitch
                            id="instagramPublic"
                            checked={instagramPublic}
                            disabled={!props.editing}
                            handleUserInput={setInstagramPublic}
                        />
                        <ContactInfoInput
                            id="linkedin"
                            label="LinkedIn"
                            value={linkedin}
                            disabled={!props.editing}
                            handleUserInput={setLinkedIn}
                        />
                        <ContactInfoSwitch
                            id="linkedinPublic"
                            checked={linkedinPublic}
                            disabled={!props.editing}
                            handleUserInput={setLinkedInPublic}
                        />
                        <ContactInfoInput
                            id="facebook"
                            label="Facebook"
                            value={facebook}
                            disabled={!props.editing}
                            handleUserInput={setFacebook}
                        />
                        <ContactInfoSwitch
                            id="facebookPublic"
                            checked={facebookPublic}
                            disabled={!props.editing}
                            handleUserInput={setFacebookPublic}
                        />
                    </Grid>
                </Grid>

            </React.Fragment>
        );
    }