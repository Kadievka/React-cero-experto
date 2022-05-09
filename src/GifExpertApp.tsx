import  { ReactElement, useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
import PropTypes from 'prop-types';

export interface GifExpertAppInputInterface {
  categoriesInput?: string[]
}

const GifExpertApp = ({categoriesInput = ["One Punch"]}: GifExpertAppInputInterface): ReactElement => {

  const [categories, setCategories] = useState(categoriesInput);

  return (
    <>
      <h1 data-testid="h1-element">GifExpertApp</h1>
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

GifExpertApp.propTypes = {
  categoriesInput: PropTypes.string
}

export default GifExpertApp;