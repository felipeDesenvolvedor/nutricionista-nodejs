const mongoose = require("mongoose")

const MetabolismSchema = new mongoose.Schema({
    sexo:String,
    idade:String,
    peso:String,
    altura:String,
    nivelAtividade:String,
    metabolismBasal:String,
    keepTheWeight:String,
    loseWeight:String,
    gainWeight:String,
    idUserProfile:String
})

const Metabolism = mongoose.model('Metabolism', MetabolismSchema)

mongoose.connect("mongodb://localhost/OrangeNutri", {
    useNewUrlParser:true,
    useUnifiedTopology:true
})

let db = mongoose.connection;

db.on("error", () => {console.log("houve um erro")})
db.on("open", () => {console.log("Banco carregado")})

module.exports = Metabolism