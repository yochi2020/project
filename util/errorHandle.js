const logger = require("./logger");
module.exports = (err, req, res, next) => {
  const statusCode = err.statusCode || 400;
  logger.error({
    statuscode: statusCode,
    message: err.message,
    validation: err.validation,
  });
  res.status(statusCode).json({
    error: {
      statusCode: statusCode,
      message: err.message,
      validation: err.validation,
    },
  });
};
