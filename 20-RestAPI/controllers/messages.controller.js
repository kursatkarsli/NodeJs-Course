const path = require('path');

function getMessages (req, res) {
    // res.send('<ul><li>HELLO ALBERT!</li></ul>')
    res.sendFile(path.join(__dirname, '..', 'public', 'resim.jpg'))
}
function writeToConsole (req, res) {
    console.log('UPDATİNG')
}
module.exports = {
    getMessages,
    writeToConsole
}