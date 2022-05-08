import { getGifs } from "../../helpers/getGifs";
import { ImageInterface } from "../../interfaces/ImageInterface";

const mockFetch = () => ( Promise.resolve({
  json: () => Promise.resolve({
    data: [{
      id: "mock-id",
      title: "mock-title",
      images: {
        downsized_medium: {
          url: "mock-url"
        }
      }
    }]
  }),
}));

const fakeFetch = jest.fn();
window.fetch = fakeFetch;

describe("getGifts helper", () => {

  it("should call fetch, json, and return ImageInterface array", async () => {

    fakeFetch.mockImplementationOnce(mockFetch);

    const expectedResult: ImageInterface[] = [{
      id: "mock-id",
      title: "mock-title",
      url: "mock-url",
    }]

    const result = await getGifs("mock category");
    expect(result).toStrictEqual(expectedResult);
  });

});