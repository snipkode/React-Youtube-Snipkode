const EventEmitter = require('events');

// buat object
class myEmitter extends EventEmitter {

}

// init object
const myemitter = new myEmitter();


// event listener
myemitter.on('event', ()=> console.log('Emitter Berjalan Dengan baik'))
// init event
myemitter.emit('event');
myemitter.emit('event');
