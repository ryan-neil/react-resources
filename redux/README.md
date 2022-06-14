# React Redux

All things React Redux.

_"Redux is a pattern and a library for organizing global state in applications outside the React component tree."_ - Mark Erikson

Redux itself does not depend on any UI library and can be used with any frameworks/libraries (React, Angular, Vue, etc.). However, it is most commonly used with React.

The idea being, you provide a separation between the code that manages/updates your data and the other parts of your code that say, " here's a thing that happened in my application".

Some useful benefits of this are:

- Being able to look in one place to see how the state updating code actual works
- Being able to trace when, where, why, and how your state actually updated

To better understand this, Redux comes with a set of developer tools and that we can use to see the history of the "events" (Redux refers to these as "actions") that happened and how the state actually changed at each step along the way. So you can see what the state looked like at that time, you can see the "diff" in the state between previous and current and a list of the action "event types" that can tell us what kinds of things occurred.

So the goal of all of this is to give us more confidence in understanding how the application is intended to behave and how it is actually behaving.

### Table of Contents

1. [useReducer](#useReducer)
2. [Redux Toolkit](#Redux-Toolkit)

### Resources

- [Redux Docs](https://redux.js.org/): Redux Docs
- [Redux Docs Learning Resources](https://redux.js.org/introduction/learning-resources): Redux Docs
- [React Redux Links](https://github.com/markerikson/react-redux-links): Mark Erikson
- [Let’s Learn Modern Redux!](https://www.youtube.com/watch?v=9zySeP5vH9c&list=PLz8Iz-Fnk_eTpvd49Sa77NiF8Uqq5Iykx&t=1s): Mark Erikson
- [Redux Toolkit Tutorial - Shopping Cart](https://www.youtube.com/watch?v=bbkBuqC1rU4&list=PLfruCl-i8oXw6NQUN7jS3wj2HtTxUpV1g&index=1): FCC

# useReducer

This is a quick refresher for the `useReducer` hook.

### Resources

- [useReducer Crash Course](https://www.youtube.com/watch?v=26ogBZXeBwc): Laith Academy
- [useReducer](https://www.youtube.com/watch?v=26ogBZXeBwc): Dave Gray

First off, let's define the initial state of the application as well as the dispatch of the application.

Directly after that we need to pass in the reducer, which we will define a bit later, and the initial state, which in our case will be `500` to `useReducer`:

```jsx
const reducer = () => {};

export default function UseReducerComponent() {
  const [] = useReducer(reducer, 500);

  return <></>;
}
```

Second, we can access the initial state of `500` with `amount` and the `dispatch` which is going to _dispatch_ the action to the `reducer`:

```jsx
const reducer = () => {};

export default function UseReducerComponent() {
  const [amount, dispatch] = useReducer(reducer, 500);

  return <>{amount}</>;
}
```

Third, we need to create our first action creator which will be in charge of depositing money. This action creator will be a function that will create an action and dispatch that action:

```jsx
const reducer = () => {};

export default function UseReducerComponent() {
  const [amount, dispatch] = useReducer(reducer, 500);

  // action creator
  const deposit = (amount) => {
    dispatch({
      type: 'DEPOSIT',
      payload: amount,
    });
  };

  return <>{amount}</>;
}
```

Fourth, we need to give the reducer a set of instructions to interpret this dispatch action and then perform whatever is needed to that state.

This is typically done with a `switch` statement inside the `reducer` function.

For the `reducer` function parameters, the first parameter is the `state` and it is our initial state (`500`). The second parameter is the `action` and that is the `dispatch` "action" from our `deposit` function:

```jsx
const reducer = (state, action) => {
  switch (action.type) {
    case 'DEPOSIT':
      return state + action.payload;
    default:
      return state;
  }
};

export default function UseReducerComponent() {
  const [amount, dispatch] = useReducer(reducer, 500);

  const deposit = (amount) => {
    dispatch({
      type: 'DEPOSIT',
      payload: amount,
    });
  };

  return (
    <>
      <h1>{amount}</h1>
      <button onClick={() => deposit(500)}>Deposit</button>
    </>
  );
}
```

Fifth, we need to add our "withdraw" functionality. For this we need to create another action creator. This will basically be identical to our `deposit` action creator:

```jsx
const reducer = (state, action) => {
  switch (action.type) {
    case 'DEPOSIT':
      return state + action.payload;
    // add another case from withdraw
    case 'WITHDRAW':
      return state - action.payload;
    default:
      return state;
  }
};

export default function UseReducerComponent() {
  const [amount, dispatch] = useReducer(reducer, 500);

  const deposit = (amount) => {
    dispatch({
      type: 'DEPOSIT',
      payload: amount,
    });
  };

  // add second action creator for withdraw logic
  const withdraw = (amount) => {
    dispatch({
      type: 'WITHDRAW',
      payload: amount,
    });
  };

  return (
    <>
      <h1>{amount}</h1>
      <button onClick={() => deposit(500)}>Deposit</button>
      <button onClick={() => withdraw(500)}>Withdraw</button>
    </>
  );
}
```

# Redux

Redux attempts to make state mutations predictable by imposing certain restrictions on how and when updates can happen. These restrictions are reflected in the three principles of Redux.

Let's quickly take a look at these [Three Principles](https://redux.js.org/understanding/thinking-in-redux/three-principles) and try to understand them:

- Single source of truth - The global state of your application is stored in an object tree within a single store.
- State is read-only - The only way to change the state is to emit an action, an object describing what happened.
- Changes are made with pure functions - To specify how the state tree is transformed by actions, you write pure reducers.

Let's implement the createStore method from Redux from scratch:

```js
// import { createStore } from 'redux;

// implement redux store from scratch
const createStore = (reducer) => {
  // store holds the current state
  let state;
  // since the subscribe function can be called any number of times we need to keep track of all the changed listners
  let listeners = [];

  // get state function returns the current value of the state variable
  const getState = () => state;

  // dispatch function takes in an action and it is the only way to change the internal state
  const dispatch = (action) => {
    // in order to calculate the new state we call the reducer with the current state and action being dispatched
    state = reducer(state, action);
    // after the state has been updated we need to notify every changed listener by calling it
    listeners.forEach((listener) => listener());
  };

  // subscribe function takes in a listener and it lets us register a callback function that the Redux...
  // store will call anytime an action has been dispatched so we can updated the UI of the app to reflect...
  // the current application state
  const subscribe = (listener) => {
    // any time subscribe is called we want to push the new listener into the listeners array
    listeners.push(listener);

    // another important piece is a way to unsubscibe a listener, and rather than providing a dedicated...
    // unsubscribe method we'll just return a function from the subscribe method that removes the listener...
    // from the listeners array
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  // finally by the time the store is returned we want to have the initial state populated, to do this we...
  // will just dispatch a "dummy" action to get the reducer to return the initial value
  dispatch({});

  // createStore returns these 3 functions
  return { getState, dispatch, subscribe };
};
```

And that's it! That's what `createStore` is doing under the hood.

# Redux Toolkit

### Installation

```sh
npm install @reduxjs/toolkit
# or
yarn add @reduxjs/toolkit
```

#### Complementary Packages

```sh
yarn add react-redux
yarn add -D @redux-devtools/core
```

#### Create a React Redux App

```sh
# Redux + Plain JS template
yarn create react-app my-app --template redux

# Redux + TypeScript template
yarn create react-app my-app --template redux-typescript
```
