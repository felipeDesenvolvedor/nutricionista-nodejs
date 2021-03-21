const express = require('express');
const {pacienteFindAll} = require("./Paciente");
const routes = express.Router();

routes.get('/', (req, res) => {
    pacienteFindAll()
    .then(paciente => {
        return paciente
    })
    .then(response => {
        return res.json(response)
    })
})

module.exports = routes;