const { createLogger, format, transports } = require('winston');
const { splat, combine, timestamp, label, printf, simple } = format;
module.exports.logger = createLogger({
      format: combine(
            simple()
      ),
      transports: [new transports.Console()]
    });
    
