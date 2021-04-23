const express = require('express');
let ControllerUserProfile = require("./Controller/ControllerUserProfile")
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
    
    controllerUserProfile = new ControllerUserProfile({name, email, password})

    controllerUserProfile.update(id)
    .then(updated => {
        res.json({updated:updated})
    })
    .catch(erro => {
        res.json({erro})
    })
})
.delete((req, res) => {
    const {id} = req.params

    controllerUserProfile = new ControllerUserProfile({})

    controllerUserProfile.delete(id)
    .then(updated => {
        res.json({updated:updated})
    })
    .catch(erro => {
        res.json({erro})
    })
})

routes.post('/userprofile', (req, res) => {
    const {name, email, password} = req.body
    
    controllerUserProfile = new ControllerUserProfile({name, email, password})

    controllerUserProfile.save()
    .then(user => {
        res.json({id: user})
    })
    .catch(erro => {
        res.json({erro})
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