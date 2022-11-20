const path = require('path');

function getMessages (req, res) {
    // res.send('<ul><li>HELLO ALBERT!</li></ul>')
    // res.sendFile(path.join(__dirname, '..', 'public', 'resim.jpg'))
    res.render('messages', {
        title: ' MESSAGE TO FRİEND',
        caption: ' ELON MUSK'
    })
}
function writeToConsole (req, res) {
    console.log('UPDATİNG')
}
module.exports = {
    getMessages,
    writeToConsole
}