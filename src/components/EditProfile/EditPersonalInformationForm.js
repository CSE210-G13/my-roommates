import React from 'react';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {
	FormControlLabel,
	FormControl,
	FormLabel,
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
    let user = props.user;

	const [firstName, setFirstName] = useState(user.firstName);
	const [lastName, setLastName] = useState(user.lastName);
    const [name, setName] = useState(firstName + ' ' + lastName);
	const [gender, setGender] = useState(user.gender);
    const [email, setEmail] = useState(user.email[0]);
    const [emailPublic, setEmailPublic] = useState(user.email[1]);
    const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber[0]);
    const [phoneNumberPublic, setPhoneNumberPublic] = useState(user.phoneNumber[1]);
    const [discord, setDiscord] = useState(user.discord[0]);
    const [discordPublic, setDiscordPublic] = useState(user.discord[1]);
    const [instagram, setInstagram] = useState(user.instagram[0]);
    const [instagramPublic, setInstagramPublic] = useState(user.instagram[1]);
    const [linkedin, setLinkedIn] = useState(user.linkedin[0]);
    const [linkedinPublic, setLinkedInPublic] = useState(user.linkedin[1]);
    const [facebook, setFacebook] = useState(user.facebook[0]);
    const [facebookPublic, setFacebookPublic] = useState(user.facebook[1]);
	const [college, setCollege] = useState(user.college);
	const [year, setYear] = useState(user.schoolYear);
	const [major, setMajor] = useState(user.major);
	const [languages, setLanguages] = useState(user.languages);
    const [bio, setBio] = useState(user.bio);
    const [imageUrl, setImageUrl] = useState(user.imageUrl);

    useEffect(() => {setFirstName(firstName)}, [firstName]);
    useEffect(() => {setLastName(lastName)}, [lastName]);
    useEffect(() => {setName(name)}, [name]);
    useEffect(() => {setGender(gender)}, [gender]);
    useEffect(() => {setEmail(email)}, [email]);
    useEffect(() => {setEmailPublic(emailPublic)}, [emailPublic]);
    useEffect(() => {setPhoneNumber(phoneNumber)}, [phoneNumber]);
    useEffect(() => {setPhoneNumberPublic(phoneNumberPublic)}, [phoneNumberPublic]);
    useEffect(() => {setDiscord(discord)}, [discord]);
    useEffect(() => {setDiscordPublic(discordPublic)}, [discordPublic]);
    useEffect(() => {setInstagram(instagram)}, [instagram]);
    useEffect(() => {setInstagramPublic(instagramPublic)}, [instagramPublic]);
    useEffect(() => {setLinkedIn(linkedin)}, [linkedin]);
    useEffect(() => {setLinkedInPublic(linkedinPublic)}, [linkedinPublic]);
    useEffect(() => {setFacebook(facebook)}, [facebook]);
    useEffect(() => {setFacebookPublic(facebookPublic)}, [facebookPublic]);
    useEffect(() => {setCollege(college)}, [college]);
    useEffect(() => {setYear(year)}, [year]);
    useEffect(() => {setMajor(major)}, [major]);
    useEffect(() => {setLanguages(languages)}, [languages]);
    useEffect(() => {setBio(bio)}, [bio]);
    useEffect(() => {setImageUrl(imageUrl)}, [imageUrl]);

    const handleChangeProfilePic = (event) => {
        // TODO: integrate with firebase
        console.log("upload an image");
	};

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
                                    <Avatar alt={name} src={imageUrl} sx={{ width: "10rem", height: "10rem" }}/>
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
                                <RadioGroup
                                    row
                                    name="gender"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                >
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