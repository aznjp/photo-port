import React from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {

// Instead, we’re going to “lift” the state up one level. 
// Whenever you think state needs to be used in multiple sibling components, 
// it's normally a good idea to lift the state up until it can be passed as props to any child components that need it. 
const {
  categories = [],
  setCurrentCategory,
  currentCategory,
  contactSelected,
  setContactSelected
} = props;



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
                <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>About me</a>
            </li>

            <li className={`mx-2 ${contactSelected && 'navActive'}`}>
              <span onClick={() => setContactSelected(true)}>
                Contact
              </span>
            </li>
            {/* Will map through all of the categories and then will account for the change based on the onClick function below */}
            {categories.map((category) => (
                <li className=
                {`mx-1 ${
                  currentCategory.name === category.name && !contactSelected && `navActive`
                }`} 
                key={category.name}>

                    <span onClick = {() => {
                      setCurrentCategory(category);
                      setContactSelected(false);}
                    }>
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