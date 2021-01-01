import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

// Note that the describe function is not absolutely necessary for the test to run; 
// it is used to organize tests into sections that are typically labeled with the element being tested.
describe('Nav component', () => {
    // baseline test
    it('renders', () => {
        render(<Nav />);
      });
   
    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);
        // Use the expect function with a matcher to assert something about a value. 
        // In the following statement, we'll use the toMatchSnapshot matcher to assert that snapshots will match:
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
      });
      
})

describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
    // Arrange
    // The query to return the element containing the emoji will look like the following statement:
    const { getByLabelText } = render(<Nav />);
    // Assert
    // In the next evaluation, or assert, part of our test, we can use the getByLabelText method and query by the aria-label value, 
    // which can be seen in the preceding markup as camera. This is shown in the following assertion:
    expect(getByLabelText('camera')).toHaveTextContent('📸');
    })
})  

describe('links are visible', () => {
    it('inserts text into the links', () => {
      // Arrange
      const { getByTestId } = render(<Nav />);
      // Assert
      expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
      expect(getByTestId('about')).toHaveTextContent('About me');
    });
})