import React from "react";

const Dropdown = ({ index, value, options, onChange }) => (
  <select value={value} onChange={(e) => onChange(e, index)}>
    {options
      .filter((option) => option.display)
      .map((option, i) => (
        <option key={i} value={option.value}>
          {option.label}
        </option>
      ))}
  </select>
);

export default Dropdown;
