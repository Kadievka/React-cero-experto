import React from 'react'

export interface GifGridPropsInterface {
  category: string
}

export interface GiphyImageInterface {
  id: string,
  title: string,
  images: {
    downsized_medium: {
      url: string
    },
  },
}

const GifGrid = ({category}: GifGridPropsInterface) => {

  const getGif = async ()=>{

    const url: string = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=2GQiNnBujwcxQpIFg3ov4AdnYTe3Watm`

    const response: Response = await fetch(url);

    const { data } = await response.json();

    const gifs = data.map((img: GiphyImageInterface) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
      }
    });

    console.log(gifs);
  }

  getGif();

  return (
    <div>
      {category}
    </div>
  )
}

export default GifGrid