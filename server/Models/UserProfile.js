const mongoose = require("mongoose")

const UserProfileSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const UserProfile = mongoose.model('UserProfile', UserProfileSchema)

mongoose.connect("mongodb://localhost/OrangeNutri", {
    useNewUrlParser:true,
    useUnifiedTopology:true
})

let db = mongoose.connection;

db.on("error", () => {console.log("houve um erro")})
db.on("open", () => {console.log("Banco carregado")})

module.exports = UserProfile;