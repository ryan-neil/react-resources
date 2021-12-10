# Simple Todo List App

[Video Tutorial (1:00:00)](https://www.youtube.com/watch?v=RVFAyFWO4go)

### What we need to build:

1. Create our initial components
  * Create `Header` component
  * Create `TodoList` or `Main` component
  * Create `Footer` component

2. Give our application _state_
  * `App` component should set all application state
  * Initial state should be passed a `tasks` array of dummy data

```js
const tasks = [
  {
    id: 1,
    checked: false,
    task: 'Wash dishes'
  },
  {
    id: 2,
    checked: true,
    task: 'Vacuum bedroom'
  },
  {
    id: 3,
    checked: true,
    task: 'Call mom'
  }
];
```

3. Create an unordered list of items (todo tasks)
  * Each item should have an `input`, `label`, and `button`

4. Create a function to handle the item being checked
  * The `input` item should receive this function