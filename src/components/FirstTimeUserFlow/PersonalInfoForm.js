import * as React from 'react';
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
} from '@mui/material/';

import { collegesConst, schoolYearsConst, languagesConst, majorsConst } from '@/constants/constants';
import { UserInfoContext } from './FirstTimeUserFlow';

const allColleges = collegesConst;
const allYears = schoolYearsConst;
const allMajors = majorsConst;
const allLanguages = languagesConst;

export default function PersonalInfoForm() {
	const { userInfo, setUserInfo } = useContext(UserInfoContext);

	return (
		<React.Fragment>
			<Typography variant="h6" gutterBottom data-testid="form title">
				Personal Information
			</Typography>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id="firstName"
						name="firstName"
						label="First name"
						autoComplete="given-name"
						fullWidth
						variant="standard"
						value={userInfo.firstName}
						onChange={(e) => {
							setUserInfo({ ...userInfo, firstName: e.target.value });
						}}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id="lastName"
						name="lastName"
						label="Last name"
						fullWidth
						value={userInfo.lastName}
						autoComplete="family-name"
						variant="standard"
						onChange={(e) => setUserInfo({ ...userInfo, lastName: e.target.value })}
					/>
				</Grid>
				<Grid item xs={12}>
					<FormControl fullWidth>
						<FormLabel>Gender</FormLabel>
						<RadioGroup row onChange={(e) => setUserInfo({ ...userInfo, gender: e.target.value })}>
							<FormControlLabel value="Male" control={<Radio />} label="Male" />
							<FormControlLabel value="Female" control={<Radio />} label="Female" />
							<FormControlLabel value="Other" control={<Radio />} label="Other" />
						</RadioGroup>
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl fullWidth>
						<FormLabel>College</FormLabel>
						<Select
							value={userInfo.college}
							onChange={(e) => setUserInfo({ ...userInfo, college: e.target.value })}>
							{allColleges.map((college) => (
								<MenuItem key={college} value={college}>
									{college}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl fullWidth>
						<FormLabel>School Year</FormLabel>
						<Select
							value={userInfo.schoolYear}
							onChange={(e) => setUserInfo({ ...userInfo, schoolYear: e.target.value })}>
							{allYears.map((year) => (
								<MenuItem key={year} value={year}>
									{year}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl fullWidth>
						<FormLabel>Major</FormLabel>
						<Select value={userInfo.major} onChange={(e) => setUserInfo({ ...userInfo, major: e.target.value })}>
							{allMajors.map((major) => (
								<MenuItem key={major} value={major}>
									{major}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl fullWidth>
						<FormLabel>Languages</FormLabel>
						<Select
							value={userInfo.languages}
							onChange={(e) => setUserInfo({ ...userInfo, languages: e.target.value })}
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
			</Grid>
		</React.Fragment>
	);
}
