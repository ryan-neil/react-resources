# Superhero App (Training)

### What we will be building:

Basically all this mini app does is take data objects, in the form of superheros from a mock backend, and displays them to the page. The hero objects being displayed will show a checkbox, their *name*, and their special *ability*. 

The user will have the ability to search for a hero, toggle a checkbox next to the hero, edit the hero, delete the hero, and add a new hero to the page via the Add page.

This project will incorporate many modern application functionalities that we see and use everyday. Let's have a look at some of the features that this training project uses:
  * "React Router DOM" for app page management
  * Fetching data from a mock backend database (json-server)
  * Standard React Hooks (`useState`, `useEffect`, `useContext`)
  * Custom hooks (`useFetch`)
  * Basic and advanced "CRUD" operations
  * Search functionality

## 🟢 Part 1: Basic

### 🛠 Features:
  * React Router DOM for page management
  * Data fetching
  * Introduce standard React hooks as well as custom hooks
  * Add *Create*, *Read*, and *Delete* operations logic
  * Search functionality

We will use [JSON Server](https://www.npmjs.com/package/json-server) which will allow us to run a mock backend REST API:
```bash
npx json-server -p 9001 -w src/data/db.json
```

`data/db.json`:
```json
{
  "heros": [
    {
      "id": 1,
      "name": "Thor",
      "ability": "Strength",
      "checked": true
    },
    {
      "id": 2,
      "name": "Iron Man",
      "ability": "Intelligence",
      "checked": true
    },
    {
      "id": 3,
      "name": "The Hulk",
      "ability": "Strength",
      "checked": false
    },
    {
      "id": 4,
      "name": "Captain America",
      "ability": "Team Work",
      "checked": false
    },
    {
      "id": 5,
      "name": "Doctor Strange",
      "ability": "Magic",
      "checked": true
    }
  ]
}
```

### 💭 Solution:

```bash
├── data
│  └── db.json
├── public
├── src
│  ├── api
│  │  └── apiRequest.js
│  ├── components
│  │  ├── Header.jsx
│  │  ├── Search.jsx
│  │  ├── HeroList.jsx
│  │  ├── HeroListItem.jsx
│  │  ├── Empty.jsx
│  │  └── Footer.jsx
│  ├── hooks
│  │  └── useFetch.js
│  ├── pages
│  │  ├── Home.js
│  │  ├── Add.js
│  │  └── Missing.js
│  ├── App.js
│  ├── index.css
│  └── index.js
```

## 🟡 Part 2: Intermediate

### 🛠 Features:
  * Add *Update* (edit) operation logic
  * Incorporate `useContext` hook for state/props management

### 💭 Solution:

```bash
├── data
│  └── db.json
├── public
├── src
│  ├── api
│  │  └── apiRequest.js
│  ├── components
│  │  ├── Header.jsx
│  │  ├── Search.jsx
│  │  ├── HeroList.jsx
│  │  ├── HeroListItem.jsx
│  │  ├── Empty.jsx
│  │  └── Footer.jsx
│  ├── context
│  │  └── DataContext.js
│  ├── hooks
│  │  └── useFetch.js
│  ├── pages
│  │  ├── Home.js
│  │  ├── Add.js
│  │  ├── Edit.js
│  │  └── Missing.js
│  ├── App.js
│  ├── index.css
│  └── index.js
```