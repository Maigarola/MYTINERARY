export const getUsers = (userId) => dispatch => {
    fetch('/itineraries/'+ userId)
        .then(res => res.json())
        .then(users => {
            dispatch({
                type: "GET_USERS",
                payload: users
            })
        })
}