import {
    TRAIL_SEARCH_PENDING,
    TRAIL_SEARCH_SUCCESS,
    TRAIL_SEARCH_FAILURE,
    LOAD_MORE,
    RESET_LOAD,
    BUZZ_PENDING,
    BUZZ_SUCCESS,
    BUZZ_SEARCH_FAILURE,
    TRAIL_SELECT,
    SWITCH_VIEW,
    DATE_CHANGE
} from '../actions/trailActions'

let initialState = {
    isLoading: false,
    buzzLoading: false,
    buzz: null,
    data: [],
    visualMax: 10,
    date: new Date(Date.now()),
    error: null,
    trailSelect: null,
    profView: 0
}

export default (state=initialState, action) => {
    switch (action.type) {
        case TRAIL_SEARCH_PENDING:
            return {...state, isLoading: true}
        case TRAIL_SEARCH_SUCCESS:
            return {...state, isLoading: false, data: action.payload}
        case TRAIL_SEARCH_FAILURE:
            return {...state, isLoading: false, error: action.payload}
        case LOAD_MORE:
            return {...state, visualMax: state.visualMax + 10}
        case RESET_LOAD:
            return {...state, visualMax: 10}
        case BUZZ_PENDING:
            return {...state, buzzLoading: true, buzz: null}
        case BUZZ_SUCCESS:
            return {...state, buzzLoading: false, buzz: action.payload}
        case BUZZ_SEARCH_FAILURE:
            return {...state, buzzLoading: false, error: action.payload}
        case TRAIL_SELECT:
            return {...state, trailSelect: action.payload}
        case SWITCH_VIEW:
            return {...state, profView: action.payload }
        case DATE_CHANGE:
            return {...state, date: action.payload}
        default:
            return state
    }
}