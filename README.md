<p align="center">
  <img src="./assets/react-header.svg" width="550">
</p>

React is a JavaScript _library_ for creating user interfaces. It was created by the folks over at Meta (Facebook).

This guide utilizes React Functional Components and Hooks.

### Table of Contents
  1. [Resources](#1-Resources)
  2. [Tutorials](#2-Tutorials)
  3. [What is React?](#3-What-is-React)
  4. [JSX](#4-JSX)
  5. [Components](#5-Components)
      * 5.1 - [Class Components](#51-Class-Components)
      * 5.2 - [Functional Components](#52-Functional-Components)
      * 5.3 - [Building an App with Functional Components](#53-Building-an-App-with-Functional-Components)
  6. [Applying Styles](#6-Applying-Styles)
      * 6.1 - [Styling within React](#61-Styling-within-React)
      * 6.2 - [Styled Components](#62-Styled-Components)
  7. [Events](#7-Events)
  8. [State](#8-State)
      * 8.1 - [useState Hook](#81-useState-Hook)
  9. [Lists & Keys](#9-Lists-&-Keys)
  10. [Props](#10-Props)
      * 10.1 - [Default Props](#101-Default-Props)
      * 10.2 - [Prop Drilling (Threading)](#102-Prop-Drilling-Threading)
  11. [Controlled Form Inputs](#11-Controlled-Form-Inputs)
  12. [useEffect Hook](#12-useEffect-Hook)
  13. [Fetch API Data](#13-Fetch-API-Data)
  14. [CRUD Operations](#14-CRUD-Operations)
  15. [React Router](#15-React-Router)

# 1. Resources
  * [React Docs:](https://reactjs.org/docs/getting-started.html) React Docs
  * [React Docs:](https://beta.reactjs.org/) React Docs (Beta)
  * [Thinking in React:](https://reactjs.org/docs/thinking-in-react.html) React Docs
  * [Airbnb React/JSX Style Guide:](https://github.com/airbnb/javascript/tree/master/react) Airbnb Github Repo
  * [Structuring a React App:](https://reactjs.org/docs/faq-structure.html) React Docs
  * [Bulletproof React:](https://github.com/alan2207/bulletproof-react) Github Repo
  * [React Cheat sheet:](https://dev.to/ericchapman/react-cheat-sheet-updated-may-2021-1mcd) DEV (Updated June 2021)

# 2. Tutorials
#### Full Courses:
  * [The Modern React Bootcamp:](https://www.udemy.com/course/modern-react-bootcamp/learn/lecture/14638530?start=0#overview) Colt Steele
  * [The Complete React Guide:](https://www.udemy.com/course/react-the-complete-guide-incl-redux/) Maximilian Schwarzmüller
  * [React JS Full Course for Beginners:](https://www.youtube.com/watch?v=RVFAyFWO4go) Dave Gray
  * [The Beginner's Guide to React:](https://egghead.io/courses/the-beginner-s-guide-to-react) Kent C. Dodds
  * [React JS Crash Course 2021:](https://www.youtube.com/watch?v=w7ejDZ8SWv8) Traversy Media
  * [React Crash Course for Beginners 2021:](https://www.youtube.com/watch?v=9DDX3US3kss) Academind
  * [React.js Hooks Crash Course:](https://www.youtube.com/watch?v=-MlNBTSg_Ww) Academind
#### Project Learning:
  * [Learn React by Building an eCommerce Site:](https://www.youtube.com/watch?v=1DklrGoAxDE) FreeCodeCamp
  * [Build and Deploy a React Cryptocurrency App (Redux Toolkit):](https://www.youtube.com/watch?v=9DDX3US3kss) JavaScript Mastery

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

## 5.3 Building an App with Functional Components

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
  
  // some logic
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
  * [Styling and CSS:](https://reactjs.org/docs/faq-styling.html) React Docs
  * [My Custom CSS Reset:](https://www.joshwcomeau.com/css/custom-css-reset/) Josh W. Comeau

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

Utilizing tagged template literals (a recent addition to JavaScript) and the power of CSS, `styled-components` allows you to write actual CSS code to style your components. It also removes the mapping between components and styles – making it much easier to use components as a low-level styling construct.

### Resources:
  * [Styled Components Docs:](https://styled-components.com/docs) Styled Components Docs
  * [Styled Icons:](https://github.com/styled-icons/styled-icons) Styled Components Docs
  * [Styled Components Crash Course:](https://www.youtube.com/watch?v=02zO0hZmwnw) Traversy Media
  * [Working with Styled-components in React:](https://www.section.io/engineering-education/working-with-styled-components-in-react/) Section.io
  * [The state of CSS, CSS in JS & how styled-components is solving the problems we’ve had for decades:](https://medium.com/@vviikk/the-state-of-css-css-in-js-how-styled-components-is-solving-the-problems-weve-had-for-decades-d8abbc8bc148) Medium

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

# 7. Events
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

In React we are able to __transform__ arrays into _lists_ of [elements](https://reactjs.org/docs/rendering-elements.html). We can then __build__ _collections_ of elements to include in JSX with curly braces (`{}`).

## Lists

Let's explore how we can transform arrays by creating a little `TodoList` component:
```jsx
// TodoList.js
import { useState } from 'react';

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
  // set initial state to our tasks data
  const [items, setItems] = useState(tasks);

  // create the task list elements
  const lis = items.map((i) => {
    return (
      <li>{i.task}</li>
    );
  })

  return (
    <ul>
      {lis}
    </ul>
  )
}

export default TodoList;
```

### Spoiler Alert! Refactoring with 'props'

Here's a sneak peek at how we can use props in our applications.

Let's refactor the `TodoList` component so that it can accept an _array_ as a _prop_ and output a list of elements:
```jsx
// App.js
import TodoList from './components/TodoList';

// the data coming in from an API or external file
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
  // pass the data to 'TodoList' as a prop
  return (
    <div>
      <Header />
      <TodoList tasks={tasks} />
      <Footer />
    </div>
  )
}
```

Now, back in `TodoList.js` we have access to the `tasks` _prop_ that we passed to the component in `App.js`:
```jsx
// TodoList.js
const TodoList = (props) => {

  const lis = props.tasks.map((t) => {
    return (
      <li>{t.task}</li>
    );
  });

  return (
    <ul>
      {lis}
    </ul>
  )
}

export default TodoList;
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

### Updating the State

Now, in order to take our little `TodoList` application to the next level, let's see how we can update the _state_ of the component by adding a 'checkbox':
```jsx
// TodoList.js
import { useState } from 'react';

const TodoList = ({ tasks }) => {
  const [ items, setItems ] = useState(tasks);

  const handleChecked = (id) => {
    // loop through the items and check if the item id matches the id being passed in (clicked)
    const listItems = items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item));
    // update the state with the updated or same item (object)
    setItems(listItems);
  };

  // update li's to have an input with type checkbox
  const lis = items.map((item) => {
    return (
      <li key={item.id}>
        <input
          type="checkbox"
          checked={item.checked}
          onChange={() => handleChecked(item.id)}
        />
        <label>{item.task}</label>
        <button>Delete</button>
      </li>
    );
  });

  return (
    <ul>
      {lis}
    </ul>
  )
}

export default TodoList;
```

Inside the `handleChecked` method, we're checking if the item id is equal to the `id` coming in and if it is, we return a new item which is the same item (`...item`) but switching the `checked` status. The exclamation mark in `{ checked: !item.checked }` means that the changed status will be the opposite of what it currently is since it is a boolean.

If the `id` is not equal, we just return the item (`item`) that already exists. Once we have that logic saved to a variable we can pass that to our `setItems` method to update the state and cause a re-render.

### Saving the State with Local Storage

Now the final step is to save the state of the application and bring that saved state back when the app loads. To achieve this we will be using local storage.
```jsx
// TodoList.js
import { useState } from 'react';

const TodoList = ({ tasks }) => {
  const [ items, setItems ] = useState(tasks);

  const handleChecked = (id) => {
    const listItems = items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item));
    setItems(listItems);

    // set local storage
    localStorage.setItem('todolist', JSON.stringify(listItems));
  };

  const lis = items.map((item) => {
    return (
      <li key={item.id}>
        <input
          type="checkbox"
          checked={item.checked}
          onChange={() => handleChecked(item.id)}
        />
        <label>{item.task}</label>
        <button>Delete</button>
      </li>
    );
  });

  return (
    <ul>
      {lis}
    </ul>
  )
}

export default TodoList;
```

Now, when we make a check, we're saving it to _local storage_ and we will be able to pull that back later instead of the _default_ state that we started with.

### Deleting a Task Logic

We're now ready to add the method for deleting an item, or task. Our `handleDelete` function will look very similar to the `handleChecked` function accept instead of 'mapping' through the array we will 'filter' through it:
```jsx
// TodoList.js
import { useState } from 'react';

const TodoList = ({ tasks }) => {
  const [ items, setItems ] = useState(tasks);

  const handleChecked = (id) => {
    const listItems = items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item));
    setItems(listItems);
    localStorage.setItem('todolist', JSON.stringify(listItems));
  };
  
  // function to delete a task from our array
  const handleDelete = (id) => {
    // filter through our items array
    const listItems = items.filter((item) => item.id !== id);
    // update state (same as 'handleChecked')
    setItems(listItems);
    localStorage.setItem('todolist', JSON.stringify(listItems));
  };

  const lis = items.map((item) => {
    return (
      <li key={item.id}>
        <input
          type="checkbox"
          checked={item.checked}
          onChange={() => handleChecked(item.id)}
        />
        <label>{item.task}</label>
        {/* pass in handleDelete anonymous arrow function to our button */}
        <button onClick={() => handleDelete(item.id)}>Delete</button>
      </li>
    );
  });

  return (
    <ul>
      {lis}
    </ul>
  )
}

export default TodoList;
```

This creates a new array that has filtered out the item id (`item.id`) that is equal to the id (`id`) being passed in. In other words the new array will only have id's that are not equal to the item id that is being passed in with the click event.
 
Now the 'handleDelete' function is exactly the same as the 'handleChecked' function, we pass our `listItems` into the `setItems` method and then add to local storage.

# 10. Props

### Resources:
  * [Passing Props to a Component:](https://beta.reactjs.org/learn/passing-props-to-a-component) React Docs (Beta)
  * [React Props:](https://www.codecademy.com/resources/docs/react/props) codecademy
  * [Prop Drilling:](https://kentcdodds.com/blog/prop-drilling) Kent C. Dodds
  * [Props Drilling In React.Js:](https://medium.com/analytics-vidhya/props-drilling-in-react-js-934120a4906b) Medium

React components use _props_ to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.

Prop Drilling (also called "threading") allows us to pass that data down from parent components to child components. It refers to the process you have to go through to get data to parts of the React Component tree.

Let's see how we can add props to our little todo app:
```jsx
// App.js
import Header from './components/Header';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header title="Todo List"/>
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
```
In the above snippet, you notice we are passing the `Header` component the property of `title`. Back over inside of the `Header` component we have access to that prop:
```jsx
// Header.js
const Header = ({ title }) => {
  return (
    <header>
      <h2>{title}</h2>
    </header>
  )
}

export default Header;

// -> <h2>Todo List</h2>
```

## 10.1 Default Props

Default props allow us to set values for the props _expected_ in the component. If the props are not provided from the parent component, then the default child prop values will take over instead of receiving an error.

This is really helpful to do when specking a component or first designing the component and need dummy data/values.

Back in our `Header` component, we would do something like this:
```jsx
// Header.js
const Header = ({ title }) => {
  return (
    <header>
      <h2>{title}</h2>
    </header>
  )
}

// set default properties for the 'Header' component
Header.defaultProps = {
  title: 'Todo List'
};

export default Header;
```

> It's important to note, any 'props' being passed into the component from the parent will ALWAYS override the default 'props' set in the child component itself.

## 10.2 Prop Drilling (Threading)

Let's take our app to another level and look at how we can pass props into our `TodoList` component and `Footer` components. What we would like to do is display how many list items we have inside of the footer section.

This means, our `Footer` component needs access to the `listItems` from inside the `TodoList` component. These components are sibling components so they can't just reach over to each other and share data.

What we need to do is take the data from the `TodoList` component and move it up to the `App` component and then _drill_ it down to both the `TodoList` and `Footer` components.

Let's do this now. Inside of our `App` component:
```jsx
import Header from './components/Header';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
// import useState
import { useState } from 'react';

// this could be API data, external file data or database data
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
  // 1. set state in the "App" component
  const [ items, setItems ] = useState(tasks);

  // 2. move handle checked method into 'App' since it needs access to 'items' and 'setItems'
  const handleChecked = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
    localStorage.setItem('todolist', JSON.stringify(listItems));
  };

  // 3. move handle delete method into 'App' since it needs access to 'items' and 'setItems'
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem('todolist', JSON.stringify(listItems));
  };

  // 4. drill down (pass) all props to TodoList component
  return (
    <div className="App">
      <Header title="Todo List" />
      <TodoList
        items={items}
        handleChecked={handleChecked}
        handleDelete={handleDelete}
      />
      <Footer />
    </div>
  );
}

export default App;
```

Back in the `TodoList` component:
```jsx
// destructure the props
const TodoList = ({ items, handleChecked, handleDelete }) => {
	
  // loops through the items being passed in and set values
  const lis = items.map((item) => {
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
  });

  return (
    <main>
      <ul>{lis}</ul>
    </main>
  );
};

export default TodoList;
```

Our functions are all now being passed down to the `TodoList` component file. This is being done through _props_ and _prop drilling_. This method also allows us to refer to the items that we are holding in state in other components, like our `Footer` component.

So, let's now pass a prop to our `Footer` component from inside the `App` component:
```jsx
import Header from './components/Header';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import { useState } from 'react';

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
  const [ items, setItems ] = useState(tasks);

  const handleChecked = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
    localStorage.setItem('todolist', JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem('todolist', JSON.stringify(listItems));
  };

  return (
    <div className="App">
      <Header title="Todo List" />
      <TodoList
        items={items}
        handleChecked={handleChecked}
        handleDelete={handleDelete}
      />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
```

Here we're gaining access to the list items length so we can display that in the footer section. Let's display our todo list length now.

Over in the `Footer` component:
```jsx
// destructure the length prop
const Footer = ({ length }) => {
  return (
    <footer>
      <h2>{length} todo item(s)</h2>
    </footer>
  );
};

export default Footer;
```

#### Component Cleanup

Now that we have done this, let's refactor our `TodoList` component a bit more and use _abstraction_ to hide some of the logic. 

To do this we can make another component called `ItemList` and spread some of the code into this new component. This helps de-clutter some of the code inside of the `TodoList` component.

Let's do this now:
```jsx
// ItemList.js
const ItemList = ({ items, handleChecked, handleDelete }) => {
  return (
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
  );
};

export default ItemList;
```

Now, we can clean up the `TodoList` component:
```jsx
// import 'ItemsList' component
import ItemList from './ItemList';

const TodoList = ({ items, handleChecked, handleDelete }) => {
  return (
    // pass props to child 'ItemList' component
    <main>
      <ItemList
        items={items}
        handleChecked={handleChecked}
        handleDelete={handleDelete}
      />
    </main>
  );
};

export default TodoList;
```

As you can see above, we're _prop drilling_ two layers deep: `App` -> `TodoList` -> `ItemList`.

Now, with that out of the way we are going to _drill_ down one more level and create another component called `LineItem`. This component will be a reusable component that we will use for every line item.

Let's take care of this now:
```jsx
// LineItem.js
const LineItem = ({ item, handleChecked, handleDelete }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => handleChecked(item.id)}
      />
      <label>{item.task}</label>
      <button onClick={() => handleDelete(item.id)}>Delete</button>
    </li>
  );
};

export default LineItem;
```

Over in the `ItemList` component, we can do some more cleaning up:
```jsx
// itemList.js
// import LineItem component
import LineItem from './LineItem';

const ItemList = ({ items, handleChecked, handleDelete }) => {
  return (
    <ul>
      {items.map((item) => {
        return (
          // pass in our new reusable 'LineItem' component with the appropriate props (we must set the 'key' on this component)
          <LineItem
            key={item.id}
            item={item}
            handleChecked={handleChecked}
            handleDelete={handleDelete}
          />
        );
      })}
    </ul>
  );
};

export default ItemList;
```

This is all working as expected. We are also now _prop drilling_ three layers deep: `App` -> `TodoList` -> `ItemList` -> `LineItem`. 

Now, with that out of the way we will be building on our app even more and adding new items to the list and loading the items that we have saved from local storage.

[⬆ Top](#Table-of-Contents)

# 11. Controlled Form Inputs

So far in our mini todo application we have not been pulling our state back from local storage because we have no way of creating or adding todo tasks to the application. 

In this section we'll learn how we can add items (tasks) to our list. To begin, let's update our `App` component:
```jsx
// App.js
import Header from './components/Header';
// import 'AddItem' component
import AddItem from './components/AddItem';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import { useState } from 'react';

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
  const [ items, setItems ] = useState(tasks);
  // 1. set and control the input state, we want one source of truth for the input and we want to change the state as the input changes
  const [ newItem, setNewItem ] = useState('');

  // 4. add new item (task) logic
  const addItem = (item) => {
    // set id value
    const id = items.length ? items[items.length - 1].id + 1 : 1; // check if 'items' array has a length, if yes get the last item index and subtract 1, if 'items' array has no length, set items.length to 1
    // create new item object
    const myNewItem = { id: id, checked: false, task: item };
    // create new item list array (add the new item to the end of the list)
    const listItems = [ ...items, myNewItem ];
    // update the state of the todo list (same as handleChecked and handleDelete functions)
    setItems(listItems);
    localStorage.setItem('todolist', JSON.stringify(listItems));
  }

  const handleChecked = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
    localStorage.setItem('todolist', JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem('todolist', JSON.stringify(listItems));
  };

  // 2. create our handle submit function
  const handleSubmit = (e) => {
    // prevent page refresh
    e.preventDefault();
    // check for a new item
    if (!newItem) return;
    // create the new item
    addItem(newItem);
    // reset the input to default state
    setNewItem('');
  }

  return (
    // 3. pass newItem, setNewItem, and handleSubmit props to 'AddItem' component
    <div className="App">
      <Header title="Todo List" />
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <TodoList
        items={items}
        handleChecked={handleChecked}
        handleDelete={handleDelete}
      />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
```

Now, let's create the `AddItem` component:
```jsx
// AddItem.js
// 1. destructure props coming in from 'App' component
const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  return (
    // 2. pass in 'handleSubmit' to onSubmit event (event object is implicitly passed with 'handleSubmit')
    <form onSubmit={handleSubmit}>
      <label>Add item</label>
      <input
        type="text"
        placeholder="Add Item"
        required
        // 3. set the default value for controlled input ('')
        value={newItem}
        // 4. as we type in the input, it will set the new state
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddItem;
```

Beautiful! This is working as expected. Let's take care of a little bit of housekeeping. 

Inside our `App` component we are not following the _DRY_ principles. We are repeating ourselves quite a bit so let's create another method called, `setStateAndSaveItemsLocally` to help de-clutter the code:
```jsx
// App.js
...

function App() {
  const [ items, setItems ] = useState(tasks);
  const [ newItem, setNewItem ] = useState('');

  // 1. create function to update state and set local storage
  const setStateAndSaveItemsLocally = (newItems) => {
    setItems(newItems);
    localStorage.setItem('todolist', JSON.stringify(newItems));
  }

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id: id, checked: false, task: item };
    const listItems = [ ...items, myNewItem ];
    // 2. replace old repetitive code with new function 
    setStateAndSaveItemsLocally(listItems);
  }

  const handleChecked = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    // 3. replace old repetitive code with new function 
    setStateAndSaveItemsLocally(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    // 4. replace old repetitive code with new function 
    setStateAndSaveItemsLocally(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  }

  return (
    <div className="App">
      <Header title="Todo List" />
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <TodoList
        items={items}
        handleChecked={handleChecked}
        handleDelete={handleDelete}
      />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
```

Now that we've done this, let's add our logic for handling the saved data inside local storage.
```jsx
// App.js
...

function App() {
  // 1. remove the default data and pull in local storage 
  const [ items, setItems ] = useState(JSON.parse(localStorage.getItem('todolist')));
  const [ newItem, setNewItem ] = useState('');

  const setStateAndSaveItemsLocally = (newItems) => {
    setItems(newItems);
    // this is where we're adding the new items to local storage as well as naming the item list
    localStorage.setItem('todolist', JSON.stringify(newItems));
  }

  const addItem = (item) => {
    ...
  }

  const handleChecked = (id) => {
    ...
  };

  const handleDelete = (id) => {
    ...
  };

  const handleSubmit = (e) => {
    ...
  }

  return (
    <div className="App">
      <Header title="Todo List" />
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <TodoList
        items={items}
        handleChecked={handleChecked}
        handleDelete={handleDelete}
      />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
```

### Adding a Search Feature

Let's update our `App` component:
```jsx
// App.js
...

function App() {
  const [ items, setItems ] = useState(JSON.parse(localStorage.getItem('todolist')));
  const [ newItem, setNewItem ] = useState('');
  // 1. set search state
	const [ search, setSearch ] = useState('');

  const setStateAndSaveItemsLocally = (newItems) => {
    setItems(newItems);
    localStorage.setItem('todolist', JSON.stringify(newItems));
  }

  const addItem = (item) => {
    ...
  }

  const handleChecked = (id) => {
    ...
  };

  const handleDelete = (id) => {
    ...
  };

  const handleSubmit = (e) => {
    ...
  }

  // 2. create handle search function
  const handleSearch = () => {
    return items.filter((item) => item.task.toLowerCase().includes(search.toLowerCase()));
  }

  return (
    <div className="App">
      <Header title="Todo List" />
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem 
        // 3. pass in our search props for the SearchItem component to use
        search={search} 
        setSearch={setSearch}
      />
      <TodoList
        // 4. replace {items} with the handleSearch function
        items={handleSearch()}
        handleChecked={handleChecked}
        handleDelete={handleDelete}
      />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
```

Now, we can go ahead and create another new component called `SearchItem`:
```jsx
// SearchItem.js
// 1. destructure props from App component
const SearchItem = ({ search, setSearch }) => {
  return (
    // 2. pass in prevent default method straight away
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">Search</label>
      <input
        type="search"
        id="search"
        role="searchbox"
        placeholder="Search items"
        // 3. set initial state
        value={search}
        // 4. updated state based on user typing
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchItem;
```

And that's it! We've finished our little todo application.

[⬆ Top](#Table-of-Contents)

# 12. useEffect Hook
  * [useEffect:](https://reactjs.org/docs/hooks-reference.html#useeffect) React Docs
  * [React useEffect Hooks:](https://www.w3schools.com/react/react_useeffect.asp) w3schools
  * [A Visual Guide to useEffect:](https://alexsidorenko.com/blog/useeffect/) Alex Sidorenko
  * [Learn the React useEffect Hook:](https://www.youtube.com/watch?v=UVhIMwHDS7k&list=PLfruCl-i8oXyhMH7S28cJtzCKjSqKXyyq&index=2) Sonny Sangha YouTube
  * [React Hooks useEffect Tutorial:](https://www.youtube.com/watch?v=j1ZRyw7OtZs&list=PLfruCl-i8oXyhMH7S28cJtzCKjSqKXyyq&index=1&t=2s) Ben Awad YouTube

The _Effect Hook_ lets you perform side effects in function components. Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects.

Previously, in _Class_ based components we had special functions called __lifecycle methods__. These were things like, `componentDidMount`, `componentDidUnmount`, `componentWillUpdate`, etc. What this meant was whenever the component would _reach a lifecycle point_, for example, when it __mounts__, when it's about to __render__, __rerender__, what happens before the rerender so when it __unmounts__, when the component receives __new props__ and so forth. All of these things you could tap into and execute a piece of code based on those _lifecycle functions_.

Now, previously we couldn't do this in functional components but with the whole React code base switching over to functional components, functional programming, the team over at React introduced the _useEffect Hook_. The useEffect Hook replaces every single one of those lifecycle functions mentioned above.

### Use Cases

Let's have a look at some side-by-side comparisons of our old _Class_ based methods and the new `useEffect` alternatives.

#### The new `componentDidMount`:
```jsx
// old 
componentDidMount() {
  // Lifecycle function - when component mounts/loads.
  console.log('The component loaded');
}

// new
useEffect(() => {
  // Logs on every render
  console.log('The component rendered');
});

useEffect(() => {
  // Logs on first render/mount only - 'componentDidMount' alternative.
  console.log('The component loaded');
}, []);
```

In the above example, the difference between the two useEffect methods is the second one example has the _dependency array_ (although the array has nothing inside of it). So what this is telling React is, only run this method on the first render. In other words, only run it when the component mounts and after that if there are subsequent re-renders, don't run that code.

#### The new `componentDidUpdate`:
```jsx
// old 
componentDidUpdate(prevProps) {
  // Lifecycle function - when component props change.
  console.log('The components props changed');
}

// new 
useEffect(() => {
  // Logs on first render + whenever dependency changes - 'componentDidUpdate' alternative.
  console.log(`The name changed: ${name}`);
}, [name])
```

Previously, the `componentDidUpdate` only got triggered when the props changed. However, we may what a bit more control over this aspect. To get more control we can replace `componentDidUpdate` with the useEffect Hook and we can include a variable inside of the dependency array. 

Now, this is an array which means we can include as many variables as we want. So, anytime any of those variables changes it will trigger the code. Inside the dependency array we can include:
  * props
  * state
  * anything we want to trigger the rerender for

This essentially makes it much more clear, where previously it wasn't always clear that a rerender was about to happen or not. A rule pf thumb is that, imagine we did not include anything in the dependency array but our code has a dependency, React will warn us that the React Hook useEffect has a missing dependency and that we should include it in the dependency array or remove it:
```jsx
// bad 
useEffect(() => {
  console.log(`The name changed: ${name}`);
}, [])

// good
useEffect(() => {
  console.log(`The name changed: ${name}`);
}, [name])
```

#### The new `componentWillUnmount`:
```jsx
// old 
componentWillUnmount() {
  // Lifecycle function - when component unmounts/cleanup function.
}

// new 
useEffect(() => {

  console.log('The component changed');

  return () => {
    // cleanup...
    // anything in here is fired on component unmount.
    console.log('Component has been unmounted');
  }
}, [])
```

The useEffect in this example allows us to have something called a "cleanup" function. In every single `useEffect` we can return a function from the useEffect and this returned function is known as the "cleanup" function. What this means is, before the component re-renders, React quickly _unmounts_ the component so that it can re-render another one in its place.

This is very powerful because for example, let's say you make a connection to a database and every single time the component re-renders you don't want to keep reconnecting. Instead we need to do a quick cleanup, we need to disconnect the current connection and then re-connect. An even better solution would be to only do it on the first render:
```jsx
useEffect(() => {
  // initialize database connection
  connectToDatabase();
}, []);
```

This is where we need to think about which implementation of `useEffect` is best to use for the current situation.

#### Combining both `componentDidMount` and `componentWillUnmount`

This means that you can use `componentDidMount`, and `componentWillUnmount` in the same `useEffect` function call:
```jsx
useEffect(() => {
  // anything in here is fired on component mount.
  return () => {
    // anything in here is fired on component unmount.
  }
}, [])
```

## Todo App Example:

Let's incorporate useEffect into our Todo Application from the previous section.

Inside of `App.js` we can now add `useEffect` and pass in our data:
```jsx
import { useState, useEffect } from 'react';

function App() {
  // update items 'useState' and initialize 'useEffect' with an empty array
  const [ items, setItems ] = useState([]);
  const [ newItem, setNewItem ] = useState('');
  const [ search, setSearch ] = useState('');

  useEffect(() => {
    // load data from local storage
    setItems(JSON.parse(localStorage.getItem('todolist'))); // or some API data
  }, []);

  const setStateAndSaveItemsLocally = (newItems) => {
    // save data to local storage
    localStorage.setItem('todolist', JSON.stringify(newItems));
    setItems(newItems);
  };

...
```

In the above code, `useEffect` will only call our `setItems` method on the _initial page load_, which is represented by the empty array dependency (`}, [])`). This is an ideal way to load data, especially when you are working with than API.

It's important to note, that we would never want `setItems` inside of `useEffect` if you had an `items` dependency. This would cause an infinite loop.
```jsx
// bad
useEffect(() => {
  setItems(data);
}, [ items ])

// ok
useEffect(() => {
  setItems(data);
}, [])
```

Let's see how we can refactor our App.js code a bit more:
```jsx
import { useState, useEffect } from 'react';

function App() {
  // 1.  load local storage data (or API data)
  const [ items, setItems ] = useState(JSON.parse(localStorage.getItem('todolist')) || []);
  const [ newItem, setNewItem ] = useState('');
  const [ search, setSearch ] = useState('');

  useEffect(() => {
    // 2. save local storage data ('items')
    localStorage.setItem('todolist', JSON.stringify(items));
  }, [ items ]);

  // 3. remove 'setStateAndSaveItemsLocally' function

...
```

1. Here we're adding a _short circuit_ operator with an empty array. This is for the new users coming in who don't have a todo list yet, they receive an empty array.

2. We then move the logic for saving items up into the `useEffect` Hook and we pass `items` to the `setItem` method because it will be the current state we will be saving to local storage. So, anytime `items` changes we will save them to local storage.
\
\
Instead of loading everything at the beginning, we're just looking at the state of the `items` and if the state changes we save `items` to local storage to be pulled back into action next time the page loads.

3. Lastly, we can remove our `setStateAndSaveItemsLocally` function we created to save the `newItems` and update the state.

[⬆ Top](#Table-of-Contents)

# 13. Fetch API Data
  * [AJAX and APIs:](https://reactjs.org/docs/faq-ajax.html) React Docs
  * [Fetching Data with AJAX Requests:](https://create-react-app.dev/docs/fetching-data-with-ajax-requests) Create React App
  * [Fetch API:](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) MDN
  * [Fetching Data with useEffect:](https://www.youtube.com/watch?v=T3Px88x_PsA) The Net Ninja

Let's look at a quick example of how we can fetch data from an API in React using the useEffect Hook:
```jsx
import { useState, useEffect } from 'react';

function App() {
  const [items, setItems] = setState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://example.com/api'); // fetch API
        if (!res.ok) throw Error('Did not receive expected data'); // error handling

        const data = await res.json(); // returned data
        setItems(data); // update state
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [])

  // some other App logic...

  return (
    // App JSX...
  )
}

export default App;
```

## Todo App Example:

Let's see how we can fetch data from an API inside our Todo List application we've been building out. To do this we will be using [JSON Server](https://www.npmjs.com/package/json-server) which will allow us to run a mock backend REST API so we can practice fetching data from it.

To get our mock API up and running we need to create a new directory inside our root folder called `data`. Now inside the `data` folder we need to create a `db.json` file:
```json
{
  "items": [
    {
      "id": 1,
      "checked": false,
      "task": "Wash dishes"
    },
    {
      "id": 2,
      "checked": true,
      "task": "Take out trash"
    },
    {
      "id": 3,
      "checked": true,
      "task": "Mow the lawn"
    }
  ]
}
```

Once we have this created we fire up our JSON server. Inside the terminal we can run the command:
```bash
npx json-server -p 9001 -w data/db.json
```

And that's it our REST API is up and running over at, `http://localhost:9001/items`! So we can now fetch this URL and receive our JSON data back just like a live working API.

### Fetching Data

Now, over in App.js we can save our URL to a variable and replace our local storage logic with our new data coming from the local API:
```jsx
import Header from './components/Header'
import AddItem from './components/AddItem'
import SearchItem from './components/SearchItem'
import TodoList from './components/TodoList'
import Footer from './components/Footer'

import { useState, useEffect } from 'react';

function App() {
  // save our API URL to a variable
  const API_URL = 'http://localhost:9001/items';

  // remove loading data from local storage (leave empty array as initial app state)
  const [ items, setItems ] = useState([]);
  const [ newItem, setNewItem ] = useState('');
  const [ search, setSearch ] = useState('');

  // define an async function we can call inside of useEffect
  useEffect(() => {
    const fetchItems = async () => {
      try {
        // fetch db.json data
        const res = await fetch(API_URL);
        // receive data in json format
        const listItems = await res.json();
        // update state to the returned items
        setItems(listItems);
      } catch (err) {
        // log any errors
        console.log(err.message);
      }
    };

    // immediately invoke the function
    fetchItems();
  }, []);

...
```

We're now receiving our data from our local API!

### Handling Errors

Let's see how we can handle and display any errors we receive back to the user.

```jsx
import Header from './components/Header'
import AddItem from './components/AddItem'
import SearchItem from './components/SearchItem'
import TodoList from './components/TodoList'
import Footer from './components/Footer'

import { useState, useEffect } from 'react';

function App() {
  const API_URL = 'http://localhost:9001/items';

  const [ items, setItems ] = useState([]);
  const [ newItem, setNewItem ] = useState('');
  const [ search, setSearch ] = useState('');
  // set a fetch error with state
  const [ fetchError, setFetchError ] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch(API_URL);

        // look for an error from response
        if (!res.ok) throw Error('Did not receive expected data');

        const listItems = await res.json();
        setItems(listItems);

        // update the fetch error
        setFetchError(null);
      } catch (err) {
        // update the fetch error
        setFetchError(err.message);
      }
    };
    fetchItems();
  }, []);

  // all app functions logic...

  return (
    // use our fetchError in JSX
    <div className="App">
      <Header title="Todo List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <>
        {/* if error display fetch error */}
        {fetchError && (
          <p style={{ color: 'red' }}>{`Error: ${fetchError}`}</p>
        )}
        {/* if no error, display todo list */}
        {!fetchError && (
          <TodoList
            items={handleSearch()}
            handleChecked={handleChecked}
            handleDelete={handleDelete}
          />
        )}
      </>
      <Footer length={items.length} />
    </div>
  )
}

export default App;
```

### Handling Loading

Let's now handling our loading screen while we wait for the data to come back from the API. We want to show the user that in fact their data is being loaded from the API while they wait:
```jsx
import Header from './components/Header'
import AddItem from './components/AddItem'
import SearchItem from './components/SearchItem'
import TodoList from './components/TodoList'
import Footer from './components/Footer'

import { useState, useEffect } from 'react';

function App() {
  const API_URL = 'http://localhost:9001/items';

  const [ items, setItems ] = useState([]);
  const [ newItem, setNewItem ] = useState('');
  const [ search, setSearch ] = useState('');
  const [ fetchError, setFetchError ] = useState(null);
  // add loading state
  const [ isLoading, setIsLoading ] = setState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw Error('Did not receive expected data');

        const listItems = await res.json();
        setItems(listItems);

        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      // add a finally to update loading state to false once we get a success or failure
      } finally {
        setIsLoading(false)
      }
    };

    // simulate delayed fetch call
    setTimeout(() => {
      fetchItems();
    }, 2000);
  }, []);

  // all app functions logic...

  return (
    <div className="App">
      <Header title="Todo List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <>
        {/* Display loading */}
        {isLoading && <p>Loading items...</p>}
        {fetchError && (
          <p style={{ color: 'red' }}>{`Error: ${fetchError}`}</p>
        )}
        
        {/* If no error and not loading data, display todo list */}
        {!fetchError && !isLoading && (
          <TodoList
            items={handleSearch()}
            handleChecked={handleChecked}
            handleDelete={handleDelete}
          />
        )}
      </>
      <Footer length={items.length} />
    </div>
  )
}

export default App;
```

# 14. CRUD Operations

Let's see how we can incorporate some CRUD operations inside our Todo List application. 

We won't be covering _reading_ an item since we've been doing this throughout the application. This operation happens as soon as the app loads with the fetch method.

To begin, let create another file called `apiRequest`. This file will hold our fetching data helper function:
```js
// apiRequest.js
const apiRequest = async (url = '', optionsObj = null, errMsg = null) => {
  try {
    const response = await fetch(url, optionsObj);
    // error check
    if (!response.ok) throw Error('Please reload the app');
  } catch (err) {
    // if error, update the error message
    errMsg = err.message;
  } finally {
    // the function will only return an error message, either null or the error message
    return errMsg;
  }
};

export default apiRequest;
```

In the code above, the `optionsObj` parameter is what makes the difference between this being a _create_, _update_, or _delete_ request. That's all there is to this function.

## Create:

Let's handle the _create_ portion of the CRUD operations. Back in our `App` component let's revise our `addItem` method:
```jsx
import Header from './components/Header';
import AddItem from './components/AddItem';
import SearchItem from './components/SearchItem';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
// 1. import apiRequest method
import apiRequest from './components/apiRequest';

function App() {
  const API_URL = 'http://localhost:9001/items';

  const [ items, setItems ] = useState([]);
  const [ newItem, setNewItem ] = useState('');
  const [ search, setSearch ] = useState('');
  const [ fetchError, setFetchError ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    // do some stuff...
  })

  // 2. revise to be async since our 'apiRequest' method is async
  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id: id, checked: false, task: item };
    const listItems = [ ...items, myNewItem ];
    setItems(listItems);

    // 3. define the new item type and content to be sent to REST API -> (db.json)
    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myNewItem)
    };
    // 4. define the request and send to our API
    const result = await apiRequest(API_URL, postOptions);
    // 5. the 'apiRequest' will only return an error message, either null or the message so we can update setFetchError with this
    if (result) setFetchError(result);
  }

  ...
}
```

## Update:

Let's now take care of the _update_ part of our CRUD operations. For this we will be revising our `handleChecked` method inside the `App` component:
```jsx
import Header from './components/Header';
import AddItem from './components/AddItem';
import SearchItem from './components/SearchItem';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import apiRequest from './components/apiRequest';

function App() {
  const API_URL = 'http://localhost:9001/items';

  const [ items, setItems ] = useState([]);
  const [ newItem, setNewItem ] = useState('');
  const [ search, setSearch ] = useState('');
  const [ fetchError, setFetchError ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    // do some stuff...
  })

  const addItem = async (item) => {
    // do some stuff...
  }

  // 1. revise to be async
  const handleChecked = async (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);

    // 2. get the item that has been selected (checked)
    const myItem = listItems.filter((item) => item.id === id);
    // 3. define update options, we use PATCH for this
    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      // myItem is an array of 1 value so we just do [0]
      body: JSON.stringify({ checked: myItem[0].checked })
    };
    // 4. define our request URL (this will be a bit different than the URL for GET and POST)
    const requestURL = `${API_URL}/${id}`;
    // 5. define our result
    const result = await apiRequest(requestURL, updateOptions);
    // 6. again, the apiRequest will only return an error message, either null or the message so we can update setFetchError with this
    if (result) setFetchError(result);
  }

  ...
}
```

## Delete:

Let's now take care of the _deleting_ part of our CRUD operations. For this we will be revising our `handleDelete` method inside the `App` component:
```jsx
import Header from './components/Header';
import AddItem from './components/AddItem';
import SearchItem from './components/SearchItem';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import apiRequest from './components/apiRequest';

function App() {
  const API_URL = 'http://localhost:9001/items';

  const [ items, setItems ] = useState([]);
  const [ newItem, setNewItem ] = useState('');
  const [ search, setSearch ] = useState('');
  const [ fetchError, setFetchError ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    // do some stuff...
  })

  const addItem = async (item) => {
    // do some stuff...
  }

  const handleChecked = async (id) => {
    // do some stuff...
  }

  // 1. revise to be async
  const handleDelete = async (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);

    // 2. define DELETE options (only need the method here)
    const deleteOptions = {
      method: 'DELETE'
    };
    // 3. define the request URL (same as UPDATE)
    const requestURL = `${API_URL}/${id}`;
    // 4. define our result
    const result = await apiRequest(requestURL, deleteOptions);
    // 5. update the setFetchError
    if (result) setFetchError(result);
  }

  ...
}
```

Okay these are all working as expected. So, now when we make changes to our application, our `db.json` file reflects this changes automatically. Pretty cool!

[⬆ Top](#Table-of-Contents)

# 15. React Router (v6)
  * [React Router Overview:](https://reactrouter.com/docs/en/v6/getting-started/overview) React Router Docs

_"React Router is a fully-featured client and server-side routing library for React. React Router runs anywhere React runs; on the web, on the server with node.js, and on React Native."_ - React Router Docs

Typically on websites, when we go to the 'About' page or 'Contact' page we would have to fetch those pages from the server. However, with __React Router__ when we go to that 'About' page we would just load up that specific _component_.

So, this means we don't need to go out and fetch for a HTML page. This makes everything very fast and dynamic. In addition, we don't get a page refresh which gives us that _"App"_ feeling.

In this section we will be learning React Router by building a simple blog application.

### Installation

To begin we need to install __React Router__ into our Create React App:
```bash
npm install react-router-dom@6
```

### Imports and Setup

To start we need to import the React Router dependencies:
```js
// import react router dependencies
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    {/* basic routing structure */}
    <Router>
      <Routes>
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
```

### Adding Pages

Next, we're going to import any pages that our application might have:
```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import pages
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Missing from './pages/Missing';

function App() {
  return (
    <Router>
      <Routes>
        {/* set route components to render */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Missing />} />
      </Routes>
    </Router>
  );
}

export default App;
```

The `Missing` (404) route must be the last route in our application structure. For the path to our 404 page we want to add an `*` which represents all other pages not defined.

### Adding Static Components

Sometimes in our applications we may want certain components like a `Navbar` or `Footer` to display on every page in the application. With React Router this is very simple. All we need to do is call these static components outside of the `Routes` component:
```js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Missing from './pages/Missing';
// import static components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
```

### Adding Links

When it comes to links in React Router we can use a traditional <a> tag or we can use the built in `Link` component. Let's see how we can use the `Link` component now. Over inside of our `Navbar` component let's add some links to our pages:
```js
// import link component from react router
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav>
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
			<Link to="/profile">Profile</Link>
		</nav>
	);
};

export default Navbar;
```

In the code above all we do is call the `Link` component and pass in a prop called `to`, which points to the correct route that we want to send the user to. 

### Navigating

`useNavigate` is a new hook introduced in React Router v6 and it is extremely useful and easy to use. We can use useNavigate for:
  * Going to previous or next pages
  * Redirecting users to a specific URL

When using `useNavigate` we want to start by importing the hook and setting it to a variable. For this example, let's add a `button` element to our `Home` page that redirects the user to the `Profile` page:
```js
// import useNavigate hook from react router
import { useNavigate } from 'react-router-dom';

const Home = () => {
  // set variable
  const navigate = useNavigate();

  return (
    <main>
      <h2>Home Page</h2>
      <button onClick={() => {navigate('/profile')}}>
        To Profile page
      </button>
    </main>
  );
};

export default Home;
```

From the code above, our `navigate` variable now represents a function that when called will now navigate toward some specified route.

__Note:__ we can redirect a user to the previous page (in history) by calling:
```js
<button onClick={() => {navigate(-1)}}>
  Go back
</button>
```

We can also redirect a user to the next page (in history) by calling:
```js
<button onClick={() => {navigate(1)}}>
  Go forward
</button>
```

### Using Parameters

When accessing parameters in React Router the `useParams` hook is used to access the URL params. It is very useful in the case that you want to display specific information about a user when that user is accessing their Profile page.

Let's start by updating our `Profile` route in the `App` component
```js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Missing from './pages/Missing';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:name" element={<Profile />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
```

Next, we'll display specific information about a user based on the URL parameters:
```bash
# example URL
http://localhost:3000/profile/katie
```

Now, over in our `Profile` page:
```js
// import useParams from react router
import { useParams } from 'react-router-dom';

const Profile = () => {
  // destructure the parameter from the URL 
	const { name } = useParams();

	return (
		<div>
			<h3>Profile page for: {name}</h3>
		</div>
	);
};

export default Profile; 
```

This is extremely useful for creating different profile pages for different users. We should note that it is recommended to use an `id` in the params rather than the users' name.

[⬆ Top](#Table-of-Contents)

# Contributing
Contributions are always welcome! All I ask is that you open an issue and we discuss your proposed changes before you create a pull request.

[⬆ Top](#Table-of-Contents)