import { db } from './firebaseConfig';

import { collection, addDoc, getDocs, setDoc, where, query, doc } from 'firebase/firestore';
// ref: https://firebase.google.com/docs/firestore/query-data/get-data
// Todo
export async function getUser(userId) {
	const ref = query(collection(db, "users"), where('uid', '==', userId)).withConverter(userConverter);
	const docSnap = await getDocs(ref);
	let user;
	docSnap.forEach((doc) => {
		// Convert to User object
		user = doc.data();
	  
	  });
	return user;
}

// Todo
export async function postUser(user) {
	try {
		const ref = collection(db, "users").withConverter(userConverter);
		await addDoc(ref, user);
	} catch (e) {
		console.error('Error adding document: ', e);
	}
}

export async function updateUser(user){
	try {
		const ref = query(collection(db, "users"), where('uid', '==', user.uid)).withConverter(userConverter);
		const querySnapshot = await getDocs(ref);
		let userId;
		querySnapshot.forEach((doc) => {
			// doc.data() is never undefined for query doc snapshots
			userId = doc.id;
		});

		const updateRef = doc(db, "users", userId).withConverter(userConverter);
		await setDoc(updateRef, user);		
	} catch (e) {
		console.error('Error updating document: ', e);
	}

}

const userConverter = {
	toFirestore: (user) => {
		return Object.assign({}, user);
	},
	fromFirestore: (snapshot, options) => {
		const data = snapshot.data(options);
		return Object.assign({}, data);
	},
};