import React, { useState } from "react";
import Dropdown from "./Dropdown";


const FormField = ({ options }) => {
  const [value, setValue] = useState("keyword");

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <div>
      <Dropdown value={value} options={options} handleChange={handleChange} />
      <input name="query" type="text" />
    </div>
  );
};

export default FormField;
