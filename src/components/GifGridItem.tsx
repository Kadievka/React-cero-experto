import React from 'react';
import { ImageInterface } from '../interfaces/ImageInterface'

const GifGridItem = ({title, url}: ImageInterface) => {
  return (
    <div className="card animate__animated animate__fadeIn" >
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}

export default GifGridItem;
