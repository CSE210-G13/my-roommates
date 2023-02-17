// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCAoeFjgFxK65Fk1FxQgB3Mi4jqFr_uNTo',
	authDomain: 'my-roommates-1713d.firebaseapp.com',
	projectId: 'my-roommates-1713d',
	storageBucket: 'my-roommates-1713d.appspot.com',
	messagingSenderId: '907884255019',
	appId: '1:907884255019:web:9efddd6fe43ee67427976e',
	measurementId: 'G-MSSSYTQ0SC',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);

export function initFirebase() {
	return app;
}
