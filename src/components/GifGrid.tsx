import React, { useEffect, useState } from 'react'
import { ImageInterface } from '../interfaces/ImageInterface';
import GifGridItem from './GifGridItem';
import { getGifs as getGifsService } from '../helpers/getGifs';

export interface GifGridPropsInterface {
  category: string
}

const GifGrid = ({category}: GifGridPropsInterface) => {

  const [images, setImages] = useState<ImageInterface[]>([]);

  useEffect(() => {
    getGifsService(category).then((gifs: ImageInterface[])=>{
      setImages(gifs);
    });
  }, [category]);


  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
          {
            images.map((image) => (
              <GifGridItem key={image.id} {...image}/>
            ))
          }
      </div>
    </>
  )
}

export default GifGrid