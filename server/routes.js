const express = require('express');
const {pacienteFindAll} = require("./UserProfile");
const routes = express.Router();

routes.get('/', (req, res) => {
    // pacienteFindAll()
    // .then(paciente => {
    //     return paciente
    // })
    // .then(response => {
    //     return res.json(response)
    // })
})


routes.route('/userprofile/:id')
.get((req, res) => {
    res.json({"id":req.params.id})
})
.put((req, res) => {
    res.json({"id":req.params.id})
})
.delete((req, res) => {
    res.json({"id":req.params.id})
})

routes.post('/userprofile', (req, res) => {
    res.json(req.body)
})


module.exports = routes;