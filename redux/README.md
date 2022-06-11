# React Redux

All things React Redux.

### Table of Contents

1. [Resources](#1-Resources)
2. [Tutorials](#2-Tutorials)

# 1. Resources

- [Redux Docs](https://redux.js.org/): Redux Docs

# 2. Tutorials

- [Redux Toolkit Tutorial](https://www.youtube.com/watch?v=bbkBuqC1rU4&list=PLfruCl-i8oXw6NQUN7jS3wj2HtTxUpV1g&index=1): FCC

## useReducer

This is a quick refresher for the `useReducer` hook.

### Resources

- [useReducer Crash Course](https://www.youtube.com/watch?v=26ogBZXeBwc): Laith Academy
- [useReducer](https://www.youtube.com/watch?v=26ogBZXeBwc): Dave Gray

Step one to using the `useReducer` hook is to define the initial state of the application as well as the dispatch of the application.

```jsx
import { useReducer } from 'react';

// define the reducer
const reducer = () => {};

export default function UseReducerComponent() {
  // define the reducer and our initial state
  const [amount, dispatch] = useReducer(reducer, 500);

  return <></>;
}
```

Let's breakdown the above code:

First, we need to pass in the reducer, which we will define a bit later, and the initial state to `useReducer`:

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
  const deposit = (amount) => {
    // call the dispatch function and pass in the action type and action payload
    dispatch({
      type: 'DEPOSIT',
      payload: amount,
    });
  };

  const [amount, dispatch] = useReducer(reducer, 500);

  return <>{amount}</>;
}
```

Fourth, we need to give the reducer a set of instructions to interpret this dispatch action and then perform whatever is needed to that state.

This is typically done with a `switch` statement in the reducer function. For our reducer function parameters, the `state` is our initial state of `500` and the dispatch action from our `deposit` function becomes the second parameter.

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
  const deposit = (amount) => {
    dispatch({
      type: 'DEPOSIT',
      payload: amount,
    });
  };

  const [amount, dispatch] = useReducer(reducer, 500);

  return (
    <>
      <h1>{amount}</h1>
      <button onClick={() => deposit(500)}>Deposit</button>
    </>
  );
}
```

Fifth, we need to add our "withdraw" functionality. For this we need to create another action creator. This will basically be identical to our `deposit` action creator.

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

  const [amount, dispatch] = useReducer(reducer, 500);

  return (
    <>
      <h1>{amount}</h1>
      <button onClick={() => deposit(500)}>Deposit</button>
      <button onClick={() => withdraw(500)}>Withdraw</button>
    </>
  );
}
```
