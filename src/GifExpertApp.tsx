import  { ReactElement, useState } from "react";

const GifExpertApp = (): ReactElement => {

  const [categories, setCategories] = useState(["One Punch", "Samurai X", "Dragon Ball"]);

  const handleAdd = () => {
    //la idea aqui es retornar algo nuevo del mismo tipo, y no tratar de modificar el actual
    setCategories(["Sailor Moon", ...categories]);
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <hr />

      <button onClick={handleAdd}>Agregar</button>

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