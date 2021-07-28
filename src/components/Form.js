import React, { useState } from "react";

const Form = ({ setName }) => {
  const [ currName, setCurrentName ] = useState("--");
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setName(currName)
        }}
      >
        <input
          type="text"
          value={currName}
          onChange={(e) => {
            setCurrentName(e.target.value);
          }}
        ></input>
        <button type="submit">Submit</button>
      </form>
      <h1>{currName}</h1>
    </>
  );
};

export default Form;
