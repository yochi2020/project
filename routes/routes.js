const router = require("express").Router()

router.use("/demo",require("./demoRoute"))
router.use("/providers",require("./providersRoute"))

module.exports = router