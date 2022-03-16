# React Testing

### Resources:

- [React Testing Library Bootcamp](https://www.udemy.com/course/the-react-testing-library-bootcamp/learn/lecture/29979578#overview): Udemy
- [React Testing Library Crash Course](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gm4_-5UsNmLqMosM-dzuvQ): The Net Ninja
- [React Testing Crash Course](https://www.youtube.com/watch?v=OVNjsIto9xM&t=300s): Traversy Media
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/): React Testing Library

## What is it and Why?

Testing is a method to check whether the acual product matches the expected requirements. The main reason we would want to testing our application is to increase our confidence in our app's functionality.

<br>

## Types of Testing

When it comes to testing, there's two main methodologies that we can utilize:

1. Manual
2. Automated

<br>

## The Philosophy of RTL

_TLDR_: Always test how the software is meant to be used, not how it has been implemented.

When it comes to testing we will never focus on the implementation details when testing our React application, but rather how the software should actually work.

For example, we _should_ be able to type into the input or if we type something incorrectly and hit submit, we _should_ receive an error message. How we get to the logic behind this implementation, React Testing Library does not care. It just simply tests the outcome of the software product.

<br>

## The Structure of RTL Tests

Let's have a look at the common structure of a test.

```bash
├── The test block
│  ├── Render the component we need to test
│  ├── Find elements we want to interact with
│  ├── Interact with those elements
│  └── Assert that the results are as expected
```

The **Test Block** describes what we are testing:

```js
test('description of what we are testing', () => {
  // the callback function that has the logic for executing the test...
});
```

In addition to the `test` block, we can also use `it`:

```js
it('', () => {});
```

### Render (Test)

Next, we have to tell the **Test Block** which component we are testing (rendering):

```js
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  // render (test)
  render(<App />);
});
```

### Find

Next, we want to find the elements we want to interact with:

```js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // find
  const linkElement = screen.getByText(/learn react/i);
});
```

In the above example we are trying to find the `linkElement` and we are doing that through `screen` which we're getting from React Testing Library.

What `screen` does is it looks into the DOM and looks at the component that we're rendering (testing). It is then using one of the many methods it comes with, `getByText`.

### Interact

The next step in the **Test Block** is interacting with those elements and cause events (click, change, typing, mouse, etc.).

### Assert

Lastly, now that we have the elements and can cause them to trigger events, we want to assert that the results are as we expect them to be:

```js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  // assertion
  expect(linkElement).toBeInTheDocument();
});
```

[⬆ Top](#table-of-contents)

## RTL Query Methods

Let's have a look at the React Testing Library query methods we can use:

| $\!$     | `getBy...` | `findBy...` | `queryBy...` | `getAllBy...` | `findAllBy...` | `queryAllBy...` |
| :------- | :--------- | :---------- | :----------- | :------------ | :------------- | :-------------- |
| No Match | error      | error       | null         | error         | error          | array           |
| 1 Match  | return     | return      | return       | array         | array          | array           |
| 1+ Match | error      | error       | error        | array         | array          | array           |
| Await    | no         | yes         | no           | no            | yes            | no              |

### Priorities

- [Queries - Priority](https://testing-library.com/docs/queries/about/#priority): React Testing Library

_"Based on the Guiding Principles, your test should resemble how users interact with your code (component, page, etc.) as much as possible. With this in mind, we recommend this order of priority"_ - React Testing Library

[⬆ Top](#table-of-contents)

## Our First Test

For our first test we will be writing a test that tests if we can type into a form input. After we have this test written we will code out the feature until it passes our test.

```js
// App.js

function App() {
  return (
    <div className="App">
      <form>
        <div className="input-container">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input type="email" name="email" id="email" className="form-control" />
        </div>

        <div className="input-container">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" name="password" id="password" className="form-control" />
        </div>

        <div className="input-container">
          <label htmlFor="confirm-password" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            className="form-control"
          />
        </div>
      </form>
    </div>
  );
}
```

Now lets' write the test:

```js
// App.test.js

import { render, screen } from '@testing-library/react';
import App from './App';

test('inputs should be initially empty', () => {
  // 1) RENDER the component to be tested
  render(<App />);
  // 2) FIND our input elements (query them)
  const emailInputElement = screen.getByRole('textbox');
  const passwordInputElement = screen.getByLabelText('Password');
  const confirmPasswordInputElement = screen.getByLabelText(/confirm password/i);
  // 3) ASSERT our test elements
  expect(emailInputElement.value).toBe('');
  expect(passwordInputElement.value).toBe('');
  expect(confirmPasswordInputElement.value).toBe('');
});
```

And that's it! We've just written our first test!

[⬆ Top](#table-of-contents)

## Handling Browser Interactions

### User Events

- [React Testing Library - User Events](https://testing-library.com/docs/ecosystem-user-event/#api): React Testing Library

Let's write an example of testing some user events:

```js
// App.test.js

test('user should be able to type an email', () => {
  render(<App />);
  const emailInputElement = screen.getByRole('textbox', {
    name: /email/i,
  });
  // add our type event
  userEvent.type(emailInputElement, 'katie@gmail.com');
  expect(emailInputElement.value).toBe('katie@gmail.com');
});

test('user should be able to type a password', () => {
  render(<App />);
  const passwordInputElement = screen.getByLabelText('Password');
  userEvent.type(passwordInputElement, 'password123');
  expect(passwordInputElement.value).toBe('password123');
});

test('user should be able to type a confirmation password', () => {
  render(<App />);
  const confirmPasswordInputElement = screen.getByLabelText(/confirm password/i);
  userEvent.type(confirmPasswordInputElement, 'password123');
  expect(confirmPasswordInputElement.value).toBe('password123');
});
```

### Testing the Presence of an Element

Let's write a test where we're seeing if a certain element exists in our document:

```js
// App.test.js

test('should show email error message on invalid email', () => {
	render(<App />);

  // * check for email error element to NOT be in the document
  const emailErrorElement = screen.queryByText(/the email you input is invalid/i);
  expect(emailErrorElement).not.toBeInTheDocument();

  // * type invalid email
	const emailInputElement = screen.getByRole('textbox', { name: /email/i });
	userEvent.type(emailInputElement, 'katiegmail.com');

  // * submit form
  const submitButtonElement = screen.getByRole('button', { name: /submit/i });
  userEvent.click(submitButtonElement);

  // * check for email error element to be in the document
  const emailErrorElementAgain = screen.queryByText(/the email you input is invalid/i); // needs to be 'query'
  expect(emailErrorElementAgain).toBeInTheDocument();
}
```

[⬆ Top](#table-of-contents)

## Organizing Test Files

Let's see how we can refactor and cleanup the above test block:

```js
// App.test.js

// jest beforeEach hook (this will run before each and every test)
beforeEach(() => {
  render(<App />);
});

// helper function that finds the elements and types into them for us
const typeIntoForm = ({ email, password, confirmPassword }) => {
  // find: all the input elements
  const emailInputElement = screen.getByRole('textbox', { name: /email/i });
  const passwordInputElement = screen.getByLabelText('Password');
  const confirmPasswordInputElement = screen.getByLabelText(/confirm password/i);

  // event: type into our elements
  if (email) {
    userEvent.type(emailInputElement, email);
  }
  if (password) {
    userEvent.type(passwordInputElement, password);
  }
  if (confirmPassword) {
    userEvent.type(confirmPasswordInputElement, confirmPassword);
  }

	// if we need to assert that an element is or is not in the document
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

test('should show email error message on invalid email', () => {
	// * assert that the email error element is NOT in the document
  expect(screen.queryByText(/the email you input is invalid/i)).not.toBeInTheDocument();

  // * type invalid email
  typeIntoForm({ email: 'katiegmail.com' });

  // * submit form
  clickSubmitButton();

  // * assert that the email error element is in the document
  expect(screen.queryByText(/the email you input is invalid/i)).toBeInTheDocument();
}

...
```

There we go! Much cleaner.

### The Describe Block

When all of our tests have a common action like, testing the functionality of our `App` component. We can utilize the `describe` block to group similar tests together.

Let's see an example of this now:

```js
// App.test.js

...

describe('App', () => {
	// render the App component before each test in this describe block
	beforeEach(() => {
		render(<App />);
	});

  // input fields should all be empty
  test('inputs should be initially empty', () => {
    expect(screen.getByRole('textbox').value).toBe('');
    expect(screen.getByLabelText('Password').value).toBe('');
    expect(screen.getByLabelText(/confirm password/i).value).toBe('');
  });

  test('user should be able to type an email', () => {
    const { emailInputElement } = typeIntoForm({ email: 'katie@gmail.com' });
    expect(emailInputElement.value).toBe('katie@gmail.com');
  });

	...
});
```

We can also nest `describe` blocks inside `describe` blocks:

```js
// App.test.js

...

describe('App', () => {
	beforeEach(() => {
		render(<App />);
	});

	// input fields should all be empty
  test('inputs should be initially empty', () => {
    expect(screen.getByRole('textbox').value).toBe('');
    expect(screen.getByLabelText('Password').value).toBe('');
    expect(screen.getByLabelText(/confirm password/i).value).toBe('');
  });

	// type an email into the field
  test('user should be able to type an email', () => {
    const { emailInputElement } = typeIntoForm({ email: 'katie@gmail.com' });
    expect(emailInputElement.value).toBe('katie@gmail.com');
  });

	// App error handling
	describe('Error handling', () => {
		// email error
    test('should show email error message on invalid email', () => {
      expect(screen.queryByText(/the email you input is invalid/i)).not.toBeInTheDocument();

      typeIntoForm({ email: 'katiegmail.com' });

      clickSubmitButton();

      expect(screen.queryByText(/the email you input is invalid/i)).toBeInTheDocument();
    });

    // password error
    test('should show password error if password is less than 5 characters', () => {
      expect(
        screen.queryByText(/the password you entered should contain 5 or more characters/i)
      ).not.toBeInTheDocument();

      typeIntoForm({
        email: 'katie@gmail.com',
        password: '123',
      });

      clickSubmitButton();

      expect(
        screen.queryByText(/the password you entered should contain 5 or more characters/i)
      ).toBeInTheDocument();
    });

		...
	}

	...
});
```

[⬆ Top](#table-of-contents)

## Testing Components with Props

[⬆ Top](#table-of-contents)
