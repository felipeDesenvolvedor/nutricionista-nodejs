const {sequelize, DataTypes, Model} = require('./db')

const Paciente = sequelize.define("paciente", {
    status:DataTypes.INTEGER,
    nome: DataTypes.TEXT,
    cpf:DataTypes.TEXT,
    rg:DataTypes.TEXT,
    dataNascimento:DataTypes.TEXT,
    sexo:DataTypes.TEXT,
    responsavel:DataTypes.TEXT,
    cpfResponsavel:DataTypes.TEXT,
    telefone1:DataTypes.TEXT,
    telefone2:DataTypes.TEXT,
    email:DataTypes.TEXT,
    caminhoDaFoto:DataTypes.TEXT
  },{
    freezeTableName: true,
    tableName: 'paciente'
  });


const pacienteFindAll = () => Paciente.findAll()

module.exports = {pacienteFindAll}