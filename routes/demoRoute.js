const router = require("express")();
const result = require("../util/result");


router.post("/upload", async(req, res) => {
    result(res,"upload")
});

module.exports = router;
