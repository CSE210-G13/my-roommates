import Home from '@/pages/index';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { initFirebase } from '@/firebase/firebaseConfig';

describe('Home screen', () => {
    beforeEach(() => {
        initFirebase();
        render(<Home />);
    });

	it('finishes loading state', async () => {
		expect(screen.getByText('Loading...')).toBeInTheDocument();
		await waitFor(() => {
			new Promise((r) => setTimeout(r, 500));
			expect(screen.getByText('Need to login')).toBeInTheDocument();
		});
	});
});
