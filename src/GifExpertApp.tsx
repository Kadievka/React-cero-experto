import  { ReactElement, useState } from "react";
import { AddCategory } from "./components/AddCategory";

const GifExpertApp = (): ReactElement => {

  const [categories, setCategories] = useState(["One Punch", "Samurai X", "Dragon Ball"]);

  return (
    <>
      <h1>GifExpertApp</h1>
        <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {
          categories.map((category, index) => (
            <li key={`${category}-${index}`}>{category}</li>
          ))
        }
      </ol>

    </>
  );

}

export default GifExpertApp;