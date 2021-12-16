# Simple Todo List App (Training)

## What we will be building:

This is a training exercise for building out a simple Todo List application. We will be using a local database JSON file/local storage for storing user data.

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

<details>
  <summary>Click to Show Handle Check Hint</summary>
  
  ## Handle Checked
	* if the item id being looped is equal to the id coming in
	* ? create a new object by spreading out the item object being looped and update that items checked value to be the opposite of what it currently is
	* : if not equal, just return the object
</details>

<details>
  <summary>Click to Show Handle Delete Hint</summary>
  
  ## Handle Delete
	* return the items array who's item id being looped is not equal to the id coming in
</details>

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

### Solution

<details>
  <summary>Toggle to view solution...</summary>
  
  ### App.js
  ```jsx
  import { useState } from 'react';

  import Header from './components/Header';
  import TodoList from './components/TodoList';
  import Footer from './components/Footer';

  const tasks = [
    {
      id: 1,
      checked: true,
      task: 'Wash dishes'
    },
    {
      id: 2,
      checked: false,
      task: 'Vacuum bedroom'
    },
    {
      id: 3,
      checked: true,
      task: 'Call mom'
    }
  ];

  function App() {
    const [ items, setItems ] = useState(tasks);
    const [ newItem, setNewItem ] = useState('');

    return (
      <AppStyled>
        <Header title="Todo List" />
        <TodoList
          items={items}
          setItems={setItems}
          newItem={newItem}
          setNewItem={setNewItem}
        />
        <Footer length={items.length} />
      </AppStyled>
    );
  }

  export default App;
  ```

  ### Header.js
  ```jsx
  function Header({ title }) {
    return (
      <div>
        <h2>{title}</h2>
      </div>
    );
  }

  Header.defaultProps = {
    title: 'Todo List'
  };

  export default Header;
  ```

  ### TodoList.js
  ```jsx
  function TodoList({ items, setItems, newItem, setNewItem }) {
    // add item
    const addItem = (item) => {
      const id = items.length ? items[items.length - 1].id + 1 : 1;
      const myNewItem = { id: id, checked: false, task: item };
      const listItems = [ ...items, myNewItem ];
      setItems(listItems);
    };

    // handle check
    const handleChecked = (id) => {
      const listItems = items.map((item) => {
        return item.id === id ? { ...item, checked: !item.checked } : item;
      });
      setItems(listItems);
    };

    // handle delete
    const handleDelete = (id) => {
      const listItems = items.filter((item) => {
        return item.id !== id;
      });
      setItems(listItems);
    };

    // handle submit
    const handleSubmit = (e) => {
      e.preventDefault();
      addItem(newItem);
      setNewItem('');
    };

    return (
      <div>
        {/* Add Item Form */}
        <form onSubmit={(e) => handleSubmit(e)}>
          <label style={{ display: 'none' }}>Submit</label>
          <input
            type="text"
            placeholder="Add Item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>

        {/* Todo List */}
        <ul>
          {items.map((item) => {
            return (
              <li key={item.id}>
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => handleChecked(item.id)}
                />
                <label>{item.task}</label>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  export default TodoList;
  ```
  
  ### Footer.js
  ```jsx
  function Footer({ length }) {
    return (
      <div>
        <h2>{length} List Items</h2>
      </div>
    );
  }

  Footer.defaultProps = {
    length: 0
  };

  export default Footer;
  ```
	
</details>