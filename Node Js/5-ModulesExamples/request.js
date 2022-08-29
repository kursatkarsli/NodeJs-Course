// module.exports.REQUEST_TIMEOUT = 500;
exports.REQUEST_TIMEOUT = 500;



function encrypt (data) {
    return 'encrypted data'
}
exports.send = function send (url, data) {
    const encryptedData = encrypt(data);
    console.log(`sending ${data} to ${url}`)
}
// console.log(module)

// module.exports = {
//     send
// }

//İster Exports yazıp gönder ister module.exports yazıp yolla aynı şey sadece
// ikisini aynı anda kullanma ve best practise module.exports'dur