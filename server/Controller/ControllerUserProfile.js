class ControllerUserProfile {
    constructor({name = "", email = "", password = ""}) {      
        this.name = name
        this.email = email
        this.password = password
    }

    save() {
        let UserProfile = require("../Models/UserProfile")

        let fieldsdEmpty = this.checkFields(this.name, this.email, this.password)

        if(fieldsdEmpty) {
            return new Promise((resolve, reject) => {
                reject(fieldsdEmpty)
            })
        }

        UserProfile = new UserProfile({
            name:this.name,
            email:this.email,
            password:this.password
        })
        
        return UserProfile.save().then(doc => {
           return doc
        })     
    }

    update(id) {
        let UserProfile = require("../Models/UserProfile")

        let fieldsdEmpty = this.checkFields(this.name, this.email, this.password)

        if(fieldsdEmpty) {
            return new Promise((resolve, reject) => {
                reject(fieldsdEmpty)
            })
        }

        return UserProfile.updateOne({_id:id}, {$set:{name:this.name, email:this.email, password:this.password}}).then(doc => {
            return doc
        })
    }

    delete(id) {
        let UserProfile = require("../Models/UserProfile")

        if(id.length != 24) {
            return new Promise((resolve, reject) => {
                reject("Informe um id para deletar !!")
            })
        }

        return UserProfile.deleteOne({_id:id}).then(doc => {
            return doc
        })
    }

    checkFields(name, email, password) {
        if(!name || !email || !password) {
           return "Não podem haver campos vazios !!!"
        }
    }
}
                    
module.exports = ControllerUserProfile;