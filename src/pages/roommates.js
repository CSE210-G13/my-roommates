import RoommateGrid from "@/components/RoommateGrid";
import RoommateFilter from "@/components/RoommatesFilter";
import Head from "next/head";
import { getAllUsers } from "@/firebase/userDb";
import { useAuthUser } from "@/firebase/auth";
import { useState } from "react";

export default function Roommates(props) {
  const [user, loading] = useAuthUser();
  const [FilterRoommates, setFilterRoommates] = useState([0, [], []]);

  console.log("inside roommates page");
  console.log(FilterRoommates);
  let users =
    user == null ? props.users : props.users.filter((u) => u.uid !== user.uid);
  // do not show current user in grid if they are logged in
  if (FilterRoommates[1].length > 0) {
    console.log(">0");
    console.log(FilterRoommates);
    console.log("index 1 array:");
    console.log(FilterRoommates[1].length);

    users = FilterRoommates[1];
  }

  return (
    <>
      <Head>
        <title>Roommate Suggestions</title>
      </Head>
      <div style={{ display: "flex", padding: "10px 0px 0px 0px" }}>
        <RoommateFilter onFilteringRoommates={setFilterRoommates} />
        <div>
          {(FilterRoommates.length > 0) & (FilterRoommates[0] == 1) ? (
            <div>
              {(FilterRoommates.length > 0) &
              (FilterRoommates[1].length > 0) ? (
                <div>
                  <h3 style={{ margin: "20px 0px 0px 20px" }}>
                    EXACT-MATCH Filtering Result
                  </h3>
                  <RoommateGrid users={FilterRoommates[1]} />
                </div>
              ) : (
                <h3 style={{ margin: "20px 0px 0px 20px" }}>
                  Sorry, there is no EXACT-MATCH result based on your filtering
                  preferences...
                </h3>
              )}
              {FilterRoommates[2].length > 0 ? (
                <div>
                  <h3 style={{ margin: "20px 0px 0px 20px" }}>
                    Non-EXACT-MATCH Filtering Result
                  </h3>
                  <RoommateGrid users={FilterRoommates[2]} />
                </div>
              ) : (
                <h3 style={{ margin: "20px 0px 0px 20px" }}>
                  Sorry, there is no non-EXACT-MATCH based on your filtering
                  preferences
                </h3>
              )}
            </div>
          ) : (
            <RoommateGrid users={users} />
          )}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  let users = await getAllUsers();
  return {
    props: {
      users,
    },
  };
}
