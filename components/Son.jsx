import React, { memo, useEffect } from "react";

export const Son = memo(({ numero, increment }) => {
    useEffect(()=>{
      console.log('Rederizando hijo', numero)
    },[])
    return (
      <button
        className="btn btn-primary mr-3"
        onClick={() => {
          increment(numero);
        }}
      >
        {numero}
      </button>
    );
  });
