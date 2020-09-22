

export const loginUser = (res) => dispatch => {
    console.log(res);
    dispatch({type: 'USER_LOGIN', payload: res.data.message})
}

export const logoutUser = () => dispatch => {
    dispatch({type: 'USER_LOGOUT'})
}

export const setTickets = (res) => dispatch => {
    dispatch({tybe: 'GET-TICKETS', payload: res.data})
}