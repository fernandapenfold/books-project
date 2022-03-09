import React, { useState } from "react";
import Dropdown from "./Dropdown";

const FormField = ({ index, queries, options, onInputChange, onParamChange }) => {
  return (
    <div>
      <Dropdown
        index={index}
        value={queries[index].param}
        options={options}
        onChange={onParamChange}
      />
      <input value={queries[index].input} onChange={(e) => onInputChange(e, index)} type="text" />
    </div>
  );
};

export default FormField;
