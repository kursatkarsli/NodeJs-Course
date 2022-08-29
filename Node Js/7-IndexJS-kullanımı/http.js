
// const internals = require('./Internals');


// function makeRequest (url, data) {
//     internals.request.send(url, data)
//     return internals.response.read()
// }

// const requestData = makeRequest('http://www.google.com', 'hello')

// console.log('REQUEST DATA', requestData, internals.request.REQUEST_TIMEOUT)

const { send, REQUEST_TIMEOUT, read } = require('./Internals');

function makeRequest (url, data) {
    send(url, data)
    return read()
}

const requestData = makeRequest('http://www.google.com', 'hello')

console.log('REQUEST DATA', requestData, REQUEST_TIMEOUT)