const { parse } = require('csv-parse')
const assert = require('assert')
const fs = require('fs')

const habitablePlanets = []
function isHabitablePlanet (planet) {
    return planet['koi_disposition'] === 'CONFIRMED' && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11 && planet['koi_prad'] < 1.6;
}

fs.createReadStream('kepler_data.csv').pipe(parse({ comment: '#', columns: true }))
    .on('data', (data) => {
        if (isHabitablePlanet(data))
            habitablePlanets.push(data)
    })
    .on('error', (err) => console.log('ERRROR', err))
    .on('end', () => {
        console.log('DONE')
        console.log(habitablePlanets.map(item => {
            return item.kepler_name
        }))
    })

// parse(habitablePlanets)
// console.log(parse(habitablePlanets))
