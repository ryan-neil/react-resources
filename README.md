# React Resources
<p align="center">
  <img src="./assets/react-header.png" width="400">
</p>

React is a JavaScript _library_ for creating user interfaces. It was created by the folks over at Meta (Facebook).

### Table of Contents
  1. [Resources](#1-Resources)
  2. [Tutorials](#2-Tutorials)
  3. [What is React?](#3-What-is-React)
  4. [Thinking in React](#4-Thinking-in-React)
  5. [Components](#5-Components)
  6. [JSX](#6-JSX)
  7. [Looping in JSX](#7-Looping-in-JSX)
  8. [Simple React App Structure](#8-Simple-React-App-Structure)
  9. [Properties](#9-Properties)
  10. [Styling React](#10-Styling-React)
  11. [Create React App](#11-Create-React-App)
  12. [State](#12-State)
  13. [State vs. Props](#13-State-vs-Props)

# 1. Resources
  * [React Docs (Beta)](https://beta.reactjs.org/)
  * [Thinking in React: React Docs](https://reactjs.org/docs/thinking-in-react.html)
  * [Structuring a React App: React Docs](https://reactjs.org/docs/faq-structure.html)
  * [Bulletproof React: Github Repo](https://github.com/alan2207/bulletproof-react)
  * [React Cheat sheet (Updated June 2021)](https://dev.to/ericchapman/react-cheat-sheet-updated-may-2021-1mcd)

# 2. Tutorials
  * [The Modern React Bootcamp: Colt Steele](https://www.udemy.com/course/modern-react-bootcamp/learn/lecture/14638530?start=0#overview)
  * [React - The Complete Guide: Maximilian Schwarzmüller](https://www.udemy.com/course/modern-react-bootcamp/learn/lecture/14638530?start=0#overview)
  * [The Beginner's Guide to React: Kent C. Dodds](https://egghead.io/courses/the-beginner-s-guide-to-react)
  * [React JS Crash Course 2021: Traversy Media](https://www.youtube.com/watch?v=w7ejDZ8SWv8)
  * [Learn React by Building an eCommerce Site: FCC](https://www.youtube.com/watch?v=1DklrGoAxDE)

# 3. What is React?

Basically, React is a frontend framework/library/whatever it is, it's pretty sweet. It was created by the folks over at Meta (Facebook).

### What does React actually do?

The main point of React is to build _components_. Components are reusable pieces of JavaScript, HTML, and CSS that are combined into one, modular component or one piece of an application. These pieces (components) can then be used to build or compose a larger application.

At the end of the day, React apps consist of a bunch of small components that are then combined and built up into larger pieces until we have an entire application.

React out of the box is less feature-rich than a framework like Angular. However, when developers write large React apps they are usually using other React-specific tools. These are things like, React Router, Redux, etc.

[⬆ Top](#table-of-contents)

# 4. Thinking in React
  * [Thinking in React: React Docs](https://reactjs.org/docs/thinking-in-react.html)
  * [5 Steps to THINK in React: codeSTACKr YouTube](https://www.youtube.com/watch?v=YJPSR9dEQV8)

### Step 1: Break The UI Into A Component Hierarchy

### Step 2: Build A Static Version in React

### Step 3: Identify The Minimal (but complete) Representation Of UI State

### Step 4: Identify Where Your State Should Live

### Step 5: Add Inverse Data Flow

[⬆ Top](#table-of-contents)

# 5. Components
  * [Components and Props: React Docs](https://reactjs.org/docs/components-and-props.html)

Components are the building blocks of React. React quite literally exists to help you create components and then have those components communicate (pass data, pass information, methods, etc.) between one another.

_"Components let you split the UI into independent, reusable pieces, and think about each piece in isolation."_ - React Docs

One of the most difficult parts of a React app is figuring out what to make a component. Components should follow the _Single Responsibility Principle_, which means a components should ideally only do one thing.

### Types of Components
  1. Class Components
  2. Function Components

### Class Components
  * Class components are the more "traditional" way of building React components
  * They write the logic in a JavaScript Class
  * They must also include a render method

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}
```

### Function Components
  * Function components are historically used for simpler "dumb" components
  * Write the logic in a JavaScript function
  * There is no render method or methods at all, just a single function that returns some content and that content will be rendered

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

### Well what's the difference?
  * Both can accept _props_ and render content
  * Historically, function components couldn't use important features like:
      * State
      * Lifecycle Methods
  * With the introduction of _Hooks_, we can now write full-featured function components

[⬆ Top](#table-of-contents)

# 6. JSX
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

ReactDOM.render(<h1>Render me!</h1>, document.getElementById('root'));
```

### Nested JSX elements
In order for the code to compile, a JSX expression must have exactly one outermost element. In the below block of code the `<a>` tag is the outermost element.
```jsx
class Account extends React.Component {
  render() {
    return (
      <a href="https://www.josephskycrest.com">
        <h1>Sign Up!</h1>
      </a>
    )
  }
}
```

### Multiline JSX Expression
A JSX expression that spans multiple lines must be wrapped in parentheses: `(` and `)`. In the example code, we see the opening parentheses on the same line as the constant declaration, before the JSX expression begins. We see the closing parentheses on the line following the end of the JSX expression.
```jsx
class List extends React.Component {
  render() {
    return (
      <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </ul>
    )
  }
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
let expr = <h1>{10 * 10}</h1>; // -> <h1>100</h1>
```

### Embedding JavaScript code in JSX
Any text between JSX tags will be read as text content, not as JavaScript. In order for the text to be read as JavaScript, the code must be embedded between curly braces `{ }`.
```jsx
<p>{ Math.random() }</p>
 
// Above JSX will be rendered something like this: 
<p>0.88</p>
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
class NumPicker extends React.Component {
  render() {
    return (
      <div>
        <h1>{num === 7 ? 'Congrats!' : 'Unlucky!'}</h1>
      </div>
    );
  }
}
```

```jsx
// Using if/else outside of JSX 'return'
class NumPicker extends React.Component {
  render() {
    let msg;

    if (num === 7) {
      msg = (
        <div>
          <h2>Congrats!</h2>
          <img src="https://media.giphy.com/media/WQr2txk5iEYUS6Kv3d/giphy.gif" />
        </div>
      );
    }
    else {
      msg = <p>Sorry you lost...</p>;
		}

    return (
      <div>
        <h1>Your number is {num}</h1>
        {msg}
      </div>
    );
  }
}
```

```jsx
// Using && operator (short circuiting)
class NumPicker extends React.Component {
  render() {
    return (
      <div>
        <h1>{num === 7 && 'Congrats!'}</h1>
      </div>
    );
  }
}
```

### JSX and conditional
In JSX, `&&` is commonly used to render an element based on a boolean condition. `&&` works best in conditionals that will sometimes do an action, but other times do nothing at all.

If the expression on the left of the `&&` evaluates as true, then the JSX on the right of the `&&` will be rendered. If the first expression is false, however, then the JSX to the right of the `&&` will be ignored and not rendered.

This is often referred to as '[short circuit conditionals](https://codeburst.io/javascript-short-circuit-conditionals-bbc13ac3e9eb)'.

Let's have a look below:
```jsx
// All of the list items will display if
// minor is false and age is greater than or equal to 21
class Yummy extends React.Component {
  render() {
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
}
```

[⬆ Top](#table-of-contents)

# 7. Looping in JSX

A very common way to loop in JSX is to use `arr.map(fn)`. Let's look at an example:

```jsx
// index.js file

class App extends React.Component {
  render() {
    return (
      <Friend
        name="Thor"
        hobbies={[ 'Smashing', 'Drinking', 'Hammering' ]}
      />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
```

In the `Friend` component file:
```jsx
// Friend.js file

class Friend extends React.Component {
  render() {
    const { name, hobbies } = this.props;
    return (
      <div>
        <h1>{name}</h1>
        <ul>{hobbies.map((h) => <li>{h}</li>)}</ul>
      </div>
    );
  }
}

// -> Thor
// -> * Smashing
// -> * Drinking
// -> * Hammering
```

Another solution could be to do this:
```jsx
// Friend.js file

class Friend extends React.Component {
  render() {
    const { name, hobbies } = this.props;
    // assign the lis logic to a variable and just call it down below
    const lis = hobbies.map((h) => <li>{h}</li>);

    return (
      <div>
        <h1>{name}</h1>
        <ul>
          {lis}
        </ul>
      </div>
    );
  }
}
```

This is a very simple example, but this pattern shows up all the time. So, in other words, some _data_ `.map` and then we're mapping it to much more complex markup or other child components.

[⬆ Top](#table-of-contents)

# 8. Simple React App Structure

```bash
├── src
│  ├── components
│  │  ├── Navbar.js
│  │  ├── Main.js
│  │  └── Footer.js
│  ├── index.js
│  └── index.html
```

Let's have a look inside each of our files to see what's going on.

### `index.html`
```html
...

  <script src="./components/Navbar.js" type="text/jsx"></script>
  <script src="./components/Main.js" type="text/jsx"></script>
  <script src="./components/Footer.js" type="text/jsx"></script>
  <script src="./index.js" type="text/jsx"></script>
<body>
```

### The Navbar component: `Navbar.js`
```jsx
// create Navbar component
class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <h2>This is a Navbar section</h2>
      </nav>
    );
  }
}
```

### The Main body component: `Main.js`
```jsx
// create Main component
class Main extends React.Component {
  render() {
    return (
      <main>
        <h2>Hello World!</h2>
      </main>
    );
  }
}
```

### The Footer component: `Footer.js`
```jsx
// create Footer component
class Footer extends React.Component {
  render() {
    return (
      <footer>
        <h2>This is a footer section</h2>
      </footer>
    );
  }
}
```

### The App component: `index.js`
```jsx
// create App component
class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Main />
        <Footer />
      </div>
    );
  }
}

// render App component
ReactDOM.render(<App />, document.getElementById('root'));

```

# 9. Properties

#### Table of Contents:
  * [What are Properties?](#What-are-Properties)
  * [Props are immutable!](#Props-are-immutable)
  * [Types of Props](#Types-of-Props)
  * [Embedding Values as Props](#Embedding-Values-as-Props)
  * [Setting Default Values for Props](#Setting-Default-Values-for-Props)

### What are Properties?

_Properties_ aka. _Props_ are really important because they allow us to make our components more customizable. A useful component is a reusable one. This often times means making it configurable or customizable.

  * Properties are for _configuring_ your component
  * Properties are _immutable_

Let's experiment with _props_. We'll first create a `Hello` component:
```jsx
class Hello extends React.Component {
  render() {
    return <h2>Hello World!</h2>;
  }
}
```

Next, we'll add a couple `Hello` components into our `App` component:
```jsx
class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Hello />
      </div>
    );
  }
}
```

Let's give our Hello components some _props_:
```jsx
class App extends React.Component {
  render() {
    return (
      <div>
        <Hello to="Katie" from="Ryan" />
        <Hello to="John" from="Paul" />
      </div>
    );
  }
}
```

To confirm this is working, inside the Hello component let's console log the props:
```jsx
class Hello extends React.Component {
  render() {
    console.log(this.props);

    return <h2>Hello World!</h2>;
  }
}

// -> Object { to: "Katie", from: "Ryan" }
// -> Object { to: "John", from: "Paul" }
```

Let's take it a step further and dynamically print us a greeting:
```jsx
class Hello extends React.Component {
  render() {
    return (
      <h2>
        Hi {this.props.to}, from {this.props.from}!
      </h2>
    );
  }
}

// this is what renders to the screen:
// -> Hi Katie, from Ryan
// -> Hi John, from Paul
```

#### _Side Note!_
In an effort to shorten the syntax a bit, some people will create a `props` variable:
```jsx
class Hello extends React.Component {
  render() {
    // shortened props variable
    const props = this.props;

    return (
      <h2>
        Hi {props.to}, from {props.from}
      </h2>
    );
  }
}
```

### Props are immutable!

Meaning, _props_ don't change and you can't change them. Now, this doesn't mean that the data in the application can't change or the components of the application can never be altered. This isn't true, we just don't do it through _props_.

Let's try and change our `to` prop from the previous example:
```jsx
class Hello extends React.Component {
  render() {
    this.props.to = 'Cathy'; // -> Error!!!

    return (
      <h2>
        Hi {this.props.to}, from {this.props.from}
      </h2>
    );
  }
}
```

### Types of Props

Properties can be _strings_:
```jsx
<User name="Katie" title="CEO" />
```

For all _other_ types, embed JS expression using curly braces:
```jsx
<div>
  <User
    name="Katie"
    salary={1000000}
    hobbies={[ 'soccer', 'farming', 'snacking' ]}
    admin={true}
    // or just
    admin // -> truthy
  />
</div>
```

### Embedding Values as Props

Let's look at another example where we call a `Movie` component in our `App` component:
```jsx
class App extends React.Component {
  render() {
    return (
      <div>
        <Movie 
          name="Star Wars" 
          reviews={5} 
        />
      </div>
    );
  }
}
```

Now, over in `Movie.js`:
```jsx
class Movie extends React.Component {
  render() {
    let reviews = '⭐️'.repeat(this.props.reviews);

    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>Rating: {reviews}</p>
      </div>
    );
  }
}

// We would then see this rendered to the browser:
// -> Star Wars
// -> Rating: ⭐️⭐️⭐️⭐️⭐️
```

Let's expand on our example a little bit more and add an `img` prop to our `Movie` component:
```jsx
class App extends React.Component {
  render() {
    return (
      <div>
        <Movie 
          name="Star Wars" 
          reviews={5}
          img="path-to-the-image"
        />
      </div>
    );
  }
}
```

Now, over in `Movie.js`:
```jsx
class Movie extends React.Component {
  render() {
    let reviews = '⭐️'.repeat(this.props.reviews);

    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>Rating: {reviews}</p>
        <img src={this.props.img} />
      </div>
    );
  }
}
```

### Setting Default Values for Props
  * [Class Properties - defaultProps: React Docs](https://reactjs.org/docs/react-component.html#class-properties-1)

Components can specify default values for missing props. Let's say we have a component and this component doesn't have any props passed in and we want to have a default value for those missing props.

All we would need to do is define an object called `defaultProps` and inside of this object we just put standard _key_ _value_ pairs.
```jsx
class CustomButton extends React.Component {
  // ...
}

CustomButton.defaultProps = {
  color: 'blue'
};
```

If `props.color` is not provided, it will be set by default to `'blue'`:
```jsx
render() {
  return <CustomButton /> ; // props.color will be set to blue
}
```

If `props.color` is set to `null`, it will remain `null`:
```jsx
render() {
  return <CustomButton color={null} /> ; // props.color will remain null
}
```

Let's look at an example with a couple of our favorite superheros:
```jsx
// index.js file

class App extends React.Component {
  render() {
    return (
      <div>
        <Superhero
          name='Thor'
          hobbies={[ 'Smashing', 'Drinking', 'Hammering' ]}
          // manually added organization prop
          organization='Marvel'
          rating={4}
        />
        <Superhero
          name='Iron Man'
          hobbies={[ 'Technology', 'Partying', 'Flying' ]}
          rating={5}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
```

Notice how in the above `App` component we do not set an `organization` for our 'Iron Man' superhero. 

Back over in our `Superhero` component let's set `organization` as a default property to the `Superhero` component:
```jsx
// Superhero.js file

class Superhero extends React.Component {
  render() {
    const { name, hobbies, rating, organization } = this.props;

    const lis = hobbies.map((h) => <li>{h}</li>);
    const stars = '⭐'.repeat(rating);

    return (
      <div>
        <h1>{name}</h1>
        <p>Organization: {organization}</p>
        <ul>{lis}</ul>
        <p>Rating: {stars}</p>
      </div>
    );
  }
}

// set default props
Superhero.defaultProps = {
  organization: 'Marvel'
};
```

We can now remove all the `organization` props from our `App` component and it will still work as expected. Pretty neat!

Setting default props can be very useful especially for things like colors for example. Often times we might want to have a default color set and the user can override the color by passing it in as a prop.

[⬆ Top](#table-of-contents)

# 10. Styling React
  * [Styling and CSS: React Docs](https://reactjs.org/docs/faq-styling.html)

In order to style our React components we need to pass in a string as the `className` prop to those component elements. Back in our Superhero example from the previous section, let's add some styles:
```jsx
// Superhero.js file

class Superhero extends React.Component {
  render() {
    const { name, hobbies } = this.props;
    const lis = hobbies.map((h) => <li>{h}</li>);

    return (
      <div className="Superhero">
        <h1 className="heading">{name}</h1>
        <ul>{lis}</ul>
      </div>
    );
  }
}
```

Now, in `app.css` we would just do something like this:
```css
/* app.css file */

.Superhero {
  border: 1px solid grey;
}
.heading {
  color: red;
}
```

And we should see a grey border around our two `Superhero` components and superhero names should be colored red.

> Note: `class` instead of `className` would work but React sends us a warning in our console and in general we want to avoid using `class` as a prop for styling since it is a reserved word.

### Inline CSS Styling

Sometimes, for whatever reason we might want to pass in inline CSS styles rather than through a text class. To achieve this we would just pass in the prop `style` and then an object:
```jsx
class Superhero extends React.Component {
  render() {
    const { name, hobbies} = this.props;
    const lis = hobbies.map((h) => <li>{h}</li>);

    return (
      <div>
        <h1 style={{ fontSize: '24px', color: 'red' }}>{name}</h1>
        <ul>{lis}</ul>
      </div>
    );
  }
}
```

Typically, if we have multiple inline styles you would just create a variable and set that equal to an object with our styles as key value pairs. Then you would just  pass the object into the `style` prop:
```jsx
class Superhero extends React.Component {
  render() {
    const { name, hobbies} = this.props;
    const lis = hobbies.map((h) => <li>{h}</li>);

    // create a variable and set it equal to an object
    const inlineStyles = {
      fontSize: '24px',
      color: 'red'
    };

    return (
      <div>
        <h1 style={inlineStyles}>{name}</h1>
        <ul>{lis}</ul>
      </div>
    );
  }
}
```

### Dynamic or Conditional Styles

inside the `App` component we can add another prop called `mortal` and this will be a boolean value:
```jsx
// index.js file

class App extends React.Component {
  render() {
    return (
      <div>
        <Superhero
          name="Thor"
          hobbies={[ 'Smashing', 'Drinking', 'Hammering' ]}
          mortal={false}
        />
        <Superhero
          name="Iron Man"
          hobbies={[ 'Technology', 'Partying', 'Flying' ]}
          mortal={true}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
```

Now, over in `app.css`, let's style our two classes:
```css
/* app.css file */

.is-mortal {
  color: green;
}
.is-not-mortal {
  color: red;
}
```

In our `Superhero` component we want to first destructure out our `mortal` prop and then add the conditional logic to our 'Mortal?' `p` tag:
```jsx
// Superhero.js file

class Superhero extends React.Component {
  render() {
    const { name, hobbies, mortal} = this.props;
    const lis = hobbies.map((h) => <li>{h}</li>);

    return (
      <div>
        <h1>{name}</h1>
        <ul>{lis}</ul>
        <p className={mortal ? 'is-mortal' : 'is-not-mortal'}>Mortal?</p>
      </div>
    );
  }
}
```

What the conditional above is saying is, if `mortal` is `true`, `className` will be equal to `is-mortal` and give our 'Mortal?' text the color of `'green'`. And if mortal is false, `className` will be equal to `is-not-mortal` and give the text the color of `'red'`.

Again, another solution would be to create a new variable and assign the conditional logic to that variable and then just call the variable down below:
```jsx
// Superhero.js file

class Superhero extends React.Component {
  render() {
    const { name, hobbies, mortal} = this.props;
    const lis = hobbies.map((h) => <li>{h}</li>);

    // conditional logic
    const isMortal = mortal ? 'success' : 'failure';

    return (
      <div>
        <h1>{name}</h1>
        <ul>{lis}</ul>
        <p className={isMortal}>Mortal?</p>
      </div>
    );
  }
}
```

This would work just fine as well. We can use either method, whichever you prefer.

[⬆ Top](#table-of-contents)

# 11. Create React App
  * [Create React App: CRA.dev](https://create-react-app.dev/)

#### Table of Contents:
  * [11.1 Installation](#111-Installation)
  * [11.2 Webpack](#112-Webpack)
  * [11.3 Modules: Import and Export](#113-Modules-Import-and-Export)
  * [11.4 Conventions](#114-Conventions)
  * [11.5 CSS and Assets](#115-CSS-and-Assets)

__Create-React-App__ (CRA) is a utility script that:
  * Creates a skeleton react project with a bunch of files and folders already there for you
  * Sets it up so that the JavaScript files are run through Babel automatically
  * Lets us use super-modern JavaScript features/idioms
  * Makes testing and deployment much easier

### 11.1 Installation

#### Quick Start
```bash
npx create-react-app my-app
cd my-app
npm start
```

#### Scripts
Inside the newly created project, you can run some built-in commands:
```bash
npm start
# or
yarn start
```

This will run the app in development mode. Open `http://localhost:3000` to view it in the browser.

```bash
npm test
# or
yarn test
```

This will run the test watcher in an interactive mode. By default, runs tests related to files changed since the last commit.
  * [Read more about running tests](https://create-react-app.dev/docs/running-tests/)

```bash
npm run build
# or
yarn run build
```

This will build the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. The app is now ready to be deployed.

### 11.2 Webpack

__Create React App__ is built on top of [Webpack](https://webpack.js.org/), a JavaScript utility that:
  * Enables modules to be imported and exported, basically it makes it extremely easy to reference files and assets in other files
    * Packages up all our CSS/JavaScript/images into a single file and minified for the browser
    * Dramatically reduces the number of HTTP requests for performance
  * Hot reloading: when you change a source file the browser automatically reloads (like nodemon)
  * Enables easy testing and deployment

Webpack is not so beginner friendly and requires a lot of configuring and setup but out of the box React handles that for us.

### 11.3 Modules: Import and Export
  * [Importing a Component: CRA Docs](https://create-react-app.dev/docs/importing-a-component/)

__Create React App__ uses ES2015 "modules". This is a newer, standardized version of Node's `require()`. We use modules to export/import classes/data/functions between JavaScript files.

Let's break down a CRA index.js file
```jsx
// these files are modules and are coming from the node_modules folder
import React from 'react';
import ReactDOM from 'react-dom';
// this imports our main css file
import './index.css';
// this imports our App.js file modules
import App from './App';
// don't know
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. 
// Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

#### Simple Example:

```bash
├── src
│  ├── index.js
│  └── helpers.js
```

`index.js`: _Invoke_
```jsx
// import current directory; helpers.js file
import hereToHelp from './helpers';

// invoke helpful function logic
hereToHelp();

// Expected output:
// -> I'm a helper!
```

`helpers.js`: _Logic_
```jsx
const helpful = () => {
  console.log("I'm a helper!");
};

// export default 'helpful' function to be used elsewhere
// default signifies that when you import the entire file,
// the default thing to be exported is 'helpful'
export default helpful;
```

#### Export/Import Multiple:

From the previous example:

`index.js`: _Invoke_
```jsx
import { helpful, sort, filter } from './helpers';

helpful();
sort();
filter();

// -> I'm a helper!
// -> All sorted.
// -> All filtered.
```

`helpers.js`: _Logic_
```jsx
const helpful = () => {
  console.log("I'm a helper!");
};

const sort = () => {
  console.log('All sorted.');
};

const filter = () => {
  console.log('All filtered.');
};

export { helpful, sort, filter };
```

#### Export/Import Default and Multiple:

`index.js`: _Invoke_
```jsx
import helpful, { sort, filter } from './helpers';

helpful();
sort();
filter();
```

`helpers.js`: _Logic_
```jsx
const helpful = () => {
  console.log("I'm a helper!");
};

const sort = () => {
  console.log('All sorted.');
};

const filter = () => {
  console.log('All filtered.');
};

export default helpful;
export { sort, filter };
```

#### Export/Import Components:

Let's look at a very common way in which React components are imported:

`index.js`: _Invoke_
```jsx
import React, { Component } from 'react';

// ...
```

This line of code is at the top of every component we write. What this code is doing is, importing the _default_ from `react` and also importing `Component`.

> You MUST export and import or else your console is going to have a bad time. It's a two-way street. Yin and Yang if you will.

#### To Default or to Not Default?

Conventionally, _default_ exports are used when there's an obvious candidate, a "most likely" item to export out of that file.

When we're writing our components there's usually just one single thing we're exporting and then importing. This could be a _Navbar_ or _Footer_, etc.

For example, in a React component file, it's common to have the component be the default export. Also, you never _need_ to make a _default_ export, but it __can be helpful to indicate__ the most important item in a file.

### 11.4 Conventions

Good style:
  * Each React component should be in it's own file
    * `src/Car.js` for a `Car` component
    * `src/House.js` for a `House` component
    * The name of the file should _always_ match the name of the component in that file
  * All components should extend(s) _Component_ (imported from React)
    * Export the component as the _default_ object from that file
  * CRA skeleton assumes the top object is `App` in `App.js` (best to keep this)

### 11.5 CSS and Assets

To include images and CSS, they can be imported into JavaScript files.
```jsx
// App.js file

import logo from './logo.svg';
import './App.css';

function App() {
// ..
```

#### CSS

Good style:
  * make a CSS file for each React component
    * `House.css` would be for the `House` component
  * Component CSS file gets imported at the top of the equivalent JavaScript component file
    * `House.css` imported at the top of `House.js` component
  * Conventional to set the class name equal to the component main `div`
    * `className='House'` on the `House` div
    * This is then used as a prefix for sub-items to style

> If we ever forget how to import CSS or images, we can always just reference the CRA App.js file.

```jsx
<div className='House'>
  <h1 className='House-title'>{ this.props.title }</h1>
  <p className='House-address'>{ this.props.addr }</p>
</div>
```

[⬆ Top](#table-of-contents)

# 12. State

[⬆ Top](#table-of-contents)

# 13. State vs. Props
  * [React State vs. Props: Web Dev Simplified](https://www.youtube.com/watch?v=IYvD9oBCuJI)
  * [Props vs. State: uberVU React Guide](https://github.com/uberVU/react-guide/blob/master/props-vs-state.md)

React shines in it's ability to manage the data and properly re-render the application when that data changes. There are two main ways in React to think about data: _State_ and _Props_. Another challenging part of React is understanding when to use _Props_ and when to use _State_ inside of an application.

_"props (short for “properties”) and state are both plain JavaScript objects. While both hold information that influences the output of render, they are different in one important way: props get passed to the component (similar to function parameters) whereas state is managed within the component (similar to variables declared within a function)."_ - React Docs

Let's break this down.

#### When do you use State vs. Props?

One of the main reasons why developers get confused about when to use _state_ vs. _props_ is they don't properly think about which one is going to be handled by the component they're interacting with. 
  * If you are handling that piece of information _inside_ that component and not somewhere outside of it (like a parent component) then you would use _state_
  * If the information is being handled _outside_ the component (like in a parent component) then you would pass it in via _props_
  * If the information is static and not going to change, like for example if inside the component you will never need to update the title of that display section, you would want to use _props_ because props are for things that are going to be passed down from the parent and don't change inside the component

### Props

_props_ are a Component's configuration, its options if you may. They are received from above and __immutable__ (an object whose state cannot be modified after it is created) as far as the Component receiving them is concerned. 

A Component cannot change its _props_, but it is responsible for putting together the _props_ of its child Components. We can think about _props_ as arguments to a function. When you create a component inside of React and you want to render that component, you're going to pass the _props_ you want to give to it.

#### Props Example

Let's say we have a counter application. What you will most likely pass to that counter is going to be the initial count. To achieve this, we're going to pass the counter component it's initial count inside of the _props_.

The reason we're using _props_ for this is because _props_ are for things that you pass to a function. They're what you want to initialize your component to or what you want your component to render like.

Another example of when to use _props_ is, if we were to display something to the user that has a title and a subtitle you're going to also store that in the _props_. This is because, what we want our function or component to actual receive are the _props_ and in our case our component is storing a title and a subtitle so we're passing those through the props. 

Our application then knows if those props change at any point. So if something external in our application changes the props, React will re-render that component automatically for you.

_State_ on the other hand is quite different. _State_ is contained inside of a component.

### State

The state starts with a default value when a Component mounts and then __suffers from mutations in time (mostly generated from user events)__. It's a snapshot of one point in time.

_State_ is managed within the component (similar to variables declared within a function). _State_ in _React Component_ is its own local state, which means the state cannot be accessed and modified outside the component and can only be used inside it, kind of like a function with it's own local scope.

#### State Example

Back in our counter application, the current up-to-date count is handled inside of the _state_. So, while we pass in the initial count inside of the _props_ we're immediately setting our _state_ to that initial count. Then, inside of the component that's handling our counter we manage updating our counter to increase or decrease it depending on what the user does and we're using _state_ for this.

Now, in the title and subtitle component example, this component will most likely not have any _state_ since it's only rendering some simple text and this text is never going to change.

#### Do all Component's need to have state?

_state_ is optional. Since _state_ increases complexity and reduces predictability, a Component without _state_ is preferable. Even though you clearly can't do without _state_ in an interactive app, you should avoid having too many "Stateful Components".

### Component types
  * __Stateless Component__ — Only _props_, no _state_. There's not much going on besides the `render()` function and all their logic revolves around the _props_ they receive. This makes them very easy to follow (and test for that matter). We sometimes call these dumb-as-f*ck Components (which turns out to be the only way to misuse the F-word in the English language).
  * __Stateful Component__ — Both _props_ and _state_. We also call these _state_ managers. They are in charge of client-server communication (XHR, web sockets, etc.), processing data and responding to user events. These sort of logistics should be encapsulated in a moderate number of "Stateful Components", while all visualization and formatting logic should move downstream into as many "Stateless Components" as possible.

### Main Takeaways:
  1. _Props_ are __handled__ _outside_ the component and must be __updated__ _outside_ the component
  2. _State_ is __handled__ _inside_ the component and can be __updated__ _inside_ the component
  3. When the _state_ of the component changes React is going to re-render that component or section of the application
  4. With _props_ you can't actually change them, they need to be changed outside of the component

[⬆ Top](#table-of-contents)

# Contributing
Contributions are always welcome! All I ask is that you open an issue and we discuss your proposed changes before you create a pull request.

[⬆ Top](#table-of-contents)