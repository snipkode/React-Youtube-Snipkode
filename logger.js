const EventEmitter = require('events');
const uuid = require('uuid');

// console.log(uuid.v4())

class Logger extends EventEmitter {
	Log(pesan){
		this.emit('message', {
			id: uuid.v4(),
			msg : pesan
		})
	}
}

module.exports = Logger;