import Link from 'next/link';
import styles from '../../page.module.css';

export default function Login() {
  return (
    <main className={styles.main}>
      <h1>welcome to my Login page</h1>
      <p>
        <Link href="/login/forgotpassword">Forgot Password</Link>
      </p>
      <p>
        Dont have an acount?
        <Link href="/signup">Signup</Link>
      </p>
    </main>
  );
}
