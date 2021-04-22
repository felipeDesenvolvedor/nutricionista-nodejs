const ControllerUserProfile = require("./Controller/ControllerUserProfile")
const ControllerMetabolism = require("./Controller/ControllerMetabolism")

let userProfile = new ControllerUserProfile({name:"Juliana", email:"juliana.zago@gmail.com", password:"123456"})
    userProfile.save().then( doc => {
        let controllerMetabolism = new ControllerMetabolism({sexo:"Masculino", idade:"22",peso:"68.999", altura:"1.80", nivelAtividade:"moderado", idUserProfile:doc.id})

        controllerMetabolism.save()
    })
