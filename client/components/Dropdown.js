import React from "react";

const OPTIONS = [
  { value: "", label: "Keyword" },
  { value: "intitle", label: "Title" },
  { value: "inauthor", label: "Author" },
  { value: "inpublisher", label: "Publisher" },
  { value: "subject", label: "Subject" },
  { value: "isbn", label: "ISBN" },
];

const Dropdown = ({ index, value, options, onChange }) => (
  <select value={value} onChange={(e) => onChange(e, index)}>
    {options
      // .filter((option) => option.display)
      .map((option, i) => (
        <option key={i} value={option.value}>
          {option.label}
        </option>
      ))}
  </select>
);


export default Dropdown;
