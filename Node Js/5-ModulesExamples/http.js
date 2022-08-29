const { send, REQUEST_TIMEOUT } = require('./request')
const { read } = require('./response')


function makeRequest (url, data) {
    send(url, data)
    return read()
}

const requestData = makeRequest('http://www.google.com', 'hello')

console.log('REQUEST DATA', requestData, REQUEST_TIMEOUT)