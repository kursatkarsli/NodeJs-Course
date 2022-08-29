const EventEmitter = require('events');



const celebrity = new EventEmitter();

// Subscribe to celebrity for Observer1

celebrity.on('race', function (result) {
    if (result === 'win')
        console.log('YOU WİN')
})

celebrity.on('race', function (result) {
    if (result === 'win')
        console.log('sen kazandın')
})
process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}`);
});

celebrity.emit('race', 'win')
celebrity.emit('race', 'lose')