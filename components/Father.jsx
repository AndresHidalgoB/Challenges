import React, { useState, useMemo, useCallback } from "react";
import { Son } from "./Son";

export const Father = () => {
  const list = useMemo(() => [2, 4, 6, 8, 10], []);
  const [valor, setValor] = useState(0);

  const increment = useCallback((num) => {
    setValor((v) => v + num);
  }, [valor]);

  return (
    <div>
      <h1>Father</h1>
      <p>Total: {valor}</p>
      <hr />
      {list.map((n, idx) => {
        return <Son key={idx} numero={n} increment={increment} />;
      })}
    </div>
  );
};

