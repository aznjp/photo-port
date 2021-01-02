import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Gallery from '..'
const portrait = { name: "portraits", description: "Portraits of people in my life" };

afterEach(cleanup)

describe('Gallery is rendering', () => {
// Will take a fake object to test for the gallery image"
  it('renders', () => {
    render(<Gallery currentCategory={portrait} />);
  });
// Will make snapshot of gallery images in html format and return based on portraits folder we have in src folder
  it('matches snapshot', () => {
    const { asFragment } = render(<Gallery currentCategory={portrait} />)
    expect(asFragment()).toMatchSnapshot()
  })
// Specifically used to test for Gallery via test id for h1tag
  it('renders', () => {
    const { getByTestId } = render(<Gallery currentCategory={portrait} />)
    expect(getByTestId('h1tag')).toHaveTextContent('Portraits')
  })
})
