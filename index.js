// const User = require('./user');

// const userAlam = new User('alam', 23);

// userAlam.Title()

// console.log(__dirname, __filename)

const Logger = require('./logger');

const logger = new Logger();

// Tracking data dari class loggger
logger.on('message', (data) => console.log('data berhasil dibaca', data));
logger.Log('hai')
logger.Log('hallo alam')
logger.Log('selamt datang')

