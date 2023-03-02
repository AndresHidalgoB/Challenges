import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpert = () => {
  const [categories, setCategories] = useState(["first category"]);

  const onAddCategory = (category) => {
    setCategories((list) => [...list, category]);
  };

  return (
    <>
      <h1>GifExpert</h1>
      <AddCategory onAddCategory={onAddCategory} />
      <ol>
        {categories.map((category, key) => {
          return <GifGrid category={category} key={key} />;
        })}
      </ol>
    </>
  );
};
