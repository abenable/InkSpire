import { getServerSession } from "next-auth";
import styles from "../page.module.css";
import { Options } from "../../../../client/src/app/api/auth/[...nextauth]/route";
import { SearchBlog } from "./search";

export default async function SearchPage() {
  const session = await getServerSession(Options);
  return (
    <main className={styles.main}>
      <h1>Welcome to the search page</h1>
      <SearchBlog session={session} />
    </main>
  );
}
