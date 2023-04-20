import { memo } from "react";

export const Small = memo(({ value }) => {
  console.log(":(");
  return <small>{value}</small>;
});
