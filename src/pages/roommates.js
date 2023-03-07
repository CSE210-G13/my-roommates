import RoommateGrid from "@/components/RoommateGrid";
import RoommateFilter from "@/components/RoommatesFilter";
import Head from "next/head";
import { getAllUsers } from "@/firebase/userDb";
import { useAuthUser } from "@/firebase/auth";
import { useState } from "react";

export default function Roommates(props) {
  const [user, loading] = useAuthUser();
  const [FilterRoommates, setFilterRoommates] = useState([]);

  console.log("inside roommates page");
  let users =
    user == null ? props.users : props.users.filter((u) => u.uid !== user.uid);
  // do not show current user in grid if they are logged in
  if (FilterRoommates.length > 0) {
    console.log(">0");
    users = FilterRoommates;
  }

  return (
    <>
      <Head>
        <title>Roommate Suggestions</title>
      </Head>
      <div style={{ display: "flex", padding: "10px 0px 0px 20px" }}>
        <RoommateFilter onFilteringRoommates={setFilterRoommates} />
        <RoommateGrid users={users} />
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
