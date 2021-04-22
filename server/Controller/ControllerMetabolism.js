class ControllerMetabolism {
    constructor ({sexo, idade, peso, altura, nivelAtividade, idUserProfile}) {
        this.sexo = sexo 
        this.idade = idade 
        this.peso = peso 
        this.altura = altura 
        this.nivelAtividade = nivelAtividade

        this.metabolismBasal = "500"
        this.keepTheWeight = "2000"
        this.loseWeight = "2000"
        this.gainWeight = ""

        this.idUserProfile = idUserProfile
    }

    save() {
        let Metabolism = require("../Models/Metabolism")

        Metabolism = new Metabolism({
                sexo : this.sexo, 
                idade : this.idade, 
                peso : this.peso, 
                altura : this.altura, 
                nivelAtividade : this.nivelAtividade,
                metabolismBasal : this.metabolismBasal,
                keepTheWeight : this.keepTheWeight,
                loseWeight : this.loseWeight,
                gainWeight : this.gainWeight,
                idUserProfile : this.idUserProfile
        })

        Metabolism.save().then(doc => {
            console.log(doc)
        })
    }
}

module.exports = ControllerMetabolism