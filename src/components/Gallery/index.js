import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import PhotoList from '../Photolist';

// Let's update the Gallery component so that it gets the name and description from an object, 
// rather than from hardcoded placeholder values.
function Gallery(props) {
// props.category is sent through this Gallery component through as category (i.e category = {currentCategory.name})
const { currentCategory } = props;

return (
  <section>
    <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
    <p>{currentCategory.description}</p>
    <PhotoList category={currentCategory.name} />
  </section>
);
}

export default Gallery;