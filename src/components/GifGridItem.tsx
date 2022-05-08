import React from 'react';
import { ImageInterface } from '../interfaces/ImageInterface';
import PropTypes from 'prop-types';

const GifGridItem = ({title, url}: ImageInterface) => {
  return (
    <div className="card animate__animated animate__fadeIn" >
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default GifGridItem;
