import React from 'react';

function Nav() {
// List out array to map back to and refer too
    const categories = [
        {
          name: "commercial",
          description:
            "Photos of grocery stores, food trucks, and other commercial projects",
        },
        { name: "portraits", description: "Portraits of people in my life" },
        { name: "food", description: "Delicious delicacies" },
        {
          name: "landscape",
          description: "Fields, farmhouses, waterfalls, and the beauty of nature",
        },
    ];

// The onClick() attribute is expecting a callback function declaration. 
// It's important that we wrap it in a function declaration rather than just calling categorySelected(category.name), 
// which would cause the function to get called whenever the component renders as well.
    function categorySelected(name) {
        console.log(`${name} clicked`)
    }


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
                <li className="mx-1" key={category.name}>
                    <span onClick = {categorySelected}>
                        {category.name}
                    </span>
                </li>
            ))}
        </ul>
    </nav>
    </header>
  );
}

export default Nav;