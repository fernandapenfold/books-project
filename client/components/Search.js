import React, { useState, useEffect } from "react";

// const URI = "https://www.googleapis.com/books/v1/volumes";
// const KEY = process.env.GOOGLE;

const Search = () => {
  const handleSubmit = () => {}

  return (
    <div>
      <form onSubmit={handleSubmit} name="search">
        <div>
          <label htmlFor="keyword">
            <small>Keyword</small>
          </label>
          <input name="keyword" type="text" />
        </div>
        <div>
          <label htmlFor="title">
            <small>Title</small>
          </label>
          <input name="title" type="text" />
        </div>
        <div>
          <label htmlFor="author">
            <small>Author</small>
          </label>
          <input name="author" type="text" />
        </div>
        <div>
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  )
}

export default Search;