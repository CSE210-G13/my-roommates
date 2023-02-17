import { getAuth, signOut, signInWithPopup, GoogleAuthProvider, getAdditionalUserInfo } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { db } from './firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';

export function getAuthUser() {
	const auth = getAuth();
	const [user, loading] = useAuthState(auth);
	return [user, loading];
}

// Todo
export async function getUser(userId) {
	const querySnapshot = await getDocs(collection(db, 'users'));
	querySnapshot.forEach((doc) => {
		console.log(`${doc.id} => ${doc.data()}`);
	});
	return 0;
}

// Todo
export async function postUser(user) {
	try {
		const docRef = await addDoc(collection(db, 'users'), {
			first: 'Ada',
			last: 'Lovelace',
			born: 1815,
		});
		console.log('Document written with ID: ', docRef);
	} catch (e) {
		console.error('Error adding document: ', e);
	}
}
