import React from 'react';
import {
  cleanup,
  render,
  screen,
} from "@testing-library/react";
import GifGrid from "../../components/GifGrid";
import * as useFetchGifs from '../../hooks/useFetchGifs';

const mockUseFetch = jest.spyOn(useFetchGifs, "useFetchGifs");

describe('GifGrid', () => {

  beforeEach(()=>{
    cleanup();
  });

  it('should show the component successfully', () => {

    mockUseFetch.mockReturnValue({
      data: [],
      loading: true
    });

    const category = "mock-category";

    const wrapper = render(<GifGrid category={category} />);

    const h3Element = screen.getByTestId('h3-element');
    const pElement = screen.getByTestId('p-element');
    const divElement = screen.getByTestId('div-element');

    expect(wrapper.asFragment()).toMatchSnapshot();

    expect(h3Element).toHaveClass("animate__fadeIn");
    expect(h3Element.innerHTML.trim()).toBe("mock-category");

    expect(pElement.innerHTML.trim()).toBe("Loading...");

    expect(divElement).toHaveClass('card-grid');

  });

  it('should show the component successfully when images are loaded', () => {

    mockUseFetch.mockReturnValue({
      data: [{
        id: "mock-id",
        title: "mock-title",
        url: "mock-url",
      }],
      loading: false
    });

    const category = "mock-category";

    const wrapper = render(<GifGrid category={category} />);

    const h3Element = screen.getByTestId('h3-element');

    expect(h3Element).toHaveClass("animate__fadeIn");
    expect(h3Element.innerHTML.trim()).toBe("mock-category");

    expect(wrapper.queryByText("Loading...")).toBeNull();

  });

});