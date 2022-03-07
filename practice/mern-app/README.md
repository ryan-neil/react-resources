# MERN App

### Resources

- [MERN Tutorial:](https://www.youtube.com/watch?v=I7EDAR2GRVo) PedroTech
- [Learn The MERN Stack:](https://www.youtube.com/watch?v=-0exw-9YJBo&t=199s) Traversy Media
- [React Front To Back 2022:](https://www.udemy.com/course/react-front-to-back-2022/) Traversy Media

## Setup

```bash
├── client
│  └── react app
├── server
│  └── express app
└── README.md
```

### Initial Express application (server):

In the root folder:

```bash
cd server
npm init -y
```

### Install packages:

```bash
npm install express mongoose cors nodemon
```

`express`- Framework to build API
`mongoose`- Used to communicate with our MongoDB database (easy database queries)
`cors`- Crucial for connecting our React app with our backend
`nodemon`- Allows for faster development (automatic server restarts on save)

### Creating our files:

`server/index.js` - the entry point of our API

```js
const express = require('express');
const app = express();

// DJ, spin that sh*t...
const PORT = 3001;
app.listen(PORT, () => console.log(`App is running at: http://localhost:${PORT}`));
```

`server/models/Users.js` - files that represent different collections that we have in our database
