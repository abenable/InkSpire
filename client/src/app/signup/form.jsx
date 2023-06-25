"use client";
import React, { useState } from "react";
import { signIn, signOut } from "next-auth/react";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    signIn("credentials", {
      email,
      password,
    });
  };
  return (
    <div>
      <p>you are not signed in</p>
      <form onSubmit={handleSubmit} method="post">
        <input
          type="email"
          name="Email"
          value={email}
          id="email-field"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          name="password"
          value={password}
          id="password-field"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
      <br />
      <br />
      <br />
      <button
        onClick={() => signIn("google", { callbackUrl: "localhost:3000" })}
      >
        Sign In with Google
      </button>
    </div>
  );
}
export function SignOut({ user }) {
  return (
    <div>
      <p>you are signed as {user.email}</p>
      <img src={user.image} alt="image" />
      <button onClick={() => signOut("google")}>Sign Out</button>
    </div>
  );
}
