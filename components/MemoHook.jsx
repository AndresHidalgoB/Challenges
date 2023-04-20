import React, { useState, useMemo } from "react";

export const MemoHook = () => {
  const [number, setNumber] = useState(0);

  // una función costosa que suma los valores del 1 al número
  const expensiveCalculation = (num) => {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    return sum;
  };

  // memoizamos el resultado de la función costosa para evitar recalculaciones
  const result = useMemo(() => expensiveCalculation(number), [number]);

  return (
    <div>
      <h1>UseMemo Example</h1>
      <p>
        Introduce un número:
        <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
      </p>
      <p>
        El resultado de la suma del 1 al {number} es: {result}
      </p>
    </div>
  );
}
