const express = require('express');
const app = express();
const routes = require('./routes');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use(routes);

const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Server on port ${port}`);