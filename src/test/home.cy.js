import React from 'react';
import Home from '@/pages/index';

describe('<Home />', () => {
	const properties = [
		{
			allowPets: true,
			amenities: {
				pool: true,
				parking: true,
				transportation: true,
				laundry: true,
				gym: true,
				airConditioner: true,
			},
			allowSmoking: false,
			address: '789 Oak St, Anytown, USA',
			imageUrls: [
				'https://images.unsplash.com/photo-1561037719-6affdd56efb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTcxfHxhcGFydG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
			],
			numOfBedroom: 3,
			price: 4000,
			name: 'Luxury 3BR Condo',
			distanceToSchool: 3.5,
			uid: '9i8h7g6f',
			phoneNumber: '555-9012',
			numOfBathroom: 3,
		},
		{
			name: 'Cozy Apartment in Quiet Neighborhood',
			amenities: {
				parking: true,
				airConditioner: true,
				transportation: true,
				gym: false,
				pool: false,
				laundry: true,
			},
			imageUrls: [
				'https://images.unsplash.com/photo-1486748719772-dac71e23eaa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMyfHxhcGFydG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
			],
			phoneNumber: '555-555-5678',
			numOfBedroom: 1,
			address: '456 Elm St, Suburbia, USA',
			allowSmoking: false,
			price: 1500,
			uid: '4d5e6f',
			allowPets: true,
			distanceToSchool: 5,
			numOfBathroom: 1,
		},
	];
	it('renders', () => {
		// see: https://on.cypress.io/mounting-react
		cy.mount(<Home properties={properties} />);
	});
});
