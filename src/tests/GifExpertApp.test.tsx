import React from 'react';
import {
  cleanup,
  render,
  screen,
} from "@testing-library/react";
import GifExpertApp from "../GifExpertApp";

describe('GifExpertApp', () => {

  beforeEach(()=>{
    cleanup();
  });

  it('should show the defined categories', () => {

    const categoriesInput = ["Dragon Ball"];

    const wrapper = render(<GifExpertApp categoriesInput={categoriesInput} />);

    expect(wrapper.asFragment()).toMatchSnapshot();

    const h1Element = screen.getByTestId('h1-element');
    const h3Element = screen.getByTestId('h3-element');

    expect(h1Element.innerHTML.trim()).toBe("GifExpertApp");
    expect(h3Element.innerHTML.trim()).toBe("Dragon Ball");

    console.log(screen.debug())

  });

});