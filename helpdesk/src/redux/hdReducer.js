const initialState = {
    data: {},
    loginTrue: false,
    error: '',
}

export const hdReducer = (state = initialState, action) => {
    switch(action.type){
        case 'USER_LOGIN':
            return state;
        case 'LOGIN_SUCCSESS':
            return {...state, login: true, data: action.payload, error: ''}
        case 'LOGIN_FAIL':
            return {...state, error: action.payload}
        default:
            return state;

    }
}
