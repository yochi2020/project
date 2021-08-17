const models = require("../database/models");
const util = require("../util/index");


exports.findUserByUsername = async (username)=>{
    const findUsername =await models.User.findOne({
        where: { username: username },
      });
    return findUsername
}

exports.createUser = async (data)=>{
    const newPassword =await  util.encryptPassword(data.password)
    const createUser =await  models.User.create({
      username:data.username,
      password:newPassword,
      role:3,
    });
    return createUser
}