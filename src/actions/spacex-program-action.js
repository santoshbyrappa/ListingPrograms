export const FETCH_SPACEX_PROGRAM_LIST = "fetchSpacexProgram_list";
export const SPACEX_PROGRAM_LIST = "spacexProgram_list";

export function getSpacexProgramList(launchSuccess, landSuccess, launchedYear) {
    return {
        type: FETCH_SPACEX_PROGRAM_LIST,
        payload: {
            launchSuccess,
            landSuccess,
            launchedYear
        }
    };
}

export function UpdateSpacexProgramList(spacexDataList) {
    return {
        type: SPACEX_PROGRAM_LIST,
        payload: {
            spacexDataList
        }
    };
}
