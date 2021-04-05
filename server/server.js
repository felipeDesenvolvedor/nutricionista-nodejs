const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(routes);

app.listen(3001)

//https://qastack.com.br/software/163506/how-does-one-handle-sensitive-data-when-using-github-and-heroku