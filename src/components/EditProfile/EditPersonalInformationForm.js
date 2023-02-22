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
    Button,
    IconButton,
    Avatar,
} from '@mui/material/';

// import { getAuthUser } from '@/firebase/userDb';

const allColleges = ['Revelle', 'Muir', 'Marshall', 'Warren', 'Roosevelt', 'Sixth', 'Seventh', 'Eight'];
const allYears = ['Freshmen', 'Sophomore', 'Junior', 'Senior', 'Masters', 'PHD'];
const allMajors = ['Math', 'Computer Science', 'Biology'];
// TODO: add more langs and majors
const allLanguages = ['English', 'Chinese', 'French', 'Japanese'];

export default function EditPersonalInformationForm(props) {
    // const [user, loading] = getAuthUser();
    // let name = user?.displayName;
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
		// setAnchorElUser(event.currentTarget);
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
                    {/* <Grid container spacing={2} xs={12} sm={6} p={{ xs: 2, md: 3 }}> */}
                    <Grid container xs={12} sm={6} rowSpacing={2} p={2}>
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
                    <Grid container xs={12} sm={6} rowSpacing={2} columnSpacing={2} p={2}>
                    {/* <Grid container xs={12} sm={6} spacing={2} p={{ xs: 2, md: 3 }}> */}
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
                    <Grid container xs={12} sm={6} rowSpacing={2} sx={{ px: 2, pb: 2, display: "flex", alignContent: "flex-start"}}>
                        <Grid item xs={12} md={8.7}>
                            <TextField
                                required
                                id="email"
                                name="email"
                                label="Email"
                                fullWidth
                                value={email}
                                autoComplete="email"
                                variant="standard"
                                disabled={!props.editing}
                                onChange={(e) => setEmail(e.target.value)}/>
                        </Grid>                    
                        <Grid item xs={12} md={3.3} sx={{display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
                            <FormGroup>
                                <FormControlLabel 
                                    control={<Switch />} 
                                    label="Public"
                                    labelPlacement="start"
                                    checked={emailPublic}
                                    disabled={!props.editing}
                                    onChange={(e) => setEmailPublic(e.target.checked)}
                                />
                            </FormGroup>                        
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <TextField
                                required
                                id="phoneNumber"
                                name="phoneNumber"
                                label="Phone Number"
                                fullWidth
                                value={phoneNumber}
                                autoComplete="tel"
                                variant="standard"
                                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                                disabled={!props.editing}
                                onChange={(e) => setPhoneNumber(e.target.value)}/>
                        </Grid>
                        <Grid item xs={12} md={4} sx={{display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
                            <FormGroup>
                                <FormControlLabel 
                                    control={<Switch />} 
                                    label="Public"
                                    labelPlacement="start"
                                    checked={phoneNumberPublic}
                                    disabled={!props.editing}
                                    onChange={(e) => setPhoneNumberPublic(e.target.checked)}
                                />
                            </FormGroup>                        
                        </Grid>
                    </Grid>
                    <Grid container xs={12} sm={6} rowSpacing={2} columnSpacing={2} sx={{ px: 2, pb: 2}}>
                        <Grid item xs={12} md={8}>
                            <TextField
                                id="discord"
                                name="discord"
                                label="Discord"
                                fullWidth
                                value={discord}
                                variant="standard"
                                disabled={!props.editing}
                                onChange={(e) => setDiscord(e.target.value)}/>
                        </Grid>
                        <Grid item xs={12} md={4} sx={{display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
                            <FormGroup>
                                <FormControlLabel 
                                    control={<Switch />} 
                                    label="Public"
                                    labelPlacement="start"
                                    checked={discordPublic}
                                    disabled={!props.editing}
                                    onChange={(e) => setDiscordPublic(e.target.checked)}
                                />
                            </FormGroup>                        
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <TextField
                                id="instagram"
                                name="instagram"
                                label="Instagram"
                                fullWidth
                                value={discord}
                                variant="standard"
                                disabled={!props.editing}
                                onChange={(e) => setInstagram(e.target.value)}/>
                        </Grid>
                        <Grid item xs={12} md={4} sx={{display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
                            <FormGroup>
                                <FormControlLabel 
                                    control={<Switch />} 
                                    label="Public"
                                    labelPlacement="start"
                                    checked={instagramPublic}
                                    disabled={!props.editing}
                                    onChange={(e) => setInstagramPublic(e.target.checked)}
                                />
                            </FormGroup>                        
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <TextField
                                id="linkedin"
                                name="linkedin"
                                label="LinkedIn"
                                fullWidth
                                value={linkedin}
                                variant="standard"
                                disabled={!props.editing}
                                onChange={(e) => setLinkedIn(e.target.value)}/>
                        </Grid>
                        <Grid item xs={12} md={4} sx={{display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
                            <FormGroup>
                                <FormControlLabel 
                                    control={<Switch />} 
                                    label="Public"
                                    labelPlacement="start"
                                    checked={linkedinPublic}
                                    disabled={!props.editing}
                                    onChange={(e) => setLinkedInPublic(e.target.checked)}
                                />
                            </FormGroup>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <TextField
                                id="facebook"
                                name="facebook"
                                label="Facebook"
                                fullWidth
                                value={facebook}
                                variant="standard"
                                disabled={!props.editing}
                                onChange={(e) => setFacebook(e.target.value)}/>
                        </Grid>
                        <Grid item xs={12} md={4} sx={{display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
                            <FormGroup>
                                <FormControlLabel 
                                    control={<Switch />} 
                                    label="Public"
                                    labelPlacement="start"
                                    checked={facebookPublic}
                                    disabled={!props.editing}
                                    onChange={(e) => setFacebookPublic(e.target.checked)}
                                />
                            </FormGroup>                        
                        </Grid>
                    </Grid>
                        
                </Grid>
            </React.Fragment>
        );
    }