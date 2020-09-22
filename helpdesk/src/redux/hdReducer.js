const initialState = {
    data: {},
    message: '',
    login: false,
    userType: '',
}

export const hdReducer = (state = initialState, action) => {
    switch(action.type){
        case 'USER_LOGIN':
            return {...state, message: action.payload, login: true};
        case 'USER_LOGOUT':
                return {...state, message: null, login: false, userType: ''};
        case 'GET-TICKETS':
            console.log(action.payload);
            return {...state, data: action.payload};
        default:
            return state;

    }
}
