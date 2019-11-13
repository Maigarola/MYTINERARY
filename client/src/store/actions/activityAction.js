export const getActivities = (ItineraryId) => dispatch => {
    fetch('/activities/'+ ItineraryId)
        .then(res => res.json())
        .then(activities => {
            dispatch({
                type: "GET_ACTIVITIES",
                payload: activities
            })
        })
}