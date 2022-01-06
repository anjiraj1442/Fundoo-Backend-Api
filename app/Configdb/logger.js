const winston = require('winston')
const path = require('path')
const { format } = require('path')
const logger = winston.createLogger({
     level: 'error',
     format:winston.format.json(),
     transports:[
          new winston.transports.File({
               filename:path.join(__dirname, "..","logs","error.log"),
               level:'error',
               format:winston.format.combine(
                   // winston,format.timestamp(),
                    winston.format.json(),
               ),
          }),
          
     ]
})
module.exports = logger;