import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// jest beforeEach hook
beforeEach(() => {
  render(<App />);
});

// helper function that finds the elements and types into them for us
const typeIntoForm = ({ email, password, confirmPassword }) => {
  // find
  const emailInputElement = screen.getByRole('textbox', {
    name: /email/i,
  });
  const passwordInputElement = screen.getByLabelText('Password');
  const confirmPasswordInputElement = screen.getByLabelText(/confirm password/i);

  // event
  if (email) {
    userEvent.type(emailInputElement, email);
  }
  if (password) {
    userEvent.type(passwordInputElement, password);
  }
  if (confirmPassword) {
    userEvent.type(confirmPasswordInputElement, confirmPassword);
  }

  return {
    emailInputElement,
    passwordInputElement,
    confirmPasswordInputElement,
  };
};

// helper function to click submit
const clickSubmitButton = () => {
  const submitButtonElement = screen.getByRole('button', { name: /submit/i });
  userEvent.click(submitButtonElement);
};

// input fields should all be empty
test('inputs should be initially empty', () => {
  // find: our input elements (query them)
  const emailInputElement = screen.getByRole('textbox');
  const passwordInputElement = screen.getByLabelText('Password');
  const confirmPasswordInputElement = screen.getByLabelText(/confirm password/i);

  expect(emailInputElement.value).toBe('');
  expect(passwordInputElement.value).toBe('');
  expect(confirmPasswordInputElement.value).toBe('');
});

// type an email into the field
test('user should be able to type an email', () => {
  // * type into email input
  const { emailInputElement } = typeIntoForm({ email: 'katie@gmail.com' });
  expect(emailInputElement.value).toBe('katie@gmail.com');
});

// type a password into the field
test('user should be able to type a password', () => {
  // * type into password input
  const { passwordInputElement } = typeIntoForm({ password: 'password123' });
  expect(passwordInputElement.value).toBe('password123');
});

// type a confirmation password into the field
test('user should be able to type a confirmation password', () => {
  // * type into 'confirm' password input
  const { confirmPasswordInputElement } = typeIntoForm({ confirmPassword: 'password123' });
  expect(confirmPasswordInputElement.value).toBe('password123');
});

// email error
test('should show email error message on invalid email', () => {
  // * check for email error element to not be in the document
  const emailErrorElement = screen.queryByText(/the email you input is invalid/i); // needs to be 'query'
  expect(emailErrorElement).not.toBeInTheDocument();

  // * type invalid email
  typeIntoForm({ email: 'katiegmail.com' });

  // * submit form
  clickSubmitButton();

  // * check for email error element (again) to be in the document
  const emailErrorElementAgain = screen.queryByText(/the email you input is invalid/i); // needs to be 'query'
  expect(emailErrorElementAgain).toBeInTheDocument();
});

// password error
test('should show password error if password is less than 5 characters', () => {
  // * check for password error element to not be in the document
  const passwordErrorElement = screen.queryByText(
    /the password you entered should contain 5 or more characters/i
  );
  expect(passwordErrorElement).not.toBeInTheDocument();

  // * type valid email and invalid password
  typeIntoForm({
    email: 'katie@gmail.com',
    password: '123',
  });

  // * click on submit button
  clickSubmitButton();

  // * check to be sure error message is in the document
  const passwordErrorElementAgain = screen.queryByText(
    /the password you entered should contain 5 or more characters/i
  );
  expect(passwordErrorElementAgain).toBeInTheDocument();
});

// confirm password error
test('should show confirm password error if passwords dont match', () => {
  // * input correct email
  typeIntoForm({ email: 'katie@gmail.com' });

  // * check for 'confirm' password error element to not be in the document
  const confirmPasswordErrorElement = screen.queryByText(
    /the password you entered does not match. Try again.s/i
  );
  expect(confirmPasswordErrorElement).not.toBeInTheDocument();

  // * input 'confirm' password that does not match password
  typeIntoForm({
    password: 'password123',
    confirmPassword: 'unicorn123',
  });

  // * submit form
  clickSubmitButton();

  // * check to be sure error message is in the document
  const confirmPasswordErrorElementAgain = screen.queryByText(
    /The passwords you entered do not match. Try again./i
  );
  expect(confirmPasswordErrorElementAgain).toBeInTheDocument();
});

// no error message is present if all inputs are correct
test('should show no error message if every input is valid', () => {
  // * find all error elements
  const emailErrorElement = screen.queryByText(/the email you input is invalid/i); // needs to be 'query'
  const confirmPasswordErrorElement = screen.queryByText(
    /the password you entered should contain 5 or more characters./i
  );
  const confirmPasswordErrorElementAgain = screen.queryByText(
    /The passwords you entered do not match. Try again./i
  );

  // * type valid input data
  typeIntoForm({
    email: 'katie@gmail.com',
    password: 'password123',
    confirmPassword: 'password123',
  });

  // * submit the form
  clickSubmitButton();

  // * check if error elements aer in the document
  expect(emailErrorElement).not.toBeInTheDocument();
  expect(confirmPasswordErrorElement).not.toBeInTheDocument();
  expect(confirmPasswordErrorElementAgain).not.toBeInTheDocument();
});
