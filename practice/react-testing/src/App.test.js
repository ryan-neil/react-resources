import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('inputs should be initially empty', () => {
  // 1) RENDER the component to be tested
  render(<App />);
  // 2) FIND our input elements (query them)
  const emailInputElement = screen.getByRole('textbox');
  const passwordInputElement = screen.getByLabelText('Password');
  const confirmPasswordInputElement = screen.getByLabelText(/confirm password/i);
  // 3) ASSERTION
  expect(emailInputElement.value).toBe('');
  expect(passwordInputElement.value).toBe('');
  expect(confirmPasswordInputElement.value).toBe('');
});

test('user should be able to type an email', () => {
  // render
  render(<App />);
  // find
  const emailInputElement = screen.getByRole('textbox', {
    name: /email/i,
  });
  // event
  userEvent.type(emailInputElement, 'katie@gmail.com');
  // assert
  expect(emailInputElement.value).toBe('katie@gmail.com');
});

test('user should be able to type a password', () => {
  // render
  render(<App />);
  // find
  const passwordInputElement = screen.getByLabelText('Password');
  // event
  userEvent.type(passwordInputElement, 'password123');
  // assert
  expect(passwordInputElement.value).toBe('password123');
});

test('user should be able to type a confirmation password', () => {
  // render
  render(<App />);
  // find
  const confirmPasswordInputElement = screen.getByLabelText(/confirm password/i);
  // event
  userEvent.type(confirmPasswordInputElement, 'password123');
  // assert
  expect(confirmPasswordInputElement.value).toBe('password123');
});

test('should show email error message on invalid email', () => {
  // render
  render(<App />);

  // find our elements
  const emailInputElement = screen.getByRole('textbox', {
    name: /email/i,
  });
  const emailErrorElement = screen.queryByText(/the email you input is invalid/i); // needs to be 'query'
  const submitButtonElement = screen.getByRole('button', {
    name: /submit/i,
  });

  // assert the error element is not yet in the doc
  expect(emailErrorElement).not.toBeInTheDocument();

  // events
  userEvent.type(emailInputElement, 'katiegmail.com');
  userEvent.click(submitButtonElement);

  // assert the error element is in the doc when invalid email
  const emailErrorElementAgain = screen.queryByText(/the email you input is invalid/i); // needs to be 'query'
  expect(emailErrorElementAgain).toBeInTheDocument();
});

test('should show password error if password is less than 5 characters', () => {
  // render
  render(<App />);

  /**
   * Handle correct email input and password error not displayed
   */
  // step 1: input correct email
  // find: email input element
  const emailInputElement = screen.getByRole('textbox', {
    name: /email/i,
  });
  // event: type valid email
  userEvent.type(emailInputElement, 'katie@gmail.com');
  // find: password input element
  const passwordErrorElement = screen.queryByText(
    /the password you entered should contain 5 or more characters/i
  );
  // assert: expect password error element to NOT be in the document
  expect(passwordErrorElement).not.toBeInTheDocument();

  /**
   * Handle invalid password input and password error displayed
   */
  // step 1:
  // find: password input element
  const passwordInputElement = screen.getByLabelText('Password');
  // event: type an invalid password
  userEvent.type(passwordInputElement, '123');

  // step 2: click on submit button and display error message
  // find: submit button
  const submitButtonElement = screen.getByRole('button', {
    name: /submit/i,
  });
  // event: click on submit button
  userEvent.click(submitButtonElement);
  // find: error element again
  const passwordErrorElementAgain = screen.queryByText(
    /the password you entered should contain 5 or more characters/i
  );
  // assertion: expect password error element to be in the document
  expect(passwordErrorElementAgain).toBeInTheDocument();
});
