<p align="center">
  <img src="./assets/react-header.svg" width="550">
</p>

React is a JavaScript _library_ for creating user interfaces. It was created by the folks over at Meta (Facebook).

### Table of Contents
  1. [Resources](#1-Resources)
  2. [Tutorials](#2-Tutorials)
  3. [What is React?](#3-What-is-React)
  4. [JSX](#4-JSX)
  5. [Components](#5-Components)
      * 5.1 - [Class Components](#51-Class-Components)
      * 5.2 - [Functional Components](#52-Functional-Components)
  6. [Applying Styles](#6-Applying-Styles)
      * 6.1 - [Styling within React](#61-Styling-within-React)
      * 6.2 - [Styled Components](#62-Styled-Components)
  7. [Events](#7-Events)
  8. [State](#8-State)
      * 8.1 - [useState Hook](#81-useState-Hook)
  9. [Lists & Keys](#9-Lists-&-Keys)


# 1. Resources
  * [React Docs (Beta)](https://beta.reactjs.org/)
  * [Thinking in React: React Docs](https://reactjs.org/docs/thinking-in-react.html)
  * [Structuring a React App: React Docs](https://reactjs.org/docs/faq-structure.html)
  * [Bulletproof React: Github Repo](https://github.com/alan2207/bulletproof-react)
  * [React Cheat sheet (Updated June 2021)](https://dev.to/ericchapman/react-cheat-sheet-updated-may-2021-1mcd)

### Keyboard shortcuts (MacOS): \
__Fold All__ folds in editor - Command + (K => 0) \
__Unfold All__ folds in editor - Command + (K => J)

# 2. Tutorials
  * [The Modern React Bootcamp: Colt Steele](https://www.udemy.com/course/modern-react-bootcamp/learn/lecture/14638530?start=0#overview)
  * [React - The Complete Guide: Maximilian Schwarzmüller](https://www.udemy.com/course/modern-react-bootcamp/learn/lecture/14638530?start=0#overview)
  * [The Beginner's Guide to React: Kent C. Dodds](https://egghead.io/courses/the-beginner-s-guide-to-react)
  * [React JS Crash Course 2021: Traversy Media](https://www.youtube.com/watch?v=w7ejDZ8SWv8)
  * [React JS Full Course for Beginners: Dave Gray](https://www.youtube.com/watch?v=RVFAyFWO4go)
  * [Learn React by Building an eCommerce Site: FCC](https://www.youtube.com/watch?v=1DklrGoAxDE)
  * [Build and Deploy a React Cryptocurrency App (Redux Toolkit): JavaScript Mastery](https://www.youtube.com/watch?v=9DDX3US3kss)

# 3. What is React?

Basically, React is a frontend framework/library/whatever it is, it's pretty sweet. It was created by the folks over at Meta (Facebook).

  * [React in 100 Seconds: Fireship.io](https://www.youtube.com/watch?v=Tn6-PIqc4UM&t=1s)

### What does React actually do?

The main point of React is to build _components_. Components are reusable pieces of JavaScript, HTML, and CSS that are combined into one, modular component or one piece of an application. These pieces (components) can then be used to build or compose a larger application.

At the end of the day, React apps consist of a bunch of small components that are then combined and built up into larger pieces until we have an entire application.

React out of the box is less feature-rich than a framework like Angular. However, when developers write large React apps they are usually using other React-specific tools. These are things like, React Router, Redux, etc.

[⬆ Top](#Table-of-Contents)

# 4. JSX
  * [Introducing JSX: React Docs](https://reactjs.org/docs/introducing-jsx.html#gatsby-focus-wrapper)
  * [JSX In Depth: React Docs](https://reactjs.org/docs/jsx-in-depth.html)
  * [JSX Cheatsheet: codecademy](https://www.codecademy.com/learn/react-101/modules/react-101-jsx-u/cheatsheet)
  
JSX stands for JavaScript Syntax Extension or JavaScript plus XML (depending on who you ask). Essentially, what JSX does is it allows us to combine our UI with our JavaScript logic directly in our JavaScript file. 

So rather than having to use a separate template file in HTML that we then call upon in our JavaScript, we can look at a single component and directly see what it is actually doing.

> Behind the scenes, Babel is doing a lot of heavy lifting for us to convert those HTML characters into valid JavaScript.

### The Rules
JSX is much more strict that HTML, elements must either:
  * Have an explicit closing tag: `<h1> ... </h1>`
  * Be explicitly self-closed: `<input name="msg" />`
    * Note: you cannot leave off the `/` or else we get a syntax error

### JSX Syntax and JavaScript
JSX is a syntax extension of JavaScript. It’s used to create DOM elements which are then rendered in the React DOM.

A JavaScript file containing JSX will have to be compiled before it reaches a web browser. The code block shows some example JavaScript code that will need to be compiled.
```jsx
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>Render me!</h1>, 
  document.getElementById('root')
);
```

### Nested JSX elements
In order for the code to compile, a JSX expression must have exactly one outermost element. In the below block of code the `<div>` tag is the outermost element.
```jsx
function Account() {
  return (
    <div>
      <h1>Sign Up Today!</h1>
    </div>
  )
}
```

### Multiline JSX Expression
A JSX expression that spans multiple lines must be wrapped in parentheses: `(` and `)`. In the example code, we see the opening parentheses on the same line as the constant declaration, before the JSX expression begins. We see the closing parentheses on the line following the end of the JSX expression.
```jsx
function SuperHeros {
  return (
    <ul>
      <li>Thor</li>
      <li>Iron Man</li>
      <li>Hulk</li>
    </ul>
  )
}
```

### JSX attributes
The syntax of JSX attributes closely resembles that of HTML attributes. In the block of code, inside of the opening tag of the `<h1>` JSX element, we see an `id` attribute with the value `"example"`.
```jsx
const example = <h1 id="example">JSX Attributes</h1>;
```

### ReactDOM JavaScript library
The JavaScript library `react-dom`, sometimes called `ReactDOM`, renders JSX elements to the DOM by taking a JSX expression, creating a corresponding tree of DOM nodes, and adding that tree to the DOM.

The code example begins with `ReactDOM.render()`. The first argument is the JSX expression to be compiled and rendered and the second argument is the HTML element we want to append it to.
```jsx
ReactDOM.render(
  <h1>This is an example.</h1>, 
  document.getElementById('root')
);
```

### Embedding JavaScript in JSX
JavaScript expressions may be embedded within JSX expressions. The embedded JavaScript expression must be wrapped in curly braces.

In the provided example, we are embedding the JavaScript expression `10 * 10` within the `<h1>` tag. When this JSX expression is rendered to the DOM, the embedded JavaScript expression is evaluated and rendered as `100` as the content of the `<h1>` tag.
```jsx
let expr = <h1>{10 * 10}</h1>;

// Above JSX will be rendered something like this: 
// -> 100
```

### Embedding JavaScript code in JSX
Any text between JSX tags will be read as text content, not as JavaScript. In order for the text to be read as JavaScript, the code must be embedded between curly braces `{ }`.
```jsx
<p>{ Math.random() }</p>
 
// Above JSX will be rendered something like this:
// -> 0.88
```

### The Virtual DOM
React uses Virtual DOM, which can be thought of as a blueprint of the DOM. When any changes are made to React elements, the Virtual DOM is updated. The Virtual DOM finds the differences between it and the DOM and re-renders only the elements in the DOM that changed. This makes the Virtual DOM faster and more efficient than updating the entire DOM.

### JSX className
In JSX, you can’t use the word `class`! You have to use `className` instead. This is because JSX gets translated into JavaScript, and `class` is a reserved word in JavaScript.

When JSX is rendered, JSX `className` attributes are automatically rendered as `class` attributes.
```jsx
// When rendered, this JSX expression...
const heading = <h1 className="large-heading">Joseph Skycrest</h1>;
 
// ...will be rendered as this HTML
<h1 class="large-heading">Joseph Skycrest</h1>
```

### Setting JSX attribute values with embedded JavaScript
When writing JSX, it’s common to set attributes using embedded JavaScript variables.
```jsx
const introClass = "introduction";
const introParagraph = <p className={introClass}>Hello world</p>;
```

### JSX conditionals
JSX does not support if/else syntax in embedded JavaScript. There are three ways to express conditionals for use with JSX elements:
  1. a ternary within curly braces in JSX
  2. an `if` statement outside a JSX element, or 
  3. the `&&` operator.

```jsx
// Using ternary operator
function NumPicker() {
  return (
    <div>
      <h1>Your number is {num}</h1>
      <h3>{num === 7 ? 'You won!' : 'Sorry you lost...'}</h3>
    </div>
  );
}
```

```jsx
// Using if/else outside of JSX 'return'
function NumPicker() {
  let msg;
  if (num === 7) {
    msg = (
      <div>
        <h3>You won!</h3>
      </div>
    )
  }
  else {
    msg = (
      <div>
        <h3>Sorry you lost...</h3>
      </div>
    )
  }

  return (
    <div>
      <h1>Your number is {num}</h1>
      {msg}
    </div>
  );
}
```

```jsx
// Using && operator (short circuiting)
function NumPicker() {
  return (
    <div>
      <h1>Your number is {num}</h1>
      <h3>{num === 7 && 'You won!'}</h3>
    </div>
  );
}
```

### JSX '&&' conditional
In JSX, `&&` is commonly used to render an element based on a boolean condition. `&&` works best in conditionals that will sometimes do an action, but other times do nothing at all.

If the expression on the left of the `&&` evaluates as true, then the JSX on the right of the `&&` will be rendered. If the first expression is false, however, then the JSX to the right of the `&&` will be ignored and not rendered.

This is often referred to as '[short circuit conditionals](https://codeburst.io/javascript-short-circuit-conditionals-bbc13ac3e9eb)'.

Let's have a look below:
```jsx
// All of the list items will display if
// minor is false and age is greater than or equal to 21
function Yummy() {
  return (
    <ul>
      <li>Soda</li>
      { !minor && <li>Alcohol</li> }
      { age >= 21 && <li>Beer</li> }
      { age > 30 && <li>Wine</li> }
      { age > 50 && <li>Absinthe</li> }
    </ul>
  );
}
```

[⬆ Top](#Table-of-Contents)

# 5. Components
  * [Components and Props: React Docs](https://reactjs.org/docs/components-and-props.html)
  * [Keeping Components Pure: React Docs](https://beta.reactjs.org/learn/keeping-components-pure)

Components are the building blocks of React. React quite literally exists to help you create components and then have those components communicate (pass data, pass information, methods, etc.) between one another.

_"Components let you split the UI into independent, reusable pieces, and think about each piece in isolation."_ - React Docs

One of the most difficult parts of a React app is figuring out what to make a component. Components should follow the _Single Responsibility Principle_, which means a components should ideally only do one thing.

### Types of Components
  1. Class Components
  2. Functional Components

### Well what's the difference?
  * Both can accept _props_ and render content
  * Historically, function components couldn't use important features like:
      * State
      * Lifecycle Methods
  * With the introduction of _Hooks_, we can now write full-featured function components

## 5.1 Class Components
  * They write the logic in a JavaScript Class
  * They must also include a render method

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}
```

## 5.2 Functional Components
  * Write the logic in a JavaScript function
  * There is no render method or methods at all, just a single function that returns some content and that content will be rendered

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

Let's now build our first app with functional components! We will be creating 3 functional components for our mini application, a `Header` component, a `Main` component, and a `Footer` component:
```jsx
// Header.js
const Header = () => {
  return (
    <header>
      <h2>Header section</h2>
    </header>
  );
};

export default Header;
```
```jsx
// Main.js
const Main = () => {
  const handleNameChange = () => {
    const names = [ 'Katie', 'Ryan', 'John' ];
    return names[Math.floor(Math.random() * names.length)];
  };

  return (
    <main>
      <h2>Main section</h2>
      <p>Hello, {handleNameChange()}!</p>
    </main>
  );
};

export default Main;
```
```jsx
// Footer.js
const Footer = () => {
  const today = new Date();

  return (
    <footer>
      <h2>Footer section</h2>
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
```

Now over inside of `App.js` we will structure our application by importing all of our components:
```jsx
// App.js
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
```

And that's it! It may not be a million dollar application but it's a start!

[⬆ Top](#Table-of-Contents)

# 6. Applying Styles
  * [Styling and CSS: React Docs](https://reactjs.org/docs/faq-styling.html)

## 6.1 Styling within React

In order to style our React components we need to pass in a string as the `className` prop to our component elements. 

Let's add some styles to our Header component from our miniature app we previously created:
```jsx
// Header.js
import './styles/Header.css'

const Header = () => {
  return (
    <header className="Header">
      <h2 className="heading">Header section</h2>
    </header>
  );
};

export default Header;
```

Now, in `Header.css` we would just do something like this:
```css
/* Header.css */
.Header {
  padding: 1rem 1rem;
}
.heading {
  font-size: 24px;
  color: red;
}
```

It's important to note that, `class` instead of `className` would work but React sends us a warning in our console and in general we want to avoid using `class` as a prop for styling since it is a JavaScript reserved word.

### Inline CSS Styling

Sometimes, for whatever reason we might want to pass in inline CSS styles rather than through a text class. To achieve this we would just pass in the prop `style` and then an object like this:
```jsx
// Header.js
const Header = () => {
  return (
    <header className="Header">
      <h2 style={{ fontSize: '24px', color: 'red' }}>Header section</h2>
    </header>
  );
};

export default Header;
```

Typically, when it comes to multiple inline styles we generally just create a variable and set that equal to an object with our styles as key value pairs. Then you would just pass the object into the `style` prop like this:
```jsx
// Header.js
const Header = () => {
  const headerStyles = {
    fontSize: '24px',
    color: 'red'
  }

  return (
    <header className="Header">
      <h2 style={headerStyles}>Header section</h2>
    </header>
  );
};

export default Header;
```

### Dynamic or Conditional Styles

#### Using the Ternary Operator

We can add or remove class names conditionally by using the JavaScript ternary operator.

Here is an example:
```jsx
// Header.js
import { useState } from 'react';

const Header = () => {
  const [ isActive, setActive ] = useState(true);

  return (
    <header className={ isActive ? "green-box" : "red-box" }>      
      <h2>Header section</h2>
      <button onClick={() => setActive(!isActive)}>Change color</button>
    </header>
  );
};

export default Header;
```

In the above code, if `isActive` property is `true`, we are applying `green-box` class to the `div` element else we are applying `red-box`.

In some cases, we may already have one class name on the `div` element and you need to apply other class names conditionally.

We can achieve this with a ternary operator inside a template literal:
```jsx
// Header.js
import { useState } from 'react';

const Header = () => {
  const [ isActive, setActive ] = useState(true);

  return (
    <header className={`Header ${ isActive ? "green-box" : "red-box" }`}>      
      <h2>Header section</h2>
      <button onClick={() => setActive(!isActive)}>Change color</button>
    </header>
  );
};

export default Header;
```

In the above code, we already have a `Header` class in the `div` element and we are adding `green-box` or `red-box` based on certain conditions.

We can also apply a class name only if the condition is truthy:
```jsx
// Header.js
import { useState } from 'react';

const Header = () => {
  const [ isActive, setActive ] = useState(true);

  return (
    <header className={ isActive && "green-box" }>      
      <h2>Header section</h2>
      <button onClick={() => setActive(!isActive)}>Change color</button>
    </header>
  );
};

export default Header;
```

[⬆ Top](#Table-of-Contents)

## 6.2 Styled Components

Utilizing tagged template literals (a recent addition to JavaScript) and the power of CSS, `styled-components` allows you to write actual CSS code to style your components. 

It also removes the mapping between components and styles – using components as a low-level styling construct could not be easier!

### Resources:
  * [Styled Components Docs](https://styled-components.com/docs)
  * [Styled Icons Docs](https://github.com/styled-icons/styled-icons)
  * [Styled Components Crash Course: Traversy Media](https://www.youtube.com/watch?v=02zO0hZmwnw)

### Table of Contents:
  * 6.2.1 - [Installation](#621-Installation)
  * 6.2.2 - [Getting Started](#622-Getting-Started)
  * 6.2.3 - [Utilizing Props](#623-Utilizing-Props)
  * 6.2.4 - [Icons](#624-Icons)

### 6.2.1 Installation

```bash
# with npm
npm install --save styled-components

# with yarn
yarn add styled-components
```

### 6.2.2 Getting Started

`styled-components` utilizes tagged template literals to style your components.

It removes the mapping between components and styles. This means that when you're defining your styles, you're actually creating a normal React component, that has your styles attached to it.

This example creates two simple components, a wrapper and a title, with some styles attached to it:
```jsx
// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Use Title and Wrapper like any other React component – except they're styled!
render(
  <Wrapper>
    <Title>
      Hello World!
    </Title>
  </Wrapper>
);
```

### 6.2.3 Utilizing Props

You can pass a function ("interpolations") to a styled component's template literal to adapt it based on its props.

This button component has a primary state that changes its color. When setting the `primary` prop to true, we are swapping out its background and text color.
```jsx
const Button = styled.button`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

render(
  <div>
    <Button>Normal</Button>
    <Button primary>Primary</Button>
  </div>
);
```

### 6.2.4 Icons
  * [Styled Icons Docs](https://github.com/styled-icons/styled-icons)

#### Installation:

```bash
npm install styled-icons --save
# or
yarn add styled-icons
```

#### Usage:

All icons are available for preview at the [Icon Explorer](https://styled-icons.dev/).

The entire icon packs are available via the main import and sub-imports:
```jsx
import { material, octicons } from 'styled-icons'
```

You can also import just the icons you need:
```jsx
import React, { Fragment } from 'react'
import { AccountCircle, Lock } from '@styled-icons/material'

const App = () => (
  <Fragment>
    <AccountCircle />
    <Lock />
  </Fragment>
)
```

All icons are exported as Styled Components, which means it is possible to utilize the Styled Components API:
```jsx
import styled from 'styled-components'
import { Lock } from '@styled-icons/material'

export const RedLock = styled(Lock)`
  color: red;

  font-weight: ${(props) => (props.important ? 'bold' : 'normal')};
`
```

#### Base Icon Styles

If you wish to style all icons at once, you can create a wrapper styled component that imparts a particular style to all icons contained within the wrapper by targeting the StyledIconBase component:
```jsx
import styled from 'styled-components'
import { StyledIconBase } from '@styled-icons/styled-icon'

export const IconStyleWrapper = styled.div`
  ${StyledIconBase} {
    color: red;
    /* icon styles go here */
  }
`
```

[⬆ Top](#Table-of-Contents)

# 7 Events
  * [Supported Events: React Docs](https://reactjs.org/docs/events.html#supported-events)

Just like HTML DOM events, React can perform actions based on user events. React has the same events as HTML: `click`, `change`, `mouseover` etc.

Any event attribute we can listen for in JavaScript, we can also listen for in React:
  * Mouse events: `onClick`, `onMouseOver`, etc.
  * Form events: `onSubmit`, etc.
  * Keyboard events: `onKeyDown`, `onKeyUp`, `onKeyPress`, etc.

React events are written in camelCase syntax:
`onClick` instead of `onclick`.

React event handlers are written inside curly braces:
`onClick={shoot}` instead of `onclick="shoot()"`.

```jsx
// React
<button onClick={shoot}>Take the Shot!</button>
```
```html
<!-- HTML -->
<button onclick="shoot()">Take the Shot!</button>
```

Let's look at an example. In this example we will be putting the shoot function inside of the Soccer component:
```jsx
function Soccer() {
  const shoot = () => {
    alert("Gooooooooal!")
  }

  return (
    <button onClick={shoot}>
      Take the Shot!
    </button>
  )
}
```

### Passing Arguments to Event Handlers

In order to pass an argument to an event handler, we use an _anonymous_ arrow function:
```jsx
function Soccer() {
  const shoot = (msg) => {
    alert(msg);
  }

  return (
    <button onClick={() => shoot("Goooooooal!")}>
      Take the Shot!
    </button>
  )
}
```

### Accessing the Event Object

Event handlers have access to the React event that triggered the function. In our previous examples, the event is the "click" event.
```jsx
function Soccer() {
  const shoot = (e) => {
    console.log(e); // -> Object { _reactName: "onClick", _targetInst: null, type: "click", etc...}
    console.log(e.target); // -> <button>Take the Shot!</button>
    console.log(e.target.innerText); // -> Take the Shot!
  }

  return (
    <button onClick={(e) => shoot(e)}>
      Take the Shot!
    </button>
  )
}
```

[⬆ Top](#Table-of-Contents)

# 8. State
  * [React State: w3schools](https://www.w3schools.com/react/react_state.asp)
  * [The State of State Management in React: Ben Awad](https://www.youtube.com/watch?v=BhQYZmaxTCM)

_State_ is extremely important for making any sort of interactive React application or really any application where you want something to change.

React actually gets it's name because it 'Reacts' to changes in the _state_ of the component and when there are changes React will re-render the JSX that we have in the `return` statement.

This section doesn't intend on discussing everything there is to know about React _state_ but more of a low-level overview. A few things we will cover are:
  * Understanding the concept of _state_ in web applications
  * Learning how to model _state_ in React
  * How we can use events to trigger _state_ changes

Stepping away from React for minute, Basically any web application that we can develop; there's going to be _state_ that needs to be managed or kept track of. The _patterns_ that we use to manage these _states_ differ from framework to framework.

However, the general idea behind it is the same, there's some data/information that is liable to change and we want to keep track of that somewhere. 

So, for example:
  * An app where some _logged in_ users are displayed different data/information compared to users who are _not logged in_. 
  * An app where you can click an edit button and it opens up a pop-up, we would need to keep track of whether or not the pop-up is open or closed.
  * Sections of a website can expand or collapse, for instance clicking a "Read more" button/link

These are all dynamic elements, they don't necessarily have to deal with the server. The backend of an application doesn't care if the modal is open or closed, or if we have an accordion expanded or collapsed. 
  
_"The __state__ of the client interface (frontend) is not always directly tied to the __state__ on the server (backend)."_ - Colt Steele

### What Does State Track?

There are two types of things that _state_ on the client/frontend keeps track of:
  1. __UI logic__ - the changing _state_ of the interface. For example, there is a modal open right now because the user is editing their profile or maybe the accordion is expanded or closed
  2. __Business logic__ - the changing _state_ of data. For example, in my inbox messages are either read or unread, and this in turn affects how they display

## 8.1 useState Hook
  * [Using the State Hook: React Docs](https://reactjs.org/docs/hooks-state.html)
  * [React useState Hook: w3schools](https://www.w3schools.com/react/react_usestate.asp)

The React `useState` Hook allows us to track state in a function component. State generally refers to _data_ or _properties_ (_props_) that we need to be tracking in an application.

The `useState` Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these.

Let's look at an example:
```jsx
// import useState
import { useState } from 'react';

const Main = () => {
  // initialize the useState hook (we're setting 'Katie' as the default state)
  const [ name, setName ] = useState('Katie');

  return (
    <main>
      <p>Hello, {name}!</p>
    </main>
  );
};

export default Main;

// -> Hello, Katie!
```

Notice that we are destructuring the returned values from `useState`. The first value, `name`, is our current _state_. The second value, `setName` is the function that is used to update our _state_.

> Note: These names are variables that can be named anything we want.

Lastly, we set the initial state (`name`) to the string: `'Katie'`.

### Updating State

From the previous example, we are relying on `handleNameChange` to update our state. 

Inside `handleNameChange` we are calling our state updater function, `setName` and passing in the logic to generate a random name:
```jsx
import { useState } from 'react';

const Main = () => {
  const [ name, setName ] = useState('Katie');

  const handleNameChange = () => {
    const names = [ 'Katie', 'Ryan', 'John' ];
    // call state updater method
    setName(names[Math.floor(Math.random() * names.length)]);
  };

  return (
    <main>
      <p>Hello, {name}!</p>
      <button onClick={handleNameChange}>Change Name!</button>
    </main>
  );
};

export default Main;
```

Let's have a look at another example:
```jsx
const Main = () => {
  const [ count, setCount ] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
    console.log(count); // -> 0
  };

  return (
    <main>
      <p>Count is: {count}</p>
      <button onClick={handleCount}>Press me!</button>
    </main>
  );
};

export default Main;
```

Notice when we click the button to handle count, inside the console we get `0`. This is odd, shouldn't we be getting `1`?

This is happening because the current value of the state (`0`) is brought into the function (`handleCount`) and that value does not change. 

In other words we can add as many `setCount()`'s as we want but if we log to the console or use the value of the state after that it will not have changed because that's what was brought into the function.

> Note: we use `const` to initialize useState because we never want to allow the state to be changed directly.

As far as naming our `useState` variables, the general convention is to name them what you're holding (describe the data) and then in the method it almost always starts with a lowercase 'set' and then the name of the first value.
```jsx
const [ count, setCount ] = useState(0);
```

### Using Multiple State Hooks

We can also create multiple _state_ Hooks to track individual values.

Let's look at an example:
```jsx
import { useState } from "react";

function Car() {
  const [ brand, setBrand ] = useState('Ford');
  const [ model, setModel ] = useState('Mustang');
  const [ year, setYear ] = useState('1964');
  const [ color, setColor ] = useState('red');

  return (
    <div>
      <h1>My {brand}</h1>
      <p>It is a {color} {model} from {year}.</p>
    </div>
  );
}

export default Car;
```

Or, we can just use one state and include an object instead. From the example above, let's create a single Hook that holds an object:
```jsx
import { useState } from "react";

function Car() {
  const [ car, setCar ] = useState({
    brand: 'Ford',
    model: 'Mustang',
    year: '1964',
    color: 'red'
  });

  return (
    <div>
      <h1>My {car.brand}</h1>
      <p>It is a {car.color} {car.model} from {car.year}.</p>
    </div>
  );
}

export default Car;
```

### Updating Objects and Arrays in State

When state is updated, the entire state gets overwritten. Well, what if we just want to update the _color_ of our car?

If we only called `setCar({color: "blue"})`, this would remove the brand, model, and year from our state. So, to help us out with this, we can use the JavaScript spread operator:
```jsx
function Car() {
  const [ car, setCar ] = useState({
    brand: 'Ford',
    model: 'Mustang',
    year: '1964',
    color: 'red'
  });

  const updateColor = () => {
    setCar((prevState) => {
      return { ...prevState, color: 'blue' };
    });
  };

  return (
    <div>
      <h1>My {car.brand}</h1>
      <p>It is a {car.color} {car.model} from {car.year}.</p>
      <button onClick={updateColor}>Update!</button>
    </div>
	);
}
```

Because we need the current value of state, we pass a function into our `setCar` function. This function receives the previous value.

We then return an object, spreading the `previousState` and overwriting only the color.

[⬆ Top](#Table-of-Contents)

# 9. Lists & Keys
  * [Lists and Keys: React Docs](https://reactjs.org/docs/lists-and-keys.html)

In React we are able to __transform__ arrays into _lists_ of [elements](https://reactjs.org/docs/rendering-elements.html). We are then able to __build__ _collections_ of elements to include in JSX with curly braces (`{}`).

## Lists

Let's explore how we can transform arrays by creating a little `TodoList` component:
```jsx
// TodoList.jsx
import { useState } from 'react';

// data
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

const ToDoList = () => {
  // set initial state to our app data
  const [items, setItems] = useState(tasks);

  // create task elements
  const lis = items.map((i) => {
    return (
      <li>{i.task}</li>
		);
  })

  // render tasks
  return (
    <div>
      <ul>
        {lis}
      </ul>
    </div>
  )
}

export default TodoList;
```

### Refactor with 'props'

Let's refactor the `TodoList` component so that it can accept an _array_ of tasks and output a list of elements:
```jsx
// TodoList.jsx
const TodoList = (props) => {

  const lis = props.tasks.map((t) => {
    return (
      <li>{t.task}</li>
    );
  });

  return (
    <div>
      <ul>
        {lis}
      </ul>
    </div>
  )
}

export default TodoList;
```

Now, over in `App.js`:
```jsx
// App.js
import TodoList from './components/TodoList';

// data
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

function App() {
  return (
    <div>
      <Header />
      <TodoList tasks={tasks} />
      <Footer />
    </div>
  )
}
```

## Keys

When we run the above code, you’ll be given a warning that a key should be provided for list items. A “key” is a special string attribute you need to include when creating lists of elements.

Let’s assign a _key_ to our `TodoList` elements and fix the missing _key_ issue:
```jsx
const TodoList = (props) => {

  const lis = props.tasks.map((t) => {
    return (
      // set list element key to tasks ID (ideally)
      <li key={t.id}>
        {t.task}
      </li>
    );
  });

...
```

Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity.

The best way to pick a key is to use a string that uniquely identifies a list item among its siblings. Most often you would use IDs from your data as we did in the above `TodoList` example.

When you don’t have stable IDs for rendered items, you may use the item index as a key as a last resort:
```jsx
const TodoList = (props) => {

  const lis = props.tasks.map((t, idx) => {
    return (
      // only do this if items have no stable ID
      <li key={idx}>
        {t.task}
      </li>
    );
  });

...
```

Now, in order to take our little `TodoList` application to the next level, let's update the _state_ of the component by adding a 'checkbox':
```jsx
const TodoList = ({ tasks }) => {
	const [ items, setItems ] = useState(tasks);

  const handleCheck = (id) => {

    const listItems = items.map(
      (i) => (i.id === id ? { ...i, checked: !i.checked } : i)
    );

    // update the state
    setItems(listItems);
  };

  // update li's to have an input with type checkbox
  const lis = items.map((i) => {
    return (
      <li key={i.id}>
        <input
          type="checkbox"
          checked={i.checked}
          onChange={() => handleCheck(i.id)}
        />
        <label>{i.task}</label>
        <button>Delete</button>
      </li>
    );
  });

  return (
    <div>
      <ul>
        {lis}
      </ul>
    </div>
  )
}

export default TodoList;
```

Let's break down the handleCheck method from the above coed:
```jsx
const handleCheck = (id) => {
  // check
  const listItems = items.map(
    (i) => (i.id === id ? { ...i, checked: !i.checked } : i)
  );

  // update the state
  setItems(listItems);
};
```
Inside the `handleClick` method, we're checking if the item id is equal to the `id` coming in and if it is, we return a new item which is the same item but toggling the `checked` status. If the `id` is not equal, return the item (`i`) that already exists. 

Then, once we have that

[⬆ Top](#Table-of-Contents)

# Contributing
Contributions are always welcome! All I ask is that you open an issue and we discuss your proposed changes before you create a pull request.

[⬆ Top](#Table-of-Contents)