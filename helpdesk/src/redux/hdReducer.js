const initialState = {
    data: [],
    message: '',
    userid: 0,
    login: false,
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

const defaultSelect = {
    title: null,
    description: '',
    category: '',
    completed: false,
    assigned: '',
    assignedUser: '',
  };
export const hdReducer = (state = initialState, action) => {
    switch(action.type){
        case 'USER_LOGIN':
            return {...state, message: action.payload.message, role: action.payload.role, userid: action.payload.userid, login: true};
        case 'USER_LOGOUT':
                return {...state, message: null, login: false, role: 'student', userid: null, data: [], selected: defaultSelect};
        case 'GET-TICKETS':
            return {...state, data: action.payload};
        case 'SELECT-TICKET':
            return {...state, selected: action.payload}
        default:
            return state;

    }
}
