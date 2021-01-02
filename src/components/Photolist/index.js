import React, { useState } from 'react';
// useState is utilized to go through each of the photo names and descriptions in the array via the category

// This object is sent through from the props inputs through the Gallery component through the return
//  
const PhotoList = ({ category }) => {

    const [photos] = useState([
      {
        name: 'Grocery aisle',
        category: 'commercial',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
        name: 'Grocery booth',
        category: 'commercial',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
        name: 'Building exterior',
        category: 'commercial',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
        name: 'Restaurant table',
        category: 'commercial',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
        name: 'Cafe interior',
        category: 'commercial',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
        name: 'Cat green eyes',
        category: 'portraits',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
        name: 'Green parrot',
        category: 'portraits',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
        name: 'Yellow macaw',
        category: 'portraits',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
        name: 'Pug smile',
        category: 'portraits',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
        name: 'Pancakes',
        category: 'food',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
        name: 'Burrito',
        category: 'food',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
        name: 'Scallop pasta',
        category: 'food',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
        name: 'Burger',
        category: 'food',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
        name: 'Fruit bowl',
        category: 'food',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
        name: 'Green river',
        category: 'landscape',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
        name: 'Docks',
        category: 'landscape',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
        name: 'Panoramic village by sea',
        category: 'landscape',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
        name: 'Domestic landscape',
        category: 'landscape',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
        name: 'Park bench',
        category: 'landscape',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
    ]);
// This variable will filter through the arry and make them equivalent to the category in question
    const currentPhotos = photos.filter((photo) => photo.category === category);
// The return will then use the map function through this filtered new array and then display all the images through the array in order
  return (
    <div>
      <div className="flex-row">
      {currentPhotos.map((image, i) => (
          <img
          //  You can add .default to the end of your require statement: require(...).default and it will pull out the actual source url for the image instead of the object.
            src={require(`../../assets/small/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
        ))}
      </div>
    </div>
  )
}

export default PhotoList;