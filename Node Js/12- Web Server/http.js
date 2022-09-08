const http = require('http')

const PORT = 3000
const server = http.createServer((req, res) => {
    // res.writeHead(200, {
    //     // 'Content-Type': 'text/plain'
    //     'Content-Type': 'application/json'
    // });
    // res.end('HELLO! Sir Isaac Newton is your friend!')
    if (req.url === '/friends') {
        res.setHeader('Content-Type', 'application/json')

        res.end(
            JSON.stringify({
                id: 1,
                name: 'NEWTON',
            })
        )
    } else if (req.url === '/messages') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<body>')
        res.write('<ul>')
        res.write('<li>HEllo la World</li>')
        res.write('<li>Nasilsin</li>')
        res.write('</ul>')
        res.write('</body>')
        res.write('</html>')
    } else {
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
