import { send, REQUEST_TIMEOUT } from './request.mjs'
import { read } from './response.mjs'
function makeRequest (url, data) {
    send(url, data)
    return read()
}

const requestData = makeRequest('http://www.google.com', 'hello')

console.log('REQUEST DATA', requestData, REQUEST_TIMEOUT)