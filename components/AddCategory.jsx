import { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState("...");

  const onSubmit = (e) => {
    e.preventDefault();
    onAddCategory(inputValue);
    setInputValue("");
  };
  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        type="text"
        placeholder="Buscar"
        value={inputValue}
        onChange={(e) => onInputChange(e)}
      />
    </form>
  );
};
