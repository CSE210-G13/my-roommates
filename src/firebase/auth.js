import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

export function useAuthUser() {
	const auth = getAuth();
	const [user, loading] = useAuthState(auth);
	return [user, loading];
}
