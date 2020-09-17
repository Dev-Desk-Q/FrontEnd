import axios from 'axios';


export const userLogin = (user) => dispatch => {
    dispatch({type: 'USER_LOGIN'});
    axios.post('https://areallyuniquename.herokuapp.com/api/users')
    .then(res => {
        dispatch({type: 'LOGIN_SUCCSESS', payload: res.data});
    })
    .catch(er => {
        dispatch({type: 'LOGIN_FAIL', payload: 'incorrect username and password combination'})
    })

}