const logger = require("../util/logger")
module.exports = (res,data,status=200)=>{
    logger.info({
        status_code:status,
        message:data,
    })
    return res.status(status).json({
        item:data,
        status_code:status
    })
}