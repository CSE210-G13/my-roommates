import { collection, getDocs, query, where } from "firebase/firestore";

import { getAllProperties, getProperty } from "@/firebase/propertyDb";

const tableName = "properties";

jest.mock("firebase/firestore", () => ({
  getFirestore: jest.fn(),
  collection: jest.fn(),
  query: jest.fn(),
  getDocs: jest.fn(),
  where: jest.fn(),
}));

describe("Properties Db", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Get All the  property", async () => {
    const propertyDoc = [
      [
        {
          uid: "1234",
          name: "Beautiful Downtown Apartment",
          address: "123 Main St, Anytown USA",
        },
        {
          uid: "a35fbcf7-86d6-4b14-b2c3-3a6a2b6f139d",
          name: "Luxury Apartment in the Heart of Downtown",
          address: "123 Main St, New York, NY 10001",
        },
      ],
    ];

    const querySnapshot = {
      forEach: (fn) => {
        fn({
          data: () => [
            {
              uid: "1234",
              name: "Beautiful Downtown Apartment",
              address: "123 Main St, Anytown USA",
            },
            {
              uid: "a35fbcf7-86d6-4b14-b2c3-3a6a2b6f139d",
              name: "Luxury Apartment in the Heart of Downtown",
              address: "123 Main St, New York, NY 10001",
            },
          ],
        });
      },
    };
    getDocs.mockImplementation(() => querySnapshot);

    // Call the tested function.
    let testReturn = await getAllProperties();

    expect(getDocs).toHaveBeenCalledWith(collection(tableName));
    expect(collection).toHaveBeenCalledWith(tableName);
    expect(testReturn).toEqual(propertyDoc);
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
