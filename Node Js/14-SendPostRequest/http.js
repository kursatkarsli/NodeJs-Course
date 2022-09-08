const http = require('http')

const PORT = 3000
const server = http.createServer()
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
server.on('request', (req, res) => {
    const items = req.url.split('/')
    console.log('İTEMS', items)
    // res.writeHead(200, {
    //     // 'Content-Type': 'text/plain'
    //     'Content-Type': 'application/json'
    // });
    // res.end('HELLO! Sir Isaac Newton is your friend!')
    debugger
    console.log(req.method)
    if (req.method === 'POST' && items[1] == 'friends') {
        console.log('HELLO')
        req.on('data', (data) => {
            const friend = data.toString()
            debugger
            console.log(data.toString())

            friends.push(JSON.parse(friend))
            console.log('FRİENDS', friends)
        })
        req.pipe(res);

    }
    else if (items.length === 3 && req.method === "GET") {
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
    }
    else if (items.length === 2 && req.method === "GET") {
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
        <h1>Page Not Found</h1></body></html>`
        )
        res.end()
    }
})

server.listen(PORT, () => {
    // 127.0.0.1 => localhost > http://127.0.0.1:3000/ the same
    console.log(`Listening on ${PORT}`)
})
