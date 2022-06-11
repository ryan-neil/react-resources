# React Redux

All things React Redux.

### Table of Contents

1. [Resources](#Resources)
2. [Tutorials](#Tutorials)

## Resources

- [Redux Docs](https://redux.js.org/): Redux Docs

## Tutorials

- [Redux Toolkit Tutorial](https://www.youtube.com/watch?v=bbkBuqC1rU4&list=PLfruCl-i8oXw6NQUN7jS3wj2HtTxUpV1g&index=1): FCC

## useReducer

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

For the `reducer` function parameters, the first parameter is the `state` and it is our initial state (`500`). The second parameter is the `action` and that is the dispatch "action" from our `deposit`:

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
