const express = require('express');
const {UserProfileFindAll, UserProfileSave, UserProfileFindId, UserProfileUpdate, MetabolismSave, MetabolismDelete} = require("./Models");
const { response } = require('express');
const routes = express.Router();


// User Profile
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


// Metabolism
routes.route('/metabolism/:id')
.delete((req, res) => {
    const {id} = req.params

    MetabolismDelete(id)
})


routes.post('/metabolism', (req, res) => {
    const {sexo, idade, peso, altura, nivelAtividade, idUserProfile, metabolismBasal, keepTheWeight, loseWeight, gainWeight} = req.body

    MetabolismSave({sexo, idade, peso, altura, nivelAtividade, idUserProfile, metabolismBasal, keepTheWeight, loseWeight, gainWeight})

})

module.exports = routes;