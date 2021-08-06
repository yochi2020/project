const { createLogger, format, transports } = require("winston");

module.exports = createLogger({
  transports: [
    new transports.File({
      format: format.combine(
          format.timestamp({format:"DD-MM-YYYY HH:mm:ss"}),
          format.simple(),
          format.printf(info=>`[ ${info.timestamp} ] :  ${info.level} ${info.message}`)
          ),
      level: "error",
      filename: `${__dirname}/../log/error.log`,
    }),
    new transports.File({
      format: format.combine(
          format.timestamp({format:"DD-MM-YYYY HH:mm:ss"}),
          format.simple(),
          format.printf(info=>`[ ${info.timestamp} ] :  ${info.level} ${info.message}`)
          ),
      level: "info",
      filename: `${__dirname}/../log/combined.log`,
    }),
    
  ],
});
