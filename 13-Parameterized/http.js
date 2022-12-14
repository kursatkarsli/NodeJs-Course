const http = require('http')

const PORT = 3000
const friends = [
    {
        id: 0,
        name: 'Nikola Tesla',
    },
    {
        id: 1,
        name: 'Sir Isaac Newton',
    },
    {
        id: 2,
        name: 'Albert Einstein',
    }
];
const server = http.createServer((req, res) => {
    const items = req.url.split('/')
    console.log(items, 'İTEMS')
    // res.writeHead(200, {
    //     // 'Content-Type': 'text/plain'
    //     'Content-Type': 'application/json'
    // });
    // res.end('HELLO! Sir Isaac Newton is your friend!')
    if (items.length === 3 && Number.isFinite(Number(items[2]))) {
        if (items[1] === 'friends' && Number(items[2] <= friends.length)) {
            res.setHeader('Content-Type', 'application/json')

            res.end(
                JSON.stringify(friends[items[2]])
            )
        }
        else {
            res.statusCode = 404
            res.write(`<html>
            <body>
            <h1>Page Not Found</h1></body></html>`)
            res.end()
        }
    } else if (items.length === 2) {
        if (items[1] === 'friends') {
            res.setHeader('Content-Type', 'application/json')

            res.end(
                JSON.stringify(friends)
            )
        } else if (items[1] === 'messages') {
            res.setHeader('Content-Type', 'text/html')
            res.write('<html>')
            res.write('<body>')
            res.write('<ul>')
            res.write('<li>HEllo la World</li>')
            res.write('<li>Nasilsin</li>')
            res.write('</ul>')
            res.write('</body>')
            res.write('</html>')
        }
    }
    else {
        res.statusCode = 404
        res.write(`<html>
        <body>
        <h1>Page Not Found</h1></body></html>`)
        res.end()
    }
})

server.listen(PORT, () => {
    // 127.0.0.1 => localhost > http://127.0.0.1:3000/ the same
    console.log(`Listening on ${PORT}`)
})
