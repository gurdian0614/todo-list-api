const express = require('express');
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Server on port ${port}`);