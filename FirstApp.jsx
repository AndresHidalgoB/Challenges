import { useState } from "react";
import {useCounter} from './hooks/useCounter'

export const FirstApp = ({ value }) => {
  const {counter,handleAdd,handleSubstract,handleReset } = useCounter(value);
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
