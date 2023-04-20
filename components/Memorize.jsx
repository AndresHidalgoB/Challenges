import React, { useState } from "react";
import { useCounter } from "../hooks/useCounter";
import { Small } from "./Small";

export const Memorize = () => {
  const { counter, handleAdd } = useCounter(1);
  const [first, setFirst] = useState(10);

  return (
    <>
      <h1>Memorize {first}</h1>
      <h1>
        Small: <Small value={counter} />
      </h1>
      <hr />

      <button className="btn btn-primary" onClick={() => handleAdd()}>
        +1
      </button>

      <button className="btn btn-primary" onClick={() => setFirst(first + 1)}>
        Set Memorize Satate
      </button>
    </>
  );
};
