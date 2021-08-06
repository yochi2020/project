const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
//เข้ารหัส
exports.encryptPassword=async (password)=>{
    const salt =await bcrypt.genSalt(11)
    const hashPassword =await  bcrypt.hash(password,salt)
    return hashPassword
}

//ถอดรหัส
exports.checkPassword = async (password,passwordDB)=>{
    const isValid = await bcrypt.compare(password,passwordDB)
    return isValid
}