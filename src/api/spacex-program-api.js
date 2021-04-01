import axios from 'axios'

export const fetchSpacexProgramList = ({ launchSuccess, landSuccess, launchedYear }) => {
    console.log('landed')
    const launched = launchSuccess ? `&launch_success=${launchSuccess}` : ''
    const landed = landSuccess ? `&land_success=${landSuccess}` : ''
    const launchYear = launchedYear ? `&launch_success=${launchedYear}` : ''
    axios.get('https://api.spaceXdata.com/v3/launches?limit=100' + launched + landed + launchYear)
        .then(response => response)
        .catch(err => ({ err }))
}

