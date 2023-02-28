import { db } from './firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';

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
			user,
		});
		console.log('Document written with ID: ', docRef);
	} catch (e) {
		console.error('Error adding document: ', e);
	}
}

export async function getAllProperties() {
	const querySnapshot = await getDocs(collection(db, 'properties'));
	let properties = []
	querySnapshot.forEach((doc) => {
		properties.push(doc.data());
	});
	return properties
}
