const express = require('express');
const {UserProfileFindAll, UserProfileSave, UserProfileFindId, UserProfileUpdate} = require("./UserProfile");
const { response } = require('express');
const routes = express.Router();

routes.get('/userprofile', (req, res) => {
    UserProfileFindAll()
    .then(paciente => {
        return paciente
    })
    .then(response => {
        return res.json(response)
    })
})

routes.route('/userprofile/:id')
.get((req, res) => {
    UserProfileFindId(req.params.id)
    .then(user => user)
    .then(response => {
        return res.json(response)
    })
})
.put((req, res) => {
    const {name, email, password} = req.body
    const {id} = req.params
    
    UserProfileUpdate({id, name, email, password})
    .then(updated => {
        res.json({updated:updated})
    })
})
.delete((req, res) => {
    res.json({"id":req.params.id})
})

routes.post('/userprofile', (req, res) => {
    const {name, email, password} = req.body
    
    UserProfileSave({name, email, password})
    .then(user => {
        res.json({id: user})
    })
})


module.exports = routes;