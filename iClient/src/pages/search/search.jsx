"use client";
import axios from "axios";
import React from "react";
import { useState } from "react";

export async function SearchBlog({ session }) {
    const [ search, setSearch ] = useState("");
    let blogs;

  const handleSubmit = async () => {
    const res = await axios.post("http://localhost:3001/blog/all", search);
     blogs = res.data.blogs;
    return blogs;
  };

  return (
    <div>
      <form method="post" onSubmit={handleSubmit}>
        <input
          type="search"
          name="search"
          id="search-field"
          placeholder="Search blogs"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {blogs ? (
        blogs.map((blog) => (
          <>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
          </>
        ))
      ) : (
        <h3>No results found</h3>
      )}
    </div>
  );
}
