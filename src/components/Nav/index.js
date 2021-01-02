import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {

// Instead, we’re going to “lift” the state up one level. 
// Whenever you think state needs to be used in multiple sibling components, 
// it's normally a good idea to lift the state up until it can be passed as props to any child components that need it. 
const {
  categories = [],
  setCurrentCategory,
  currentCategory,
} = props;

useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
}, [currentCategory]);

// The return will then show the list of information from the categories shown above via they key(i.e category name in this case)
  return (
    <header>
    <h2>
        {/* Add in the data-testid to prevent any CSS or javascript breaks while testing */}
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"> 📸</span> Oh Snap!
        </a>
    </h2>
    <nav>
        <ul className="flex-row">

            <li className="mx-2">
                <a data-testid="about" href="#about">About me</a>
            </li>

            <li>
                <span>Contact</span>
            </li>

            {categories.map((category) => (
                <li className=
                {`mx-1 ${currentCategory.name === category.name && 'navActive'}`} 
                key={category.name}>

                    <span onClick = {() => {setCurrentCategory(category)}}>
                    {capitalizeFirstLetter(category.name)}
                    </span>
                </li>
            ))}
        </ul>
    </nav>
    </header>
  );
}

export default Nav;