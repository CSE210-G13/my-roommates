import * as React from 'react';
import { useState, useEffect, createContext } from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PersonalInfoForm from './PersonalInfoForm';
import RoommatePrefForm from './RoommatePrefForm';
import PropertyPrefForm from './PropertyPrefForm';

import { useAuthUser } from '@/firebase/auth';
import { User } from '@/firebase/classes';
import { postUser } from '@/firebase/userDb';

const steps = ['Personal Information', 'Lifestyle and Habits', 'Property Preference'];

function getStepContent(step) {
	switch (step) {
		case 0:
			return <PersonalInfoForm />;
		case 1:
			return <RoommatePrefForm />;
		case 2:
			return <PropertyPrefForm />;
		default:
			throw new Error('Unknown step');
	}
}

export const UserInfoContext = createContext();

export default function FirstTimeUserFlow() {
	const [user, loading] = useAuthUser();

	let initPerson = new User();
	const [userInfo, setUserInfo] = useState(initPerson);

	const router = useRouter();
	const [activeStep, setActiveStep] = React.useState(0);

	useEffect(() => {
		if (user) {
			let nameSplit = user.displayName.split(' ');
			let domain = user.email.split('@')[1];
			let isUCSD = false;
			if (domain.includes('ucsd')) {
				isUCSD = true;
			}
			if (nameSplit.length > 1) {
				setUserInfo({
					...userInfo,
					uid: user.uid,
					isUCSD: isUCSD,
					imageUrl: user.photoURL,
					firstName: nameSplit[0],
					lastName: nameSplit[1],
					email: [user.email, false],
				});
			} else {
				setUserInfo({
					...userInfo,
					uid: user.uid,
					isUCSD: isUCSD,
					imageUrl: user.photoURL,
					firstName: nameSplit[0],
					email: [user.email, false],
				});
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user]);

	const handleNext = () => {
		setActiveStep(activeStep + 1);
	};

	const handleBack = () => {
		setActiveStep(activeStep - 1);
	};

	const handleSubmit = () => {
		postUser(userInfo);
		router.push('/profile');
	};

	return (
		<Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
			<Paper
				variant="outlined"
				sx={{
					mt: { xs: 3, md: 6 },
					mb: { xs: 6, md: 12 },
					p: { xs: 2, md: 3 },
				}}>
				<Typography component="h1" variant="h4" align="center">
					Set up your account
				</Typography>
				<Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
					{steps.map((label) => (
						<Step key={label}>
							<StepLabel>{label}</StepLabel>
						</Step>
					))}
				</Stepper>
				<React.Fragment>
					<UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
						{getStepContent(activeStep)}
						<Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
							{activeStep !== 0 && (
								<Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
									Back
								</Button>
							)}

							{activeStep === steps.length - 1 ? (
								<Button variant="contained" onClick={handleSubmit} sx={{ mt: 3, ml: 1 }}>
									Submit
								</Button>
							) : (
								<Button variant="contained" onClick={handleNext} sx={{ mt: 3, ml: 1 }}>
									Next
								</Button>
							)}
						</Box>
					</UserInfoContext.Provider>
				</React.Fragment>
			</Paper>
		</Container>
	);
}
