import Head from "next/head";
import { useAuthUser } from "@/firebase/auth";
import RoommatesFilter from "../components/roommatesFilter";

export default function Home() {
  const [user, loading] = useAuthUser();

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <RoommatesFilter />
      <h1>{user ? user.displayName : "Need to login"}</h1>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    </>
  );
}
