# Simple Todo List App

[Video Tutorial (1:00:00)](https://www.youtube.com/watch?v=RVFAyFWO4go)

## What we need to build:

### Part 1: Initial Setup

1. Create our initial components
  * Create `Header` component
  * Create `TodoList` or `Main` component
  * Create `Footer` component

2. Give our application _state_
  * `App` component should set all application state
  * Initial state should be passed an array of default data
  * In general, our components should hold their own default properties

We can create our own default data or use this set:
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

3. Create an unordered list of items in the `Main` component (todo tasks)
  * Each item should have an "checkbox" `input`, `label`, and "delete" `button`
  * We should be able to _check_ and _uncheck_ each item __(1:20:00)__
  * We should be able to _delete_ an item from the list __(1:29:00)__
    * Each action should then update the current state
  * We should display a message if the list is empty

4. Using prop drilling ("threading"):
  * The `Header` component should display a `title` property
  * The `Footer` component should display how many items are in our items list

### Part 2: Adding Modularity (Refactoring)

5. Create two new components `ItemList` and `LineItem` components __(1:48:30)__
  * `ItemList` should hold the unordered list
  * `LineItem` should how the list itself

### Part 3: Adding Items

6. Create a new component called `AddItem` __(2:04:00)__
  * This component should hold the `form` logic for adding new items to the list
    * The form element should hold a `label`, `input`, and "submit" `button`
    * The form element should also handle the submit event for us

7. We need to make our form a _controlled input_, which means we need to tie it to state, there should be one source of truth for the input and we need to change the state as the input changes __(2:10:30)__
  * We must then make the `input` a _controlled input_ or _controlled component_ to be more accurate
    * We can do this with the `value` attribute and passing in the current state (however, if we left it as this we couldn't change the state at all)
    * We then need an `onChange` attribute that takes the "event" object and sets the new item state to the value of the input as the user types __(2:13:00)__

8. Create the function and logic for handling the user submit __(2:16:40)__
  * We should prevent the default browser response when submitting
  * This function should call our function to add a new item
  * We should also reset the input to it's default state

9. Create the function and logic for adding an item to our list __(2:19:00)__
  * We must first think about how we're constructing our `task` objects
    * First, we must increment the ID
    * Second, we must construct the new object
    * Lastly, we must add the newly constructed object to our items list

### Extra Credit: Incorporate Local Storage for Saving Items

10. Save and pull our list items from local storage __(2:24:30)__

### Part 4: Adding a Search Feature

11. Incorporate a Searching feature to our items list __(2:26:00)__
  * We must first create a `SearchItem` component
    * `SearchItem` should hold a `form` element with an `onSubmit` event (upon submitting the page should not refresh)
      * The `form` element should hold a `label` and `input`

12. Create the function and logic for handling search feature __(2:32:40)__
  * This function should filter through the items and only display the item that matches the search
  * We must replace our `TodoList` items with our search function