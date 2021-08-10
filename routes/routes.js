const router = require("express").Router()

router.use("/providers",require("./providersRoute"))

module.exports = router