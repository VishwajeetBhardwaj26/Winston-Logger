const { createLogger, format, transports } = require('winston');
const { splat, combine, timestamp, label, printf, simple } = format;
require('winston-mongodb');
const MONGO_DB= 'mongodb+srv://dbuser:mKIy1AGNXC5lgGE9@cluster0.2bzzu.mongodb.net/?retryWrites=true&w=majority'
module.exports.logger = createLogger({
      transports: [
            new transports.Console(),

            new transports.MongoDB({
                  level:'info',
                  db:MONGO_DB,
                  options:{
                        useUnifiedTopology:true
                  },
                  collection:'logger_info',
                  format:format.combine(format.timestamp(),format.json())
        
            })
      ]
    })
  
    
