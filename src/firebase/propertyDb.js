import { db } from "./firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  setDoc,
  where,
  query,
  doc,
} from "firebase/firestore";
import { Property } from "./classes";

export async function getAllProperties() {
  const querySnapshot = await getDocs(collection(db, "properties"));
  let properties = [];
  querySnapshot.forEach((doc) => {
    properties.push(doc.data());
  });
  return properties;
}

export async function getProperty(uid) {
  const ref = query(
    collection(db, "properties"),
    where("uid", "==", uid)
  ).withConverter(propertyConverter);
  const docSnap = await getDocs(ref);
  let property;
  docSnap.forEach((doc) => {
    // Convert to User object
    property = doc.data();
  });
  return property;
}

const propertyConverter = {
  toFirestore: (property) => {
    return Object.assign({}, property);
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return Object.assign({}, data);
  },
};
