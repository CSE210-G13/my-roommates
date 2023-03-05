import FirstTimeUser from '@/pages/firstTimeUser';
import '@testing-library/jest-dom';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import * as nextRouter from 'next/router';
import { initFirebase } from '@/firebase/firebaseConfig';
import { User } from '@/firebase/classes';
import { UserInfoContext } from '@/components/FirstTimeUserFlow';

nextRouter.useRouter = jest.fn();
nextRouter.useRouter.mockImplementation(() => ({ route: '/' }));

describe('signup form', () => {
	beforeAll(() => {
		initFirebase();
	});

	it('renders a form', async () => {
		render(<FirstTimeUser />);
		await waitFor(() => {
			expect(screen.getByText('Set up your account')).toBeInTheDocument();
		});
	});

	it('display the second form', async () => {
		let { getByRole } = render(
			<UserInfoContext.Provider value={{ user, setUserInfo }}>
				<FirstTimeUser />
			</UserInfoContext.Provider>
		);
		await waitFor(() => {
			expect(screen.getByTestId('form title').textContent).toEqual('Personal Information');
			let nextButton = getByRole('button', { name: 'Next' });
			fireEvent.click(nextButton);
			expect(screen.getByTestId('form title').textContent).toEqual('Lifestyle and Habits');
			fireEvent.click(nextButton);
			expect(screen.getByTestId('form title').textContent).toEqual('Property Preference');
		});
	});

	// Todo: apply the user to the third test
	let user = new User({
		uid: '001',
		isUCSD: true,
		imageUrl: '',
		firstName: 'aa',
		lastName: 'bb',
		gender: 'cc',
		college: 'dd',
		major: 'ee',
		schoolYear: 'ff',
		languages: ['gg'],
		bedtime: '22:00',
	});
});
