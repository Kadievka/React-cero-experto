import React from 'react';
import { render } from "@testing-library/react";
import GifGridItem from "../../components/GifGridItem";
import { ImageInterface } from "../../interfaces/ImageInterface";


describe('GifGridItem', ()=>{

  it('should show the component successfuly', () => {
    const input: ImageInterface = {
      id: 'mock-id',
      title: 'mock-title',
      url: 'mock-url',
    }

    const wrapper =render(<GifGridItem {...input}  />);
    
    expect(wrapper.asFragment()).toMatchSnapshot();
  
  });

});