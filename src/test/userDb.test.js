import {
  collection,
  addDoc,
  getDocs,
  setDoc,
  where,
  query,
  doc,
} from "firebase/firestore";

import {
  getAllUsers,
  getUser,
  postUser,
  updateUser,
  postMockProperty,
  postMockUser,
} from "@/firebase/userDb";

import { db } from "@/firebase/firebaseConfig";

const tableName = "users";
jest.mock("firebase/firestore", () => ({
  setDoc: jest.fn(),
  getFirestore: jest.fn(),
  collection: jest.fn(),
  addDoc: jest.fn(),
  query: jest.fn(),
  getDocs: jest.fn(),
  where: jest.fn(),
  doc: jest.fn(),
}));

describe("User Database", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Get All the user.", async () => {
    const querySnapshot = {
      forEach: (fn) => {
        fn({
          data: () => [
            {
              uid: "1231",
              firstName: "Walter",
              lastName: "White",
              gender: "Female",
            },
            {
              uid: "1234",
              firstName: "Joe",
              lastName: "White",
              gender: "Male",
            },
          ],
        });
      },
    };
    getDocs.mockImplementation(() => querySnapshot);

    // Call the tested function.
    let testReturn = await getAllUsers();
    console.log(testReturn);
    expect(getDocs).toHaveBeenCalledWith(collection(tableName));
    expect(collection).toHaveBeenCalledWith(tableName);
    expect(testReturn).toEqual([
      [
        {
          uid: "1231",
          firstName: "Walter",
          lastName: "White",
          gender: "Female",
        },
        {
          uid: "1234",
          firstName: "Joe",
          lastName: "White",
          gender: "Male",
        },
      ],
    ]);
  });

  it("Get user Information from userID.", async () => {
    const userID = "1234";
    query.mockImplementationOnce(() => ({
      withConverter: jest.fn(),
    }));
    const querySnapshot = {
      forEach: (fn) => {
        fn({
          data: () => [
            {
              uid: "1231",
              firstName: "Walter",
              lastName: "White",
              gender: "Female",
            },
          ],
        });
      },
    };
    getDocs.mockImplementation(() => querySnapshot);

    // Call the tested function.
    let testReturn = await getUser(userID);

    expect(query).toHaveBeenCalledWith(
      collection(tableName),
      where("uid", "==", userID)
    );
    expect(collection).toHaveBeenCalledWith(tableName);
    expect(testReturn).toEqual([
      {
        uid: "1231",
        firstName: "Walter",
        lastName: "White",
        gender: "Female",
      },
    ]);
  });

  it("Add user Information.", async () => {
    const userID = "12345";

    collection.mockImplementationOnce(() => ({
      withConverter: jest.fn(),
    }));

    // Call the tested function.
    await postUser(userID);

    expect(collection).toBeCalledWith(db, tableName);
  });

  it("Update user Information.", async () => {
    const userID = "12345";
    const querySnapshot = {
      forEach: (fn) => {
        fn({
          data: () => [
            {
              uid: "1231",
              firstName: "Walter",
              lastName: "White",
              gender: "Female",
            },
          ],
        });
      },
    };
    getDocs.mockImplementation(() => querySnapshot);

    query.mockImplementationOnce(() => ({
      withConverter: jest.fn(),
    }));

    doc.mockImplementationOnce(() => ({
      withConverter: jest.fn().mockReturnValueOnce("test_Ref"),
    }));

    // Call the tested function.
    await updateUser(userID);

    expect(query).toHaveBeenCalledWith(
      collection(tableName),
      where("uid", "==", userID)
    );
    expect(setDoc).toHaveBeenCalledWith("test_Ref", userID);
  });

  it("Add Mock Property Information.", async () => {
    const userID = "12345";

    // Call the tested function.
    await postMockProperty(userID);

    expect(collection).toBeCalledTimes(45);
  });

  it("Add Mock Property Information.", async () => {
    // Call the tested function.
    await postMockProperty();

    expect(collection).toBeCalledTimes(45);
  });

  it("Add Mock User Information.", async () => {
    // Call the tested function.
    await postMockUser();

    expect(collection).toBeCalledTimes(34);
  });
});
