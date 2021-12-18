# Data Fetching App (Training)
  * [Video Tutorial:](https://www.youtube.com/watch?v=RVFAyFWO4go&t=13481s) Dave Gray (Part 1 - 4:04:43, Part 2 - 4:30:15)

## What we will be building:
This is a training exercise for building a data fetching application. To assist us we will be using [JSONPlaceholder](https://jsonplaceholder.typicode.com) which provides a free fake REST API. We will be using the `/posts`, `/comments`, and `/users` resources from JSONPlaceholder. This will be a two part training exercise.

Part 1 will consist of 3 buttons spanning across the top of the page (_users_, _posts_, and _comments_). 

When we select `users` for example, it requests the associated resource from the JSONPlaceholder website. It then prints a list of all the objects we get back in JSON format. The same logic is repeated for the `posts` and `comments` as well.

For part 2, we will need to display our API data in a table format. For this we will need to understand how to use the [Object.entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) JavaScript method.
  * [Using Object.entries():](https://www.youtube.com/watch?v=KoeSseqKKro) dcode YouTube

### Part 1: Solution

<details>
  <summary>Toggle to View Part 1 Solution:</summary>
  
  #### `App.js`:
  ```jsx
  import Form from './components/Form';
  import DataList from './components/DataList';
  import { useState, useEffect } from 'react';

  function App() {
    const API_URL = 'https://jsonplaceholder.typicode.com';
    const [ reqType, setReqType ] = useState('users'); // request type could be users/posts/comments, set to 'users' by default
    const [ items, setItems ] = useState([]); // this will be our data coming from the API, set to empty array by default

    useEffect(
      () => {
        const fetchData = async () => {
          try {
            const response = await fetch(`${API_URL}/${reqType}`); // fetch data with current request type
            if (!response.ok) throw Error('There was an issue fetching data.'); // check for errors with the response
            const data = await response.json();// save the returned data to a variable
            setItems(data);// update state with the request type (users/posts/comments) data being returned from the API
          } catch (err) {
            console.log(err.message); // if error, log the error message to the console
          }
        };
        fetchData(); // immediately call fetchData function
      },
      [ reqType ] // we want the useEffect to re-render every time request type changes
    );

    return (
      <div>
        <Form reqType={reqType} setReqType={setReqType} />
        <DataList items={items} />
      </div>
    );
  }

  export default App;
  ```

  #### `components/Form.js`:
  ```jsx
  import Button from './Button';

  const Form = ({ reqType, setReqType }) => {
    return (
      // pass the request state to the Button components
      <form onSubmit={(e) => e.preventDefault}>
        <Button
          buttonText="users"
          reqType={reqType}
          setReqType={setReqType}
        />
        <Button
          buttonText="posts"
          reqType={reqType}
          setReqType={setReqType}
        />
        <Button
          buttonText="comments"
          reqType={reqType}
          setReqType={setReqType}
        />
      </form>
    );
  };

  export default Form;
  ```

  #### `components/Button.js`:
  ```jsx
  const Button = ({ buttonText, reqType, setReqType }) => {
    return (
      <button
        className={buttonText === reqType ? 'selected' : null} // add 'selected' class if the button text is equal to the request type (css styling logic)
        type="button"
        onClick={() => setReqType(buttonText)} // update state to be whatever the text of the button clicked is
      >
        {buttonText}
      </button>
    );
  };

  export default Button;
  ```

  #### `components/DataList.js`:
  ```jsx
  import ListItem from './ListItem';

  const DataList = ({ items }) => {
    // loop through items array and return the <li> component for each item, pass the 'item' as a prop to the component
    return ( 
      <ul>
        {items.map((item) => <ListItem key={item.id} item={item} />)} 
      </ul>
    );
  };

  export default DataList;
  ```
	
</details>

### Part 2: Solution

<details>
  <summary>Toggle to View Part 2 Solution:</summary>
  
  #### `App.js`:
  ```jsx
  import Form from './components/Form';
  import Table from './components/Table';
  import { useState, useEffect } from 'react';

  function App() {
    const API_URL = 'https://jsonplaceholder.typicode.com';
    const [ reqType, setReqType ] = useState('users'); // reqType could be users, posts, or comments
    const [ items, setItems ] = useState([]); // this will be our data coming from the API

    useEffect(
      () => {
        const fetchData = async () => {
          try {
            const response = await fetch(`${API_URL}/${reqType}`); // fetch data
            if (!response.ok) throw Error('There was an issue fetching data.'); // error check the response
            const data = await response.json(); // save data
            setItems(data); // update state to request type data
          } catch (err) {
            console.log(err.message);
          }
        };
        fetchData();
      },
      [ reqType ] // we want the useEffect to re-render every time reqType changes
    );

    return (
      <div className="App">
        <Form reqType={reqType} setReqType={setReqType} />
        <Table items={items} />
      </div>
    );
  }

  export default App;
  ```

  #### `components/Form.js`:
  ```jsx
  import Button from './Button';

  const Form = ({ reqType, setReqType }) => {
    return (
      <form onSubmit={(e) => e.preventDefault}>
        <Button
          buttonText="users"
          reqType={reqType}
          setReqType={setReqType}
        />
        <Button
          buttonText="posts"
          reqType={reqType}
          setReqType={setReqType}
        />
        <Button
          buttonText="comments"
          reqType={reqType}
          setReqType={setReqType}
        />
      </form>
    );
  };

  export default Form;
  ```

  #### `components/Table.js`:
  ```jsx
  import Row from './Row';

  const Table = ({ items }) => {
    return (
      <div className="table-container">
        <table>
          <tbody>
            {items.map((item) => <Row key={item.id} item={item} />)}
          </tbody>
        </table>
      </div>
    );
  };

  export default Table;
  ```
  
  #### `components/Row.js`:
  ```jsx
  import Cell from './Cell';

  const Row = ({ item }) => {
    return (
      <tr>
        {Object.entries(item).map(([ key, val ]) => {
          return <Cell key={key} cellData={JSON.stringify(val)} />;
        })}
      </tr>
    );
  };

  export default Row;
  ```

  #### `components/Cell.js`:
  ```jsx
  const Cell = ({ cellData }) => {
    return <td>{cellData}</td>;
  };

  export default Cell;
  ```
	
</details>