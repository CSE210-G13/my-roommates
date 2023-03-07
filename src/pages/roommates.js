import RoommateGrid from "@/components/RoommateGrid";
import RoommateFilter from "@/components/RoommatesFilter";
import Head from "next/head";
import { getAllUsers } from "@/firebase/userDb";
import { useAuthUser } from "@/firebase/auth";
import { useState } from "react";

export default function Roommates(props) {
  const [user, loading] = useAuthUser();

  const [clickFilter, setClickFilter] = useState(false);
  const [FilterRoommates, setFilterRoommates] = useState([]);
  // state = { FilterRoommates: "" };

  function toggleBool() {
    setClickFilter(!clickFilter);
  }

  // handleFilterRoommates = (FilterRoommatesIds) => {
  //   setFilterRoommates(FilterRoommatesIds);
  // };

  //   handleLanguage = (langValue) => {
  //     this.setState({language: langValue});
  // }

  console.log("inside roommates page");
  console.log(FilterRoommates);
  let users =
    user == null ? props.users : props.users.filter((u) => u.uid !== user.uid);
  // do not show current user in grid if they are logged in
  if (FilterRoommates.length > 0) {
    console.log(">0");
    let users = FilterRoommates;
  }
  // const users =
  //   user == null ? props.users : props.users.filter((u) => u.uid !== user.uid);
  return (
    <>
      <Head>
        <title>Roommate Suggestions</title>
      </Head>
      <div style={{ display: "flex", padding: "10px 0px 0px 20px" }}>
        <RoommateFilter onFilteringRoommates={setFilterRoommates} />
        {/* clickFilter ? <RoommateGrid users={users} /> :{" "} */}
        <RoommateGrid users={users} />
        {/* <RoommateGrid users={users} /> */}
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
