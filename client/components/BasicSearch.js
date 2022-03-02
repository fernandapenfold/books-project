import React from "react";
import { useDispatch } from "react-redux";
import { fetchBooks } from "../store";
import { parse } from "../utilityFunctions";

const BasicSearch = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchBooks(parse(e.target.query.value)));
  }

  return (
    <form onSubmit={handleSubmit} name="basic-search">
      <div>
        <input name="query" type="text" />
        <div>
          <button type="submit">Search</button>
        </div>
      </div>
    </form>
  )
}

export default BasicSearch;