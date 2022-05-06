import { GiphyImageInterface } from "../interfaces/GiphyImageInterface";
import { ImageInterface } from "../interfaces/ImageInterface";

export const getGifs = async (category: string): Promise<ImageInterface[]> => {

  const url: string = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=2GQiNnBujwcxQpIFg3ov4AdnYTe3Watm`

  const response: Response = await fetch(url);

  const { data } = await response.json();

  return data.map((img: GiphyImageInterface) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  } as ImageInterface));

}