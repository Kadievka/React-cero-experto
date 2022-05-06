import  { ReactElement, useState } from "react";
import { AddCategory } from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = (): ReactElement => {

  const [categories, setCategories] = useState(["One Punch"]);

  return (
    <>
      <h1>GifExpertApp</h1>
        <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {
          categories.map((category, index) => (
            <GifGrid
              key={`${category}-${index}`}
              category={category} 
            />
          ))
        }
      </ol>

    </>
  );

}

export default GifExpertApp;