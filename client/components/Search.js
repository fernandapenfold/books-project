import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import BasicSearch from "./BasicSearch";
import Books from "./Books";

const Search = () => {
  const search = useSelector(state => state.search);

  return (
    <div>
      <BasicSearch />
      {search && search.totalItems && <Books books={search.items} />}
    </div>
  )
}

export default Search;

/*
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
*/