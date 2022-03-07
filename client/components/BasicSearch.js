import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Dropdown from "./Dropdown";
import { fetchBooks } from "../store";
import { parse } from "../utilityFunctions";

const options = [
  { key: 1, value: "keyword", label: "Keyword" },
  { key: 2, value: "intitle", label: "Title" },
  { key: 3, value: "inauthor", label: "Author" },
  { key: 4, value: "inpublisher", label: "Publisher" },
  { key: 5, value: "subject", label: "Subject" },
  { key: 6, value: "isbn", label: "ISBN" }
];

const BasicSearch = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("keyword");

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchBooks(parse(e.target.query.value)));
  };

  return (
    <form onSubmit={handleSubmit} name="basic-search">
      <div>
        <Dropdown value={value} options={options} handleChange={handleChange} />
        <input name="query" type="text" />
        <div>
          <button type="submit">Search</button>
        </div>
      </div>
    </form>
  );
};

export default BasicSearch;
