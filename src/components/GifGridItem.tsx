import React from 'react';
import { ImageInterface } from '../interfaces/ImageInterface';
import PropTypes from 'prop-types';

const GifGridItem = ({title, url}: ImageInterface) => {
  return (
    <div data-testid="div-element" className="card animate__animated animate__fadeIn" >
      <img data-testid="img-element" src={url} alt={title} />
      <p data-testid="title-element">{title}</p>
    </div>
  )
}

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default GifGridItem;
