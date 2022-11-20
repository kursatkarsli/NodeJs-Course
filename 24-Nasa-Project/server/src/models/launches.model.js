const launches = new Map()
let latestFlightNumber = 100;
const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Expolorer IS1',
    launchDate: new Date('December 27,2030'),
    target: 'Kepler-442 b',
    customers: ['NASA', 'KURSAT KARSLi'],
    upcoming: true,
    success: true
}

launches.set(launch.flightNumber, launch)

function isLaunchExist (flightNumber) {

    return launches.has(Number(flightNumber))
}
function getAllLaunches () {
    return Array.from(launches.values())
}

function addNewLaunch (launch) {
    latestFlightNumber++
    return launches.set(latestFlightNumber, Object.assign(launch, {
        customers: ['NASA', 'KK'],
        upcoming: true,
        success: true,
        flightNumber: latestFlightNumber
    }))
}
function abortLaunch (flightNumber) {
    // launches.delete(Number(flightNumber))
    // console.log('LAUNCHES', launches)
    // return launches
    const aborted = launches.get(Number(flightNumber))
    aborted.success = false
    aborted.upcoming = false
    return aborted
}
module.exports = {
    isLaunchExist,
    getAllLaunches,
    addNewLaunch,
    abortLaunch,
}