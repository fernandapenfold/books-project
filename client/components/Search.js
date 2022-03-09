import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchBooks } from "../store";
import { parse } from "../utilityFunctions";
import FormField from "./FormField";
import Button from "./Button";

const OPTIONS = [
  { value: "keyword", label: "Keyword", display: true },
  { value: "intitle", label: "Title", display: true },
  { value: "inauthor", label: "Author", display: true },
  { value: "inpublisher", label: "Publisher", display: true },
  { value: "subject", label: "Subject", display: true },
  { value: "isbn", label: "ISBN", display: true },
];

/*
[{
  query: "",
  param: "keyword" 
  options: OPTIONS
}]

  // const [inputFields, setInputFields] = useState([{
  //   query: "",
  //   param: "keyword",
  //   options: OPTIONS,
  // }]);
*/

const Search = () => {
  const dispatch = useDispatch();
  const [queries, setQueries] = useState([
    {
      input: "",
      param: "keyword",
    },
  ]);

  const onInputChange = (e, index) => {
    const values = [...queries];
    values[i].input = e.target.value;
    setQueries(values);
  };

  const onParamChange = (e, index) => {
    console.log("event.target.value =>", e.target.value)
    console.log("index =>", index)
    console.log("queries =>", queries)
    const values = [...queries];
    values[index].param = e.target.value;
    setQueries(values);
  };

  const onClick = () => {
    setQueries([...queries, { input: "", param: "keyword" }]);
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

// const Search = () => {
//   const dispatch = useDispatch();
//   const [inputFields, setInputFields] = useState([OPTIONS]);

//   const onClick = () => {
//     setInputFields([
//       ...inputFields,
//       OPTIONS,
//     ]);
//   };

//   const onSubmit = (e) => {
//     e.preventDefault();
//     dispatch(fetchBooks(parse(e.target.query.value)));
//   };

//   return (
//     <div>
//       <form onSubmit={onSubmit} name="search">
//         {inputFields.map((_, i) => (
//           <FormField key={i} options={inputFields[i]} />
//         ))}
//         <div>
//           <button type="submit">Search</button>
//         </div>
//       </form>
//       <Button onClick={onClick} text="+" />
//     </div>
//   );
// };

export default Search;
