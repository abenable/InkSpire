'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from '../../page.module.css';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post('https://localhost:3001/account/register', {
        username,
        email,
        password,
      });
      alert(res.data.message);
      setCookies('access_token', res.data.token);
      window.localStorage.setItem(
        'UserId',
        res.data.User._id
      )(!res.data.token ? navigate('/admin') : navigate('/'));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className={styles.main}>
      <div className="form-card">made a few changes...........</div>
    </main>
  );
}
