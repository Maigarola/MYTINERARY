const initialState = {
    cities: [],
    isLoaded: false
}
export default function cityReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_CITIES":
            return {
                ...state,
                cities: action.payload,
                isLoaded: true
            }
        default:
            return state
    }
}

