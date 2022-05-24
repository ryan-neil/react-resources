const express = require('express');
const app = express();
const env = require('./config/env');
const errorHandler = require('./middleware/errorHandler');
const PORT = env.PORT || 9001;

// middleware
app.use(express.json()); // handle json data

// routes
app.use('/api/tasks', require('./routes/tasks'));

// error middleware
app.use(errorHandler);

// DJ, spin that sh*t...
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
