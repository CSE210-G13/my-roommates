import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

import {
  addUserPropertyPreference,
  getPropertyListFromUserID,
  getUserListFromPropertyID,
  checkUserPropertyMapping,
  deleteUserPropertyMapping,
} from "@/firebase/userLikedProperties";

const tableName = "property_preference";
jest.mock("firebase/firestore", () => ({
  getFirestore: jest.fn(),
  collection: jest.fn(),
  addDoc: jest.fn(),
  query: jest.fn(),
  getDocs: jest.fn(),
  where: jest.fn(),
  deleteDoc: jest.fn(),
}));

describe("Property Database", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Add property preference for user.", async () => {
    const userID = "12345";
    const propertyID = "ABCDE";
    addDoc.mockImplementation(() => "doc_id");

    // Call the tested function.
    await addUserPropertyPreference(userID, propertyID);

    // Check that the mocked 'addDoc' and 'collection' functions were called correctly.
    expect(addDoc).toHaveBeenCalledWith(collection(tableName), {
      user_id: userID,
      property_id: propertyID,
    });
    expect(addDoc).toReturnWith("doc_id");
    expect(collection).toHaveBeenCalledWith(tableName);
  });

  it("Get userID list from propertyID.", async () => {
    const userDoc = [
      new Map([["user_id", "12345"]]),
      new Map([["user_id", "12346"]]),
      new Map([["user_id", "12356"]]),
    ];
    const userIDList = ["12345", "12346", "12356"];
    const propertyID = "prop_1";
    getDocs.mockImplementation(() => userDoc);

    // Call the tested function.
    let testReturn = await getUserListFromPropertyID(propertyID);

    // Check that the mocked 'addDoc' and 'collection' functions were called correctly.
    expect(query).toHaveBeenCalledWith(
      collection(tableName),
      where("property_id", "==", propertyID)
    );
    expect(collection).toHaveBeenCalledWith(tableName);
    expect(testReturn).toEqual(userIDList);
  });

  it("Get Property list from userID.", async () => {
    const propDoc = [
      new Map([["property_id", "prop_1"]]),
      new Map([["property_id", "prop_2"]]),
      new Map([["property_id", "prop_3"]]),
    ];
    const propIDList = ["prop_1", "prop_2", "prop_3"];
    const userID = "12345";
    getDocs.mockImplementation(() => propDoc);

    // Call the tested function.
    let testReturn = await getPropertyListFromUserID(userID);

    expect(query).toHaveBeenCalledWith(
      collection(tableName),
      where("user_id", "==", userID)
    );
    expect(collection).toHaveBeenCalledWith(tableName);
    expect(testReturn).toEqual(propIDList);
  });

  it("Check the user property mapping.", async () => {
    const doc = [new Map([])];
    const propertyID = "prop_1";
    const userID = "12345";
    getDocs.mockImplementation(() => doc);

    // Call the tested function.
    let testReturn = await checkUserPropertyMapping(userID, propertyID);

    expect(query).toHaveBeenCalledWith(
      collection(tableName),
      where("property_id", "==", propertyID),
      where("user_id", "==", userID)
    );
    expect(collection).toHaveBeenCalledWith(tableName);
    expect(testReturn).toEqual(true);
  });

  it("Delete the  user property mapping.", async () => {
    const doc = [];
    const propertyID = "prop_1";
    const userID = "12345";
    getDocs.mockImplementation(() => doc);

    // Call the tested function.
    await deleteUserPropertyMapping(userID, propertyID);

    expect(query).toHaveBeenCalledWith(
      collection(tableName),
      where("property_id", "==", propertyID),
      where("user_id", "==", userID)
    );
    expect(collection).toHaveBeenCalledWith(tableName);
  });
});
