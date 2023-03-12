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

import {
  addUserRequest,
  acceptRequest,
  userPendingList,
  userAcceptedList,
  checkUserRequest,
  checkUserPending,
} from "@/firebase/requestUser";

const tableName = "user_request";

jest.mock("firebase/firestore", () => ({
  getFirestore: jest.fn(),
  collection: jest.fn(),
  addDoc: jest.fn(),
  query: jest.fn(),
  getDocs: jest.fn(),
  where: jest.fn(),
  updateDoc: jest.fn(),
  arrayUnion: jest.fn(),
  arrayRemove: jest.fn(),
}));

describe("User Request logic", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("test 1: Add fromUserID to pending list of toUserID. when DB entry present", async () => {
    const toUserID = "12345";
    const fromUserID = "ABCDE";

    const querySnapshot = {
      forEach: (fn) => {
        fn({
          data: () => [
            {
              user_id: "12345",
              pending_list: ["Walter", "Joe"],
              accepted_list: ["White"],
            },
          ],
        });
      },
    };
    getDocs.mockImplementation(() => querySnapshot);

    // Call the tested function.
    await addUserRequest(toUserID, fromUserID);

    // Check that the mocked 'addDoc' and 'collection' functions were called correctly.
    expect(query).toHaveBeenCalledWith(
      collection(tableName),
      where("user_id", "==", toUserID)
    );
    expect(collection).toHaveBeenCalledWith(tableName);
  });

  it("test 2: Add fromUserID to pending list of toUserID.  when DB entry is not present", async () => {
    const toUserID = "12345";
    const fromUserID = "ABCDE";

    const querySnapshot = {
      forEach: (fn) => {
        fn({
          data: () => [
            {
              user_id: "12345",
              pending_list: ["Walter", "Joe"],
              accepted_list: ["White"],
            },
          ],
        });
      },
      empty: (fn) => true,
    };
    getDocs.mockImplementation(() => querySnapshot);

    // Call the tested function.
    await addUserRequest(toUserID, fromUserID);

    // Check that the mocked 'addDoc' and 'collection' functions were called correctly.
    expect(query).toHaveBeenCalledWith(
      collection(tableName),
      where("user_id", "==", toUserID)
    );
    expect(addDoc).toHaveBeenCalledWith(collection(tableName), {
      user_id: toUserID,
      accepted_list: [],
      pending_list: [fromUserID],
    });
    expect(collection).toHaveBeenCalledWith(tableName);
  });

  it("test 1: Add user to accepted list both users. when DB entry present", async () => {
    const toUserID = "12345";
    const fromUserID = "ABCDE";

    const querySnapshot = {
      forEach: (fn) => {
        fn({
          data: () => [
            {
              user_id: "12345",
              pending_list: ["Walter", "Joe"],
              accepted_list: ["White"],
            },
          ],
        });
      },
    };
    getDocs.mockImplementation(() => querySnapshot);

    // Call the tested function.
    await acceptRequest(toUserID, fromUserID);

    // Check that the mocked 'addDoc' and 'collection' functions were called correctly.
    expect(query).toHaveBeenCalledWith(
      collection(tableName),
      where("user_id", "==", toUserID)
    );
    expect(collection).toHaveBeenCalledWith(tableName);
  });

  it("test 2: Add user to accepted list both users. when DB entry is not present", async () => {
    const toUserID = "12345";
    const fromUserID = "ABCDE";

    const querySnapshot = {
      forEach: (fn) => {
        fn({
          data: () => [
            {
              user_id: "12345",
              pending_list: ["Walter", "Joe"],
              accepted_list: ["White"],
            },
          ],
        });
      },
      empty: (fn) => true,
    };
    getDocs.mockImplementation(() => querySnapshot);

    // Call the tested function.
    await acceptRequest(toUserID, fromUserID);

    // Check that the mocked 'addDoc' and 'collection' functions were called correctly.
    expect(query).toHaveBeenCalledWith(
      collection(tableName),
      where("user_id", "==", toUserID)
    );
    expect(addDoc).toBeCalledTimes(2);
    expect(collection).toHaveBeenCalledWith(tableName);
  });

  it("Get list of Accepted Request", async () => {
    const userID = "12345";
    const acceptedList = [
      new Map([["accepted_list", ["12345", "12346", "12356"]]]),
    ];
    const userIDList = ["12345", "12346", "12356"];
    getDocs.mockImplementation(() => acceptedList);

    // Call the tested function.
    let testReturn = await userAcceptedList(userID);

    // Check that the mocked 'addDoc' and 'collection' functions were called correctly.
    expect(query).toHaveBeenCalledWith(
      collection(tableName),
      where("user_id", "==", userID)
    );
    expect(collection).toHaveBeenCalledWith(tableName);
    expect(testReturn).toEqual(userIDList);
  });

  it("Get list of Pending Request", async () => {
    const userID = "12345";
    const pendingList = [
      new Map([["pending_list", ["12345", "12346", "12356"]]]),
    ];
    const userIDList = ["12345", "12346", "12356"];
    getDocs.mockImplementation(() => pendingList);

    // Call the tested function.
    let testReturn = await userPendingList(userID);

    // Check that the mocked 'addDoc' and 'collection' functions were called correctly.
    expect(query).toHaveBeenCalledWith(
      collection(tableName),
      where("user_id", "==", userID)
    );
    expect(collection).toHaveBeenCalledWith(tableName);
    expect(testReturn).toEqual(userIDList);
  });

  it("Check whether the user request is accepted.", async () => {
    const userID = "12345";
    const fromUserID = "12356";
    const acceptedList = [
      new Map([["accepted_list", ["12345", "12346", "12356"]]]),
    ];

    getDocs.mockImplementation(() => acceptedList);

    // Call the tested function.
    let testReturn = await checkUserRequest(userID, fromUserID);

    // Check that the mocked 'addDoc' and 'collection' functions were called correctly.
    expect(query).toHaveBeenCalledWith(
      collection(tableName),
      where("user_id", "==", userID)
    );
    expect(collection).toHaveBeenCalledWith(tableName);
    expect(testReturn).toEqual(true);
  });

  it("Check whether the user request is in pending.", async () => {
    const userID = "12345";
    const fromUserID = "12356";
    const pendingList = [
      new Map([["pending_list", ["12345", "12346", "12356"]]]),
    ];

    getDocs.mockImplementation(() => pendingList);

    // Call the tested function.
    let testReturn = await checkUserPending(userID, fromUserID);

    // Check that the mocked 'addDoc' and 'collection' functions were called correctly.
    expect(query).toHaveBeenCalledWith(
      collection(tableName),
      where("user_id", "==", userID)
    );
    expect(collection).toHaveBeenCalledWith(tableName);
    expect(testReturn).toEqual(true);
  });
});
