const initialState = {
    data: [],
    message: '',
    username: '',
    login: false,
    userType: '',
    selected: {
        title: null,
        description: '',
        category: '',
        completed: false,
        assigned: '',
        assignedUser: '',
      },
    role: 'student',
}

export const hdReducer = (state = initialState, action) => {
    switch(action.type){
        case 'USER_LOGIN':
            return {...state, message: action.payload.message, role: action.payload.role, username: action.payload.username, login: true};
        case 'USER_LOGOUT':
                return {...state, message: null, login: false, userType: ''};
        case 'GET-TICKETS':
            return {...state, data: action.payload};
        case 'SELECT-TICKET':
            return {...state, selected: action.payload}
        default:
            return state;

    }
}
