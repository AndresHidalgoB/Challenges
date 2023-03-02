import { useState } from "react";

export const ComponentApp = () => {
  const [categories, setCategories] = useState(["first category"]);
  const [category, setCategory] = useState();

  const onAddCategory = () => {
    setCategories((list) => [...list, category]);
    setCategory("");
  };

  const onSetCategory = (e) => {
    setCategory(e.target.value);
  };
  return (
    <>
      <h1>GifExpert</h1>
      <input type="text" value={category} onChange={(e) => onSetCategory(e)} />
      <button onClick={() => onAddCategory()}>Add Category</button>
      <ol>
        {categories.map((category, key) => {
          return <li key={key}>{category}</li>;
        })}
      </ol>
    </>
  );
};
