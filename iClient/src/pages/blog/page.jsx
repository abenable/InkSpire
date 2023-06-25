import { getServerSession } from "next-auth";
import styles from "../page.module.css";
import { Options } from "../api/auth/[...nextauth]/route";
import { Blog } from "./post";

export default async function BlogPage() {
  const session = await getServerSession(Options);
  return (
    <main className={styles.main}>
      <Blog token={session.accessToken} />
    </main>
  );
}
