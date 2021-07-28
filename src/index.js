import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import Count from "./components/Count.js";
import Clicker from "./components/Clicker.js";
import Form from "./components/Form.js";

const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Pawan");
  
  
  useEffect(() => {
    console.log(count);
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Clicker inc={increment} />
      <Count count={count} name={name} />
      <Form setName={setName} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
