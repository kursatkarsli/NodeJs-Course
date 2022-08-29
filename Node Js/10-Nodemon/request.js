const axios = require('axios')

axios.get('https://www.google.com').then((res) => {
    console.log('RES', res)
    console.log('HELLO LA WORLD')
}).catch(e => console.log(e))
