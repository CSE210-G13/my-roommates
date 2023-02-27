import React from 'react';
import { useState, useEffect, useContext } from 'react';
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
    FormGroup,
    Switch,
} from '@mui/material/';

import { collegesConst, schoolYearsConst, languagesConst, majorsConst } from '@/constants/constants';
import { UserInfoContext } from './EditProfile';

const allColleges = collegesConst;
const allYears = schoolYearsConst;
const allMajors = majorsConst;
const allLanguages = languagesConst;

export default function EditPersonalInformationForm(props) {
    const { userInfo, setUserInfo } = useContext(UserInfoContext);

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
                                    <Avatar alt={userInfo.firstName + ' ' + userInfo.lastName} src={userInfo.imageUrl} sx={{ width: "10rem", height: "10rem" }}/>
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
                                value={userInfo.firstName + ' ' + userInfo.lastName}
                                disabled={!props.editing}
                                onChange={(e) => {
                                    let name = e.target.value;
                                    let nameSplit = name.split(' ');
                                    if (nameSplit.length > 1) {
                                        setUserInfo({ 
                                            ...userInfo, 
                                            firstName: nameSplit[0], 
                                            lastName: nameSplit[1]})
                                    }
                                    else {
                                        setUserInfo({ 
                                            ...userInfo,
                                            firstName: nameSplit[0]})
                                    }
                                }}
                            />
                        </Grid>                    
                        <Grid item xs={12}>
                            <FormControl fullWidth disabled={!props.editing}>
                                <FormLabel>Gender</FormLabel>
                                <RadioGroup
                                    row
                                    name="gender"
                                    value={userInfo.gender}
                                    onChange={(e) => {
                                        setUserInfo({ ...userInfo, gender: e.target.value })
                                    }}
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
                                <Select 
                                    value={userInfo.college} 
                                    onChange={(e) => {
                                        setUserInfo({ ...userInfo, college: e.target.value});
                                    }}>
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
                                <Select 
                                    value={userInfo.schoolYear} 
                                    onChange={(e) => {
                                        setUserInfo({ ...userInfo, schoolYear: e.target.value});
                                    }}>
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
                                <Select 
                                    value={userInfo.major} 
                                    onChange={(e) => {
                                        setUserInfo({...userInfo, major: e.target.value});
                                    }}>
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
                                    value={userInfo.languages}
                                    onChange={(e) => {
                                        setUserInfo({...userInfo, languages: e.target.value});
                                    }}
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
                                value={userInfo.bio}
                                placeholder="Tell everyone a little about yourself"
                                inputProps={{ maxLength: 150 }}
                                disabled={!props.editing}
                                onChange={(e) => {setUserInfo({...userInfo, bio: e.target.value});}}
                            />
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} sm={6} rowSpacing={2} sx={{ px: 2, pb: 2, display: "flex", alignContent: "flex-start"}}>
                        <Grid item xs={12} md={8.7}>
                            <TextField
                                required
                                id="email"
                                name="email"
                                label="Email"
                                fullWidth
                                value={userInfo.email[0]}
                                autoComplete="email"
                                variant="standard"
                                disabled={!props.editing}
                                onChange={(e) => setUserInfo({...userInfo, email: [e.target.value, userInfo.email[1]]})}/>
                        </Grid>
                        <Grid item xs={12} md={3.3} sx={{display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
                            <FormGroup>
                                <FormControlLabel 
                                    control={<Switch />} 
                                    id="emailPublic"
                                    label="Public"
                                    labelPlacement="start"
                                    checked={userInfo.email[1]}
                                    disabled={!props.editing}
                                    onChange={(e) => setUserInfo({...userInfo, email: [userInfo.email[0], e.target.checked]})}
                                />
                            </FormGroup>                        
                        </Grid>
                        <Grid item xs={12} md={8.7}>
                            <TextField
                                required
                                id="phoneNumber"
                                name="phoneNumber"
                                label="Phone Number"
                                fullWidth
                                value={userInfo.phoneNumber[0]}
                                autoComplete="tel"
                                variant="standard"
                                disabled={!props.editing}
                                onChange={(e) => setUserInfo({...userInfo, phoneNumber: [e.target.value, userInfo.phoneNumber[1]]})}/>
                        </Grid> 
                        <Grid item xs={12} md={3.3} sx={{display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
                            <FormGroup>
                                <FormControlLabel 
                                    control={<Switch />} 
                                    id="phoneNumberPublic"
                                    label="Public"
                                    labelPlacement="start"
                                    checked={userInfo.phoneNumber[1]}
                                    disabled={!props.editing}
                                    onChange={(e) => setUserInfo({...userInfo, phoneNumber: [userInfo.phoneNumber[0], e.target.checked]})}
                                />
                            </FormGroup>                        
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} sm={6} rowSpacing={2} columnSpacing={2} sx={{ px: 2, pb: 2}}>
                        <Grid item xs={12} md={8.7}>
                            <TextField
                                required
                                id="discord"
                                name="discord"
                                label="Discord"
                                fullWidth
                                value={userInfo.discord[0]}
                                variant="standard"
                                disabled={!props.editing}
                                onChange={(e) => setUserInfo({...userInfo, discord: [e.target.value, userInfo.discord[1]]})}/>
                        </Grid>
                        <Grid item xs={12} md={3.3} sx={{display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
                            <FormGroup>
                                <FormControlLabel 
                                    control={<Switch />} 
                                    id="discordPublic"
                                    label="Public"
                                    labelPlacement="start"
                                    checked={userInfo.discord[1]}
                                    disabled={!props.editing}
                                    onChange={(e) => setUserInfo({...userInfo, discord: [userInfo.discord[0], e.target.checked]})}
                                />
                            </FormGroup>                        
                        </Grid>
                        <Grid item xs={12} md={8.7}>
                            <TextField
                                required
                                id="instagram"
                                name="instagram"
                                label="Instagram"
                                fullWidth
                                value={userInfo.instagram[0]}
                                variant="standard"
                                disabled={!props.editing}
                                onChange={(e) => setUserInfo({...userInfo, instagram: [e.target.value, userInfo.instagram[1]]})}/>
                        </Grid>
                        <Grid item xs={12} md={3.3} sx={{display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
                            <FormGroup>
                                <FormControlLabel 
                                    control={<Switch />} 
                                    id="instagramPublic"
                                    label="Public"
                                    labelPlacement="start"
                                    checked={userInfo.instagram[1]}
                                    disabled={!props.editing}
                                    onChange={(e) => setUserInfo({...userInfo, instagram: [userInfo.instagram[0], e.target.checked]})}
                                />
                            </FormGroup>                        
                        </Grid>
                        <Grid item xs={12} md={8.7}>
                            <TextField
                                required
                                id="linkedin"
                                name="linkedin"
                                label="LinkedIn"
                                fullWidth
                                value={userInfo.linkedin[0]}
                                variant="standard"
                                disabled={!props.editing}
                                onChange={(e) => setUserInfo({...userInfo, linkedin: [e.target.value, userInfo.linkedin[1]]})}/>
                        </Grid>
                        <Grid item xs={12} md={3.3} sx={{display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
                            <FormGroup>
                                <FormControlLabel 
                                    control={<Switch />} 
                                    id="linkedinPublic"
                                    label="Public"
                                    labelPlacement="start"
                                    checked={userInfo.linkedin[1]}
                                    disabled={!props.editing}
                                    onChange={(e) => setUserInfo({...userInfo, linkedin: [userInfo.linkedin[0], e.target.checked]})}
                                />
                            </FormGroup>                        
                        </Grid>
                        <Grid item xs={12} md={8.7}>
                            <TextField
                                required
                                id="facebook"
                                name="facebook"
                                label="Facebook"
                                fullWidth
                                value={userInfo.facebook[0]}
                                variant="standard"
                                disabled={!props.editing}
                                onChange={(e) => setUserInfo({...userInfo, facebook: [e.target.value, userInfo.facebook[1]]})}/>
                        </Grid> 
                        <Grid item xs={12} md={3.3} sx={{display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
                            <FormGroup>
                                <FormControlLabel 
                                    control={<Switch />} 
                                    id="facebookPublic"
                                    label="Public"
                                    labelPlacement="start"
                                    checked={userInfo.facebook[1]}
                                    disabled={!props.editing}
                                    onChange={(e) => setUserInfo({...userInfo, facebook: [userInfo.facebook[0], e.target.checked]})}
                                />
                            </FormGroup>                        
                        </Grid>
                    </Grid>
                </Grid>

            </React.Fragment>
        );
    }