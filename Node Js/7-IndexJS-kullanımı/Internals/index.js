// const { send, REQUEST_TIMEOUT } = require('./request');
// const { read } = require('./response')
// module.exports = {
//     send,
//     read,
//     REQUEST_TIMEOUT

// }

module.exports = {
    ...require('./request'),
    ...require('./response')
}