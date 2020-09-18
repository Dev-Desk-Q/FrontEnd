const initialState = {
    data: {},
    loginTrue: false,
    error: '',
    registered: null,
}

export const hdReducer = (state = initialState, action) => {
    switch(action.type){
        case 'USER_LOGIN':
            return state;
        case 'LOGIN_SUCCSESS':
            return {...state, login: true, data: action.payload, error: ''}
        case 'LOGIN_FAIL':
            return {...state, error: action.payload}
        case 'CREATE_USER':
            return {...state, registered: action.payload}
        default:
            return state;

    }
}
