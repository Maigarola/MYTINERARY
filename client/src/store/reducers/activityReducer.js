const initialState = {
    activities: [],
}
export default function activityReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_ACTIVITIES":
            return {
                ...state,
                activities: action.payload,
            }
        default:
            return state
    }
}

