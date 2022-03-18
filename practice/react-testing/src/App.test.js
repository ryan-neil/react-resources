import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// helper function that finds the elements and types into them for us
const typeIntoForm = ({ email, password, confirmPassword }) => {
  // find
  const emailInputElement = screen.getByRole('textbox', { name: /email/i });
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

// App component describe block
describe('App', () => {
  // jest beforeEach hook
  beforeEach(() => {
    render(<App />);
  });

  // input fields should all be empty
  test('Should be initially empty', () => {
    expect(screen.getByRole('textbox').value).toBe('');
    expect(screen.getByLabelText('Password').value).toBe('');
    expect(screen.getByLabelText(/confirm password/i).value).toBe('');
  });

  // type an email into the field
  test('Should be able to type an email', () => {
    // * type into email input
    const { emailInputElement } = typeIntoForm({ email: 'katie@gmail.com' });
    expect(emailInputElement.value).toBe('katie@gmail.com');
  });

  // type a password into the field
  test('Should be able to type a password', () => {
    // * type into password input
    const { passwordInputElement } = typeIntoForm({ password: 'password123' });
    expect(passwordInputElement.value).toBe('password123');
  });

  // type a confirmation password into the field
  test('Should be able to type a confirmation password', () => {
    // * type into 'confirm' password input
    const { confirmPasswordInputElement } = typeIntoForm({ confirmPassword: 'password123' });
    expect(confirmPasswordInputElement.value).toBe('password123');
  });

  // App component error handling describe block
  describe('Error handling', () => {
    // email error
    test('Should show email error message on invalid email', () => {
      // * assert that the email error element to not be in the document
      expect(screen.queryByText(/the email you input is invalid/i)).not.toBeInTheDocument();

      // * type invalid email
      typeIntoForm({ email: 'katiegmail.com' });

      // * submit form
      clickSubmitButton();

      // * check for email error element (again) to be in the document
      expect(screen.queryByText(/the email you input is invalid/i)).toBeInTheDocument();
    });

    // password error
    test('Should show password error if password is less than 5 characters', () => {
      // * assert that the password error element is NOT in the document
      expect(
        screen.queryByText(/the password you entered should contain 5 or more characters/i)
      ).not.toBeInTheDocument();

      // * type valid email and invalid password
      typeIntoForm({
        email: 'katie@gmail.com',
        password: '123',
      });

      // * click on submit button
      clickSubmitButton();

      // * assert that the password error element is in the document
      expect(
        screen.queryByText(/the password you entered should contain 5 or more characters/i)
      ).toBeInTheDocument();
    });

    // confirm password error
    test('Should show confirm password error if passwords dont match', () => {
      // * input correct email
      typeIntoForm({ email: 'katie@gmail.com' });

      // * assert that the confirmation password error element is NOT in the document
      expect(
        screen.queryByText(/the password you entered does not match. Try again.s/i)
      ).not.toBeInTheDocument();

      // * input 'confirm' password that does not match password
      typeIntoForm({
        password: 'password123',
        confirmPassword: 'unicorn123',
      });

      // * submit form
      clickSubmitButton();

      // * assert that the confirmation password error element is in the document
      expect(
        screen.queryByText(/The passwords you entered do not match. Try again./i)
      ).toBeInTheDocument();
    });

    // no error message is present if all inputs are correct
    test('Should show no error message if every input is valid', () => {
      // * type valid input data
      typeIntoForm({
        email: 'katie@gmail.com',
        password: 'password123',
        confirmPassword: 'password123',
      });

      // * submit the form
      clickSubmitButton();

      // * assert that all error elements are NOT in the document
      expect(screen.queryByText(/the email you input is invalid/i)).not.toBeInTheDocument();
      expect(
        screen.queryByText(/the password you entered should contain 5 or more characters./i)
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText(/The passwords you entered do not match. Try again./i)
      ).not.toBeInTheDocument();
    });
  });
});
