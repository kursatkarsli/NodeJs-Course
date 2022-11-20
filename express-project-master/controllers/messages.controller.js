function getMessages (req, res) {
    res.send('<ul><li>HELLO ALBERT!</li></ul>')
}
function writeToConsole (req, res) {
    console.log('UPDATİNG')
}
module.exports = {
    getMessages,
    writeToConsole
}