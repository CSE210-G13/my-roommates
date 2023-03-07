import { db } from "./firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  deleteDoc,
} from "firebase/firestore";

const tableName = "property_preference";

//Add property preference for user.
export async function addUserPropertyPreference(userID, propertyID) {
  try {
    const docRef = await addDoc(collection(db, tableName), {
      user_id: userID,
      property_id: propertyID,
    });
    //console.log("added user property Mapping: ", docRef);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

//Get Property list from userID
export async function getPropertyListFromUserID(userID) {
  let propertyList = new Array();

  try {
    const q = query(collection(db, tableName), where("user_id", "==", userID));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      propertyList.push(doc.get("property_id"));
    });
    //console.log("List of PropertyID: ", propertyList);
  } catch (e) {
    console.error("Error in getting property list: ", e);
  }

  return propertyList;
}

//Get userID list from propertyID
export async function getUserListFromPropertyID(propertyID) {
  let userList = new Array();
  try {
    const q = query(
      collection(db, tableName),
      where("property_id", "==", propertyID)
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      userList.push(doc.get("user_id"));
    });
    //console.log("List of userID: ", userList);
  } catch (e) {
    console.error("Error in getting user list: ", e);
  }
  return userList;
}

//Check the user property mapping
export async function checkUserPropertyMapping(userID, propertyID) {
  let exist = false;
  try {
    const q = query(
      collection(db, tableName),
      where("property_id", "==", propertyID),
      where("user_id", "==", userID)
    );
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      exist = true;
    }
    //console.log("Mapping exist: ", exist);
  } catch (e) {
    console.error("Error in getting mapping: ", e);
  }
  return exist;
}

//Delete the  user property mapping
export async function deleteUserPropertyMapping(userID, propertyID) {
  try {
    var q = query(
      collection(db, tableName),
      where("property_id", "==", propertyID),
      where("user_id", "==", userID)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      deleteDoc(doc.ref);
    });
    //console.log("Deleted the mapping for: ", userID, propertyID);
  } catch (e) {
    console.error("Error in deleting mapping: ", e);
  }
}
