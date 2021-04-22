class ControllerUserProfile {
    constructor({name, email, password}) {      
        this.name = name
        this.email = email
        this.password = password
    }

    save() {
        let UserProfile = require("../Models/UserProfile")

        UserProfile = new UserProfile({
            name:this.name,
            email:this.email,
            password:this.password
        })
        
        return UserProfile.save().then(doc => {
           return doc
        })     
    }
}
                    
module.exports = ControllerUserProfile;