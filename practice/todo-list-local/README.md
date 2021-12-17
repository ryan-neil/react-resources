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
const data = [
  {
    id: 1,
    checked: false,
    item: 'Wash dishes'
  },
  {
    id: 2,
    checked: true,
    item: 'Vacuum bedroom'
  },
  {
    id: 3,
    checked: true,
    item: 'Call mom'
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

### Solution

<details>
  <summary>Toggle to View Solution:</summary>
  
  #### `App.js`
  ```jsx
  import Header from './components/Header';
  import AddItem from './components/AddItem';
  import TodoList from './components/TodoList';
  import Footer from './components/Footer';
  import { useState } from 'react';

  const data = [
    {
      id: 1,
      checked: true,
      item: 'Wash dishes'
    },
    {
      id: 2,
      checked: false,
      item: 'Vacuum bedroom'
    },
    {
      id: 3,
      checked: true,
      item: 'Call mom'
    }
  ];

  function App() {
    const [ items, setItems ] = useState(data);
    const [ newItem, setNewItem ] = useState('');

    // handle checked
    const handleChecked = (id) => {
      const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item ); // update the object being checked
      setItems(listItems); // update state with new checked state
    };

    // handle delete
    const handleDelete = (id) => {
      const listItems = items.filter((item) => item.id !== id); // if the item id is equal to the id coming in ? then update the current item's checked status to the opposite of what it currently is : if it is not, return the item
      setItems(listItems); // update state to new filtered array
    };

    // handle add new item
    const addItem = (item) => {
      const id = items.length ? items[items.length - 1].id + 1 : 1; // check if the items array has length ? if yes, set the item id to be one more than the last item : if not, set the id to 1
      const myNewItem = { id: id, checked: false, item: item }; // create the new item object
      const listItems = [ ...items, myNewItem ]; // add new item to items array
      setItems(listItems); // update state to include new item in items array
    };

    // handle submitting new item
    const handleSubmit = (e) => {
      e.preventDefault(); // prevent default browser reload
      addItem(newItem); // call addItem method into action with the new item
      setNewItem(''); // reset the new item state back to an empty string
    };

    return (
      <div className="App">
        <Header title="Todo List" />
        <AddItem
          handleSubmit={handleSubmit}
          newItem={newItem}
          setNewItem={setNewItem}
        />
        <TodoList
          items={items}
          handleChecked={handleChecked}
          handleDelete={handleDelete}
        />
        <Footer length={items.length} />
      </div>
    );
  }

  export default App;
  ```

  #### `components/Header.js`
  ```jsx
  const Header = ({ title }) => {
    return (
      <div>
        <h2>{title}</h2>
      </div>
    );
  };

  Header.defaultProps = {
    title: 'Todo List'
  };

  export default Header;
  ```

  #### `components/TodoList.js`
  ```jsx
  import ListItem from './ListItem';

  const TodoList = ({ items, handleChecked, handleDelete }) => {
    return (
      <ul>
        {items.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            handleChecked={handleChecked}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    );
  };

  export default TodoList;
  ```
  
  #### `components/ListItem.js`
  ```jsx
  const ListItem = ({ item, handleChecked, handleDelete }) => {
    return (
      <li key={item.id}>
        <input
          type="checkbox"
          checked={item.checked}
          onChange={() => handleChecked(item.id)}
        />
        <label>{item.item}</label>
        <button onClick={() => handleDelete(item.id)}>Delete</button>
      </li>
    );
  };

  export default ListItem;
  ```
  
  #### `components/AddItem.js`
  ```jsx
  const AddItem = ({ handleSubmit, newItem, setNewItem }) => {
    return (
      <form onSubmit={(e) => handleSubmit(e)}>
        <label style={{ display: 'none' }}>Add item</label>
        <input
          type="text"
          placeholder="Add Item"
          required
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    );
  };

  export default AddItem;
  ```
  
  #### `components/Footer.js`
  ```jsx
  const Footer = ({ length }) => {
    return (
      <div>
        <h2>{length} items in list</h2>
      </div>
    );
  };

  Footer.defaultProps = {
    length: 0
  };

  export default Footer;
  ```
	
</details>