import React from "react";

const Input = ({ placeholder, type, value, setInputText }) => {
  return (
    <input
      className="w-5/6 h-10 pl-2 border rounded-md border-gray-900"
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={(event) => setInputText(event.target.value)}
      required
    ></input>
  );
};

export default Input;
