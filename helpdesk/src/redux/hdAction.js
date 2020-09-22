

export const loginUser = (res,usn) => dispatch => {
    dispatch({type: 'USER_LOGIN', payload: {message: res.data.message, role: res.data.role, username: usn }})
}

export const logoutUser = () => dispatch => {
    dispatch({type: 'USER_LOGOUT'})
}

export const setTickets = (res) => dispatch => {
    dispatch({type: 'GET-TICKETS', payload: res.data})
}

export const selectItem = (ticket) => dispatch => {
    dispatch({type: 'SELECT-TICKET', payload: ticket})
}