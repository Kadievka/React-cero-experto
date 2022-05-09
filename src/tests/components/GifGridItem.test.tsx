import React from 'react';
import { render, screen } from "@testing-library/react";
import GifGridItem from "../../components/GifGridItem";
import { ImageInterface } from "../../interfaces/ImageInterface";


describe('GifGridItem', ()=>{

  it('should show the component successfully', () => {
    const input: ImageInterface = {
      id: 'mock-id',
      title: 'mock-title',
      url: 'mock-url',
    }

    const wrapper = render(<GifGridItem {...input}  />);

    const divElement = screen.getByTestId('div-element');
    const imgElement = screen.getByTestId('img-element');
    const titleElement = screen.getByTestId('title-element');

    expect(wrapper.asFragment()).toMatchSnapshot();

    expect(divElement).toHaveClass('animate__fadeIn');
    expect(imgElement).toHaveAttribute('src', 'mock-url');
    expect(titleElement.innerHTML.trim()).toBe('mock-title');

  });

});