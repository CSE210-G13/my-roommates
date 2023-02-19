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
import { postUser } from '@/firebase/userDb';

const steps = ['Personal Information', 'Roommate Preference', 'Property Preference'];

function getStepContent(step) {
	switch (step) {
		case 0:
			return <PersonalInfoForm onFirstNameChange />;
		case 1:
			return <RoommatePrefForm />;
		case 2:
			return <PropertyPrefForm />;
		default:
			throw new Error('Unknown step');
	}
}

export default function FirstTimeUserFlow() {
	const router = useRouter();
	const [activeStep, setActiveStep] = React.useState(0);
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [gender, setGender] = useState('');
	const [personInfo, setPersonInfo] = useState({});

	const handleNext = () => {
		setActiveStep(activeStep + 1);
	};

	const handleBack = () => {
		setActiveStep(activeStep - 1);
	};

	const handleSubmit = () => {
		const person = {
			'first name': firstName,
			'last name': lastName,
		};
		// Todo: complete this function in userDb.js
		// postUser('user');
		console.log('person', person);
		alert('post on firebase');
		router.push('/');
	};

	const ProfileContext = createContext(null);

	return (
		<ProfileContext.Provider value={firstName}>
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
					{activeStep === steps.length ? (
						<React.Fragment>
							<Typography variant="h5" gutterBottom>
								Thank you for your order.
							</Typography>
							<Typography variant="subtitle1">
								Your order number is #2001539. We have emailed your order confirmation, and will send
								you an update when your order has shipped.
							</Typography>
						</React.Fragment>
					) : (
						<React.Fragment>
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
						</React.Fragment>
					)}
				</Paper>
			</Container>
		</ProfileContext.Provider>
	);
}
