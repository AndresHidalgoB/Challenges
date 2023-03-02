import { useState } from "react";

export const FirstApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
  };
  const handleReset = () => {
    setCounter(value);
  };

  const handleSubstract = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>Counter</h1>
      <span>{counter}</span>
      <br />
      <button onClick={() => handleAdd()}>+1</button>
      <button onClick={() => handleSubstract()}>-1</button>
      <button onClick={() => handleReset()}>reset</button>
    </>
  );
};
