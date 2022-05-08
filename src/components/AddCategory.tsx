import React, { useState } from 'react';
import PropTypes from 'prop-types';

export interface AddCategoryPropsInterface {
  setCategories: React.Dispatch<React.SetStateAction<string[]>>
}

const AddCategory = ({setCategories}: AddCategoryPropsInterface) => {

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(inputValue.trim().length > 2 ){
      //categories en este callback es el estado anterior! y se puede hacer en este Hook
      setCategories((categories) => {
        const categoryFound = categories.find(category => category === inputValue);
        if(categoryFound){
          return categories;
        }
        return [inputValue, ...categories];
      });
      setInputValue("");
    }
  }

  return (
    <form data-testid="form-element" onSubmit={handleSubmit}>
      <input
        data-testid="input-element"
        type="text"
        value={ inputValue }
        onChange = { e => handleInputChange(e) }
      />
      <button data-testid="button-element">Agregar</button>
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
}

export default AddCategory;

