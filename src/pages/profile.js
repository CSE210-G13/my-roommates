import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import EditPersonalInformationForm from '../components/EditProfile/EditPersonalInformationForm';
import EditRoommatePrefForm from '../components/EditProfile/EditRoommatePrefForm';
import EditPropertyPrefForm from '../components/EditProfile/EditPropertyPrefForm';

export default function profile() {
    return (
        // <div>
        //     <EditPersonalInformationForm />
        //     <EditRoommatePrefForm />
        //     <EditPropertyPrefForm />            
        // </div>
        // <ProfileContext.Provider value={firstName}>
        <Container component="main" maxWidth="xl" sx={{ mb: 4 }}>
            <Typography component="h1" variant="h4" align="center">
                Profile Settings
            </Typography>
            <Paper
                variant="outlined"
                sx={{
                    mt: { xs: 3, md: 6 }, // margintop
                    mb: { xs: 3 }, // marginbottom
                    p: { xs: 2, md: 3 }, // padding
                }}>
                <React.Fragment>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        {/* {activeStep !== 0 && (
                            <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                Back
                            </Button>
                        )} */}
                        <EditPersonalInformationForm />
                    </Box>
                </React.Fragment>
            </Paper>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Paper
                        variant="outlined"
                        sx={{
                            mt: { xs: 3 },
                            mb: { xs: 3 },
                            p: { xs: 2, md: 3 },
                        }}>
                        <React.Fragment>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <EditRoommatePrefForm />
                            </Box>
                        </React.Fragment>
                    </Paper>     
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper
                        variant="outlined"
                        sx={{
                            mt: { xs: 3 },
                            mb: { xs: 6, md: 12 },
                            p: { xs: 2, md: 3 },
                        }}>
                        <React.Fragment>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <EditPropertyPrefForm /> 
                            </Box>
                        </React.Fragment>
                    </Paper>                    
                </Grid>
            </Grid>
        </Container>
		// </ProfileContext.Provider>
        );
    }