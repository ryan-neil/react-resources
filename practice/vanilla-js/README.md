# React vs. Vanilla JavaScript
  * [React vs. Vanilla JavaScript](https://www.framer.com/blog/posts/react-vs-vanilla-js/)

### Resources:
  * [React in 100 Seconds](https://www.youtube.com/watch?v=Tn6-PIqc4UM&t=1s)
  * [What Is React & Why Is It So Popular?](https://www.youtube.com/watch?v=N3AkSS5hXMA)
  * [JavaScript frameworks vs Vanilla JavaScript](https://www.youtube.com/watch?v=VY6o-lq-wqw)

### The Main Differences:
1. How the user interface is first created
2. How functionality is split up across the app
3. How data is stored on the browser
4. How the UI is updated

## How the user interface is first created

### Vanilla JS:
The initial user interface is generally created in HTML on the server. Meaning, HTML is dynamically created on the server, and might look something like this:
```js
// html file:
<div>
  <h1>Grocery List</h1>
  <ul id="grocery-list">
    <li>Milk</li>
    <li>Bread</li>
    <li>Eggs</li>
  </ul>
</div>
```

### React:
```js
// html file:
<div id="root"></div>
```

Instead of defining the initial UI on the server, the UI gets defined on the browser. So the app starts with a blank container (a div in this case), and then the UI gets loaded into that container.

The UI is defined by a component that returns JSX. JSX looks like HTML, but is actually JavaScript - and might look like this:
```jsx
// react file:
function GroceryList() {
  return (
   <div>
      <h1>Grocery List</h1>
      <ul>
        <li>Milk</li>
        <li>Bread</li>
        <li>Eggs</li>
      </ul>
   </div>
  )
};
```

And that new `GroceryList` component gets mounted (or "rendered") into the `div` container using a library called `ReactDOM`:
```jsx
// react file:
ReactDOM.render(<GroceryList />, document.getElementById('root'));
```

This results in the same initial UI as the plain JS example above except that happens on the browser, instead of beforehand on the server.

## How functionality is split up across the app

### Vanilla JS:
There are no requirements about how you split up functionality or UI components in an application.

For example, our initial grocery list can just be defined in a main `index.html` file:
```js
// html file:
<div>
  <h1>Grocery List</h1>
  <ul id="grocery-list">
    <li>Milk</li>
    <li>Bread</li>
    <li>Eggs</li>
  </ul>
</div>
```

The code that updates the list might be buried deep in a separate javascript file.

```js
// js file:
function addItemToList() {
  // add item logic
};
```

This has traditionally been done because splitting the HTML (markup) and JavaScript (functionality) was seen as a "separation of concerns".

As the complexity of JavaScript apps has grown, this has caused huge headaches. Because the code that updates a piece of HTML might live in several different JS files across the entire application, developers have to keep all of those files open at once - and they have to "hold in their head" each of those interactions at the same time.

### React:
In contrast, React enforces that your app is split into components and that each one of those components maintains all of the code needed to both display and update the UI:

```jsx
// react file:
function GroceryList(props) {
  function addItemToList() {
    // add item logic
  }

  return (
    <div>
      <h1>Grocery List</h1>
      <ul>
        <li>Milk</li>
        <li>Bread</li>
        <li>Eggs</li>
      </ul>
    </div>
  );
}
```

This keeps the update code right next to the display code, and makes complicated apps easier to understand.

It also allows for greater code reuse since generic components can be made and shared across an app.

## How data is stored on the browser

Skip for now...

## How the UI is updated

The third major difference between plain JS and React apps is how each app responds to user interaction—like a button press to actually add a new item to list—and then updates the UI to reflect that new change.

### Vanilla JS:
We could add a button next to the input box that has an `id`:
```js
// html file:
<input type="text" placeholder="Enter an item" id="item-input" /> 
<button id="add-button">Add</button>
```

and then to respond to that button press, we could first find the button in the DOM (in the same way that we found the `input` before):
```js
// js file:
// find the button in the DOM
const addButton = document.getElementById("add-button");

// and then set a click listener on that button
addButton.addEventListener("click", function() {
  // append item to DOM 
})
```

And then inside of that click listener, we could first get the value of the input box. Then to append a new item to the grocery list, we have to find the list in the DOM, create the new item to append, and then finally append that to the end of the list:
```js
// js file:
addButton.addEventListener("click", function() {
  // select the input
  const input = document.getElementById("item-input");
  // select the grocery list
  const list = document.getElementById("grocery-list");
  // create list element
  const listNode = document.createElement("li");
  const textNode = document.createTextNode(input.value);
  
  // display the elements on the screen
  listNode.appendChild(textNode);
  list.appendChild(listNode);
});
```

### React:

In contrast, a React app will be set up to keep the entire state of the list in a JS variable:
```jsx
// react file:
const [items, setItems] = useState(["Milk", "Bread", "Eggs"]);
```

Which will then be displayed in JSX by mapping (looping) over each item, and returning a list element for each one:
```jsx
// react file:
<ul>
  {items.map(item => (
    <li>{item}</li>
  ))}
</ul>
```

Then, the actual button press can be defined right in the function. That means there is no click listener needed, but an `onClick` attribute can be added to the button itself:
```jsx
// react file:
<button onClick={addItem}>Add React</button>
```

And all that function has to do is append the new item (which is stored in JS memory) to the existing array of items, using the `setItems` updater function:
```jsx
// react file:
function addItem() { 
  setItems([...items, itemInput]); 
}
```

React will automatically register that there has been a change to the list, and update the UI automatically. The automatically updating nature of React apps means that you don’t have to go into the DOM to find where to append your items—it just happens automatically for you.

### Let's Summarize How React is Different

1. Plain JS apps usually start with the initial UI created on the server (as HTML), whereas React apps start with a blank HTML page, and dynamically create the initial state in JavaScript.

2. React requires you to break your UI into components, but plain JS apps can be structured in any way you see fit.

3. Data for plain JS apps are stored in the DOM itself and has to be found from the DOM before it can be used. React apps store data in regular JavaScript variables

4. UI updates in plain JS have to happen by finding the DOM node to update and manually appending or removing elements. React automatically updates the UI based on setting and changing `state` within the component.

### Why React?

The reason React was created is because it’s easy to get lost in a bit of maze of DOM searches and updates with plain JavaScript.

We saw how complicated it can become to simply append an item to a list with plain JS, and that just compounds across really complex applications.

Also, the way that React forces you to create components changes the way you approach software development. It helps you create your web applications in a more maintainable way.