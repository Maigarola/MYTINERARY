export const getCities = () => dispatch => {
        fetch('/cities/all')
            .then(res => res.json())
            .then(cities => {
                dispatch({
                    type: "GET_CITIES",
                    payload: cities,
                })
            })
    }