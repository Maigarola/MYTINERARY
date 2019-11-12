export const getItineraries = (cityId) => dispatch => {
    fetch('/itineraries/'+ cityId)
        .then(res => res.json())
        .then(itineraries => {
            dispatch({
                type: "GET_ITINERARIES",
                payload: itineraries
            })
        })
}