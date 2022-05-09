import React from 'react';
import {
  cleanup,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import AddCategory from "../../components/AddCategory";


describe('AddCategory', () => {

  beforeEach(()=>{
    cleanup();
  });

  it('should show the component successfuly', () => {

    const setCategories = ()=>({});

    const wrapper = render(<AddCategory setCategories={setCategories} />);

    const inputElement = screen.getByTestId('input-element');
    const buttonElement = screen.getByTestId('button-element');

    expect(wrapper.asFragment()).toMatchSnapshot();

    expect(inputElement).toHaveAttribute('value', "");
    expect(inputElement).toHaveAttribute('type', "text");
    expect(buttonElement.innerHTML.trim()).toBe('Agregar');

  });

  it('should handleInputChange', () => {

    const setCategories = ()=>({});

    render(<AddCategory setCategories={setCategories} />);

    const inputElement = screen.getByTestId('input-element');

    fireEvent.change(inputElement, {target: {value: 'mock-input-value'}});
    expect(inputElement).toHaveAttribute('value', 'mock-input-value');


  });

  it('should handleSubmit', () => {

    const setCategories = jest.fn();

    render(<AddCategory setCategories={setCategories} />);

    const inputElement = screen.getByTestId('input-element');
    fireEvent.change(inputElement, {target: {value: 'mock-input-value'}});
    expect(inputElement).toHaveAttribute('value', 'mock-input-value');

    const formElement = screen.getByTestId('form-element');
    fireEvent.submit(formElement);
    expect(inputElement).toHaveAttribute('value', '');
    expect(setCategories).toHaveBeenCalledTimes(1);

  });

  it('should not change the categories if category is less than 2', () => {

    const setCategories = jest.fn();

    render(<AddCategory setCategories={setCategories} />);

    const inputElement = screen.getByTestId('input-element');

    fireEvent.change(inputElement, {target: {value: '1'}});
    expect(inputElement).toHaveAttribute('value', '1');

    const formElement = screen.getByTestId('form-element');
    fireEvent.submit(formElement);
    expect(inputElement).toHaveAttribute('value', '1');
    expect(setCategories).toHaveBeenCalledTimes(0);

  });

});