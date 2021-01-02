import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

// When that form data is maintained by the state of the component, we call it a controlled component. 
// When the data is retrieved, then submitted directly from the DOM, we call it an uncontrolled component.
// In React, the advantage of a controlled component is that the data can be validated or manipulated using JavaScript, 
// offering better control over the data but also requiring more time to develop.
function ContactForm() {

// Hooks to manage form data 
// The initial state should be an empty form thus what is set in the useState function
const [formState, setFormState] = useState({ name: '', email: '', message: '' });
// This is a good case where we can destructure the formState object into its named properties, name, email, and message. 
const { name, email, message } = formState;

// Let's use the useState Hook to handle the error state.
const [errorMessage, setErrorMessage] = useState('');

// This will handle any changes that occur in the form 
// We use the spread operator, ...formState, so we can retain the other key-value pairs in this object. 
// Without the spread operator, the formState object would be overwritten to only contain the name: value key pair.
// The name property of target in the preceding expression actually refers to the name attribute of the form element. 
// This attribute value matches the property names of formState (name, email, and message) and allows us to use [ ] to create dynamic property names.
function handleChange(e) {
    if (e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        console.log(isValid);
        // isValid conditional statement
        if (!isValid) {
            setErrorMessage('Your email is invalid.');
        } else {
          if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
          } else {
            setErrorMessage('');
          }
        }
    }
    if (!errorMessage) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }
}
  
function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
}

// The onBlur attribute will fire the event once the user has changed focus from the input field, 
// thus allowing the user to finish their entry before validating their input.
return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Name:</label>
            <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
        </div>
        <div>
            <label htmlFor="email">Email address:</label>
            <input type="email" defaultValue={email} onBlur={handleChange} name="email" />
        </div>
        <div>
            <label htmlFor="message">Message:</label>
            <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5"  />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
    
export default ContactForm;