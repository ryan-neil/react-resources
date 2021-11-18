# React Resources
<p align="center">
  <img src="./assets/react-header.png" width="550">
</p>

React is a JavaScript _library_ for creating user interfaces. It was created by the folks over at Meta (Facebook).

### Table of Contents
  1. [Resources](#1-Resources)
  2. [Tutorials](#2-Tutorials)
  3. [What is React?](#3-What-is-React)
  4. [Thinking in React](#4-Thinking-in-React)
  5. [Components](#5-Components)
  6. [JSX](#6-JSX)
  7. [State vs. Props](#7-State-vs-Props)

# 1. Resources
  * [React Docs (Beta)](https://beta.reactjs.org/)
  * [Thinking in React: React Docs](https://reactjs.org/docs/thinking-in-react.html)
  * [React Cheat sheet (Updated June 2021)](https://dev.to/ericchapman/react-cheat-sheet-updated-may-2021-1mcd)

# 2. Tutorials
  * [The Modern React Bootcamp: Colt Steele](https://www.udemy.com/course/modern-react-bootcamp/learn/lecture/14638530?start=0#overview)
  * [React - The Complete Guide: Maximilian Schwarzmüller](https://www.udemy.com/course/modern-react-bootcamp/learn/lecture/14638530?start=0#overview)
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
// create class component
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}

// render class component
ReactDOM.render(<Welcome />, document.getElementById('root'));
```

### Function Components
  * Function components are historically used for simpler "dumb" components
  * Write the logic in a JavaScript function
  * There is no render method or methods at all, just a single function that returns some content and that content will be rendered

```jsx
// create functional component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// render functional component
ReactDOM.render(<Welcome />, document.getElementById('root'));
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

JSX stands for JavaScript Syntax Extension or JavaScript plus XML (depending on who you ask). What JSX does is essentially it allows us to combine our UI with our JavaScript logic directly in our JavaScript file. 

So rather than having to use a separate template file in HTML that we then call upon in our JavaScript, we can look at a single component and directly see what it is actually doing.

> Behind the scenes, Babel is doing a lot of heavy lifting for us to convert those HTML characters into valid JavaScript.

### The Rules
JSX is much more strict that HTML, elements must either:
  * Have an explicit closing tag: `<h1> ... </h1>`
  * Be explicitly self-closed: `<input name="msb" />`
    * Note: you cannot leave off the `/` or else we get a syntax error

[⬆ Top](#table-of-contents)

# 7. State vs. Props
  * [React State vs. Props: Web Dev Simplified](https://www.youtube.com/watch?v=IYvD9oBCuJI)
  * [Props vs. State: uberVU React Guide](https://github.com/uberVU/react-guide/blob/master/props-vs-state.md)

React shines in it's ability to manage the data and properly re-render the application when that data changes. There are two main ways in React to think about data: _State_ and _Props_. Another challenging part of React is understanding when to use _Props_ and when to use _State_ inside of an application.

_"props (short for “properties”) and state are both plain JavaScript objects. While both hold information that influences the output of render, they are different in one important way: props get passed to the component (similar to function parameters) whereas state is managed within the component (similar to variables declared within a function)."_ - React Docs

Let's break this down.

#### When do you use State vs. Props?

One of the main reasons why developers get confused about when to use _state_ vs. _props_ is they don't properly think about which one is going to be handled by the component they're interacting with. 
  * If you are handling that piece of information _inside_ that component and not somewhere outside of it (like a parent component) then you would use _state_
  * If the information (data) is being handled _outside_ the component (like in a parent component) then you would pass it in via _props_
  * If the information (data) is static and not going to change, like for example if inside the component you will never need to update the title of that display section, you would want to use _props_ because props are for things that are going to be passed down from the parent and don't change inside the component

### Props

_props_ are a Component's configuration, its options if you may. They are received from above and __immutable__ (an object whose state cannot be modified after it is created) as far as the Component receiving them is concerned. 

A Component cannot change its _props_, but it is responsible for putting together the _props_ of its child Components. We can think about _props_ as arguments to a function. When you create a component inside of React and you want to render that component, you're going to pass the _props_ you want to give to it.

### Props Example

Let's say we have a counter application. What you will most likely pass to that counter is going to be the initial count. To achieve this, we're going to pass the counter component it's initial count inside of the _props_.

The reason we're using _props_ for this is because _props_ are for things that you pass to a function. They're what you want to initialize your component to or what you want your component to render like.

Another example of when to use _props_ is, if we were to display something to the user that has a title and a subtitle you're going to also store that in the _props_. This is because, what we want our function or component to actual receive are the _props_ and in our case our component is storing a title and a subtitle so we're passing those through the props. 

Our application then knows if those props change at any point. So if something external in our application changes the props, React will re-render that component automatically for you.

_State_ on the other hand is quite different. _State_ is contained inside of a component.

### State

The state starts with a default value when a Component mounts and then __suffers from mutations in time (mostly generated from user events)__. It's a snapshot of one point in time.

_State_ is managed within the component (similar to variables declared within a function). _State_ in _React Component_ is its own local state, which means the state cannot be accessed and modified outside the component and can only be used inside it, kind of like a function with it's own local scope.

### State Example

Back in our counter application, the current up-to-date count is handled inside of the _state_. So, while we pass in the initial count inside of the _props_ we're immediately setting our _state_ to that initial count. Then, inside of the component that's handling our counter we manage updating our counter to increase or decrease it depending on what the user does and we're using _state_ for this.

Now, in the title and subtitle component example, this component will most likely not have any _state_ since it's only rendering some simple text and this text is never going to change.

#### Do all Component's need to have state?

_state_ is optional. Since _state_ increases complexity and reduces predictability, a Component without _state_ is preferable. Even though you clearly can't do without _state_ in an interactive app, you should avoid having too many "Stateful Components".

#### Component types
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