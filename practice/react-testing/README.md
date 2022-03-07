# 18. Testing

- [React Testing Library Crash Course](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gm4_-5UsNmLqMosM-dzuvQ): The Net Ninja
- [React Testing Crash Course](https://www.youtube.com/watch?v=OVNjsIto9xM&t=300s): Traversy Media
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/): React Testing Library

### Table of Contents

1. [Introduction to Testing](#1-introduction-to-testing)
2. [Structure of Tests](#2-structure-of-tests)
3. [Query Methods](#3-query-methods)
4. [Priority](#4-priority)

## 1. Introduction to Testing

### Why

Here are some reasons as to why we should test our React applications:

- Check whether an application behaves as expected
- Safeguard against unwanted behavior when changes are made
- Automated, and thus efficient in the long-term

### What

Let's look at some examples of what we might test in our applications:

1. High value features
2. Edge cases in high value features
3. Things that are easy to break
4. Basic React component testing
   - user interactions
   - Conditional rendering
   - utils/hooks

### Unit Testing

This is very testing a small part of the code. In functional programming this refers to testing a function.

### Integration Testing

This refers to testing whether or not multiple units or components in the application are working together as we expect them to. Essentially we are combining multiple unit tests into one larger _integration_ test.

### End-to-End Testing

This is testing from the frontend all the way to the backend. This is essentially very similar to mimicking how a user would use the application in the browser.

[⬆ Top](#table-of-contents)

## 2. Structure of Tests

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

## 3. Query Methods

We'll be looking at the initial example Create React App gives us and specifically `screen` and the methods that come with it:

```js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // here we're using 'screen' to look for a potential link element with the text of "learn react"
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```

But what are some other methods we can use? Let's have a look below:

| $\!$     | getBy  | findBy | queryBy | getAllBy | findAllBy | queryAllBy |
| :------- | :----- | :----- | :------ | :------- | :-------- | :--------- |
| No Match | error  | error  | null    | error    | error     | array      |
| 1 Match  | return | return | return  | array    | array     | array      |
| 1+ Match | error  | error  | error   | array    | array     | array      |
| Await    | no     | yes    | no      | no       | yes       | no         |

[⬆ Top](#table-of-contents)

## 4. Priority

Now that we know a little more about the different methods we can utilize to get specific elements from our component and the differences between them, we can now talk about the attribute portion of those methods.

[⬆ Top](#table-of-contents)
