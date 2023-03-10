import {
  collection,
  addDoc,
  getDocs,
  setDoc,
  where,
  query,
  doc,
} from "firebase/firestore";

import { getAllUsers } from "@/firebase/userDb";

const tableName = "users";
jest.mock("firebase/firestore", () => ({
  getFirestore: jest.fn(),
  collection: jest.fn(),
  addDoc: jest.fn(),
  query: jest.fn(),
  getDocs: jest.fn(),
  where: jest.fn(),
  deleteDoc: jest.fn(),
}));

describe("User Liked Properties", () => {
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

  it("Get Property based on the propertyID.", async () => {
    const propertyID = "1234";
    const mockDocData = { name: "Test property" };
    const querySnapshot = {
      forEach: (fn) => {
        fn({
          data: () => ({
            uid: "1234",
            name: "Beautiful Downtown Apartment",
            address: "123 Main St, Anytown USA",
          }),
        });
      },
    };
    getDocs.mockImplementation(() => querySnapshot);

    query.mockImplementationOnce(() => ({
      withConverter: jest.fn().mockReturnValue({
        get: jest
          .fn()
          .mockResolvedValue([
            { data: jest.fn().mockReturnValue(mockDocData) },
          ]),
      }),
    }));

    // Call the tested function.
    let testReturn = await getProperty(propertyID);

    expect(query).toHaveBeenCalledWith(
      collection(tableName),
      where("uid", "==", propertyID)
    );
    expect(collection).toHaveBeenCalledWith(tableName);
    expect(testReturn).toEqual({
      uid: "1234",
      name: "Beautiful Downtown Apartment",
      address: "123 Main St, Anytown USA",
    });
  });
});
