const router = require("express")()
const userController = require("../controllers/userController")

router.get("/login",userController.loginController)
router.post("/register",userController.register)

module.exports =router