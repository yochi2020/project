const config = require('../config/index')
const result = require("../util/result")
const jwt = require("jsonwebtoken")
const util = require("../util/index")
exports.loginController=async (req,res,next)=>{
    try {
        const {username,password} = req.body
        // const user  = await User.findOne({username:username})
        // if(!user){
        //     const error = new Error('ไม่พบผู้ใช้งานในระบบ')
        //     error.statusCode=404;
        //     throw error
        // }
        // const checkPassword = util.checkPassword("1aa","1aa")
        // if(checkPassword){
        //     const error = new Error('รหัสผ่านไม่ถูกต้อง')
        //     error.statusCode=404
        //     throw error
        // }
        const token = await jwt.sign(
            {
              id: "",
              username: "",
              e_mail: "",
            },
            config.JWT_SECRET,
            { expiresIn: "3h" }
          );
          const expires_in = jwt.decode(token);
        
          const data = {
            access_token: token,
            expires_in: expires_in.exp,
          };
        result(res,data)
    } catch (error) {
        next(error)
    }
}

exports.register=async(req,res,next)=>{
    try {
        result(res,"Register")
    } catch (error) {
        next(error)
    }
}