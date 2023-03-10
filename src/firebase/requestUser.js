import { db } from "./firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  updateDoc,
  arrayUnion,
  arrayRemove,
  doc,
} from "firebase/firestore";
import { async } from "@firebase/util";

const tableName = "user_request";

//Add fromUserID to pending list of toUserID.
export async function addUserRequest(toUserID, fromUserID) {
  try {
    const q = query(
      collection(db, tableName),
      where("user_id", "==", toUserID)
    );

    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      querySnapshot.forEach((doc) => {
        updateDoc(doc.ref, {
          pending_list: arrayUnion(fromUserID),
        });
      });
    } else {
      await addDoc(collection(db, tableName), {
        user_id: toUserID,
        accepted_list: [],
        pending_list: [fromUserID],
      });
      console.log("Added document to user : ", toUserID);
    }
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

//Add user to accepted list both users.
export async function acceptRequest(toUserID, fromUserID) {
  async function addToAcceptedList(userID, userIDToAdd) {
    try {
      const q = query(
        collection(db, tableName),
        where("user_id", "==", userID)
      );

      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          updateDoc(doc.ref, {
            pending_list: arrayRemove(userIDToAdd),
            accepted_list: arrayUnion(userIDToAdd),
          });
        });
      } else {
        await addDoc(collection(db, tableName), {
          user_id: userID,
          accepted_list: [userIDToAdd],
          pending_list: [],
        });
        console.log("Added document to user : ", userID);
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  addToAcceptedList(toUserID, fromUserID);
  addToAcceptedList(fromUserID, toUserID);
}

//Get list of Pending Request
export async function userPendingList(userID) {
  let pendingList = new Array();
  try {
    const q = query(collection(db, tableName), where("user_id", "==", userID));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      pendingList = doc.get("pending_list");
    });
    console.log("List of pending userID: ", pendingList);
  } catch (e) {
    console.error("Error in getting  pending user list: ", e);
  }
  return pendingList;
}

//Get list of Accepted Request
export async function userAcceptedList(userID) {
  let acceptedList = new Array();
  // console.log('in userAcceptedList');
  try {
    const q = query(collection(db, tableName), where("user_id", "==", userID));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      acceptedList = doc.get("accepted_list");
    });
    console.log("List of accepted userID: ", acceptedList);
  } catch (e) {
    console.error("Error in getting accepted user list: ", e);
  }
  return acceptedList;
}

//Check whether the user request is accepted or not
export async function checkUserRequest(userID, fromUserID) {
  let check = false;
  let acceptedList = new Array();
  try {
    var q = query(collection(db, tableName), where("user_id", "==", userID));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      acceptedList = doc.get("accepted_list");
      if (acceptedList.includes(fromUserID)) {
        check = true;
      }
    });
    console.log("User is accepted: ", check);
    return check;
  } catch (e) {
    console.error("Error in checkUserRequest: ", e);
  }
}

//Check whether the user request is accepted or not
export async function checkUserPending(userID, fromUserID) {
  let check = false;
  let pendingList = new Array();
  try {
    var q = query(collection(db, tableName), where("user_id", "==", userID));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      pendingList = doc.get("pending_list");
      if (pendingList.includes(fromUserID)) {
        check = true;
      }
    });
    console.log("User is pending: ", check);
    return check;
  } catch (e) {
    console.error("Error in checkUserPending: ", e);
  }
}