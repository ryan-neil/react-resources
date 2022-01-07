# Simple Todo List App (Training)

## What we will be building:

This is a training exercise for building out a simple Todo List application. Part 1 will have a very simple `data` object to store todo list items and part 2 will have a "local" database JSON file for storing the users data.

## Part 1: Basic

### Features:
  * Heading component
  * *CREATE* item functionality
  * *UPDATE* item functionality
  * *DELETE* item functionality
  * Footer component

### Helpful Structure:
  * build build out components skeleton
  * import app components
  * populate components
  * skeleton out logical functions (create, update, delete, etc.)
  * pass props and import props
  * out logic (easiest to hardest)

Data:
```js
const items = [
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

### Solution:

<details>
  <summary>View Solution:</summary>
  
  `src/App.js`
  ```js
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

    // CREATE: handle create functionality
    const addItem = (item) => {
      const id = items.length ? items[items.length - 1].id + 1 : 1; // check if the items array has length ? if yes, set the item id to be one more than the last item : if not, set the id to 1
      const myNewItem = { id: id, checked: false, item: item }; // create the new item object
      const updatedListItems = [ ...items, myNewItem ]; // add new item to items array
      setItems(updatedListItems); // update state to include new item in items array
    };

    // UPDATE: handle checked functionality
    const handleChecked = (id) => {
      const updatedListItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item ); // update the object being checked
      setItems(updatedListItems); // update state with new checked state
    };

    // DELETE: handle delete functionality
    const handleDelete = (id) => {
      const updatedListItems = items.filter((item) => item.id !== id); // if the item id is equal to the id coming in ? then update the current item's checked status to the opposite of what it currently is : if it is not, return the item
      setItems(updatedListItems); // update state to new filtered array
    };

    // handle submitting new item functionality
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

  `components/Header.jsx`
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

  `components/TodoList.jsx`
  ```jsx
  import ListItem from './ListItem';

  const TodoList = ({ items, handleChecked, handleDelete }) => {
    return (
      <main>
        <>
          {items.length 
            ? <ul>
              {items.map((item) => (
                <ListItem
                  key={item.id}
                  item={item}
                  handleChecked={handleChecked}
                  handleDelete={handleDelete}
                />
              ))}
            </ul> 
            : <p>No items in your list...</p>
          }
        </>
      </main>
    );
  };

  export default TodoList;
  ```
  
  `components/ListItem.jsx`
  ```jsx
  const ListItem = ({ item, handleChecked, handleDelete }) => {
    return (
      <li>
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
  
  `components/AddItem.jsx`
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
  
  `components/Footer.jsx`
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

## Part 2: Intermediate

### Features:
  * Fetch data from database
  * Search item functionality

We can use [JSON Server](https://www.npmjs.com/package/json-server) which will allow us to run a mock backend REST API:
```bash
npx json-server -p 9001 -w src/data/db.json
```

`src/data/db.json`:
```json
{
  "items": [
    {
      "id": 1,
      "checked": false,
      "item": "Wash dishes"
    },
    {
      "id": 2,
      "checked": true,
      "item": "Take out trash"
    },
    {
      "id": 3,
      "checked": true,
      "item": "Mow the lawn"
    },
    {
      "id": 4,
      "checked": false,
      "item": "Call mom"
    },
    {
      "id": 5,
      "checked": true,
      "item": "Walk the dog"
    }
  ]
}
```

### Solution:

<details>
  <summary>View Solution:</summary>
  
  `src/App.js`
  ```js
  import Header from './components/Header';
  import AddItem from './components/AddItem';
  // import SearchItem component
  import SearchItem from './components/SearchItem';
  import TodoList from './components/TodoList';
  import Footer from './components/Footer';
  // import useEffect hook
  import { useState, useEffect } from 'react';

  function App() {
    // add API url (coming from json-server)
    const API_URL = 'http://localhost:9001/items';
    const [ items, setItems ] = useState([]);
    const [ newItem, setNewItem ] = useState('');
    // set search state
    const [ search, setSearch ] = setState('');

    // fetch database data
    useEffect(() => {
      const fetchItems = async () => {
        try {
          const res = await fetch(API_URL);
          if (!res.ok) throw Error('Did not receive expected data.');
          const data = await res.json();
          setItems(data);
        } catch(err) {
          console.log(err);
        }
      }
      fetchItems();
    }, [])

    const addItem = (item) => {
      // ...
    };

    const handleChecked = (id) => {
      // ...
    };

    const handleDelete = (id) => {
      // ...
    };

    const handleSubmit = (e) => {
      // ...
    };

    // handle search feature
    const handleSearch = () => items.filter((item) => 
      item.item.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div className="App">
        <Header title="Todo List" />
        <AddItem
          handleSubmit={handleSubmit}
          newItem={newItem}
          setNewItem={setNewItem}
        />
        <SearchItem search={search} setSearch={setSearch} />
        <TodoList
          items={handleSearch()}
          handleChecked={handleChecked}
          handleDelete={handleDelete}
        />
        <Footer length={items.length} />
      </div>
    );
  }

  export default App;
  ```

  `src/components/SearchItem.jsx`
  ```jsx
  const SearchItem = ({ search, setSearch }) => {
    return (
      <form>
        <label htmlFor="search">Search: </label>
        <input
          type="search"
          id="search"
          role="searchbox"
          placeholder="Search items"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    );
  };

  export default SearchItem;
  ```
	
</details>

## Part 3: Advanced

### Features:
  * Handle custom fetch errors
  * Handle loading

### Solution:

<details>
  <summary>View Solution:</summary>

  `src/App.js`
  ```js
  import Header from './components/Header';
  import AddItem from './components/AddItem';
  import SearchItem from './components/SearchItem';
  import TodoList from './components/TodoList';
  import Footer from './components/Footer';
  import { useState, useEffect } from 'react';

  function App() {
    const API_URL = 'http://localhost:9001/items';
    const [ items, setItems ] = useState([]);
    const [ newItem, setNewItem ] = useState('');
    const [ search, setSearch ] = useState('');
    // set fetch error state
    const [ fetchError, setFetchError ] = useState(null)
    // set loading state
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
      const fetchItems = async () => {
        try {
          const res = await fetch(API_URL);
          if (!res.ok) throw Error('Did not receive expected data');
          const data = await res.json();
          setItems(data);
          // update fetch error on success
          setFetchError(null);
        } catch (err) {
          // update fetch error on failure
          setFetchError(err.message);
        } finally {
          // update loading state on success or failure
          setIsLoading(false);
        }
      };

      // simulate delayed fetch response
      setTimeout(() => fetchItems(), 2000);
    }, []);

    const addItem = (item) => {
      // ...
    };

    const handleChecked = (id) => {
      // ...
    };

    const handleDelete = (id) => {
      // ...
    };

    const handleSubmit = (e) => {
      // ...
    };

    const handleSearch = () => items.filter((item) => 
      // ...
    );

    return (
      <div className="App">
        <Header title="Todo List" />
        <AddItem
          handleSubmit={handleSubmit}
          newItem={newItem}
          setNewItem={setNewItem}
        />
        <SearchItem search={search} setSearch={setSearch} />
        {/* add todo list container or fragment */}
        <div className="todo-list">
          {/* display loading text while loading is true */}
          {isLoading && <p>Loading items...</p>}
          {/* display error text if fetchError is true */}
          {fetchError && <p style={{ color: 'red' }}>{`Error: ${fetchError}`}</p>}
          {/* if no error AND not loading, display the todo list */}
          {!fetchError && !isLoading && (
            <TodoList
              items={handleSearch()}
              handleChecked={handleChecked}
              handleDelete={handleDelete}
            />
          )}
        </div>
        <Footer length={items.length} />
      </div>
    );
  }

  export default App;
  ```
</details>

## Part 3.1: Advanced CRUD Operations

### Features
  * Helper function to fetch and edit the data
  * Advanced *CREATE* item functionality
  * Advanced *UPDATE* item functionality
  * Advanced *DELETE* item functionality

### Solution

<details>
  <summary>View Solution:</summary>

  `src/helpers/apiRequest.js`
  ```js
  const apiRequest = async (url = '', optionsObj = null, errMsg = null) => {
    try {
      const response = await fetch(url, optionsObj);
      // error check
      if (!response.ok) throw Error('Please reload the app');
    } catch (err) {
      // if error, update the error message
      errMsg = err.message;
    } finally {
      // method will return either null or the error message
      return errMsg;
    }
  };

  export default apiRequest;
  ```

  `src/App.js`
  ```js
  import Header from './components/Header';
  import AddItem from './components/AddItem';
  import SearchItem from './components/SearchItem';
  import TodoList from './components/TodoList';
  import Footer from './components/Footer';
  import { useState, useEffect } from 'react';
  // import apiRequest method
  import apiRequest from './helpers/apiRequest';

  function App() {
    const API_URL = 'http://localhost:9001/items';
    const [ items, setItems ] = useState([]);
    const [ newItem, setNewItem ] = useState('');
    const [ search, setSearch ] = useState('');
    const [ fetchError, setFetchError ] = useState(null)
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
      // ...
    }, []);

    // CREATE: update add item method
    const addItem = async (item) => {
      const id = items.length ? items[items.length - 1].id + 1 : 1;
      const myNewItem = { id: id, checked: false, task: item };
      const listItems = [ ...items, myNewItem ];
      setItems(listItems);

      // define the new item type and content to be sent to REST API -> (db.json)
      const postOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(myNewItem)
      };
      // define the request and send to our API
      const result = await apiRequest(API_URL, postOptions);
      // the 'apiRequest' will only return an error message, either null or the message so we can update setFetchError with this
      if (result) setFetchError(result);
    }

    // UPDATE: update handle checked method (revise to be async)
    const handleChecked = async (id) => {
      const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
      setItems(listItems);

      // get the item that has been selected (checked)
      const myItem = listItems.filter((item) => item.id === id);
      // define update options, we use PATCH for this
      const updateOptions = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        // myItem is an array of 1 value so we just do [0]
        body: JSON.stringify({ checked: myItem[0].checked })
      };
      // define our request URL (this will be a bit different than the URL for GET and POST)
      const requestURL = `${API_URL}/${id}`;
      // define our result
      const result = await apiRequest(requestURL, updateOptions);
      // again, the apiRequest will only return an error message, either null or the message so we can update setFetchError with this
      if (result) setFetchError(result);
    }

    // DELETE: update handle delete method (revise to be async)
    const handleDelete = async (id) => {
      const listItems = items.filter((item) => item.id !== id);
      setItems(listItems);

      // define DELETE options (only need the method here)
      const deleteOptions = {
        method: 'DELETE'
      };
      // define the request URL (same as UPDATE)
      const requestURL = `${API_URL}/${id}`;
      // define our result
      const result = await apiRequest(requestURL, deleteOptions);
      // update the setFetchError
      if (result) setFetchError(result);
    }

    const handleSubmit = (e) => {
      // ...
    };

    const handleSearch = () => { 
      // ...
    };

    return (
      <div className="App">
        <Header title="Todo List" />
        <AddItem
          handleSubmit={handleSubmit}
          newItem={newItem}
          setNewItem={setNewItem}
        />
        <SearchItem search={search} setSearch={setSearch} />
        <div className="todo-list">
          {isLoading && <p>Loading items...</p>}
          {fetchError && <p style={{ color: 'red' }}>{`Error: ${fetchError}`}</p>}
          {!fetchError && !isLoading && (
            <TodoList
              items={handleSearch()}
              handleChecked={handleChecked}
              handleDelete={handleDelete}
            />
          )}
        </div>
        <Footer length={items.length} />
      </div>
    );
  }

  export default App;
  ```
</details>