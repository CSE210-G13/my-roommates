<reference types="cypress" />;
import React from 'react';

describe('Home page', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000');
	});

	it("displays property's name correctly", () => {
		cy.contains('Cozy Studio in a Quiet Neighborhood');
	});

	it('navigates to roommate page', () => {
		cy.get('a[href*="/roommates"]').click();
		// The new url should include "/about"
		cy.url().should('include', '/roommates');
		cy.contains('Sarah Lee');

		cy.get('a[href*="/"]').first().click();
		// The new url should include "/about"
		cy.contains('Cozy Studio in a Quiet Neighborhood');
	});


});
