import { getServerSession } from "next-auth";
import styles from "../page.module.css";
import { SignIn, SignOut } from "./form";
import { Options } from "../api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(Options);
  return (
    <main className={styles.main}>
      {session ? <SignOut user={session.user} /> : <SignIn />}
    </main>
  );
}
