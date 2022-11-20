const { getAllLaunches, addNewLaunch, abortLaunch, isLaunchExist } = require('../../models/launches.model')
function httpGetAllLaunches (req, res) {
    return res.status(200).json(getAllLaunches());

}
function httpAddNewLaunch (req, res) {
    const launch = req.body
    if (!launch.mission || !launch.rocket || !launch.launchDate || !launch.destination) {

        return res.status(400).json({
            error: 'Missing required launch property'
        })
    }
    launch.launchDate = new Date(launch.launchDate)
    // Date control - V1
    // if (launch.launchDate.toString() === 'Invalid Date') {
    //     res.status(400).json({
    //         error: 'Invalid launch date'
    //     })
    // }
    // Date control - V2
    if (isNaN(launch.launchDate)) {
        res.status(400).json({
            error: 'Invalid launch date'
        })
    }

    addNewLaunch(launch)
    res.status(201).json(launch)
}
function httpAbortLaunch (req, res) {
    const launchId = req.params.id
    console.log('İS LAUNCH EXİST Mİ ', isLaunchExist(launchId))
    if (!isLaunchExist(launchId)) {
        return res.status(404).json({
            error: 'Launch not found'
        })
    }
    return res.status(202).json(abortLaunch(launchId))
}

module.exports = { httpGetAllLaunches, httpAddNewLaunch, httpAbortLaunch }