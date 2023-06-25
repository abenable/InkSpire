"use client";
import axios from "axios";
import React from "react";
import { useState } from "react";

export async function Blog({ token }) {
  const res = await axios.get("http://localhost:3001/blog/all", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const blogs = res.data.blogs;

  if (!res.status === 200) {
    return <>Log in first</>;
  } else {
    return (
      <div>
        {blogs.map((blog) => (
          <>
            <h1 key={blog._id}>{blog.title}</h1>
            <p>{blog.content}</p>
          </>
        ))}
      </div>
    );
  }
}
