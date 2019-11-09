export const getItineraries = () => dispatch => {
    fetch('/itineraries/all')
        .then(res => res.json())
        .then(itineraries => {
            dispatch({
                type: "GET_ITINERARIES",
                payload: itineraries
            })
        })
}