import React from "react";

const Dropdown = ({ value, options, handleChange }) => (
  <select value={value} onChange={handleChange}>
    {options.map((option) => (
      <option key={option.key} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

export default Dropdown;