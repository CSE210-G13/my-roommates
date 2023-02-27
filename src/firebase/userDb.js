import { db } from './firebaseConfig';
import { User } from '@/firebase/classes';
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
		console.log("updating user");
		const ref = query(collection(db, "users"), where('uid', '==', user.uid)).withConverter(userConverter);
		const querySnapshot = await getDocs(ref);
		let userId;
		querySnapshot.forEach((doc) => {
			// doc.data() is never undefined for query doc snapshots
			userId = doc.id;
		});

		const updateRef = doc(db, "users", userId);
		await setDoc(updateRef, {user});		
	} catch (e) {
		console.error('Error updating document: ', e);
	}

}

const userConverter = {
	toFirestore: (user) =>	{
		return {
			uid : user.uid,
			isUCSD : user.isUCSD,
			imageUrl : user.imageUrl,
			firstName : user.firstName,
			lastName : user.lastName,
			gender : user.gender,
			college : user.college,
			major : user.major,
			schoolYear : user.schoolYear,
			languages : user.languages,
			bedtime : user.bedtime,
			lifestyle : user.lifestyle,
			maxPropertyPrice : user.maxPropertyPrice,
			maxDistanceToSchool : user.maxDistanceToSchool,
			amenities : user.amenities,
			bio : user.bio,
			email : user.email,
			phoneNumber : user.phoneNumber,
			discord : user.discord,
			instagram : user.instagram,
			linkedin : user.linkedin,
			facebook : user.facebook
			};
	},
	fromFirestore: (snapshot, options) => {
		const data = snapshot.data(options);
		return new User(
				data.uid,
				data.isUCSD,
				data.imageUrl,
				data.firstName,
				data.lastName,
				data.gender,
				data.college,
				data.major,
				data.schoolYear,
				data.languages,
				data.bedtime,
				data.lifestyle,
				data.maxPropertyPrice,
				data.maxDistanceToSchool,
				data.amenities,
				data.bio,
				data.email,
				data.phoneNumber,
				data.discord,
				data.instagram,
				data.linkedin,
				data.facebook
				);
	}
};
