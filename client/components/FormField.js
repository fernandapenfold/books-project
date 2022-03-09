import React, { useState } from "react";
import Dropdown from "./Dropdown";

const FormField = ({ index, queries, options, onInputChange, onParamChange }) => {
  console.log("index in FormField", index)
  return (
    <div>
      <Dropdown
        index={index}
        value={queries[index].param}
        options={options}
        onChange={onParamChange}
      />
      <input value={queries[index].input} onChange={(e, index) => onInputChange(e, index)} type="text" />
    </div>
  );
};

// const FormField = ({ options }) => {
//   const [value, setValue] = useState("");

//   const onChange = (e) => {
//     setValue(e.target.value);
//   };

//   return (
//     <div>
//       <Dropdown value={value} options={options} onChange={onChange} />
//       <input name="query" type="text" />
//     </div>
//   );
// };

export default FormField;
