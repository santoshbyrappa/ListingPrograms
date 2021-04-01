import { SPACEX_PROGRAM_LIST } from "../actions/spacex-program-action";

export default function spcaexProgramReducer(state = {spacexProgramList: []}, { type, payload }) {
    switch (type) {
        case SPACEX_PROGRAM_LIST:
            return {
                ...state,
                spacexProgramList: payload.spacexDataList
            };
        default:
            return state;
    }
}
