const express = require('express');
const app = express()
const cluster = require('cluster')
const os = require('os')

function delay (duration) {
    const startTime = Date.now();
    while (Date.now() - startTime < duration) {
        //event loop blocked
    }
}
console.log('SERVER is running')
app.get('/', (req, res) => {
    // JSON.stringify({})=>"{}"
    // JSON.parse("{}") => {}
    res.send(`Performance example ${process.pid}`)
})
app.get('/timer', (req, res) => {
    //delay the response
    delay(4000)
    res.send(`Beep Beep Beep ${process.pid}`)
})
// if (cluster.isMaster) {
//     console.log('MASTER has been started')
//     const NUMBER_OP = os.cpus().length
//     console.log(NUMBER_OP)
//     for (let i = 0;i < NUMBER_OP;i++) {
//         cluster.fork();

//     }

// } else {
//     console.log('Worker process started.')
//     app.listen(3000);
// }
console.log('Worker process started.')
app.listen(3000)