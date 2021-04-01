import axios from 'axios'

export const fetchSpacexProgramList = ({ launchSuccess, landSuccess, launchedYear }) => {
    const launched = launchSuccess !== '' ? `&launch_success=${launchSuccess}` : ''
    const landed = landSuccess !== '' ? `&land_success=${landSuccess}` : ''
    const launchYear = launchedYear !== '' ? `&launch_year=${launchedYear}` : ''
    return axios.get('https://api.spaceXdata.com/v3/launches?limit=100' + launched + landed + launchYear)
        .then(response => response)
        .catch(err => ({ err }))
}

