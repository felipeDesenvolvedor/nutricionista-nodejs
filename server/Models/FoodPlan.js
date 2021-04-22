const mongoose = require("mongoose")

const FoodPlanSchema = new mongoose.Schema({

})

const FoodPlan = mongoose.model("FoodPlan", FoodPlanSchema)

mongoose.connect("mongodb://localhost/OrangeNutri", {
    useNewUrlParser:true,
    useUnifiedTopology:true  
})

let db = mongoose.connection;

db.on("error", () => {console.log("houve um erro")})
db.on("open", () => {console.log("Banco carregado")})

module.exports = FoodPlan