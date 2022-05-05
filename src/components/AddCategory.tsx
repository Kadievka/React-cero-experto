import React, { useState } from 'react'

export interface AddCategoryPropsInterface {
  setCategories: React.Dispatch<React.SetStateAction<string[]>>
}

export const AddCategory = ({setCategories}: AddCategoryPropsInterface) => {

  const [inputValue, setInputValue] = useState('Hola mundo');

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={ inputValue }
        onChange = { e => handleInputChange(e) }
      />
      <button>Agregar</button>
    </form>
  )
}
