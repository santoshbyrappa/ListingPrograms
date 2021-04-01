import { call, put, takeLatest } from 'redux-saga/effects'
import { FETCH_SPACEX_PROGRAM_LIST, UpdateSpacexProgramList } from "../actions/spacex-program-action";
import { fetchSpacexProgramList } from "../api/spacex-program-api"
function* fetchSpacexProgram({ payload : { launchSuccess, landSuccess, launchedYear } }) {
    try {
        const spacexProgramData = yield call(fetchSpacexProgramList, { launchSuccess, landSuccess, launchedYear });

        yield put(UpdateSpacexProgramList(spacexProgramData));
    } catch (e) {
        console.log('fetch failed')
    }
}

function* spacexProgramSaga() {
    yield takeLatest(FETCH_SPACEX_PROGRAM_LIST, fetchSpacexProgram);
}

export default spacexProgramSaga;