const {sequelize, DataTypes, Model} = require('./db')

const UserProfile = sequelize.define("UserProfile", {
    name: DataTypes.TEXT,
    email:DataTypes.TEXT,
    password:DataTypes.TEXT
  },{
    freezeTableName: true,
    tableName: 'UserProfile'
  });


const UserProfileSave = () => {
  
}  

const UserProfileFindAll = () => UserProfile.findAll()

module.exports = {UserProfileFindAll}