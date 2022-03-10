import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchBooks } from "../store";
import { parse } from "../utilityFunctions";
import FormField from "./FormField";
import Button from "./Button";

const OPTIONS = [
  { value: "", label: "Keyword" },
  { value: "intitle", label: "Title" },
  { value: "inauthor", label: "Author" },
  { value: "inpublisher", label: "Publisher" },
  { value: "subject", label: "Subject" },
  { value: "isbn", label: "ISBN" },
];

const Search = () => {
  const dispatch = useDispatch();
  const [queries, setQueries] = useState([
    {
      input: "",
      param: "",
      options: OPTIONS,
    },
  ]);
  // const [selectedParams, setSelectedParams] = useState([""]);

  const onInputChange = (e, index) => {
    const _queries = [...queries];
    _queries[index].input = e.target.value;
    setQueries(_queries);
  };

  const onParamChange = (e, index) => {
    const _queries = [...queries];
    _queries[index].param = e.target.value;
    setQueries(_queries);

    // const _selectedParams = [...selectedParams];
    // _selectedParams[index] = e.target.value;
    // setSelectedParams(_selectedParams);
  };

  const onClick = () => {
    // to do: write function that returns first non used param
    const param = "";
    setQueries([...queries, { input: "", param }]);
    // setSelectedParams([ ...selectedParams, param ]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(queries);
    // dispatch(fetchBooks(parse(e.target.query.value)));
  };

  return (
    <div>
      <form onSubmit={onSubmit} name="search">
        {queries.map((_, i) => (
          <FormField
            key={i}
            index={i}
            queries={queries}
            options={OPTIONS}
            onInputChange={(e, index) => onInputChange(e, index)}
            onParamChange={onParamChange}
          />
        ))}
        <div>
          <button type="submit">Search</button>
        </div>
      </form>
      <Button onClick={onClick} text="+" />
    </div>
  );
};

export default Search;
