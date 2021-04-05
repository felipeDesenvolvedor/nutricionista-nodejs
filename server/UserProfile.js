const {sequelize, DataTypes, Model} = require('./db')

const UserProfile = sequelize.define("UserProfile", {
    name: DataTypes.TEXT,
    email:DataTypes.TEXT,
    password:DataTypes.TEXT,
    createdAt:DataTypes.DATE,
    updatedAt:DataTypes.DATE
  },{
    freezeTableName: true,
    tableName: 'UserProfile'
  });


const UserProfileSave = ({name, email, password}) => {
  return UserProfile.create({name, email, password})
  .then(user => user.id)
}

const UserProfileUpdate = ({id, name, email, password}) => {
  
  return UserProfile.update({name, email, password}, {
    where: {
      id:id
    }
  })
  .then(updated => updated)
}

const UserProfileFindId = id => {
  const user = UserProfile.findAll({  
    where: {
      id
    }
  })

  return user
}

const UserProfileFindAll = () => UserProfile.findAll()

module.exports = {UserProfileFindAll, UserProfileSave, UserProfileFindId, UserProfileUpdate}