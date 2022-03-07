import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchBooks } from "../store";
import { parse } from "../utilityFunctions";
import FormField from "./FormField";

const options = [
  { key: 1, value: "keyword", label: "Keyword" },
  { key: 2, value: "intitle", label: "Title" },
  { key: 3, value: "inauthor", label: "Author" },
  { key: 4, value: "inpublisher", label: "Publisher" },
  { key: 5, value: "subject", label: "Subject" },
  { key: 6, value: "isbn", label: "ISBN" }
];

const Search = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchBooks(parse(e.target.query.value)));
  };

  return (
    <form onSubmit={handleSubmit} name="search">
      <FormField options={options} />
      <div>
        <button type="submit">Search</button>
      </div>
    </form>
  )
}

export default Search;