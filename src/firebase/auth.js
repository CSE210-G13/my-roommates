import { useRouter } from 'next/router';
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider, getAdditionalUserInfo } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

export function getAuthUser() {
	const auth = getAuth();
	const [user, loading] = useAuthState(auth);
	return [user, loading];
}

export function login() {
	const auth = getAuth();
	signInWithPopup(auth, new GoogleAuthProvider())
		.then((result) => {
			// This gives you a Google Access Token. You can use it to access the Google API.
			const credential = GoogleAuthProvider.credentialFromResult(result);
			const token = credential.accessToken;
			// The signed-in user info.
			const user = result.user;
			// IdP data available using getAdditionalUserInfo(result)
			// ...
			const details = getAdditionalUserInfo(result);
			console.log('in auth.js user', user);
			console.log('in auth.js is new:', details.isNewUser);
			if (details.isNewUser) {
                const router = useRouter();
				router.push('/firstTimeUser');
			}
		})
		.catch((error) => {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			// The AuthCredential type that was used.
			const credential = GoogleAuthProvider.credentialFromError(error);
			// ...
			console.log(errorCode, errorMessage);
		});
}

export function signout() {
	const auth = getAuth();
	signOut(auth)
		.then(() => {
			// Sign-out successful.
            const router = useRouter();
			router.push('/');
		})
		.catch((error) => {
			console.log(error);
		});
}
