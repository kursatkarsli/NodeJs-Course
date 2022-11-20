const { request, get } = require('https') // secure mode ile çalıştırmak istersen https modulunu import etmen lazım.

// const req = request('https://www.google.com', (res) => {
//     res.on('data', (chunk) => console.log('ERROR', chunk))
//     res.on('end', () => {
//         console.log('NO MORE DATA')
//     })
// })

// req.end() // bu fonksiyonu çalıştırmazsan bittiğini anlamaz ve sürekli çalışır veri dönmez. Eğer get  fonksiyonunu çalıştırmaz isen 
const req = get('https://www.google.com', (res) => {
    res.on('data', (chunk) => console.log('=>>>', chunk))
    res.on('end', () => {
        console.log('NO MORE DATA')
    })
})
// get ile yazdığında end yapmana gerek yok
