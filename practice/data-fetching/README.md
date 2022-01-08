# Data Fetching App (Training)
  * [Video Tutorial:](https://www.youtube.com/watch?v=RVFAyFWO4go&t=13481s) Dave Gray (Part 1 - 4:04:43, Part 2 - 4:30:15)

### What we will be building:
This is a training exercise for building a data fetching application. To assist us we will be using [JSONPlaceholder](https://jsonplaceholder.typicode.com) which provides a free fake REST API. We will be using the `/posts`, `/comments`, and `/users` resources from JSONPlaceholder. This will be a two part training exercise.

### Summary
Part 1 will consist of 3 buttons spanning across the top of the page (_users_, _posts_, and _comments_). When we select `users` for example, it requests the associated resource from the JSONPlaceholder website. It then prints a list of all the objects we get back in JSON format. The same logic is repeated for the `posts` and `comments` as well.

For part 2, we will need to display our API data in a table format. For this we will need to understand how to use the [Object.entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) JavaScript method.
  * [Using Object.entries():](https://www.youtube.com/watch?v=KoeSseqKKro) dcode YouTube

## 🟢 Part 1: Basic

### 🛠 Features
  * `Header` component containing 3 buttons (*users*, *posts*, and *comments*)
    * On button click, request the associated resource from the JSONPlaceholder to display in `DataList`
  * `DataList` component that displays a list of all the data (objects) we get back in JSON format
  * `Footer` component that displays the number of items in the list

### 💭 Solution

<details>
  <summary>Toggle View Solution:</summary>
  
  `src/App.js`:
  ```js
  // JSONPlaceholder URL: 'https://jsonplaceholder.typicode.com';
  import Header from './components/Header';
  import DataList from './components/DataList';
  import Footer from './components/Footer';
  import { useState, useEffect } from 'react';

  function App() {
    const API_URL = 'https://jsonplaceholder.typicode.com';
    // set states (api data, request type)
    const [ reqType, setReqType ] = useState('users');
    const [ items, setItems ] = useState([]);

    // READ: fetch the data
    useEffect(
      () => {
        const fetchData = async () => {
          try {
            const res = await fetch(`${API_URL}/${reqType}`);
            // error check before fetching data
            if (!res.ok)
              throw Error('There was an issue fetching data.');
            const data = await res.json();
            // set items
            setItems(data);
          } catch (err) {
            console.log(err.message);
          }
        };
        fetchData();
      },
      [ reqType ]
    );

    return (
      <div className="App">
        <Header reqType={reqType} setReqType={setReqType} />
        <DataList items={items} />
        <Footer length={items.length} />
      </div>
    );
  }

  export default App;
  ```

  `src/components/Header.jsx`:
  ```jsx
  import Button from './Button';

  const Header = ({ reqType, setReqType }) => {
    return (
      <header>
        <form onSubmit={(e) => e.preventDefault()}>
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
      </header>
    );
  };

  export default Header;
  ```

  `src/components/Button.jsx`:
  ```jsx
  const Button = ({ buttonText, reqType, setReqType }) => {
    return (
      <button
        className={buttonText === reqType ? 'selected' : null}
        type="button"
        onClick={() => setReqType(buttonText)}
      >
        {buttonText}
      </button>
    );
  };

  export default Button;
  ```

  `src/components/DataList.jsx`:
  ```jsx
  import ListItem from './ListItem';

  const DataList = ({ items }) => {
    return (
      <main>
        <ul>
          {items.map((item) => (
            <ListItem key={item.id} item={item} />
          ))}
        </ul>
      </main>
    );
  };

  export default DataList;
  ```

  `src/components/ListItem.jsx`:
  ```jsx
  const ListItem = ({ item }) => {
    return <li>{JSON.stringify(item)}</li>;
  };

  export default ListItem;
  ```

  `src/components/Footer.jsx`:
  ```jsx
  const Footer = ({ length }) => {
    return (
      <footer>
        <h2>{length} Objects in List</h2>
      </footer>
    );
  };

  Footer.defaultProps = {
    length: 0
  };

  export default Footer;
  ```
	
</details>

## 🟡 Part 2: Intermediate

### 🛠 Features
  * Create a `DataTable` component and display the API data in a table format

### 💭 Solution

<details>
  <summary>Toggle View Solution:</summary>
  
  `src/App.js`:
  ```js
  // JSONPlaceholder URL: 'https://jsonplaceholder.typicode.com';
  import Header from './components/Header';
  import DataTable from './components/DataTable';
  import Footer from './components/Footer';
  import { useState, useEffect } from 'react';

  function App() {
    const API_URL = 'https://jsonplaceholder.typicode.com';
    const [ reqType, setReqType ] = useState('users');
    const [ items, setItems ] = useState([]);

    useEffect(
      () => {
        const fetchData = async () => {
          try {
            const res = await fetch(`${API_URL}/${reqType}`);
            if (!res.ok)
              throw Error('There was an issue fetching data.');
            const data = await res.json();
            setItems(data);
          } catch (err) {
            console.log(err.message);
          }
        };
        fetchData();
      },
      [ reqType ]
    );

    return (
      <div className="App">
        <Header reqType={reqType} setReqType={setReqType} />
        <DataTable items={items} />
        <Footer length={items.length} />
      </div>
    );
  }

  export default App;
  ```

  `src/components/DataTable.jsx`:
  ```jsx
  import Row from './Row';

  const Table = ({ items }) => {
    return (
      <div className="data-table-container">
        <table>
          <tbody>
            {items.map((item) => (
              <Row key={item.id} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  export default Table;
  ```
  
  `src/components/Row.jsx`:
  ```jsx
  import Cell from './Cell';

  const Row = ({ item }) => {
    return (
      <tr>
        {Object.entries(item).map(([ key, val ]) => (
          <Cell ket={key} cellData={JSON.stringify(val)} />
        ))}
      </tr>
    );
  };

  export default Row;
  ```

  `src/components/Cell.jsx`:
  ```jsx
  const Cell = ({ cellData }) => {
    return (
      <td>{cellData}</td>
    );
  };

  export default Cell;
  ```
	
</details>